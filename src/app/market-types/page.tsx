import { Callout, CodeBlock, Table } from '@/components/ui';

export default function MarketTypesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Market Types</h1>
        <p className="text-xl text-gray-600">
          Explore the different types of prediction markets available on Oreka
        </p>
      </div>

      {/* Overview */}
      <section className="doc-section">
        <h2>Market Overview</h2>
        <p>
          Oreka supports multiple types of prediction markets, each designed to capture different 
          real-world events and provide users with diverse betting opportunities. Our poly-option 
          system goes beyond traditional binary yes/no markets, offering sophisticated outcome 
          structures and comparison types.
        </p>
        
        <Callout type="info" title="Poly-Option System">
          Unlike traditional binary options, Oreka&apos;s poly-option system allows for multiple 
          outcomes and complex comparison types, enabling more nuanced predictions and better 
          risk management.
        </Callout>
      </section>

      {/* Crypto Markets */}
      <section className="doc-section">
        <h2>Crypto Markets</h2>
        <p>
          Crypto markets are the core offering of Oreka, allowing users to bet on cryptocurrency 
          price movements using real-time oracle data from Pyth Network.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Supported Assets</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Major Cryptocurrencies</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Bitcoin (BTC/USD)</li>
                <li>• Ethereum (ETH/USD)</li>
                <li>• Solana (SOL/USD)</li>
                <li>• Aptos (APT/USD)</li>
                <li>• BNB (BNB/USD)</li>
                <li>• Wrapped ETH (WETH/USD)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Market Features</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Real-time price feeds</li>
                <li>• 24/7 trading availability</li>
                <li>• High liquidity markets</li>
                <li>• Fast settlement times</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Outcome Types</h3>
        <Table 
          headers={['Comparison Type', 'Description', 'Example']}
          rows={[
            ['Greater Than (GT)', 'Price > threshold', 'BTC > $50,000'],
            ['Greater Than or Equal (GTE)', 'Price >= threshold', 'ETH >= $3,000'],
            ['Less Than (LT)', 'Price < threshold', 'SOL < $100'],
            ['Less Than or Equal (LTE)', 'Price <= threshold', 'APT <= $10'],
            ['Inclusive Range', 'Min <= Price <= Max', '$45,000 <= BTC <= $55,000'],
            ['Open Range', 'Min < Price < Max', '$45,000 < BTC < $55,000'],
          ]}
        />

        <Callout type="tip" title="Price Precision">
          All crypto prices use 9-decimal precision for accurate calculations. Threshold values 
          are specified in the smallest unit (e.g., satoshis for BTC).
        </Callout>
      </section>

      {/* Sports Markets */}
      <section className="doc-section">
        <h2>Sports Markets</h2>
        <p>
          Sports markets allow users to bet on real-world sporting events, from major league 
          games to international tournaments. These markets are resolved using official sports 
          data APIs.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Sports Categories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Team Sports</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Football (NFL, Premier League)</li>
                <li>• Basketball (NBA, EuroLeague)</li>
                <li>• Baseball (MLB)</li>
                <li>• Soccer (World Cup, Champions League)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Individual Sports</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Tennis (Grand Slams)</li>
                <li>• Golf (Masters, PGA Championship)</li>
                <li>• Boxing & MMA</li>
                <li>• Athletics (Olympics)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Market Types</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Match winners</li>
                <li>• Score predictions</li>
                <li>• Player performance</li>
                <li>• Tournament outcomes</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Data Sources</h3>
        <p>
          Sports markets are resolved using official data from TheSportsDB API, ensuring 
          accurate and reliable outcomes. Data includes:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• Official game results and scores</li>
          <li>• Player statistics and performance metrics</li>
          <li>• Tournament brackets and standings</li>
          <li>• Real-time game updates</li>
        </ul>
      </section>

      {/* News Markets */}
      <section className="doc-section">
        <h2>News Markets</h2>
        <p>
          News markets allow users to bet on the outcome of real-world events, political 
          decisions, and other newsworthy occurrences. These markets aggregate collective 
          intelligence to predict future events.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">News Categories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Political Events</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Election outcomes</li>
                <li>• Policy decisions</li>
                <li>• Legislative votes</li>
                <li>• International agreements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Economic Events</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Central bank decisions</li>
                <li>• Economic indicators</li>
                <li>• Corporate earnings</li>
                <li>• Market regulations</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Binary Outcomes</h3>
        <p>
          News markets typically use binary outcomes (Yes/No) for simplicity and clarity. 
          Examples include:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• &quot;Will the Federal Reserve raise interest rates in Q3 2024?&quot;</li>
          <li>• &quot;Will Company X announce a merger by year-end?&quot;</li>
          <li>• &quot;Will Country Y sign the trade agreement?&quot;</li>
        </ul>

        <Callout type="warning" title="Event Verification">
          News markets require clear, verifiable outcomes. Events must be objective and 
          resolvable using reliable sources like Guardian API or official announcements.
        </Callout>
      </section>

      {/* Market Creation Examples */}
      <section className="doc-section">
        <h2>Market Creation Examples</h2>
        <p>
          Here are examples of how to create different types of markets on Oreka:
        </p>

        <CodeBlock
          title="Crypto Market Creation"
          language="typescript"
          code={`// Create a BTC price prediction market
const createBTCMarket = async () => {
  const outcomes = [
    {
      index: 0,
      comparison_type: 1, // GT (Greater Than)
      threshold1: 50000000000, // $50,000 in satoshis
      threshold2: 0,
      description: "BTC > $50,000",
      is_active: true
    },
    {
      index: 1,
      comparison_type: 3, // LT (Less Than)
      threshold1: 50000000000, // $50,000 in satoshis
      threshold2: 0,
      description: "BTC < $50,000",
      is_active: true
    }
  ];

  const payload = {
    function: \`\${OREKA_ADDRESS}::crypto_market::create_market\`,
    type_arguments: [],
    arguments: [
      "BTC", // asset symbol
      outcomes,
      Math.floor(Date.now() / 1000), // open time
      Math.floor(Date.now() / 1000) + 86400 // lock time (24 hours)
    ]
  };
  
  return await signAndSubmitTransaction(payload);
};`}
        />

        <CodeBlock
          title="Sports Market Creation"
          language="typescript"
          code={`// Create a sports market for NBA game
const createSportsMarket = async () => {
  const outcomes = [
    {
      index: 0,
      description: "Team A wins",
      is_active: true
    },
    {
      index: 1,
      description: "Team B wins",
      is_active: true
    }
  ];

  // Sports markets use different contract
  const payload = {
    function: \`\${OREKA_ADDRESS}::sports_market::create_market\`,
    type_arguments: [],
    arguments: [
      "NBA_Game_123", // event ID
      outcomes,
      "2024-12-31T23:59:59Z", // game time
      "TheSportsDB" // data source
    ]
  };
  
  return await signAndSubmitTransaction(payload);
};`}
        />
      </section>

      {/* Market Resolution */}
      <section className="doc-section">
        <h2>Market Resolution</h2>
        <p>
          All markets on Oreka are automatically resolved using trusted oracle data sources. 
          The resolution process ensures fairness and accuracy.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Resolution Process</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                1
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Market Lock</h4>
                <p className="text-gray-600 text-sm">
                  At the specified lock time, the market closes and no more bets can be placed.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                2
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Oracle Query</h4>
                <p className="text-gray-600 text-sm">
                  Smart contracts automatically query the appropriate oracle for outcome data.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                3
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Outcome Determination</h4>
                <p className="text-gray-600 text-sm">
                  The winning outcome is determined based on oracle data and market rules.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                4
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Reward Distribution</h4>
                <p className="text-gray-600 text-sm">
                  Winners can claim their rewards, and fees are distributed to owners and treasury.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="doc-section">
        <h2>Best Practices</h2>
        <p>
          Follow these guidelines to create successful and fair prediction markets:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Market Creation</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Use clear, unambiguous descriptions</li>
              <li>• Set reasonable timeframes for resolution</li>
              <li>• Choose reliable oracle data sources</li>
              <li>• Consider market liquidity and interest</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Risk Management</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Diversify across different market types</li>
              <li>• Don&apos;t bet more than you can afford to lose</li>
              <li>• Research events before placing bets</li>
              <li>• Monitor market conditions and odds</li>
            </ul>
          </div>
        </div>

        <Callout type="success" title="Community Guidelines">
          Oreka markets thrive on community participation. Create markets that interest 
          other users and contribute to the collective intelligence of the platform.
        </Callout>
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Now that you understand the different market types, explore these related topics:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">How It Works</h3>
            <p className="text-gray-600 mb-4">
              Learn about the complete market lifecycle from creation to resolution
            </p>
            <a href="/how-it-works" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
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
