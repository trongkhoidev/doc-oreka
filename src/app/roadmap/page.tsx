import { Callout, Step } from '@/components/ui';

export default function RoadmapPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Roadmap</h1>
        <p className="text-xl text-gray-600">
          Future development plans and vision for Oreka
        </p>
      </div>

      {/* Vision Statement */}
      <section className="doc-section">
        <h2>Our Vision</h2>
        <p>
          Oreka aims to become the leading decentralized prediction market platform, 
          democratizing access to financial markets and collective intelligence. We envision 
          a world where anyone can participate in prediction markets, regardless of their 
          location or financial status.
        </p>
        
        <Callout type="info" title="Long-term Goal">
          To create the most accessible, transparent, and efficient prediction market 
          ecosystem that empowers users to make informed decisions and earn rewards through 
          their knowledge and insights.
        </Callout>
      </section>

      {/* Development Phases */}
      <section className="doc-section">
        <h2>Development Phases</h2>
        <p>
          Our roadmap is divided into phases, each building upon the previous to create 
          a comprehensive and robust platform.
        </p>

        <Step number={1} title="Phase 1: Foundation (Q1-Q2 2024)">
          <p>
            Establish the core infrastructure and launch the basic prediction market platform 
            on Aptos blockchain.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Completed Features:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Core Move smart contracts</li>
              <li>• Basic prediction market functionality</li>
              <li>• Pyth Network oracle integration</li>
              <li>• USDC and APT payment support</li>
              <li>• Basic frontend interface</li>
            </ul>
          </div>
        </Step>

        <Step number={2} title="Phase 2: Expansion (Q3-Q4 2024)">
          <p>
            Expand market types and enhance user experience with advanced features and 
            improved interfaces.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Planned Features:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Sports markets with TheSportsDB integration</li>
              <li>• News markets with Guardian API</li>
              <li>• Advanced betting algorithms</li>
              <li>• Mobile application</li>
              <li>• Enhanced analytics and charts</li>
            </ul>
          </div>
        </Step>

        <Step number={3} title="Phase 3: Innovation (Q1-Q2 2025)">
          <p>
            Introduce cutting-edge features and expand to multiple blockchains for 
            broader accessibility.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Innovation Features:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Cross-chain support (Ethereum, Solana)</li>
              <li>• AI-enhanced prediction models</li>
              <li>• Social trading features</li>
              <li>• Advanced risk management tools</li>
              <li>• Institutional-grade features</li>
            </ul>
          </div>
        </Step>

        <Step number={4} title="Phase 4: Ecosystem (Q3-Q4 2025)" isLast>
          <p>
            Build a comprehensive ecosystem with governance, advanced features, and 
            community-driven development.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Ecosystem Features:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• DAO governance system</li>
              <li>• Advanced oracle networks</li>
              <li>• DeFi integrations</li>
              <li>• Enterprise solutions</li>
              <li>• Global expansion</li>
            </ul>
          </div>
        </Step>
      </section>

      {/* Cross-Chain Support */}
      <section className="doc-section">
        <h2>Cross-Chain Support</h2>
        <p>
          Expanding beyond Aptos to multiple blockchains will increase accessibility 
          and liquidity for users across different ecosystems.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ethereum Integration</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Solidity smart contracts</li>
              <li>• Layer 2 scaling solutions</li>
              <li>• ERC-20 token support</li>
              <li>• MetaMask integration</li>
              <li>• DeFi protocol integration</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Solana Integration</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Rust smart contracts</li>
              <li>• High-speed transactions</li>
              <li>• SPL token support</li>
              <li>• Phantom wallet integration</li>
              <li>• Serum DEX integration</li>
            </ul>
          </div>
        </div>

        <Callout type="tip" title="Interoperability">
          Cross-chain bridges will enable users to move assets seamlessly between 
          different blockchains while maintaining their prediction market positions.
        </Callout>
      </section>

      {/* AI Integration */}
      <section className="doc-section">
        <h2>AI-Enhanced Features</h2>
        <p>
          Artificial intelligence will play a crucial role in improving prediction 
          accuracy and user experience on the platform.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">AI Capabilities</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Market Analysis</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Sentiment analysis from news and social media</li>
                <li>• Historical pattern recognition</li>
                <li>• Risk assessment algorithms</li>
                <li>• Market volatility prediction</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">User Experience</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Personalized market recommendations</li>
                <li>• Smart portfolio management</li>
                <li>• Automated risk alerts</li>
                <li>• Intelligent odds calculation</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Machine Learning Models</h3>
        <p>
          Our AI models will continuously learn from market data and user behavior 
          to provide better insights and predictions:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Price Prediction Models:</strong> Advanced algorithms for crypto and asset price forecasting</li>
          <li>• <strong>Risk Assessment:</strong> Dynamic risk scoring based on market conditions</li>
          <li>• <strong>User Behavior Analysis:</strong> Understanding trading patterns and preferences</li>
          <li>• <strong>Market Sentiment:</strong> Real-time analysis of news and social media impact</li>
        </ul>
      </section>

      {/* DAO Governance */}
      <section className="doc-section">
        <h2>DAO Governance</h2>
        <p>
          Decentralized Autonomous Organization (DAO) governance will give the community 
          control over platform development and decision-making.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Governance Structure</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Proposal System</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Community proposal submission</li>
                <li>• Discussion and debate periods</li>
                <li>• Voting mechanisms</li>
                <li>• Execution automation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Voting Rights</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• ORK token-based voting</li>
                <li>• Quadratic voting system</li>
                <li>• Delegation mechanisms</li>
                <li>• Time-locked voting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Treasury Management</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Community fund allocation</li>
                <li>• Development grants</li>
                <li>• Marketing initiatives</li>
                <li>• Emergency funds</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Governance Areas</h3>
        <p>
          The DAO will govern various aspects of the platform:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Protocol Parameters:</strong> Fee structures, reward rates, and technical parameters</li>
          <li>• <strong>Feature Development:</strong> Prioritizing new features and improvements</li>
          <li>• <strong>Market Curation:</strong> Deciding which markets to feature or remove</li>
          <li>• <strong>Partnerships:</strong> Strategic collaborations and integrations</li>
          <li>• <strong>Security:</strong> Emergency responses and security measures</li>
        </ul>
      </section>

      {/* Enterprise Solutions */}
      <section className="doc-section">
        <h2>Enterprise Solutions</h2>
        <p>
          Oreka will offer enterprise-grade solutions for institutions, corporations, 
          and professional traders.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Institutional Features</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Advanced risk management tools</li>
              <li>• Compliance and reporting</li>
              <li>• Multi-signature wallets</li>
              <li>• API access and customization</li>
              <li>• Dedicated support</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Professional Tools</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Advanced charting and analysis</li>
              <li>• Portfolio tracking and management</li>
              <li>• Automated trading strategies</li>
              <li>• Market research tools</li>
              <li>• Performance analytics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Global Expansion */}
      <section className="doc-section">
        <h2>Global Expansion</h2>
        <p>
          Oreka will expand globally to serve users in different regions and markets, 
          adapting to local regulations and preferences.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Regional Focus</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Asia-Pacific</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Local language support</li>
                <li>• Regional market types</li>
                <li>• Local payment methods</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Europe & Americas</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• EU regulatory compliance</li>
                <li>• Local sports markets</li>
                <li>• Regional news integration</li>
                <li>• Local banking partnerships</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Localization Features</h3>
        <p>
          To serve global users effectively, Oreka will implement:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Multi-language Support:</strong> Interface in local languages</li>
          <li>• <strong>Regional Markets:</strong> Local events and predictions</li>
          <li>• <strong>Local Payment Methods:</strong> Regional banking and payment solutions</li>
          <li>• <strong>Regulatory Compliance:</strong> Adherence to local financial regulations</li>
          <li>• <strong>Cultural Adaptation:</strong> Market types relevant to local cultures</li>
        </ul>
      </section>

      {/* Community Involvement */}
      <section className="doc-section">
        <h2>Community Involvement</h2>
        <p>
          The Oreka community will play a vital role in shaping the platform&apos;s future 
          through active participation and feedback.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Community Programs</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Bug bounty programs</li>
              <li>• Developer grants</li>
              <li>• Community challenges</li>
              <li>• Ambassador programs</li>
              <li>• Hackathons</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Feedback Channels</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Community forums</li>
              <li>• Discord channels</li>
              <li>• GitHub discussions</li>
              <li>• User surveys</li>
              <li>• Feature requests</li>
            </ul>
          </div>
        </div>

        <Callout type="success" title="Get Involved">
          Join the Oreka community to contribute to the platform&apos;s development and 
          help shape the future of decentralized prediction markets.
        </Callout>
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Ready to be part of Oreka&apos;s journey? Here&apos;s how you can get involved:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">Start Trading</h3>
            <p className="text-gray-600 mb-4">
              Experience the current platform and provide feedback
            </p>
            <a href="/getting-started" className="text-blue-600 hover:text-blue-800 font-medium">
              Get Started →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">Join Community</h3>
            <p className="text-gray-600 mb-4">
              Connect with other users and developers
            </p>
            <a href="https://discord.gg/oreka" className="text-blue-600 hover:text-blue-800 font-medium">
              Join Discord →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">Contribute</h3>
            <p className="text-gray-600 mb-4">
              Help build the future of Oreka
            </p>
            <a href="https://github.com/oreka" className="text-blue-600 hover:text-blue-800 font-medium">
              View GitHub →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
