'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import AIChatBox from '../AIChatBox';

export default function DocumentationLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{
    title: string;
    href: string;
    section: string;
    excerpt: string;
  }>>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Force client-side only rendering
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      setMounted(true);
    });
    
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Search functionality
  const handleSearch = async (query: string) => {
    if (query.length < 2) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    setIsSearching(true);
    // Simulate search through documentation content
    // In a real implementation, this would search through all pages
    const mockResults = [
      { title: 'What is Oreka?', href: '/', section: 'Get Started', excerpt: 'Oreka is a professional, real-time decentralized binary options trading platform...' },
      { title: 'Poly-Option System', href: '/', section: 'Get Started', excerpt: 'Advanced binary options with multiple outcomes and comparison types...' },
      { title: 'Smart Contracts', href: '/architecture/smart-contracts', section: 'Architecture', excerpt: 'Move smart contracts for market logic and settlement...' },
      { title: 'Oracle Integration', href: '/architecture/oracles', section: 'Architecture', excerpt: 'Real-time price feeds from trusted oracles...' },
      { title: 'USDC Payments', href: '/architecture/payments', section: 'Architecture', excerpt: 'Support for both USDC and APT payments...' },
    ].filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.excerpt.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(mockResults);
    setShowSearchResults(true);
    setIsSearching(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSearchResults(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Safe pathname check with proper highlighting logic
  const isActive = (href: string): boolean => {
    if (!mounted || !pathname) return false;
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Show loading until fully mounted on client
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-6"></div>
          <div className="text-xl font-semibold text-gray-700 mb-2">Loading Oreka Documentation</div>
          <div className="text-gray-500">Preparing your decentralized trading experience...</div>
        </div>
      </div>
    );
  }

  const navigation = [
    {
      title: 'Get Started',
      items: [
        { name: 'What is Oreka?', href: '/', description: 'Introduction to Oreka' },
        { name: 'How to Sign-Up', href: '/getting-started', description: 'Quick start guide' },
        { name: 'How to Deposit', href: '/getting-started/deposit', description: 'Funding your account' },
        { name: 'Making Your First Trade', href: '/getting-started/first-trade', description: 'Start trading' },
      ]
    },
    {
      title: 'Deposits and Withdrawals',
      items: [
        { name: 'Deposit by Transferring Crypto', href: '/deposits/crypto', description: 'Direct crypto deposits' },
        { name: 'Deposit with Coinbase', href: '/deposits/coinbase', description: 'Coinbase integration' },
        { name: 'Deposit Using Your Card', href: '/deposits/card', description: 'Card payments' },
        { name: 'Deposit USDC on Aptos', href: '/deposits/usdc', description: 'USDC deposits' },
        { name: 'Large Cross Chain Deposits', href: '/deposits/cross-chain', description: 'Cross-chain transfers' },
        { name: 'How to Withdraw', href: '/withdrawals', description: 'Withdrawal process' },
      ]
    },
    {
      title: 'Markets',
      items: [
        { name: 'How Are Markets Created?', href: '/markets/creation', description: 'Market creation process' },
        { name: 'How Are Prices Calculated?', href: '/markets/pricing', description: 'Price calculation logic' },
        { name: 'How Are Binary Options Resolved?', href: '/markets/resolution', description: 'Market resolution' },
        { name: 'How Are Markets Clarified?', href: '/markets/clarification', description: 'Market clarification' },
        { name: 'How Are Markets Disputed?', href: '/markets/disputes', description: 'Dispute resolution' },
      ]
    },
    {
      title: 'Trading',
      items: [
        { name: 'Limit Orders', href: '/trading/limit-orders', description: 'Limit order types' },
        { name: 'Market Orders', href: '/trading/market-orders', description: 'Market order execution' },
        { name: 'Holding Rewards', href: '/trading/holding-rewards', description: 'Reward system' },
        { name: 'Liquidity Rewards', href: '/trading/liquidity-rewards', description: 'Liquidity incentives' },
        { name: 'Trading Fees', href: '/trading/fees', description: 'Fee structure' },
        { name: 'Trading Limits', href: '/trading/limits', description: 'Platform limits' },
        { name: 'Using the Order Book', href: '/trading/orderbook', description: 'Order book usage' },
      ]
    },
    {
      title: 'Architecture',
      items: [
        { name: 'System Overview', href: '/architecture/overview', description: 'High-level architecture' },
        { name: 'Smart Contracts', href: '/architecture/smart-contracts', description: 'Move contract details' },
        { name: 'Oracle Integration', href: '/architecture/oracles', description: 'Data sources' },
        { name: 'Payment System', href: '/architecture/payments', description: 'USDC & APT handling' },
        { name: 'Reward System', href: '/architecture/rewards', description: 'ORK token mechanics' },
      ]
    },
    {
      title: 'Developer Guide',
      items: [
        { name: 'API Overview', href: '/developer-guide/api', description: 'API documentation' },
        { name: 'Smart Contract Integration', href: '/developer-guide/contracts', description: 'Contract integration' },
        { name: 'Frontend Usage', href: '/developer-guide/frontend', description: 'Frontend integration' },
        { name: 'SDK Examples', href: '/developer-guide/sdk', description: 'Code examples' },
      ]
    },
    {
      title: 'FAQs',
      items: [
        { name: 'How To Use Embeds', href: '/faqs/embeds', description: 'Embedding markets' },
        { name: 'Oreka vs. Traditional Options', href: '/faqs/comparison', description: 'Platform comparison' },
        { name: 'Recover Missing Deposit', href: '/faqs/recovery', description: 'Deposit recovery' },
        { name: 'Can I Sell Early?', href: '/faqs/early-exit', description: 'Early position closure' },
        { name: 'Does Oreka Have a Token?', href: '/faqs/ork-token', description: 'ORK token details' },
        { name: 'Does Oreka have an API?', href: '/faqs/api-availability', description: 'API access' },
        { name: 'How Do I Contact Support?', href: '/faqs/support', description: 'Support channels' },
        { name: 'How Do I Export My Key?', href: '/faqs/key-export', description: 'Key management' },
        { name: 'Is My Money Safe?', href: '/faqs/security', description: 'Security measures' },
        { name: 'Is Oreka The House?', href: '/faqs/house-edge', description: 'No house edge' },
        { name: 'Why Aptos?', href: '/faqs/why-aptos', description: 'Blockchain choice' },
        { name: 'What is a Binary Option?', href: '/faqs/binary-options', description: 'Binary options explained' },
      ]
    }
  ];

  // Get page navigation for "On This Page" sidebar
  const getPageNavigation = () => {
    if (pathname === '/') {
      return [
        { name: 'Quick Overview', href: '#quick-overview' },
        { name: 'Understanding Prices', href: '#understanding-prices' },
        { name: 'Making Money on Markets', href: '#making-money' },
        { name: 'How Accurate are Oreka Odds?', href: '#accuracy' },
        { name: 'Key Features', href: '#key-features' },
      ];
    }
    
    if (pathname === '/getting-started/deposit') {
      return [
        { name: 'Deposit by Transferring Crypto', href: '#crypto' },
        { name: 'Deposit with Coinbase', href: '#coinbase' },
        { name: 'Deposit Using Your Card', href: '#card' },
        { name: 'Deposit USDC on Aptos', href: '#usdc' },
        { name: 'Large Cross Chain Deposits', href: '#cross-chain' },
      ];
    }
    
    // Default navigation for other pages
    return [
      { name: 'Introduction', href: '#introduction' },
      { name: 'Getting Started', href: '#getting-started' },
      { name: 'Features', href: '#features' },
      { name: 'Examples', href: '#examples' },
    ];
  };

  const pageNavigation = getPageNavigation();

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar - Polymarket Style */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <span className="text-white font-bold text-sm">O</span>
                </div>
                <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">Oreka</span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8 relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSearchResults(true)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200"
                />
                {isSearching && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
                  </div>
                )}
              </div>

              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-96 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <Link
                      key={index}
                      href={result.href}
                      className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                      onClick={() => {
                        setShowSearchResults(false);
                        setSearchQuery('');
                      }}
                    >
                      <div className="font-medium text-gray-900">{result.title}</div>
                      <div className="text-sm text-blue-600 mb-1">{result.section}</div>
                      <div className="text-sm text-gray-600 line-clamp-2">{result.excerpt}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2 rounded-md hover:bg-gray-100">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              
              <Link
                href="https://oreka-apt.vercel.app"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105"
              >
                Main Site →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar - Enhanced Polymarket Style */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-80 bg-gradient-to-b from-gray-50 to-white border-r border-gray-200 shadow-lg">
            {/* Sidebar Header */}
            <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
              <div className="flex-1 flex flex-col pt-6 pb-4">
                <nav className="mt-2 flex-1 px-3 space-y-1">
                  {navigation.map((section) => (
                    <div key={section.title} className="mb-8">
                      <h3 className="px-3 text-xs font-bold text-gray-600 uppercase tracking-wider mb-4 bg-gray-100 py-2 rounded-lg text-center">
                        {section.title}
                      </h3>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md ${
                              isActive(item.href)
                                ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-r-4 border-blue-600 shadow-sm'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1'
                            }`}
                          >
                            <div className="flex-1">
                              <div className="font-semibold">{item.name}</div>
                              <div className={`text-xs mt-1 ${isActive(item.href) ? 'text-blue-600' : 'text-gray-500'}`}>
                                {item.description}
                              </div>
                            </div>
                            {isActive(item.href) && (
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Sidebar Footer */}
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">O</span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">Oreka Documentation</p>
                  <p className="text-xs text-gray-500">Decentralized Binary Options</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gradient-to-b from-gray-50 to-white">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <nav className="mt-5 px-3 space-y-1">
                  {navigation.map((section) => (
                    <div key={section.title} className="mb-6">
                      <h3 className="px-3 text-xs font-bold text-gray-600 uppercase tracking-wider mb-3 bg-gray-100 py-2 rounded-lg text-center">
                        {section.title}
                      </h3>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                              isActive(item.href)
                                ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-r-4 border-blue-600'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                            onClick={() => setSidebarOpen(false)}
                          >
                            <div className="flex-1">
                              <div className="font-semibold">{item.name}</div>
                              <div className={`text-xs mt-1 ${isActive(item.href) ? 'text-blue-600' : 'text-gray-500'}`}>
                                {item.description}
                              </div>
                            </div>
                            {isActive(item.href) && (
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Mobile Header */}
          <div className="lg:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Page Content with Smooth Transitions */}
          <main className="flex-1">
            <div className="py-6 animate-fadeIn">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>

        {/* Right Sidebar - On This Page */}
        <div className="hidden xl:flex xl:flex-shrink-0">
          <div className="flex flex-col w-64 bg-gradient-to-b from-gray-50 to-white border-l border-gray-200 shadow-lg">
            <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
              <div className="flex-1 flex flex-col pt-6 pb-4">
                <div className="px-4 mb-6">
                  <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider bg-gray-100 py-2 rounded-lg text-center">
                    On this page
                  </h3>
                </div>
                <nav className="flex-1 px-3 space-y-1">
                  {pageNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1"
                    >
                      <div className="flex-1">
                        <div className="font-semibold">{item.name}</div>
                      </div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Chat Box */}
      <AIChatBox />
    </div>
  );
}
