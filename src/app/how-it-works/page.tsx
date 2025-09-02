import { Callout, Step, CodeBlock, Table } from '@/components/ui';

export default function HowItWorksPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
        <p className="text-xl text-gray-600">
          Step-by-step explanation of how Oreka&apos;s prediction market system operates
        </p>
      </div>

      {/* Overview */}
      <section className="doc-section">
        <h2>System Overview</h2>
        <p>
          Oreka is a decentralized prediction market platform that allows users to create and 
          participate in markets based on real-world events. The system operates entirely on-chain 
          using Move smart contracts on the Aptos blockchain, ensuring transparency, security, 
          and fairness.
        </p>
        
        <Callout type="info" title="Key Innovation">
          Oreka&apos;s poly-option system with weighted betting provides more sophisticated 
          prediction markets than traditional binary options, enabling better risk management 
          and more nuanced outcomes.
        </Callout>
      </section>

      {/* Complete Workflow */}
      <section className="doc-section">
        <h2>Complete Market Lifecycle</h2>
        <p>
          Understanding the complete workflow helps users make informed decisions and developers 
          integrate with the platform effectively.
        </p>

        <Step number={1} title="Market Creation">
          <p>
            Market creators (owners) deploy new prediction markets by specifying event details, 
            outcomes, timeframes, and oracle sources. Each market requires an initial stake to 
            cover operational costs and ensure commitment.
          </p>
        </Step>

        <Step number={2} title="Market Activation">
          <p>
            Once deployed, markets enter the active phase where users can browse, analyze, 
            and place bets. The system calculates real-time odds based on current stake 
            distribution and time remaining.
          </p>
        </Step>

        <Step number={3} title="Betting Phase">
          <p>
            Users place weighted bets on their preferred outcomes. The system uses an advanced 
            algorithm that considers stake amount, time remaining, and market risk to calculate 
            optimal odds and ensure fair payouts.
          </p>
        </Step>

        <Step number={4} title="Market Lock">
          <p>
            At the specified end time, markets automatically lock and no more bets can be placed. 
            The system prepares for resolution by finalizing stake distributions and calculating 
            final odds.
          </p>
        </Step>

        <Step number={5} title="Oracle Resolution">
          <p>
            Smart contracts automatically query trusted oracle sources to determine market 
            outcomes. The resolution process is transparent and tamper-proof, ensuring fair 
            and accurate results.
          </p>
        </Step>

        <Step number={6} title="Reward Distribution" isLast>
          <p>
            Winners can claim their rewards immediately after resolution. The system automatically 
            distributes fees to market owners and the treasury, while ORK tokens are allocated 
            based on user performance.
          </p>
        </Step>
      </section>

      {/* Technical Details */}
      <section className="doc-section">
        <h2>Technical Implementation</h2>
        <p>
          Oreka&apos;s technical architecture ensures reliability, security, and scalability 
          while maintaining decentralization.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Smart Contract Architecture</h3>
          
          <Table 
            headers={['Component', 'Purpose', 'Key Features']}
            rows={[
              ['Market Registry', 'Global market management', 'Market creation, listing, indexing'],
              ['Crypto Market', 'Crypto price predictions', 'Poly-option outcomes, weighted betting'],
              ['Treasury Pool', 'Fee collection & distribution', 'Protocol rake, owner fees, dust management'],
              ['Payment Router', 'Asset routing & escrow', 'USDC/APT support, Circle integration'],
              ['Oracle Adapter', 'Data source integration', 'Pyth, TheSportsDB, Guardian APIs'],
              ['Reward Manager', 'ORK token distribution', 'Performance tracking, leaderboards'],
            ]}
          />
        </div>
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Now that you understand how Oreka works, explore these related topics:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Market Types</h3>
            <p className="text-gray-600 mb-4">
              Learn about the different types of prediction markets available
            </p>
            <a href="/market-types" className="text-blue-600 hover:text-blue-800 font-medium">
              Explore Markets →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
            <p className="text-gray-600 mb-4">
              Create your first market and start trading on Oreka
            </p>
            <a href="/getting-started" className="text-blue-600 hover:text-blue-800 font-medium">
              Get Started →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
