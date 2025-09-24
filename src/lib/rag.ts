// RAG (Retrieval-Augmented Generation) System for Oreka Documentation
// Integrates with Supabase vector database for intelligent document retrieval

import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';

// Types
export interface DocumentChunk {
  id: string;
  content: string;
  metadata: {
    title: string;
    source: string;
    section?: string;
    tags?: string[];
  };
  embedding?: number[];
}

export interface SearchResult {
  chunk: DocumentChunk;
  similarity: number;
  context: string;
}

export interface RAGResponse {
  answer: string;
  sources: DocumentChunk[];
  similarity: number;
  context: string;
}

// Configuration with fallbacks
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4';
const OPENAI_EMBEDDING_MODEL = process.env.OPENAI_EMBEDDING_MODEL || 'text-embedding-3-small';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Initialize clients with error handling
let openai: OpenAI | null = null;
let supabase: any = null;

if (OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });
}

if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}

// RAG System Class
export class RAGSystem {
  private openai: OpenAI | null;
  private supabase: any;

  constructor() {
    this.openai = openai;
    this.supabase = supabase;
  }

  // Check if system is properly configured
  isConfigured(): boolean {
    return !!(this.openai && this.supabase);
  }

  // Generate embeddings for text (supports per-request OpenAI client override)
  async generateEmbedding(text: string, clientOverride?: OpenAI): Promise<number[]> {
    const client = clientOverride || this.openai;
    if (!client) {
      throw new Error('OpenAI client not configured. Please set OPENAI_API_KEY environment variable.');
    }

    try {
      const response = await client.embeddings.create({
        model: OPENAI_EMBEDDING_MODEL,
        input: text,
      });

      return response.data[0].embedding;
    } catch (error) {
      console.error('Error generating embedding:', error);
      throw new Error('Failed to generate embedding');
    }
  }

  // Search for relevant documents using vector similarity
  async searchDocuments(query: string, limit: number = 5, clientOverride?: OpenAI): Promise<SearchResult[]> {
    if (!this.supabase) {
      throw new Error('Supabase client not configured. Please set Supabase environment variables.');
    }

    try {
      // Generate embedding for the query
      const queryEmbedding = await this.generateEmbedding(query, clientOverride);

      // Search in Supabase using vector similarity
      const { data, error } = await this.supabase.rpc('match_docs', {
        query_embedding: queryEmbedding,
        match_threshold: 0.7,
        match_count: limit,
      });

      if (error) {
        console.error('Supabase search error:', error);
        throw new Error('Failed to search documents');
      }

      // Transform results
      const results: SearchResult[] = data.map((item: any) => ({
        chunk: {
          id: item.id,
          content: item.content,
          metadata: {
            title: item.metadata.title,
            source: item.metadata.source,
            section: item.metadata.section,
            tags: item.metadata.tags,
          },
        },
        similarity: item.similarity,
        context: this.extractContext(item.content, query),
      }));

      return results.sort((a, b) => b.similarity - a.similarity);
    } catch (error) {
      console.error('Error searching documents:', error);
      return [];
    }
  }

  // Extract relevant context from document content
  private extractContext(content: string, query: string): string {
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const queryWords = query.toLowerCase().split(/\s+/);
    
    let bestSentence = '';
    let bestScore = 0;

    sentences.forEach(sentence => {
      let score = 0;
      queryWords.forEach(word => {
        if (sentence.toLowerCase().includes(word)) {
          score += 1;
        }
      });
      
      if (score > bestScore) {
        bestScore = score;
        bestSentence = sentence.trim();
      }
    });

    return bestSentence || content.substring(0, 200) + '...';
  }

