import { Callout, CodeBlock, Table } from '@/components/ui';

export default function ArchitecturePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Architecture</h1>
        <p className="text-xl text-gray-600">
          System overview and smart contract architecture of the Oreka platform
        </p>
      </div>

      {/* System Overview */}
      <section className="doc-section">
        <h2>System Overview</h2>
        <p>
          Oreka is built on the Aptos blockchain using Move smart contracts, providing a 
          decentralized prediction market platform with advanced features like poly-option 
          markets, weighted betting, and automated oracle resolution.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Core Components</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Smart Contracts (Move)</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Market management and logic</li>
                <li>• Payment processing and escrow</li>
                <li>• Oracle integration and resolution</li>
                <li>• Reward distribution and treasury</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Frontend (Next.js)</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• User interface and wallet integration</li>
                <li>• Market browsing and betting</li>
                <li>• Portfolio management</li>
                <li>• Real-time data and charts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Contracts */}
      <section className="doc-section">
        <h2>Smart Contracts</h2>
        <p>
          Oreka&apos;s smart contract system is built with modularity and security in mind. 
          Each contract has a specific responsibility and interacts with others through 
          well-defined interfaces.
        </p>

        <Table 
          headers={['Contract', 'Purpose', 'Key Features']}
          rows={[
            ['types.move', 'Core data structures and constants', 'Outcome types, market configs, user bet structures'],
            ['crypto_market.move', 'Poly-option market logic', 'Market creation, betting, resolution, payouts'],
            ['treasury_pool.move', 'Global treasury management', 'Fee collection, protocol rake, dust management'],
            ['payment_router.move', 'Payment routing system', 'APT/USDC routing, escrow management'],
            ['payment_usdc.move', 'USDC payment handling', 'USDC deposits, withdrawals, Circle integration'],
            ['reward_manager.move', 'Reward distribution', 'ORK token rewards, leaderboard management'],
            ['ork_access_control.move', 'Access control system', 'Role-based permissions, admin functions'],
            ['pyth_price_adapter.move', 'Oracle price feeds', 'Pyth Network integration, price validation'],
          ]}
        />

        <Callout type="info" title="Contract Security">
          All smart contracts are written in Move, which provides strong safety guarantees 
          including resource safety, type safety, and memory safety.
        </Callout>
      </section>

      {/* Data Flow */}
      <section className="doc-section">
        <h2>Data Flow and Workflow</h2>
        <p>
          Understanding how data flows through the system is crucial for developers and users. 
          Here&apos;s the complete workflow from market creation to resolution.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Market Lifecycle</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                1
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Market Creation</h4>
                <p className="text-gray-600 text-sm">
                  Owner deploys market with event description, outcomes, timeframe, and oracle source. 
                  Initial stake is locked in treasury.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                2
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Betting Phase</h4>
                <p className="text-gray-600 text-sm">
                  Users place weighted bets on outcomes. System calculates odds based on stake 
                  distribution and time remaining.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                3
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Market Lock</h4>
                <p className="text-gray-600 text-sm">
                  Betting ends, market locks. No more bets can be placed. Oracle data is 
                  fetched for resolution.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                4
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Resolution</h4>
                <p className="text-gray-600 text-sm">
                  Smart contract determines winning outcome based on oracle data. Losers&apos; 
                  stakes are distributed to winners.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                5
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Reward Distribution</h4>
                <p className="text-gray-600 text-sm">
                  Winners claim their rewards. Fees are distributed to owner and treasury. 
                  ORK tokens are distributed based on performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="doc-section">
        <h2>Technical Architecture</h2>
        <p>
          The technical architecture follows modern blockchain development patterns with 
          emphasis on security, scalability, and maintainability.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Move Smart Contracts</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Resource-oriented programming model</li>
              <li>• Formal verification capabilities</li>
              <li>• Parallel execution support</li>
              <li>• Built-in security features</li>
              <li>• Upgradeable contract patterns</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Frontend Architecture</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Next.js with TypeScript</li>
              <li>• Wallet adapter integration</li>
              <li>• Real-time data updates</li>
              <li>• Responsive design system</li>
              <li>• Component-based architecture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Oracle Integration */}
      <section className="doc-section">
        <h2>Oracle Integration</h2>
        <p>
          Oracles are crucial for providing reliable, tamper-proof data for market resolution. 
          Oreka integrates with multiple oracle providers for different data types.
        </p>

        <Table 
          headers={['Data Type', 'Oracle Provider', 'Use Case']}
          rows={[
            ['Crypto Prices', 'Pyth Network', 'BTC, ETH, SOL price predictions'],
            ['Sports Results', 'TheSportsDB API', 'Game outcomes, scores, statistics'],
            ['News Events', 'Guardian API', 'Binary event predictions'],
            ['Custom Data', 'Switchboard', 'User-defined oracle feeds'],
          ]}
        />

        <Callout type="warning" title="Oracle Reliability">
          While we use trusted oracle providers, users should understand that oracle failures 
          can affect market resolution. We implement fallback mechanisms where possible.
        </Callout>
      </section>

      {/* Security Considerations */}
      <section className="doc-section">
        <h2>Security Considerations</h2>
        <p>
          Security is paramount in DeFi applications. Oreka implements multiple layers of 
          security to protect user funds and ensure system integrity.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Smart Contract Security</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Move language safety guarantees</li>
              <li>• Comprehensive testing suite</li>
              <li>• Formal verification where possible</li>
              <li>• Access control mechanisms</li>
              <li>• Emergency pause functionality</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Operational Security</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Multi-signature treasury management</li>
              <li>• Timelock mechanisms for upgrades</li>
              <li>• Oracle redundancy and validation</li>
              <li>• Rate limiting and anti-spam measures</li>
              <li>• Regular security audits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="doc-section">
        <h2>Code Examples</h2>
        <p>
          Here are some code examples showing how to interact with Oreka&apos;s smart contracts:
        </p>

        <CodeBlock
          title="Market Creation"
          language="typescript"
          code={`// Create a new crypto market
const createMarket = async (
  assetSymbol: string,
  outcomes: Outcome[],
  openTime: number,
  lockTime: number
) => {
  const payload = {
    function: \`\${OREKA_ADDRESS}::crypto_market::create_market\`,
    type_arguments: [],
    arguments: [assetSymbol, outcomes, openTime, lockTime]
  };
  
  return await signAndSubmitTransaction(payload);
};`}
        />

        <CodeBlock
          title="Place Bet"
          language="typescript"
          code={`// Place a bet on a market outcome
const placeBet = async (
  marketId: string,
  outcomeIndex: number,
  amount: number
) => {
  const payload = {
    function: \`\${OREKA_ADDRESS}::crypto_market::place_bet\`,
    type_arguments: [],
    arguments: [marketId, outcomeIndex, amount]
  };
  
  return await signAndSubmitTransaction(payload);
};`}
        />
      </section>

      {/* Performance and Scalability */}
      <section className="doc-section">
        <h2>Performance and Scalability</h2>
        <p>
          Oreka is designed to handle high transaction volumes and provide fast, responsive 
          user experience while maintaining decentralization.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Performance Features</h3>
          
          <Table 
            headers={['Feature', 'Benefit', 'Implementation']}
            rows={[
              ['Parallel Execution', 'High TPS', 'Move VM parallel transaction processing'],
              ['Batch Operations', 'Efficient batching', 'Multiple bets in single transaction'],
              ['Lazy Loading', 'Fast UI rendering', 'On-demand data fetching'],
              ['Caching', 'Reduced latency', 'Smart contract state caching'],
              ['CDN', 'Global performance', 'Static asset distribution'],
            ]}
            compact
          />
        </div>
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Now that you understand the architecture, explore these related topics:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Market Types</h3>
            <p className="text-gray-600 mb-4">
              Learn about the different types of prediction markets and how they work
            </p>
            <a href="/market-types" className="text-blue-600 hover:text-blue-800 font-medium">
              Explore Markets →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Developer Guide</h3>
            <p className="text-gray-600 mb-4">
              Get detailed integration guides and API documentation
            </p>
            <a href="/developer-guide" className="text-blue-600 hover:text-blue-800 font-medium">
              View Docs →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
