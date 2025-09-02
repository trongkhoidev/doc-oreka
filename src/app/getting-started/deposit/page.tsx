import React from 'react';
import Link from 'next/link';

export default function DepositPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          How to Deposit
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Learn how to fund your Oreka account using various payment methods including crypto transfers, 
          Coinbase integration, card payments, and USDC deposits on Aptos.
        </p>
      </div>

      {/* Deposit Methods */}
      <div className="space-y-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Deposit by Transferring Crypto</h2>
          <p className="text-gray-700 mb-4">
            Transfer cryptocurrencies directly from your external wallet to your Oreka account. 
            Supported tokens include APT, BTC, ETH, SOL, SUI, BNB, and WETH.
          </p>
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-900 mb-2">Steps:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Connect your Aptos wallet to Oreka</li>
              <li>Navigate to the Deposit section</li>
              <li>Select the cryptocurrency you want to deposit</li>
              <li>Copy the deposit address or scan the QR code</li>
              <li>Send the funds from your external wallet</li>
              <li>Wait for blockchain confirmation (usually 1-2 minutes)</li>
            </ol>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Deposit with Coinbase</h2>
          <p className="text-gray-700 mb-4">
            Use Coinbase&apos;s integration to purchase and deposit cryptocurrencies directly to your Oreka account.
          </p>
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="font-semibold text-blue-900 mb-2">Benefits:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Instant purchases with fiat currency</li>
              <li>Seamless integration with Coinbase</li>
              <li>Lower fees for Coinbase users</li>
              <li>Direct transfer to Oreka</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Deposit Using Your Card</h2>
          <p className="text-gray-700 mb-4">
            Purchase cryptocurrencies using your credit or debit card and deposit them directly to Oreka.
          </p>
          <div className="bg-green-50 p-4 rounded-md">
            <h3 className="font-semibold text-green-900 mb-2">Supported Cards:</h3>
            <ul className="list-disc list-inside space-y-1 text-green-800">
              <li>Visa and Mastercard</li>
              <li>American Express</li>
              <li>Most major debit cards</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Deposit USDC on Aptos</h2>
          <p className="text-gray-700 mb-4">
            USDC is the primary stablecoin on Oreka, providing price stability for traders.
          </p>
          <div className="bg-purple-50 p-4 rounded-md">
            <h3 className="font-semibold text-purple-900 mb-2">USDC Advantages:</h3>
            <ul className="list-disc list-inside space-y-1 text-purple-800">
              <li>1:1 USD peg for stable value</li>
              <li>Widely accepted across DeFi</li>
              <li>Fast transfers on Aptos</li>
              <li>Circle-backed stability</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Large Cross Chain Deposits</h2>
          <p className="text-gray-700 mb-4">
            Transfer large amounts of cryptocurrencies from other blockchains to Aptos for use on Oreka.
          </p>
          <div className="bg-orange-50 p-4 rounded-md">
            <h3 className="font-semibold text-orange-900 mb-2">Supported Chains:</h3>
            <ul className="list-disc list-inside space-y-1 text-orange-800">
              <li>Ethereum (ETH, USDC, WETH)</li>
              <li>Solana (SOL, USDC)</li>
              <li>Binance Smart Chain (BNB, USDC)</li>
              <li>Polygon (MATIC, USDC)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Trading?</h2>
        <p className="text-gray-700 mb-6">
          Now that you know how to deposit funds, learn how to make your first trade on Oreka.
        </p>
        <Link
          href="/getting-started/first-trade"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          Making Your First Trade →
        </Link>
      </div>
    </div>
  );
}
