import { Callout, Step, CodeBlock, Table } from '@/components/ui';

export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1>
        <p className="text-xl text-gray-600">
          Quick start guide for new users and market creators on Oreka
        </p>
      </div>

      {/* Overview */}
      <section className="doc-section">
        <h2>Quick Overview</h2>
        <p>
          Oreka is a decentralized prediction market platform that allows you to create and 
          participate in markets based on real-world events. This guide will walk you through 
          the essential steps to get started.
        </p>
        
        <Callout type="info" title="What You&apos;ll Learn">
          By the end of this guide, you&apos;ll understand how to connect your wallet, create your 
          first market, and start trading on Oreka.
        </Callout>
      </section>

      {/* Prerequisites */}
      <section className="doc-section">
        <h2>Prerequisites</h2>
        <p>Before you begin, make sure you have the following:</p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Aptos Wallet</h3>
            <p className="text-gray-600 mb-4">
              You&apos;ll need an Aptos-compatible wallet to interact with Oreka. We support:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Petra Wallet</li>
              <li>• Martian Wallet</li>
              <li>• Pontem Wallet</li>
              <li>• Blocto Wallet</li>
              <li>• Nightly Wallet</li>
              <li>• Particle Wallet</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">USDC or APT Balance</h3>
            <p className="text-gray-600 mb-4">
              You&apos;ll need either USDC or APT tokens to participate in markets:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• USDC for stable betting</li>
              <li>• APT for native token betting</li>
              <li>• Minimum balance varies by market</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="doc-section">
        <h2>Step-by-Step Setup</h2>
        
        <Step number={1} title="Connect Your Wallet">
          <p>
            Visit the Oreka platform and click the &quot;Connect Wallet&quot; button. Choose your preferred 
            Aptos wallet from the list and authorize the connection.
          </p>
          <Callout type="tip" title="Wallet Security">
            Always ensure you&apos;re connecting to the official Oreka platform and never share your 
            private keys or seed phrases.
          </Callout>
        </Step>

        <Step number={2} title="Verify Your Connection">
          <p>
            Once connected, you should see your wallet address displayed in the top navigation. 
            Verify that the connection is successful and your balance is visible.
          </p>
        </Step>

        <Step number={3} title="Explore Available Markets">
          <p>
            Browse through existing markets to understand how they work. You can view market 
            details, current odds, and betting history.
          </p>
        </Step>

        <Step number={4} title="Place Your First Bet">
          <p>
            Choose a market you&apos;re interested in and place a bet. You can bet on multiple 
            outcomes and adjust your stake amount.
          </p>
        </Step>

        <Step number={5} title="Monitor and Manage" isLast>
          <p>
            Track your active positions, manage your portfolio, and claim rewards when markets 
            are resolved.
          </p>
        </Step>
      </section>

      {/* For Market Creators */}
      <section className="doc-section">
        <h2>For Market Creators</h2>
        <p>
          If you want to create your own prediction markets, here&apos;s what you need to know:
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Market Creation Requirements</h3>
          
          <Table 
            headers={['Requirement', 'Description', 'Example']}
            rows={[
              ['Event Description', 'Clear description of what the market predicts', 'Will Bitcoin reach $100,000 by end of 2024?'],
              ['Outcomes', 'Define possible outcomes and comparison types', 'Greater than $100,000, Less than $100,000'],
              ['Timeframe', 'Set betting period and resolution time', 'Betting ends Dec 31, 2024, resolves Jan 1, 2025'],
              ['Oracle Source', 'Choose reliable data source for resolution', 'Pyth Network price feed'],
              ['Initial Stake', 'Minimum stake to create market', '100 USDC'],
            ]}
            compact
          />
        </div>

        <Callout type="warning" title="Market Creation Guidelines">
          Markets should be based on verifiable, objective events. Avoid markets that are 
          subjective or impossible to resolve fairly.
        </Callout>
      </section>

      {/* Code Examples */}
      <section className="doc-section">
        <h2>Integration Examples</h2>
        <p>
          Here are some code examples for developers who want to integrate with Oreka:
        </p>

        <CodeBlock
          title="Connect Wallet"
          language="typescript"
          code={`import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';

function App() {
  return (
    <AptosWalletAdapterProvider>
      <OrekaApp />
    </AptosWalletAdapterProvider>
  );
}`}
        />

        <CodeBlock
          title="Fetch Markets"
          language="typescript"
          code={`async function fetchMarkets() {
  const response = await fetch('/api/markets');
  const markets = await response.json();
  
  return markets.map(market => ({
    id: market.id,
    title: market.title,
    outcomes: market.outcomes,
    status: market.status,
    totalStake: market.totalStake
  }));
}`}
        />
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Now that you understand the basics, here are some recommended next steps:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">Read the Architecture</h3>
            <p className="text-gray-600 mb-4">
              Understand how Oreka&apos;s smart contracts work and the system design
            </p>
            <a href="/architecture" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">Explore Market Types</h3>
            <p className="text-gray-600 mb-4">
              Discover the different types of prediction markets available
            </p>
            <a href="/market-types" className="text-blue-600 hover:text-blue-800 font-medium">
              Explore Markets →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">Developer Resources</h3>
            <p className="text-gray-600 mb-4">
              Access API documentation and integration guides
            </p>
            <a href="/developer-guide" className="text-blue-600 hover:text-blue-800 font-medium">
              View Docs →
            </a>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="doc-section">
        <h2>Need Help?</h2>
        <p>
          If you encounter any issues or have questions, here are some resources:
        </p>
        
        <Callout type="success" title="Support Channels">
          <ul className="space-y-2">
            <li>• <strong>Documentation:</strong> Browse our comprehensive guides</li>
            <li>• <strong>GitHub:</strong> Check issues and contribute to the project</li>
            <li>• <strong>Community:</strong> Join our Discord for discussions</li>
            <li>• <strong>Email:</strong> Contact our support team directly</li>
          </ul>
        </Callout>
      </section>
    </div>
  );
}
