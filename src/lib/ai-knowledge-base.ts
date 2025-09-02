// AI Knowledge Base for Oreka Documentation
// This system provides intelligent responses based on documentation content

export interface KnowledgeChunk {
  id: string;
  title: string;
  content: string;
  section: string;
  keywords: string[];
  relatedTopics: string[];
  source: string;
  lastUpdated: string;
}

export interface SearchResult {
  chunk: KnowledgeChunk;
  relevance: number;
  matchedKeywords: string[];
}

export interface AIResponse {
  answer: string;
  sources: KnowledgeChunk[];
  confidence: number;
  relatedTopics: string[];
}

// Comprehensive Oreka Knowledge Base
export const OREKA_KNOWLEDGE_BASE: KnowledgeChunk[] = [
  {
    id: 'oreka-overview',
    title: 'What is Oreka?',
    content: `Oreka is a professional, real-time decentralized binary options trading platform built on the Aptos blockchain. 
    Unlike traditional binary options, Oreka features a sophisticated poly-option system with multiple outcomes and comparison types, 
    enabling more nuanced predictions and better risk management. The platform combines real-time data, market sentiment, 
    and expert opinions to provide accurate, unbiased, and real-time probabilities for future events.`,
    section: 'Platform Overview',
    keywords: ['oreka', 'platform', 'binary options', 'decentralized', 'trading', 'aptos'],
    relatedTopics: ['poly-option system', 'prediction markets', 'blockchain technology'],
    source: 'Home Page Documentation',
    lastUpdated: '2024-12-19'
  },
  {
    id: 'poly-option-system',
    title: 'Poly-Option System',
    content: `Oreka's poly-option system goes beyond traditional binary yes/no markets. It supports multiple outcomes and 
    comparison types like greater than, less than, ranges, and more. This allows for sophisticated risk management and 
    more nuanced predictions. Users can create markets with complex conditions such as "Will BTC be between $40,000 and $60,000?" 
    or "Will ETH outperform BTC by more than 10%?"`,
    section: 'Core Features',
    keywords: ['poly-option', 'multiple outcomes', 'comparison types', 'risk management', 'sophisticated'],
    relatedTopics: ['binary options', 'market creation', 'risk assessment'],
    source: 'Features Documentation',
    lastUpdated: '2024-12-19'
  },
  {
    id: 'aptos-blockchain',
    title: 'Aptos Blockchain Technology',
    content: `Aptos is a Layer 1 blockchain designed for safety, scalability, and reliability. Oreka chose Aptos for its 
    high throughput (up to 160,000 TPS), low latency, and Move smart contract language which provides better security 
    guarantees than traditional smart contract languages. The Move language's resource-oriented design prevents common 
    vulnerabilities like reentrancy attacks and ensures type safety.`,
    section: 'Technology Stack',
    keywords: ['aptos', 'blockchain', 'layer 1', 'move language', 'smart contracts', 'security', 'scalability'],
    relatedTopics: ['Move language', 'smart contract security', 'blockchain performance'],
    source: 'Architecture Documentation',
    lastUpdated: '2024-12-19'
  },
  {
    id: 'move-smart-contracts',
    title: 'Move Smart Contracts',
    content: `Move is a safe and secure programming language for Web3. Oreka uses Move smart contracts for all market logic, 
    settlement, and payment handling. Move's resource-oriented design prevents common vulnerabilities like reentrancy attacks 
    and ensures type safety. The language enforces strict ownership rules and prevents accidental resource duplication or loss.`,
    section: 'Smart Contracts',
    keywords: ['move', 'smart contracts', 'programming language', 'security', 'resource-oriented', 'type safety'],
    relatedTopics: ['smart contract development', 'blockchain security', 'programming languages'],
    source: 'Developer Documentation',
    lastUpdated: '2024-12-19'
  },
  {
    id: 'oracle-integration',
    title: 'Oracle Integration & Price Feeds',
    content: `Oreka integrates with trusted oracles including Pyth Network for real-time price feeds. These oracles provide 
    accurate, tamper-proof data for market resolution, ensuring fair and transparent outcomes for all participants. 
    The system supports multiple data sources and implements redundancy to ensure reliability. Oracle data is used for 
    market creation, price updates, and final settlement.`,
    section: 'Data & Oracles',
    keywords: ['oracle', 'price feeds', 'pyth network', 'real-time data', 'market resolution', 'transparency'],
    relatedTopics: ['data sources', 'market settlement', 'price accuracy'],
    source: 'Architecture Documentation',
    lastUpdated: '2024-12-19'
  },
  {
    id: 'usdc-payments',
    title: 'USDC & Payment Systems',
    content: `Oreka supports both USDC and APT payments. USDC provides stability for traders, while APT offers native token 
    benefits. The platform integrates with Circle for cross-chain USDC support and ensures secure payment processing. 
    USDC is the primary stablecoin used for market collateral and payouts, providing 1:1 USD peg for stable value.`,
    section: 'Payments',
    keywords: ['usdc', 'payments', 'stablecoin', 'circle', 'cross-chain', 'collateral', 'payouts'],
    relatedTopics: ['stablecoins', 'payment processing', 'cross-chain transfers'],
    source: 'Payment Documentation',
    lastUpdated: '2024-12-19'
  },
  {
    id: 'trading-mechanics',
    title: 'Trading Mechanics & Process',
    content: `Trading on Oreka involves creating or participating in binary options markets. Users can place bets during 
    the bidding phase, and markets automatically resolve using oracle data. Winners receive payouts in USDC or APT. 
    The platform supports both market and limit orders, with real-time order book updates and instant trade execution.`,
    section: 'Trading',
    keywords: ['trading', 'binary options', 'bidding', 'market resolution', 'payouts', 'order book', 'execution'],
    relatedTopics: ['market orders', 'limit orders', 'trade execution', 'order book'],
    source: 'Trading Documentation',
    lastUpdated: '2024-12-19'
  },
  {
    id: 'fee-structure',
    title: 'Fee Structure & Economics',
    content: `Oreka charges trading fees and protocol rake, which are distributed between market creators and the treasury pool. 
    The fee structure is transparent and designed to incentivize market creation and participation. Fees typically range 
    from 0.1% to 0.5% depending on market volume and user tier. Market creators receive a portion of fees as incentives.`,
    section: 'Economics',
    keywords: ['fees', 'protocol rake', 'treasury pool', 'market creators', 'incentives', 'transparency'],
    relatedTopics: ['fee calculation', 'revenue distribution', 'user tiers'],
    source: 'Economics Documentation',
    lastUpdated: '2024-12-19'
  },
  {
    id: 'ork-token',
    title: 'ORK Token & Rewards',
    content: `ORK is Oreka's native token used for rewards, governance, and platform incentives. Users can earn ORK through 
    trading, market creation, and participation in the ecosystem. The token provides governance rights and can be staked 
    for additional rewards. ORK holders can participate in platform decisions and receive a share of protocol revenue.`,
    section: 'Tokenomics',
    keywords: ['ork token', 'rewards', 'governance', 'staking', 'incentives', 'ecosystem'],
    relatedTopics: ['token economics', 'governance rights', 'staking rewards'],
    source: 'Token Documentation',
    lastUpdated: '2024-12-19'
  },
  {
    id: 'wallet-integration',
    title: 'Wallet Integration & Security',
    content: `Oreka supports multiple Aptos wallets including Petra, Martian, Pontem, Blocto, Nightly, and Particle. 
    All wallets must be AIP-62 compatible for secure integration with the platform. The system implements secure 
    authentication and never stores private keys. Users maintain full control of their funds and can disconnect wallets at any time.`,
    section: 'Security',
    keywords: ['wallets', 'petra', 'martian', 'pontem', 'security', 'authentication', 'private keys'],
    relatedTopics: ['wallet security', 'AIP-62 standard', 'fund control'],
    source: 'Security Documentation',
    lastUpdated: '2024-12-19'
  },
  {
    id: 'market-creation',
    title: 'Market Creation & Management',
    content: `Users can create custom markets on Oreka by defining event conditions, timeframes, and outcome parameters. 
    Market creators set initial odds and can adjust parameters during the creation phase. The platform supports various 
    market types including crypto price predictions, sports outcomes, and news events. Market creators earn fees from 
    successful markets.`,
    section: 'Market Management',
    keywords: ['market creation', 'custom markets', 'event conditions', 'timeframes', 'odds', 'market types'],
    relatedTopics: ['market parameters', 'odds setting', 'market types', 'creator rewards'],
    source: 'Market Creation Documentation',
    lastUpdated: '2024-12-19'
  },
  {
    id: 'defi-concepts',
    title: 'DeFi & Decentralized Finance',
    content: `DeFi (Decentralized Finance) refers to financial applications built on blockchain technology that operate 
    without intermediaries. Oreka is a DeFi platform that democratizes access to binary options trading. Unlike 
    traditional finance, DeFi platforms are permissionless, transparent, and accessible to anyone with an internet 
    connection and cryptocurrency.`,
    section: 'DeFi Concepts',
    keywords: ['defi', 'decentralized finance', 'blockchain', 'permissionless', 'transparent', 'accessible'],
    relatedTopics: ['traditional finance', 'blockchain applications', 'financial inclusion'],
    source: 'DeFi Documentation',
    lastUpdated: '2024-12-19'
  },
  {
    id: 'binary-options',
    title: 'Binary Options & Prediction Markets',
    content: `Binary options are financial instruments where the payoff is either a fixed amount or nothing at all. 
    Prediction markets like Oreka allow users to bet on future events, creating a more efficient way to aggregate 
    information and assess probabilities. These markets often provide more accurate predictions than traditional 
    forecasting methods due to the wisdom of crowds and financial incentives.`,
    section: 'Financial Instruments',
    keywords: ['binary options', 'prediction markets', 'financial instruments', 'payoff', 'probabilities', 'wisdom of crowds'],
    relatedTopics: ['financial derivatives', 'market efficiency', 'crowd wisdom'],
    source: 'Financial Documentation',
    lastUpdated: '2024-12-19'
  }
];

