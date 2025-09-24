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
          Oreka is an open-source telephony recording and retrieval system designed for enterprise environments. 
          It provides comprehensive call recording capabilities with advanced search, storage, and management features, 
          making it the ideal solution for call centers, financial institutions, healthcare providers, and any organization 
          requiring reliable call recording and compliance.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Built with enterprise-grade reliability and scalability, Oreka supports multiple telephony protocols, 
          advanced audio codecs, and provides a web-based interface for easy management. Whether you need to 
          record calls for quality assurance, compliance requirements, or training purposes, Oreka delivers 
          <strong>professional-grade recording capabilities</strong> with <strong>enterprise-level security and performance</strong>.
        </p>
      </div>

      {/* Quick Overview */}
      <div className="mb-12" id="quick-overview">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Overview</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <span>
              <strong>Multi-Protocol Support</strong>: Records calls from SIP, RTP, and other telephony protocols
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <span>
              <strong>Advanced Codec Support</strong>: Handles G.711, G.722, G.729, Opus, AMR, and more
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <span>
              <strong>Scalable Architecture</strong>: Distributed recording across multiple servers for high availability
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <span>
              <strong>Web-Based Management</strong>: Intuitive interface for administrators and users to manage recordings
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <span>
              <strong>Compliance Ready</strong>: Built-in features for regulatory compliance and audit requirements
            </span>
          </li>
        </ul>
      </div>

      {/* Core Components */}
      <div className="mb-12" id="core-components">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Components</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">OrkAudio</h3>
            <p className="text-gray-700">
              The recording engine that captures audio streams from telephony systems. Handles real-time 
              audio processing, codec conversion, and storage optimization.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">OrkTrack</h3>
            <p className="text-gray-700">
              Metadata management system that tracks call information, caller details, duration, 
              quality metrics, and provides search capabilities.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">OrkWeb</h3>
            <p className="text-gray-700">
              Web-based user interface for managing recordings, searching call history, 
              and accessing system administration features.
            </p>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-12" id="use-cases">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Use Oreka?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Centers</h3>
            <p className="text-gray-700">
              Quality monitoring, agent training, and performance evaluation with comprehensive 
              call recording and analysis capabilities.
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Institutions</h3>
            <p className="text-gray-700">
              Compliance and audit requirements, regulatory reporting, and risk management 
              with secure, tamper-proof recording storage.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
            <p className="text-gray-700">
              Patient communication records, HIPAA compliance, and medical consultation 
              documentation with privacy-focused security features.
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Firms</h3>
            <p className="text-gray-700">
              Client consultation documentation, evidence preservation, and legal compliance 
              with chain-of-custody tracking.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12" id="key-features">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">High-Quality Recording</h3>
            <p className="text-gray-700">
              Support for multiple audio formats and codecs with configurable quality settings 
              and automatic optimization for storage efficiency.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Advanced Search</h3>
            <p className="text-gray-700">
              Powerful search capabilities including metadata filtering, full-text search, 
              and AI-powered semantic search for finding specific recordings quickly.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Scalable Storage</h3>
            <p className="text-gray-700">
              Distributed storage architecture supporting petabytes of recordings with 
              automatic backup, compression, and retention management.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Security</h3>
            <p className="text-gray-700">
              Role-based access control, encryption at rest and in transit, audit logging, 
              and compliance with industry security standards.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-12" id="technology">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Backend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>C++</strong> for high-performance audio processing</li>
                <li>• <strong>Java</strong> for metadata management and web services</li>
                <li>• <strong>PostgreSQL</strong> with pgvector for vector search</li>
                <li>• <strong>Redis</strong> for caching and session management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Frontend & Protocols</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>React.js</strong> for modern web interface</li>
                <li>• <strong>SIP/RTP</strong> for telephony integration</li>
                <li>• <strong>WebRTC</strong> for browser-based communications</li>
                <li>• <strong>REST API</strong> for system integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Deploy Oreka in your organization and experience enterprise-grade call recording 
          with professional management tools and compliance features.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/getting-started"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Get Started
          </Link>
          <Link
            href="/architecture"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View Architecture
          </Link>
        </div>
      </div>
    </div>
  );
}