  // Generate AI response using retrieved context
  async generateResponse(
    query: string,
    searchResults: SearchResult[],
    conversationHistory?: Array<{ role: 'user' | 'assistant'; content: string }>
  , clientOverride?: OpenAI): Promise<RAGResponse> {
    const client = clientOverride || this.openai;
    if (!client) {
      throw new Error('OpenAI client not configured. Please set OPENAI_API_KEY environment variable.');
    }

    try {
      if (searchResults.length === 0) {
        return {
          answer: "I don't have specific information about that topic in the Oreka documentation. Please try rephrasing your question or ask about a different aspect of Oreka.",
          sources: [],
          similarity: 0,
          context: '',
        };
      }

      // Prepare context from search results
      const context = searchResults
        .map(result => `Source: ${result.chunk.metadata.title}\nContent: ${result.context}`)
        .join('\n\n');

      // Prepare conversation history
      const messages: any[] = [
        {
          role: 'system',
          content: `You are an expert AI assistant for Oreka, an open-source telephony recording and retrieval system. 

Your primary responsibility is to help users understand Oreka's architecture, technology stack, and implementation details based on the documentation provided.

IMPORTANT GUIDELINES:
1. ONLY answer questions about Oreka and its technology stack
2. If information is not in the provided context, clearly state this
3. For technical questions outside Oreka scope, provide only basic, general information and clarify it's not specific to Oreka
4. Always cite sources from the provided context using [Source: Title] format
5. Be accurate, professional, and helpful
6. If you're unsure about Oreka-specific details, recommend checking the official documentation

Focus on helping users understand:
- Oreka's core components (OrkAudio, OrkTrack, OrkWeb)
- Technology stack and architecture
- Deployment and configuration
- Audio processing and codec support
- SIP/RTP protocols and telephony integration`
        },
      ];

      // Add conversation history if available
      if (conversationHistory) {
        messages.push(...conversationHistory.slice(-4)); // Keep last 4 messages for context
      }

      // Add the current query with context
      messages.push({
        role: 'user',
        content: `Question: ${query}

Context from Oreka documentation:
${context}

Please provide a comprehensive answer based on the context provided. If the context doesn't contain enough information, acknowledge this and provide general guidance about Oreka. Always cite sources when possible.`,
      });

      // Generate response using OpenAI
      const completion = await client.chat.completions.create({
        model: OPENAI_MODEL,
        messages,
        max_tokens: 1000,
        temperature: 0.7,
      });

      const answer = completion.choices[0].message.content || '';

      return {
        answer,
        sources: searchResults.map(r => r.chunk),
        similarity: searchResults[0]?.similarity || 0,
        context,
      };
    } catch (error) {
      console.error('Error generating response:', error);
      return {
        answer: "I apologize, but I'm experiencing technical difficulties. Please try again later or contact support if the issue persists.",
        sources: [],
        similarity: 0,
        context: '',
      };
    }
  }

  // Process complete RAG request
  async processRequest(
    query: string,
    conversationHistory?: Array<{ role: 'user' | 'assistant'; content: string }>,
    options?: { apiKey?: string }
  ): Promise<RAGResponse> {
    try {
      // If per-request API key provided, build a temporary OpenAI client for this request
      const clientOverride = options?.apiKey ? new OpenAI({ apiKey: options.apiKey }) : undefined;

      // Check if system is configured (Supabase must exist; OpenAI can be provided per-request)
      if (!this.supabase || (!this.openai && !clientOverride)) {
        return {
          answer: "The AI system is not properly configured. Please check your environment variables and try again.",
          sources: [],
          similarity: 0,
          context: '',
        };
      }

      // Search for relevant documents
      const searchResults = await this.searchDocuments(query, 3, clientOverride);
      
      // Generate AI response
      const response = await this.generateResponse(query, searchResults, conversationHistory, clientOverride);
      
      return response;
    } catch (error) {
      console.error('Error processing RAG request:', error);
      return {
        answer: "I apologize, but I'm currently unable to process your request. Please try again later.",
        sources: [],
        similarity: 0,
        context: '',
      };
    }
  }

  // Ingest new documents into the vector database
  async ingestDocument(
    content: string,
    metadata: {
      title: string;
      source: string;
      section?: string;
      tags?: string[];
    }
  ): Promise<void> {
    if (!this.supabase) {
      throw new Error('Supabase client not configured. Please set Supabase environment variables.');
    }

    try {
      // Generate embedding for the content
      const embedding = await this.generateEmbedding(content);

      // Insert into Supabase
      const { error } = await this.supabase
        .from('docs')
        .insert({
          content,
          metadata,
          embedding,
        });

      if (error) {
        console.error('Error ingesting document:', error);
        throw new Error('Failed to ingest document');
      }

      console.log(`Document "${metadata.title}" ingested successfully`);
    } catch (error) {
      console.error('Error ingesting document:', error);
      throw error;
    }
  }