// Semantic Search Implementation
export class OrekaAISearch {
  private knowledgeBase: KnowledgeChunk[];

  constructor() {
    this.knowledgeBase = OREKA_KNOWLEDGE_BASE;
  }

  // Simple keyword-based search with relevance scoring
  search(query: string, limit: number = 5): SearchResult[] {
    const normalizedQuery = query.toLowerCase().trim();
    const queryWords = normalizedQuery.split(/\s+/);
    
    const results: SearchResult[] = [];

    for (const chunk of this.knowledgeBase) {
      let relevance = 0;
      const matchedKeywords: string[] = [];

      // Check title relevance
      for (const word of queryWords) {
        if (chunk.title.toLowerCase().includes(word)) {
          relevance += 10;
          if (!matchedKeywords.includes(word)) matchedKeywords.push(word);
        }
      }

      // Check content relevance
      for (const word of queryWords) {
        if (chunk.content.toLowerCase().includes(word)) {
          relevance += 5;
          if (!matchedKeywords.includes(word)) matchedKeywords.push(word);
        }
      }

      // Check keywords relevance
      for (const word of queryWords) {
        if (chunk.keywords.some(keyword => keyword.toLowerCase().includes(word))) {
          relevance += 8;
          if (!matchedKeywords.includes(word)) matchedKeywords.push(word);
        }
      }

      // Check section relevance
      for (const word of queryWords) {
        if (chunk.section.toLowerCase().includes(word)) {
          relevance += 3;
        }
      }

      if (relevance > 0) {
        results.push({
          chunk,
          relevance,
          matchedKeywords
        });
      }
    }

    // Sort by relevance and limit results
    return results
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, limit);
  }

  // Generate AI response based on search results
  generateResponse(query: string): AIResponse {
    const searchResults = this.search(query, 3);
    
    if (searchResults.length === 0) {
      return {
        answer: "I don't have specific information about that topic in my knowledge base. However, I can help you with general questions about Oreka, blockchain technology, or DeFi concepts. Could you please rephrase your question or ask about a different aspect of Oreka?",
        sources: [],
        confidence: 0,
        relatedTopics: ['Oreka platform', 'blockchain technology', 'DeFi concepts']
      };
    }

    // Combine information from top results
    const topResult = searchResults[0];
    const relatedTopics = new Set<string>();
    
    searchResults.forEach(result => {
      result.chunk.relatedTopics.forEach(topic => relatedTopics.add(topic));
    });

    // Generate contextual response
    let answer = this.constructAnswer(query, searchResults);
    
    return {
      answer,
      sources: searchResults.map(r => r.chunk),
      confidence: Math.min(topResult.relevance / 20, 1), // Normalize confidence
      relatedTopics: Array.from(relatedTopics)
    };
  }

  private constructAnswer(query: string, results: SearchResult[]): string {
    const primaryResult = results[0];
    const queryLower = query.toLowerCase();

    // Context-aware response generation
    if (queryLower.includes('what is') || queryLower.includes('oreka')) {
      return `${primaryResult.chunk.content} This information is based on the ${primaryResult.chunk.section} section of our documentation.`;
    }

    if (queryLower.includes('how') || queryLower.includes('process')) {
      return `${primaryResult.chunk.content} The process involves several steps as outlined in our ${primaryResult.chunk.section} documentation.`;
    }

    if (queryLower.includes('why') || queryLower.includes('benefit')) {
      return `${primaryResult.chunk.content} This approach provides several advantages as documented in our ${primaryResult.chunk.section} section.`;
    }

    // Default response
    return `${primaryResult.chunk.content} For more detailed information, you can refer to the ${primaryResult.chunk.section} section of our documentation.`;
  }

  // Get related topics for follow-up questions
  getRelatedTopics(topic: string): string[] {
    const result = this.search(topic, 1)[0];
    return result ? result.chunk.relatedTopics : [];
  }

  // Update knowledge base (for dynamic content)
  updateKnowledgeBase(newChunks: KnowledgeChunk[]) {
    this.knowledgeBase = [...this.knowledgeBase, ...newChunks];
  }
}

// Export singleton instance
export const orekaAISearch = new OrekaAISearch();
