import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          What is Oreka?
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Oreka is a professional, real-time decentralized binary options trading platform built on the Aptos blockchain. 
          Unlike traditional binary options, Oreka features a sophisticated poly-option system with multiple outcomes 
          and comparison types, enabling more nuanced predictions and better risk management.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Studies show prediction markets are often more accurate than traditional analysis because they combine 
          real-time data, market sentiment, and expert opinions into a single value that represents the market&apos;s 
          view of an event&apos;s probability. Our markets reflect <strong>accurate, unbiased, and real-time probabilities</strong> 
          for the events that matter most to you. <strong>Markets seek truth.</strong>
        </p>
      </div>

      {/* Quick Overview */}
      <div className="mb-12" id="quick-overview">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Overview</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <span>
              On Oreka, you can <strong>buy and sell shares</strong> representing future event outcomes 
              (i.e., &ldquo;Will BTC/USD be above $50,000 by December 31st?&rdquo;)
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <span>
              Shares in event outcomes are <strong>always priced</strong> between 0.00 and 1.00 USDC, 
              and every pair of event outcomes (i.e., each pair of &ldquo;YES&rdquo; + &ldquo;NO&rdquo; shares) is fully 
              collateralized by $1.00 USDC.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <span>
              Shares are created when <strong>opposing sides come to an agreement on odds</strong>, 
              such that the sum of what each side is willing to pay is equal to $1.00.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <span>
              The shares representing the <strong>correct, final outcome</strong> are paid out $1.00 USDC 
              each upon <strong>market resolution</strong>.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <span>
              Unlike traditional options, you are not betting against &ldquo;the house&rdquo; – the counterparty 
              to each trade is another Oreka user. As such:
            </span>
          </li>
          <li className="ml-6 mt-2">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">◦</span>
                <span>
                  Shares can be sold before the event outcome is known (i.e., to lock in profits or cut losses)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">◦</span>
                <span>
                  There is no &ldquo;house&rdquo; to ban you for winning too much
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Understanding Prices */}
      <div className="mb-12" id="understanding-prices">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Prices</h2>
        <p className="text-gray-700 mb-4">
          <strong>Prices = Probabilities.</strong> <em>Prices (odds) on Oreka represent the current probability 
          of an event occurring.</em> For example, in a market predicting whether BTC/USD will be above $50,000 
          by December 31st, if YES shares are trading at 18 cents, it indicates an 18% chance of BTC being 
          above $50,000 by that date.
        </p>
        <p className="text-gray-700">
          These odds are determined by what price other Oreka users are currently willing to buy & sell those 
          shares at. Just as stock exchanges don&apos;t &ldquo;set&rdquo; the prices of stocks, Oreka does not set prices/odds 
          - they&apos;re a function of supply & demand. <Link href="/markets/pricing" className="text-blue-600 hover:text-blue-800 underline">Learn more →</Link>
        </p>
      </div>

      {/* Making Money on Markets */}
      <div className="mb-12" id="making-money">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Making Money on Markets</h2>
        <p className="text-gray-700 mb-4">
          In the example above, if you believe BTC&apos;s chances of being above $50,000 are higher than 18%, 
          you would buy &ldquo;Yes&rdquo; shares at 18 cents each. If BTC does reach that price, each &ldquo;Yes&rdquo; share would 
          be worth $1, resulting in an 82-cent profit per share.
        </p>
        <p className="text-gray-700 mb-4">
          Conversely, any trader who owned &ldquo;No&rdquo; shares would see their investment become worthless once 
          the market resolves. Since it&apos;s a market, you&apos;re not locked into your trade. You can sell your 
          shares at any time at the current market price.
        </p>
        <p className="text-gray-700">
          As news changes and market conditions evolve, the supply and demand for shares fluctuates, 
          causing the share price to reflect the new odds for the event.
        </p>
      </div>

      {/* How Accurate are Oreka Odds? */}
      <div className="mb-12" id="accuracy">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Accurate are Oreka Odds?</h2>
        <p className="text-gray-700 mb-4">
          Research shows prediction markets are often more accurate than experts, polls, and pundits. 
          Traders aggregate real-time data, market sentiment, and expert opinions, making informed trades 
          based on their knowledge and analysis.
        </p>
        <p className="text-gray-700 mb-4">
          Their economic incentives ensure market prices adjust to reflect true odds as more knowledgeable 
          participants join. This makes prediction markets the best source of real-time event probabilities.
        </p>
        <p className="text-gray-700">
          People use Oreka for the most accurate odds, gaining the ability to make informed decisions about 
          the future. If you&apos;re an expert on a certain topic, Oreka is your opportunity to profit from trading 
          based on your knowledge, while improving the market&apos;s accuracy.
        </p>
      </div>

      {/* Key Features */}
      <div className="mb-12" id="key-features">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Poly-Option System</h3>
            <p className="text-gray-700">
              Advanced binary options with multiple outcomes and comparison types (greater than, less than, 
              ranges) instead of simple yes/no predictions.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-Time Oracle Data</h3>
            <p className="text-gray-700">
              Live price feeds from trusted oracles including Pyth Network, ensuring accurate and 
              up-to-date market information.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Multi-Token Support</h3>
            <p className="text-gray-700">
              Trade on APT, BTC, ETH, SOL, SUI, BNB, WETH, and more with support for both USDC and APT payments.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Instant Settlement</h3>
            <p className="text-gray-700">
              Automatic payouts and fee distribution on market resolution with no manual intervention required.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Join the future of decentralized binary options trading on Aptos. Create markets, place bets, 
          and earn rewards with professional-grade infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/getting-started"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            How to Sign-Up
          </Link>
          <Link
            href="/getting-started/first-trade"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Making Your First Trade
          </Link>
        </div>
      </div>
    </div>
  );
}