  // Update existing document
  async updateDocument(
    id: string,
    content: string,
    metadata: {
      title: string;
      source: string;
      section?: string;
      tags?: string[];
    }
  ): Promise<void> {
    if (!this.supabase) {
      throw new Error('Supabase client not configured. Please set Supabase environment variables.');
    }

    try {
      // Generate new embedding
      const embedding = await this.generateEmbedding(content);

      // Update in Supabase
      const { error } = await this.supabase
        .from('docs')
        .update({
          content,
          metadata,
          embedding,
        })
        .eq('id', id);

      if (error) {
        console.error('Error updating document:', error);
        throw new Error('Failed to update document');
      }

      console.log(`Document "${metadata.title}" updated successfully`);
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  }

  // Delete document
  async deleteDocument(id: string): Promise<void> {
    if (!this.supabase) {
      throw new Error('Supabase client not configured. Please set Supabase environment variables.');
    }

    try {
      const { error } = await this.supabase
        .from('docs')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting document:', error);
        throw new Error('Failed to delete document');
      }

      console.log(`Document ${id} deleted successfully`);
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error;
    }
  }

  // Get document by ID
  async getDocument(id: string): Promise<DocumentChunk | null> {
    if (!this.supabase) {
      throw new Error('Supabase client not configured. Please set Supabase environment variables.');
    }

    try {
      const { data, error } = await this.supabase
        .from('docs')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching document:', error);
        return null;
      }

      return {
        id: data.id,
        content: data.content,
        metadata: data.metadata,
        embedding: data.embedding,
      };
    } catch (error) {
      console.error('Error fetching document:', error);
      return null;
    }
  }

  // List all documents
  async listDocuments(): Promise<DocumentChunk[]> {
    if (!this.supabase) {
      throw new Error('Supabase client not configured. Please set Supabase environment variables.');
    }

    try {
      const { data, error } = await this.supabase
        .from('docs')
        .select('id, content, metadata')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error listing documents:', error);
        return [];
      }

      return data.map((item: any) => ({
        id: item.id,
        content: item.content,
        metadata: item.metadata,
      }));
    } catch (error) {
      console.error('Error listing documents:', error);
      return [];
    }
  }

  // Health check
  async healthCheck(): Promise<boolean> {
    try {
      // Check if clients are configured
      if (!this.isConfigured()) {
        return false;
      }

      // Test OpenAI connection
      if (this.openai) {
        await this.openai.models.list();
      }
      
      // Test Supabase connection
      if (this.supabase) {
        const { error } = await this.supabase.from('docs').select('count').limit(1);
        if (error) return false;
      }
      
      return true;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const ragSystem = new RAGSystem();

// Utility functions
export const chunkText = (text: string, maxChunkSize: number = 1000): string[] => {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const chunks: string[] = [];
  let currentChunk = '';

  sentences.forEach(sentence => {
    const trimmedSentence = sentence.trim();
    if (trimmedSentence.length === 0) return;

    if (currentChunk.length + trimmedSentence.length > maxChunkSize) {
      if (currentChunk.length > 0) {
        chunks.push(currentChunk.trim());
        currentChunk = '';
      }
    }

    currentChunk += trimmedSentence + '. ';
  });

  if (currentChunk.length > 0) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
};

export const extractMetadata = (content: string, filename: string) => {
  const lines = content.split('\n');
  const title = lines[0].replace(/^#\s*/, '') || filename;
  
  const tags: string[] = [];
  const sections: string[] = [];
  
  lines.forEach(line => {
    if (line.startsWith('##')) {
      sections.push(line.replace(/^##\s*/, ''));
    }
    if (line.includes('**') && line.includes(':')) {
      const tag = line.match(/\*\*([^*]+)\*\*/)?.[1];
      if (tag) tags.push(tag.toLowerCase());
    }
  });

  return {
    title,
    source: filename,
    section: sections[0] || undefined,
    tags: tags.length > 0 ? tags : undefined,
  };
};
