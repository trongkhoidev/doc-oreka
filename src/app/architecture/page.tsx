import { Callout, CodeBlock, Table } from '@/components/ui';

export default function ArchitecturePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">System Architecture</h1>
        <p className="text-xl text-gray-600">
          Comprehensive overview of Oreka&apos;s telephony recording system architecture and components
        </p>
      </div>

      {/* System Overview */}
      <section className="doc-section">
        <h2>System Overview</h2>
        <p>
          Oreka is built with a modular, distributed architecture designed for high availability, 
          scalability, and enterprise-grade reliability. The system consists of three core components 
          that work together to provide comprehensive call recording capabilities.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Core Components</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">OrkAudio (Recording Engine)</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Real-time audio capture and processing</li>
                <li>• Multi-codec support and conversion</li>
                <li>• Audio quality optimization</li>
                <li>• Storage management and compression</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">OrkTrack (Metadata Management)</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Call metadata tracking and storage</li>
                <li>• Search and indexing capabilities</li>
                <li>• User management and permissions</li>
                <li>• Audit logging and compliance</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-medium text-gray-900 mb-2">OrkWeb (Web Interface)</h4>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• User-friendly web dashboard</li>
              <li>• Recording search and playback</li>
              <li>• System administration tools</li>
              <li>• REST API for integrations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* System Architecture Diagram */}
      <section className="doc-section">
        <h2>System Architecture Diagram</h2>
        <p>
          The following diagram shows how the different components interact and how data flows 
          through the system from call initiation to recording storage and retrieval.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
          <div className="text-center text-gray-600 mb-4">
            [System Architecture Diagram Placeholder]
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-100 p-3 rounded">
              <strong>Telephony Infrastructure</strong><br/>
              SIP/RTP Streams → OrkAudio
            </div>
            <div className="bg-green-100 p-3 rounded">
              <strong>Processing Layer</strong><br/>
              OrkAudio → OrkTrack → Database
            </div>
            <div className="bg-purple-100 p-3 rounded">
              <strong>Access Layer</strong><br/>
              OrkWeb → Users & APIs
            </div>
          </div>
        </div>
      </section>

      {/* Component Details */}
      <section className="doc-section">
        <h2>Component Details</h2>
        <p>
          Each component of the Oreka system has specific responsibilities and is designed 
          to work independently while providing seamless integration with other components.
        </p>

        <Table 
          headers={['Component', 'Purpose', 'Key Features']}
          rows={[
            ['OrkAudio', 'Audio recording and processing', 'Real-time capture, codec conversion, quality optimization'],
            ['OrkTrack', 'Metadata and data management', 'Call tracking, search indexing, user management'],
            ['OrkWeb', 'Web interface and API', 'User dashboard, recording access, system administration'],
            ['Database', 'Data storage and retrieval', 'PostgreSQL with pgvector, Redis caching'],
            ['Storage', 'Audio file management', 'Distributed storage, compression, backup'],
          ]}
        />

        <Callout type="info" title="Component Independence">
          Each component can be deployed independently, allowing for horizontal scaling and 
          high availability configurations. Components communicate through well-defined APIs.
        </Callout>
      </section>

      {/* Data Flow */}
      <section className="doc-section">
        <h2>Data Flow and Workflow</h2>
        <p>
          Understanding how data flows through the system is crucial for administrators and developers. 
          Here&apos;s the complete workflow from call initiation to recording retrieval.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Call Recording Lifecycle</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                1
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Call Initiation</h4>
                <p className="text-gray-600 text-sm">
                  SIP call is established, OrkAudio detects the call and begins monitoring 
                  RTP audio streams for recording.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                2
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Audio Capture</h4>
                <p className="text-gray-600 text-sm">
                  OrkAudio captures audio streams in real-time, processes codecs, and 
                  optimizes quality while maintaining storage efficiency.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                3
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Metadata Collection</h4>
                <p className="text-gray-600 text-sm">
                  OrkTrack collects call metadata including caller/callee information, 
                  duration, quality metrics, and timestamps.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                4
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Storage and Indexing</h4>
                <p className="text-gray-600 text-sm">
                  Audio files are compressed and stored, metadata is indexed in the database, 
                  and search capabilities are updated.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                5
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Access and Retrieval</h4>
                <p className="text-gray-600 text-sm">
                  Users can search, access, and download recordings through OrkWeb interface 
                  or API endpoints with proper authentication.
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
          The technical architecture follows modern enterprise software development patterns with 
          emphasis on reliability, scalability, and maintainability.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Backend Technologies</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• C++ for high-performance audio processing</li>
              <li>• Java for metadata management and web services</li>
              <li>• PostgreSQL with pgvector for vector search</li>
              <li>• Redis for caching and session management</li>
              <li>• RESTful APIs for component communication</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Frontend Architecture</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• React.js with TypeScript</li>
              <li>• Responsive design system</li>
              <li>• Component-based architecture</li>
              <li>• Real-time updates via WebSocket</li>
              <li>• Progressive Web App capabilities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Storage Architecture */}
      <section className="doc-section">
        <h2>Storage Architecture</h2>
        <p>
          Oreka uses a multi-tier storage architecture designed for performance, reliability, 
          and cost-effectiveness while maintaining data integrity and accessibility.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Hot Storage</h3>
            <p className="text-gray-600 text-sm mb-3">
              Recent recordings and frequently accessed data
            </p>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• SSD storage for fast access</li>
              <li>• Recent recordings (last 30 days)</li>
              <li>• High availability configuration</li>
              <li>• Automatic backup to warm storage</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Warm Storage</h3>
            <p className="text-gray-600 text-sm mb-3">
              Medium-term storage for active compliance data
            </p>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• HDD storage for cost efficiency</li>
              <li>• Compliance period recordings (1-7 years)</li>
              <li>• Compressed audio formats</li>
              <li>• Indexed for fast search</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Cold Storage</h3>
            <p className="text-gray-600 text-sm mb-3">
              Long-term archival and backup storage
            </p>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Tape or cloud storage</li>
              <li>• Long-term compliance (7+ years)</li>
              <li>• Highly compressed formats</li>
              <li>• Disaster recovery backup</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Network Architecture */}
      <section className="doc-section">
        <h2>Network Architecture</h2>
        <p>
          The network architecture is designed to handle high-volume telephony traffic while 
          maintaining security and providing redundancy for critical operations.
        </p>

        <Table 
          headers={['Network Layer', 'Purpose', 'Configuration']}
          rows={[
            ['Access Layer', 'User and API access', 'Load balancers, SSL termination, rate limiting'],
            ['Application Layer', 'Component communication', 'Internal APIs, message queues, event bus'],
            ['Data Layer', 'Database and storage access', 'Database clusters, storage networks, backup links'],
            ['Security Layer', 'Network security and monitoring', 'Firewalls, IDS/IPS, VPN access'],
          ]}
        />

        <Callout type="warning" title="Network Security">
          All network communications are encrypted using TLS 1.3, and internal component 
          communication uses mutual TLS authentication for enhanced security.
        </Callout>
      </section>

      {/* Scalability Features */}
      <section className="doc-section">
        <h2>Scalability Features</h2>
        <p>
          Oreka is designed to scale from small deployments to enterprise-level installations 
          handling thousands of concurrent calls and petabytes of storage.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Scaling Strategies</h3>
          
          <Table 
            headers={['Scaling Type', 'Benefit', 'Implementation']}
            rows={[
              ['Horizontal Scaling', 'Increased capacity', 'Multiple OrkAudio instances'],
              ['Load Balancing', 'Traffic distribution', 'Round-robin and health-based routing'],
              ['Database Sharding', 'Improved performance', 'Partitioned by time or organization'],
              ['Caching Layers', 'Reduced latency', 'Redis clusters and CDN distribution'],
              ['Auto-scaling', 'Dynamic capacity', 'Kubernetes-based orchestration'],
            ]}
            compact
          />
        </div>
      </section>

      {/* Deployment Options */}
      <section className="doc-section">
        <h2>Deployment Options</h2>
        <p>
          Oreka supports multiple deployment models to meet different organizational requirements, 
          from single-server installations to multi-site distributed deployments.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Single Server</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• All components on single server</li>
              <li>• Suitable for small organizations</li>
              <li>• Easy installation and maintenance</li>
              <li>• Limited scalability</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Distributed Deployment</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Components distributed across servers</li>
              <li>• High availability and scalability</li>
              <li>• Load balancing and redundancy</li>
              <li>• Enterprise-grade performance</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Cloud Deployment</h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• AWS, Azure, or Google Cloud support</li>
            <li>• Container-based deployment (Docker/Kubernetes)</li>
            <li>• Auto-scaling and managed services</li>
            <li>• Pay-as-you-use pricing model</li>
          </ul>
        </div>
      </section>

      {/* Monitoring and Maintenance */}
      <section className="doc-section">
        <h2>Monitoring and Maintenance</h2>
        <p>
          Comprehensive monitoring and maintenance capabilities ensure system reliability, 
          performance optimization, and proactive issue resolution.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">System Monitoring</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Real-time performance metrics</li>
              <li>• Resource utilization tracking</li>
              <li>• Error rate monitoring</li>
              <li>• Automated alerting</li>
              <li>• Performance dashboards</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Maintenance Operations</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Automated backup scheduling</li>
              <li>• Database optimization</li>
              <li>• Storage cleanup and compression</li>
              <li>• Security updates and patches</li>
              <li>• Performance tuning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="doc-section">
        <h2>Integration Examples</h2>
        <p>
          Here are some code examples showing how to integrate with Oreka&apos;s system:
        </p>

        <CodeBlock
          title="Start Recording"
          language="bash"
          code={`# Start OrkAudio recording service
./orkaudio --config /etc/oreka/orkaudio.conf --daemon

# Check recording status
./orkaudio --status

# View recording logs
tail -f /var/log/oreka/orkaudio.log`}
        />

        <CodeBlock
          title="API Integration"
          language="python"
          code={`import requests

# Search for recordings
def search_recordings(query, start_date, end_date):
    url = "https://oreka.example.com/api/recordings/search"
    params = {
        "query": query,
        "start_date": start_date,
        "end_date": end_date,
        "limit": 100
    }
    response = requests.get(url, params=params, headers=auth_headers)
    return response.json()

# Download recording
def download_recording(recording_id, output_path):
    url = f"https://oreka.example.com/api/recordings/{recording_id}/download"
    response = requests.get(url, headers=auth_headers, stream=True)
    with open(output_path, 'wb') as f:
        for chunk in response.iter_content(chunk_size=8192):
            f.write(chunk)`}
        />
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Now that you understand the architecture, explore these related topics:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
            <p className="text-gray-600 mb-4">
              Learn how to install and configure Oreka in your environment
            </p>
            <a href="/getting-started" className="text-blue-600 hover:text-blue-800 font-medium">
              Get Started →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Technology Stack</h3>
            <p className="text-gray-600 mb-4">
              Detailed information about the technologies and frameworks used
            </p>
            <a href="/tech-stack" className="text-blue-600 hover:text-blue-800 font-medium">
              View Tech Stack →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
