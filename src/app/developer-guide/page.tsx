import { Callout, CodeBlock, Table } from '@/components/ui';

export default function DeveloperGuidePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Developer Guide</h1>
        <p className="text-xl text-gray-600">
          Integration guides and development resources for Oreka
        </p>
      </div>

      {/* Overview */}
      <section className="doc-section">
        <h2>Developer Overview</h2>
        <p>
          Oreka provides comprehensive APIs and smart contract interfaces for developers to 
          integrate prediction markets into their applications. Whether you&apos;re building a 
          trading interface, analytics dashboard, or mobile app, our developer tools make 
          integration seamless.
        </p>
        
        <Callout type="info" title="Open Source">
          Oreka is fully open source, allowing developers to inspect, modify, and contribute 
          to the codebase. All smart contracts are written in Move and available on GitHub.
        </Callout>
      </section>

      {/* Smart Contract Integration */}
      <section className="doc-section">
        <h2>Smart Contract Integration</h2>
        <p>
          Integrate directly with Oreka&apos;s Move smart contracts on the Aptos blockchain 
          for full control and customization.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Contract Addresses</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Mainnet</h4>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                0x1234...abcd
              </code>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Devnet</h4>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                0x5678...efgh
              </code>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Core Functions</h3>
        <Table 
          headers={['Function', 'Purpose', 'Parameters']}
          rows={[
            ['create_market', 'Deploy new prediction market', 'asset_symbol, outcomes, open_time, lock_time'],
            ['place_bet', 'Place bet on market outcome', 'market_id, outcome_index, amount'],
            ['resolve_market', 'Resolve market using oracle data', 'market_id, winning_outcome'],
            ['claim_reward', 'Claim winnings after resolution', 'market_id, user_address'],
            ['withdraw_fee', 'Withdraw owner fees', 'market_id, owner_address'],
          ]}
        />
      </section>

      {/* API Integration */}
      <section className="doc-section">
        <h2>API Integration</h2>
        <p>
          Use Oreka&apos;s REST APIs to fetch market data, user information, and real-time 
          updates without directly interacting with smart contracts.
        </p>

        <CodeBlock
          title="Fetch Markets Example"
          language="typescript"
          code={`// Get all active markets
const fetchMarkets = async () => {
  const response = await fetch('/api/markets?status=active');
  const markets = await response.json();
  
  return markets.map(market => ({
    id: market.id,
    title: market.title,
    outcomes: market.outcomes,
    currentOdds: market.currentOdds,
    totalStake: market.totalStake,
    timeRemaining: market.timeRemaining
  }));
};`}
        />
      </section>

      {/* Wallet Integration */}
      <section className="doc-section">
        <h2>Wallet Integration</h2>
        <p>
          Oreka supports all AIP-62 compatible Aptos wallets. Integrate wallet connectivity 
          to enable user interactions with prediction markets.
        </p>

        <CodeBlock
          title="Wallet Connection"
          language="typescript"
          code={`import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import { PetraWallet } from 'petra-plugin-wallet-adapter';

const wallets = [new PetraWallet()];

function App() {
  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <OrekaApp />
    </AptosWalletAdapterProvider>
  );
}`}
        />
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Ready to start building? Explore these resources:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
            <p className="text-gray-600 mb-4">
              Create your first market and start trading
            </p>
            <a href="/getting-started" className="text-blue-600 hover:text-blue-800 font-medium">
              Get Started →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Architecture</h3>
            <p className="text-gray-600 mb-4">
              Understand the system design and smart contracts
            </p>
            <a href="/architecture" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
