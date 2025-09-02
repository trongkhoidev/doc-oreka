import { Callout, Step, CodeBlock } from '@/components/ui';

export default function GettingStartedUsersPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started for Users</h1>
        <p className="text-xl text-gray-600">
          Complete guide to start trading on Oreka prediction markets
        </p>
      </div>

      {/* Overview */}
      <section className="doc-section">
        <h2>Welcome to Oreka</h2>
        <p>
          Oreka is a decentralized prediction market platform where you can bet on real-world 
          events using cryptocurrency. Whether you&apos;re predicting crypto prices, sports outcomes, 
          or news events, Oreka provides a transparent and fair way to test your knowledge.
        </p>
        
        <Callout type="info" title="What You&apos;ll Learn">
          This guide will walk you through setting up your wallet, exploring markets, 
          placing bets, and claiming rewards on Oreka.
        </Callout>
      </section>

      {/* Prerequisites */}
      <section className="doc-section">
        <h2>Prerequisites</h2>
        <p>
          Before you can start trading on Oreka, you&apos;ll need a few things set up:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Aptos Wallet</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Petra (Official Aptos wallet)</li>
              <li>• Martian Wallet</li>
              <li>• Pontem Wallet</li>
              <li>• Blocto Wallet</li>
              <li>• Any AIP-62 compatible wallet</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Cryptocurrency</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• APT tokens for gas fees</li>
              <li>• USDC for betting (recommended)</li>
              <li>• Or APT for betting</li>
              <li>• Minimum 10 APT for gas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step-by-Step Setup */}
      <section className="doc-section">
        <h2>Step-by-Step Setup</h2>
        <p>
          Follow these steps to get started with Oreka:
        </p>

        <Step number={1} title="Install and Set Up Your Wallet">
          <p>
            Choose and install an Aptos wallet. We recommend Petra as it&apos;s the official 
            Aptos wallet with the best user experience.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Petra Wallet Setup:</h4>
            <ol className="text-gray-600 text-sm space-y-1 list-decimal list-inside">
              <li>Visit <a href="https://petra.app" className="text-blue-600 hover:underline">petra.app</a></li>
              <li>Download the browser extension</li>
              <li>Create a new wallet or import existing</li>
              <li>Write down your seed phrase securely</li>
              <li>Set a strong password</li>
            </ol>
          </div>
        </Step>

        <Step number={2} title="Get Testnet Tokens (Optional)">
          <p>
            If you want to test the platform first, you can get free testnet tokens 
            to practice without real money.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Testnet Faucet:</h4>
            <ol className="text-gray-600 text-sm space-y-1 list-decimal list-inside">
              <li>Switch your wallet to Aptos Devnet</li>
              <li>Visit the <a href="https://aptoslabs.com/testnet-faucet" className="text-blue-600 hover:underline">Aptos Testnet Faucet</a></li>
              <li>Connect your wallet</li>
              <li>Request test APT tokens</li>
              <li>Wait for confirmation</li>
            </ol>
          </div>
        </Step>

        <Step number={3} title="Add Funds to Your Wallet">
          <p>
            Transfer real cryptocurrency to your wallet for live trading. You&apos;ll need 
            both APT for gas fees and USDC for betting.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Funding Options:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• <strong>Centralized Exchanges:</strong> Buy APT/USDC and withdraw to your wallet</li>
              <li>• <strong>DEXs:</strong> Swap other tokens for APT/USDC</li>
              <li>• <strong>Bridges:</strong> Transfer from other blockchains</li>
              <li>• <strong>Fiat Onramps:</strong> Direct purchase with credit card</li>
            </ul>
          </div>
        </Step>

        <Step number={4} title="Connect to Oreka" isLast>
          <p>
            Visit the Oreka platform and connect your wallet to start exploring markets.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Connection Process:</h4>
            <ol className="text-gray-600 text-sm space-y-1 list-decimal list-inside">
              <li>Go to <a href="https://oreka.com" className="text-blue-600 hover:underline">oreka.com</a></li>
              <li>Click &quot;Connect Wallet&quot; button</li>
              <li>Select your wallet from the list</li>
              <li>Approve the connection in your wallet</li>
              <li>Verify your wallet address is displayed</li>
            </ol>
          </div>
        </Step>
      </section>

      {/* Exploring Markets */}
      <section className="doc-section">
        <h2>Exploring Markets</h2>
        <p>
          Once connected, you can browse and analyze available prediction markets to 
          find opportunities that match your knowledge and interests.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Market Categories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Crypto Markets</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Bitcoin price predictions</li>
                <li>• Ethereum milestones</li>
                <li>• Altcoin performance</li>
                <li>• Market cap targets</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Sports Markets</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Game outcomes</li>
                <li>• Player performance</li>
                <li>• Tournament results</li>
                <li>• Season predictions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">News Markets</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Political events</li>
                <li>• Economic indicators</li>
                <li>• Corporate news</li>
                <li>• Policy decisions</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Market Information</h3>
        <p>
          Each market displays important information to help you make informed decisions:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Market Question:</strong> What you&apos;re predicting</li>
          <li>• <strong>Outcomes:</strong> Possible results and current odds</li>
          <li>• <strong>Total Stake:</strong> Amount of money in the market</li>
          <li>• <strong>Participants:</strong> Number of people betting</li>
          <li>• <strong>Time Remaining:</strong> When betting closes</li>
          <li>• <strong>Oracle Source:</strong> How the outcome will be determined</li>
        </ul>
      </section>

      {/* Placing Bets */}
      <section className="doc-section">
        <h2>Placing Your First Bet</h2>
        <p>
          Once you&apos;ve found a market you want to bet on, follow these steps to place your bet:
        </p>

        <Step number={1} title="Select Market and Outcome">
          <p>
            Choose the market you want to bet on and select which outcome you think 
            will happen.
          </p>
        </Step>

        <Step number={2} title="Enter Bet Amount">
          <p>
            Decide how much you want to bet. Remember that you can lose this amount 
            if your prediction is wrong.
          </p>
        </Step>

        <Step number={3} title="Review Odds and Potential Payout">
          <p>
            Check the current odds and calculate your potential payout if you win. 
            Higher odds mean higher potential returns but lower probability of winning.
          </p>
        </Step>

        <Step number={4} title="Confirm Transaction" isLast>
          <p>
            Review all details and confirm the transaction in your wallet. You&apos;ll 
            need to pay a small gas fee in APT.
          </p>
        </Step>

        <Callout type="warning" title="Important Reminders">
          <ul className="text-sm space-y-1">
            <li>• Only bet what you can afford to lose</li>
            <li>• Research markets before betting</li>
            <li>• Understand that odds can change</li>
            <li>• Keep track of your active bets</li>
          </ul>
        </Callout>
      </section>

      {/* Managing Positions */}
      <section className="doc-section">
        <h2>Managing Your Positions</h2>
        <p>
          After placing bets, you can monitor your positions and manage your portfolio 
          through the Oreka interface.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Active Bets</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• View all your current bets</li>
              <li>• Track potential winnings</li>
              <li>• Monitor market status</li>
              <li>• Check time remaining</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Portfolio Overview</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Total invested amount</li>
              <li>• Current portfolio value</li>
              <li>• Performance metrics</li>
              <li>• Historical results</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Tracking Performance</h3>
        <p>
          Oreka provides comprehensive tools to track your betting performance:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Win/Loss Ratio:</strong> Track your prediction accuracy</li>
          <li>• <strong>Profit/Loss:</strong> Monitor your financial performance</li>
          <li>• <strong>Market Analysis:</strong> See which types of markets you excel at</li>
          <li>• <strong>Historical Data:</strong> Review your betting history</li>
        </ul>
      </section>

      {/* Claiming Rewards */}
      <section className="doc-section">
        <h2>Claiming Your Rewards</h2>
        <p>
          When markets resolve, winners can claim their rewards. The process is 
          automatic and secure.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Reward Process</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                1
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Market Resolution</h4>
                <p className="text-gray-600 text-sm">
                  Oracle determines the winning outcome based on real-world data
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                2
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Automatic Calculation</h4>
                <p className="text-gray-600 text-sm">
                  Smart contracts calculate payouts for all winners
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                3
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Claim Available</h4>
                <p className="text-gray-600 text-sm">
                  Winners can claim their rewards immediately
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                4
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Withdraw to Wallet</h4>
                <p className="text-gray-600 text-sm">
                  Rewards are transferred to your connected wallet
                </p>
              </div>
            </div>
          </div>
        </div>

        <Callout type="tip" title="Claiming Tips">
          <ul className="text-sm space-y-1">
            <li>• Check your portfolio regularly for resolved markets</li>
            <li>• Claim rewards promptly to avoid delays</li>
            <li>• Keep some APT in your wallet for gas fees</li>
            <li>• Verify transaction confirmations</li>
          </ul>
        </Callout>
      </section>

      {/* Best Practices */}
      <section className="doc-section">
        <h2>Best Practices for Success</h2>
        <p>
          Follow these guidelines to improve your prediction market experience and 
          increase your chances of success.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Research & Analysis</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Research markets thoroughly before betting</li>
              <li>• Use multiple information sources</li>
              <li>• Consider historical data and trends</li>
              <li>• Stay updated on relevant news</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Risk Management</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Never bet more than you can afford to lose</li>
              <li>• Diversify across different market types</li>
              <li>• Set betting limits and stick to them</li>
              <li>• Don&apos;t chase losses with bigger bets</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Learning Resources</h3>
        <p>
          Continue learning about prediction markets and improving your skills:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Market Types:</strong> Learn about different prediction market categories</li>
          <li>• <strong>How It Works:</strong> Understand the technical aspects of the platform</li>
          <li>• <strong>Community:</strong> Join discussions with other traders</li>
          <li>• <strong>Analytics:</strong> Use platform tools to analyze your performance</li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Now that you understand the basics, explore these additional topics:
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
            <h3 className="text-lg font-semibold mb-2">How It Works</h3>
            <p className="text-gray-600 mb-4">
              Deep dive into the technical aspects of Oreka
            </p>
            <a href="/how-it-works" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
