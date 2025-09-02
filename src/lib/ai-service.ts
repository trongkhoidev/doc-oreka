// Real AI Service for Oreka Documentation
// Integrates with OpenAI API for actual question analysis

export interface AIRequest {
  question: string;
  context?: string;
  conversationHistory?: Array<{ role: 'user' | 'assistant'; content: string }>;
}

export interface AIResponse {
  answer: string;
  confidence: number;
  sources: string[];
  relatedQuestions: string[];
  analysis: {
    questionType: 'what' | 'how' | 'why' | 'technical' | 'general';
    complexity: 'beginner' | 'intermediate' | 'advanced';
    topics: string[];
  };
  metadata: {
    model: string;
    tokensUsed: number;
    processingTime: number;
  };
}

export interface Resource {
  id: string;
  title: string;
  content: string;
  tags: string[];
  type: string;
}

export interface SearchResult {
  resource: Resource;
  relevance: number;
  context: string;
}

// Resource Manager for Oreka documentation
export class ResourceManager {
  private resources: Resource[] = [
    {
      id: 'oreka-overview',
      title: 'Oreka Platform Overview',
      content: 'Oreka is a decentralized binary options trading platform on Aptos blockchain with poly-option system.',
      tags: ['oreka', 'platform', 'binary options', 'aptos'],
      type: 'documentation'
    },
    {
      id: 'poly-option-system',
      title: 'Poly-Option System',
      content: 'Advanced binary options with multiple outcomes and comparison types for sophisticated risk management.',
      tags: ['poly-option', 'multiple outcomes', 'risk management'],
      type: 'features'
    },
    {
      id: 'aptos-blockchain',
      title: 'Aptos Blockchain',
      content: 'Layer 1 blockchain with high throughput, Move language, and enhanced security for smart contracts.',
      tags: ['aptos', 'blockchain', 'move language', 'smart contracts'],
      type: 'technology'
    }
  ];

  searchResources(query: string): SearchResult[] {
    const queryLower = query.toLowerCase();
    const results: SearchResult[] = [];

    this.resources.forEach(resource => {
      let relevance = 0;
      
      // Check title relevance
      if (resource.title.toLowerCase().includes(queryLower)) relevance += 10;
      
      // Check content relevance
      if (resource.content.toLowerCase().includes(queryLower)) relevance += 5;
      
      // Check tags relevance
      resource.tags.forEach(tag => {
        if (tag.toLowerCase().includes(queryLower)) relevance += 8;
      });

      if (relevance > 0) {
        results.push({
          resource,
          relevance,
          context: resource.content.substring(0, 150) + '...'
        });
      }
    });

    return results.sort((a, b) => b.relevance - a.relevance).slice(0, 3);
  }
}

// Real AI Service with OpenAI Integration
export class RealAIService {
  private apiKey: string | null = null;
  private resourceManager: ResourceManager;

  constructor() {
    this.resourceManager = new ResourceManager();
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  async processRequest(request: AIRequest): Promise<AIResponse> {
    const startTime = Date.now();
    
    try {
      // Search for relevant resources
      const searchResults = this.resourceManager.searchResources(request.question);
      
      // Prepare context
      const context = searchResults.map(r => `${r.resource.title}: ${r.context}`).join('\n\n');
      
      // Generate AI response using OpenAI
      const aiResponse = await this.callOpenAI(request.question, context);
      
      return {
        answer: aiResponse.content,
        confidence: this.calculateConfidence(searchResults),
        sources: searchResults.map(r => r.resource.title),
        relatedQuestions: this.generateRelatedQuestions(request.question, searchResults),
        analysis: this.analyzeQuestion(request.question),
        metadata: {
          model: 'gpt-4',
          tokensUsed: aiResponse.usage?.total_tokens || 0,
          processingTime: Date.now() - startTime
        }
      };
      
    } catch (error) {
      console.error('AI Service Error:', error);
      // Search for resources even in fallback case
      const searchResults = this.resourceManager.searchResources(request.question);
      return this.generateFallbackResponse(request.question, searchResults);
    }
  }

  private async callOpenAI(question: string, context: string) {
    if (!this.apiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const prompt = `You are an expert AI assistant for Oreka, a decentralized binary options trading platform on Aptos blockchain.

Context from Oreka documentation:
${context}

Question: ${question}

Please provide a comprehensive, accurate, and professional answer based on the context. If the context doesn't contain enough information, acknowledge this and provide general guidance about Oreka. Always be helpful and suggest related topics for further learning.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are an expert Oreka AI assistant.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 1000,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message;
  }

  private calculateConfidence(searchResults: SearchResult[]): number {
    if (searchResults.length === 0) return 0.3;
    
    const avgRelevance = searchResults.reduce((sum, r) => sum + r.relevance, 0) / searchResults.length;
    return Math.min(avgRelevance / 20, 1);
  }

  private generateRelatedQuestions(question: string, searchResults: SearchResult[]): string[] {
    const questions = [];
    
    searchResults.forEach(result => {
      if (result.resource.tags.length > 0) {
        questions.push(`Tell me more about ${result.resource.tags[0]}`);
      }
    });
    
    const questionLower = question.toLowerCase();
    if (questionLower.includes('what is')) {
      questions.push('How does it work?', 'What are the benefits?');
    } else if (questionLower.includes('how')) {
      questions.push('What are the requirements?', 'What are the alternatives?');
    }
    
    return [...new Set(questions)].slice(0, 3);
  }

  private generateFallbackResponse(question: string, searchResults: SearchResult[]): AIResponse {
    return {
      answer: `I apologize, but I'm currently unable to process your question through the AI service. However, I can provide some general information about Oreka. ${searchResults.length > 0 ? `I found relevant information about: ${searchResults.map(r => r.resource.title).join(', ')}` : 'Please try rephrasing your question.'}`,
      confidence: 0.2,
      sources: searchResults.map(r => r.resource.title),
      relatedQuestions: ['What is Oreka?', 'How does the platform work?'],
      analysis: { questionType: 'general', complexity: 'intermediate', topics: ['oreka'] },
      metadata: { model: 'fallback', tokensUsed: 0, processingTime: 0 }
    };
  }

  private analyzeQuestion(question: string) {
    const questionLower = question.toLowerCase();
    
    let questionType: 'what' | 'how' | 'why' | 'technical' | 'general' = 'general';
    if (questionLower.includes('what is')) questionType = 'what';
    else if (questionLower.includes('how')) questionType = 'how';
    else if (questionLower.includes('why')) questionType = 'why';
    
    let complexity: 'beginner' | 'intermediate' | 'advanced' = 'intermediate';
    if (questionLower.includes('basic')) complexity = 'beginner';
    else if (questionLower.includes('advanced')) complexity = 'advanced';
    
    const topics = ['oreka', 'poly-option', 'aptos', 'move', 'smart contracts'].filter(topic => 
      questionLower.includes(topic)
    );
    
    return { questionType, complexity, topics };
  }
}

// Export singleton instance
export const realAIService = new RealAIService();
