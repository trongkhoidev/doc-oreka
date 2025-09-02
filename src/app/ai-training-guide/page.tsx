import React from 'react';
import Link from 'next/link';

export default function AITrainingGuidePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Training & Resource Integration Guide
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Learn how to train AI systems to understand and respond to questions based on your documentation 
          and resources. This guide covers various approaches from simple keyword matching to advanced 
          machine learning techniques.
        </p>
      </div>

      {/* Overview */}
      <div className="mb-12" id="overview">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview of AI Training Methods</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Fine-tuning</h3>
            <p className="text-gray-700 text-sm">
              Train existing language models on your specific domain data to improve accuracy and relevance.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">2. RAG System</h3>
            <p className="text-gray-700 text-sm">
              Retrieval-Augmented Generation combines search with AI to provide context-aware responses.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Prompt Engineering</h3>
            <p className="text-gray-700 text-sm">
              Design effective prompts that guide AI to understand context and provide accurate responses.
            </p>
          </div>
        </div>
      </div>

      {/* RAG Implementation */}
      <div className="mb-12" id="rag-implementation">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">RAG (Retrieval-Augmented Generation) Implementation</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">What is RAG?</h3>
          <p className="text-blue-800">
            RAG combines the power of large language models with the accuracy of information retrieval. 
            Instead of relying solely on pre-trained knowledge, the AI searches through your documentation 
            to find relevant information and generates responses based on that context.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 1: Knowledge Base Creation</h3>
            <p className="text-gray-700 mb-4">
              Create structured knowledge chunks from your documentation:
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`interface KnowledgeChunk {
  id: string;
  title: string;
  content: string;
  section: string;
  keywords: string[];
  relatedTopics: string[];
  source: string;
  lastUpdated: string;
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 2: Semantic Search Implementation</h3>
            <p className="text-gray-700 mb-4">
              Implement intelligent search that finds relevant information:
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`class OrekaAISearch {
  search(query: string, limit: number = 5): SearchResult[] {
    // Keyword matching with relevance scoring
    // Title relevance: 10 points
    // Content relevance: 5 points  
    // Keywords relevance: 8 points
    // Section relevance: 3 points
  }
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 3: Response Generation</h3>
            <p className="text-gray-700 mb-4">
              Generate contextual responses based on search results:
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`generateResponse(query: string): AIResponse {
  const searchResults = this.search(query, 3);
  const answer = this.constructAnswer(query, searchResults);
  
  return {
    answer,
    sources: searchResults.map(r => r.chunk),
    confidence: this.calculateConfidence(searchResults),
    relatedTopics: this.extractRelatedTopics(searchResults)
  };
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Techniques */}
      <div className="mb-12" id="advanced-techniques">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced AI Training Techniques</h2>
        
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vector Embeddings & Semantic Search</h3>
            <p className="text-gray-700 mb-4">
              For more sophisticated search, implement vector embeddings:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Convert text to high-dimensional vectors using models like OpenAI embeddings</li>
              <li>Store vectors in vector databases like Pinecone or Weaviate</li>
              <li>Use cosine similarity for semantic search</li>
              <li>Implement hybrid search combining keyword and semantic matching</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fine-tuning Language Models</h3>
            <p className="text-gray-700 mb-4">
              Train models specifically for your domain:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Collect domain-specific training data</li>
              <li>Use techniques like LoRA for efficient fine-tuning</li>
              <li>Train on question-answer pairs from your documentation</li>
              <li>Evaluate performance on domain-specific metrics</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Prompt Engineering & Context Management</h3>
            <p className="text-gray-700 mb-4">
              Design effective prompts for better AI understanding:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Include relevant context in prompts</li>
              <li>Use few-shot learning examples</li>
              <li>Implement conversation memory for context continuity</li>
              <li>Design role-based prompts for different user types</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Implementation Examples */}
      <div className="mb-12" id="implementation-examples">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Examples</h2>
        
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Simple Keyword-Based Search</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`// Basic keyword matching with relevance scoring
search(query: string): SearchResult[] {
  const queryWords = query.toLowerCase().split(/\\s+/);
  const results = [];
  
  for (const chunk of this.knowledgeBase) {
    let relevance = 0;
    
    // Check title relevance (highest weight)
    for (const word of queryWords) {
      if (chunk.title.toLowerCase().includes(word)) {
        relevance += 10;
      }
    }
    
    // Check content relevance
    for (const word of queryWords) {
      if (chunk.content.toLowerCase().includes(word)) {
        relevance += 5;
      }
    }
    
    if (relevance > 0) {
      results.push({ chunk, relevance });
    }
  }
  
  return results.sort((a, b) => b.relevance - a.relevance);
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Context-Aware Response Generation</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`// Generate responses based on question type
constructAnswer(query: string, results: SearchResult[]): string {
  const queryLower = query.toLowerCase();
  const primaryResult = results[0];
  
  if (queryLower.includes('what is')) {
    return \`\${primaryResult.chunk.content} This information is based on the \${primaryResult.chunk.section} section.\`;
  }
  
  if (queryLower.includes('how')) {
    return \`\${primaryResult.chunk.content} The process involves several steps as outlined in our \${primaryResult.chunk.section} documentation.\`;
  }
  
  if (queryLower.includes('why')) {
    return \`\${primaryResult.chunk.content} This approach provides several advantages as documented in our \${primaryResult.chunk.section} section.\`;
  }
  
  return \`\${primaryResult.chunk.content} For more details, see the \${primaryResult.chunk.section} section.\`;
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12" id="best-practices">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices for AI Training</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">✅ Do's</h3>
            <ul className="list-disc list-inside space-y-2 text-green-800">
              <li>Structure your knowledge base consistently</li>
              <li>Use descriptive keywords and tags</li>
              <li>Implement relevance scoring algorithms</li>
              <li>Provide source attribution for responses</li>
              <li>Regularly update and maintain knowledge base</li>
              <li>Test with real user questions</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-3">❌ Don'ts</h3>
            <ul className="list-disc list-inside space-y-2 text-red-800">
              <li>Don't rely solely on keyword matching</li>
              <li>Avoid hardcoded responses</li>
              <li>Don't ignore context and user intent</li>
              <li>Avoid outdated or inaccurate information</li>
              <li>Don't forget to handle edge cases</li>
              <li>Avoid complex prompts without testing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tools & Resources */}
      <div className="mb-12" id="tools-resources">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools & Resources</h2>
        
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Vector Databases</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Pinecone:</strong> Managed vector database with easy API integration</li>
              <li><strong>Weaviate:</strong> Open-source vector database with GraphQL API</li>
              <li><strong>Qdrant:</strong> High-performance vector similarity search engine</li>
              <li><strong>Chroma:</strong> Embedding database for AI applications</li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Embedding Models</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>OpenAI Embeddings:</strong> High-quality text embeddings</li>
              <li><strong>Sentence Transformers:</strong> Open-source embedding models</li>
              <li><strong>Cohere Embeddings:</strong> Multilingual embedding support</li>
              <li><strong>Hugging Face:</strong> Various pre-trained embedding models</li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Fine-tuning Tools</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>LoRA:</strong> Low-rank adaptation for efficient fine-tuning</li>
              <li><strong>QLoRA:</strong> Quantized LoRA for memory efficiency</li>
              <li><strong>PEFT:</strong> Parameter-efficient fine-tuning library</li>
              <li><strong>Axolotl:</strong> Fine-tuning framework for language models</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Implement AI Training?</h2>
        <p className="text-gray-700 mb-6">
          Start with the simple RAG system and gradually improve with advanced techniques. 
          The key is to have a well-structured knowledge base and intelligent search algorithms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/developer-guide"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Developer Guide
          </Link>
          <Link
            href="/architecture"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View Architecture
          </Link>
        </div>
      </div>
    </div>
  );
}
