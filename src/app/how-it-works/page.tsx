import { Callout, Step, CodeBlock, Table } from '@/components/ui';

export default function HowItWorksPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
        <p className="text-xl text-gray-600">
          Step-by-step explanation of how Oreka&apos;s telephony recording system operates
        </p>
      </div>

      {/* Overview */}
      <section className="doc-section">
        <h2>System Overview</h2>
        <p>
          Oreka is an enterprise-grade telephony recording system that captures, processes, 
          and manages call recordings with advanced search and compliance capabilities. The system 
          operates in real-time, automatically recording calls while providing comprehensive 
          metadata tracking and intelligent content management.
        </p>
        
        <Callout type="info" title="Key Innovation">
          Oreka&apos;s distributed architecture with AI-powered search provides more sophisticated 
          recording capabilities than traditional systems, enabling better compliance, quality 
          monitoring, and content discovery.
        </Callout>
      </section>

      {/* Complete Workflow */}
      <section className="doc-section">
        <h2>Complete Recording Lifecycle</h2>
        <p>
          Understanding the complete workflow helps administrators configure the system effectively 
          and users understand how their calls are processed and stored.
        </p>

        <Step number={1} title="Call Detection">
          <p>
            OrkAudio continuously monitors telephony infrastructure for incoming and outgoing calls. 
            When a call is detected, the system automatically identifies the call type, source, 
            and destination to determine recording parameters.
          </p>
        </Step>

        <Step number={2} title="Recording Initiation">
          <p>
            Based on configured rules and policies, the system determines whether to record the call. 
            Recording can be automatic, selective, or manual depending on organizational requirements 
            and compliance needs.
          </p>
        </Step>

        <Step number={3} title="Audio Capture">
          <p>
            OrkAudio captures audio streams in real-time, processing multiple codecs and formats. 
            The system optimizes audio quality while maintaining storage efficiency, automatically 
            handling codec conversion and quality adjustments.
          </p>
        </Step>

        <Step number={4} title="Metadata Collection">
          <p>
            OrkTrack collects comprehensive metadata including caller information, call duration, 
            quality metrics, and system performance data. This metadata is indexed and stored 
            for fast search and retrieval.
          </p>
        </Step>

        <Step number={5} title="Storage & Processing">
          <p>
            Audio files are compressed, encrypted, and stored in the configured storage system. 
            The system automatically manages storage tiers, backup processes, and retention policies 
            based on organizational requirements.
          </p>
        </Step>

        <Step number={6} title="Search & Access" isLast>
          <p>
            Users can search, access, and download recordings through OrkWeb interface or API endpoints. 
            The AI-powered search system provides intelligent content discovery and similarity matching 
            for enhanced user experience.
          </p>
        </Step>
      </section>

      {/* Technical Details */}
      <section className="doc-section">
        <h2>Technical Implementation</h2>
        <p>
          Oreka&apos;s technical architecture ensures reliability, security, and scalability 
          while maintaining enterprise-grade performance.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">System Architecture</h3>
          
          <Table 
            headers={['Component', 'Purpose', 'Key Features']}
            rows={[
              ['OrkAudio', 'Audio recording engine', 'Real-time capture, codec processing, quality optimization'],
              ['OrkTrack', 'Metadata management', 'Call tracking, search indexing, user management'],
              ['OrkWeb', 'Web interface & API', 'User dashboard, recording access, system administration'],
              ['Database', 'Data storage & retrieval', 'PostgreSQL with pgvector, Redis caching'],
              ['Storage System', 'Audio file management', 'Multi-tier storage, compression, backup'],
              ['AI Search', 'Intelligent content discovery', 'Semantic search, similarity matching, natural language'],
            ]}
          />
        </div>
      </section>

      {/* Recording Process Details */}
      <section className="doc-section">
        <h2>Recording Process Details</h2>
        <p>
          The recording process involves several technical steps to ensure high-quality audio 
          capture and efficient storage management.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Audio Processing Pipeline</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• <strong>Signal Detection</strong>: Identify active audio streams</li>
              <li>• <strong>Codec Detection</strong>: Automatically detect audio format</li>
              <li>• <strong>Quality Analysis</strong>: Monitor audio quality metrics</li>
              <li>• <strong>Noise Reduction</strong>: Apply audio enhancement filters</li>
              <li>• <strong>Compression</strong>: Optimize storage requirements</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Storage Management</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• <strong>Multi-tier Storage</strong>: Hot, warm, and cold storage</li>
              <li>• <strong>Automatic Backup</strong>: Scheduled backup processes</li>
              <li>• <strong>Retention Policies</strong>: Automated cleanup and archiving</li>
              <li>• <strong>Encryption</strong>: AES-256 encryption at rest</li>
              <li>• <strong>Compression</strong>: Adaptive compression algorithms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Search & Retrieval Process */}
      <section className="doc-section">
        <h2>Search & Retrieval Process</h2>
        <p>
          Oreka&apos;s search system uses multiple technologies to provide fast and accurate 
          content discovery capabilities.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Search Technologies</h3>
          
          <Table 
            headers={['Search Type', 'Technology', 'Use Case']}
            rows={[
              ['Metadata Search', 'Database indexing', 'Phone numbers, dates, duration'],
              ['Full-text Search', 'Text analysis', 'Transcript content, notes'],
              ['Semantic Search', 'AI/ML models', 'Natural language queries, context understanding'],
              ['Similarity Search', 'Vector embeddings', 'Find related recordings, pattern recognition'],
              ['Filter Search', 'Query optimization', 'Complex multi-criteria searches'],
            ]}
          />
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">AI-Powered Features</h3>
        <p>
          The AI system enhances search capabilities through:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Natural Language Processing</strong>: Understand user queries in plain English</li>
          <li>• <strong>Content Understanding</strong>: Analyze call content and context</li>
          <li>• <strong>Pattern Recognition</strong>: Identify trends and patterns in recordings</li>
          <li>• <strong>Smart Recommendations</strong>: Suggest related recordings and insights</li>
        </ul>
      </section>

      {/* Integration Workflows */}
      <section className="doc-section">
        <h2>Integration Workflows</h2>
        <p>
          Oreka integrates with various business systems to automate workflows and improve 
          operational efficiency.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">CRM Integration</h3>
            <p className="text-gray-600 text-sm mb-3">
              Automatically attach call recordings to customer records and create 
              comprehensive communication histories.
            </p>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Real-time recording attachment</li>
              <li>• Automatic customer identification</li>
              <li>• Call outcome tracking</li>
              <li>• Performance analytics</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Quality Monitoring</h3>
            <p className="text-gray-600 text-sm mb-3">
              Automatically flag recordings for review based on quality metrics 
              and content analysis.
            </p>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Quality score calculation</li>
              <li>• Automated flagging system</li>
              <li>• Supervisor notifications</li>
              <li>• Training material identification</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Compliance Automation</h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• <strong>Legal Hold Management</strong>: Automatically preserve recordings for legal proceedings</li>
            <li>• <strong>Retention Policy Enforcement</strong>: Automated cleanup based on regulatory requirements</li>
            <li>• <strong>Audit Trail Generation</strong>: Complete activity logging for compliance audits</li>
            <li>• <strong>Access Control</strong>: Role-based permissions and access monitoring</li>
          </ul>
        </div>
      </section>

      {/* Performance & Scalability */}
      <section className="doc-section">
        <h2>Performance & Scalability</h2>
        <p>
          Oreka is designed to handle high-volume recording requirements while maintaining 
          performance and reliability.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Performance Features</h3>
          
          <Table 
            headers={['Feature', 'Benefit', 'Implementation']}
            rows={[
              ['Parallel Processing', 'High throughput', 'Multi-threaded audio processing'],
              ['Load Balancing', 'Distributed workload', 'Multiple recording servers'],
              ['Caching Layers', 'Fast response times', 'Redis caching, CDN distribution'],
              ['Database Optimization', 'Efficient queries', 'Indexing, query optimization'],
              ['Storage Optimization', 'Cost-effective storage', 'Compression, tiering, deduplication'],
            ]}
            compact
          />
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Scaling Strategies</h3>
        <p>
          The system scales through:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Horizontal Scaling</strong>: Add more recording servers as needed</li>
          <li>• <strong>Database Sharding</strong>: Partition data across multiple databases</li>
          <li>• <strong>Load Distribution</strong>: Distribute recording load across servers</li>
          <li>• <strong>Storage Scaling</strong>: Expand storage capacity dynamically</li>
        </ul>
      </section>

      {/* Security & Compliance */}
      <section className="doc-section">
        <h2>Security & Compliance</h2>
        <p>
          Oreka implements comprehensive security measures to protect sensitive call data 
          and ensure regulatory compliance.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Security Features</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• <strong>Encryption</strong>: AES-256 encryption at rest and in transit</li>
              <li>• <strong>Access Control</strong>: Role-based permissions and authentication</li>
              <li>• <strong>Audit Logging</strong>: Complete activity tracking and monitoring</li>
              <li>• <strong>Network Security</strong>: TLS encryption, firewall protection</li>
              <li>• <strong>Data Integrity</strong>: Checksums and tamper detection</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Compliance Features</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• <strong>Data Retention</strong>: Configurable retention policies</li>
              <li>• <strong>Legal Hold</strong>: Immutable preservation system</li>
              <li>• <strong>Audit Trails</strong>: Complete compliance documentation</li>
              <li>• <strong>Access Monitoring</strong>: User activity tracking</li>
              <li>• <strong>Regulatory Support</strong>: Industry-specific compliance features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Monitoring & Maintenance */}
      <section className="doc-section">
        <h2>Monitoring & Maintenance</h2>
        <p>
          Oreka provides comprehensive monitoring and maintenance capabilities to ensure 
          system reliability and performance.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">System Monitoring</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Performance Metrics</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Recording throughput and latency</li>
                <li>• Storage usage and performance</li>
                <li>• Database query performance</li>
                <li>• Network bandwidth utilization</li>
                <li>• System resource usage</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Health Monitoring</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Service status and availability</li>
                <li>• Error rates and system alerts</li>
                <li>• Backup and recovery status</li>
                <li>• Security event monitoring</li>
                <li>• Compliance status tracking</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Maintenance Operations</h3>
        <p>
          Automated and manual maintenance tasks include:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Automated Backups</strong>: Scheduled backup processes and verification</li>
          <li>• <strong>Storage Cleanup</strong>: Automatic cleanup based on retention policies</li>
          <li>• <strong>Performance Optimization</strong>: Database optimization and index maintenance</li>
          <li>• <strong>Security Updates</strong>: Automated security patches and updates</li>
          <li>• <strong>System Health Checks</strong>: Regular system diagnostics and reporting</li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Now that you understand how Oreka works, explore these related topics:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Recording Types</h3>
            <p className="text-gray-600 mb-4">
              Learn about the different types of recordings and features available
            </p>
            <a href="/market-types" className="text-blue-600 hover:text-blue-800 font-medium">
              Explore Recording Types →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
            <p className="text-gray-600 mb-4">
              Install and configure Oreka in your environment
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
