import { Callout, CodeBlock, Table } from '@/components/ui';

export default function MarketTypesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Recording Types & Features</h1>
        <p className="text-xl text-gray-600">
          Explore the different types of call recordings and features available in Oreka
        </p>
      </div>

      {/* Overview */}
      <section className="doc-section">
        <h2>Recording Overview</h2>
        <p>
          Oreka supports multiple types of call recordings and telephony scenarios, each designed 
          to capture different communication patterns and provide comprehensive recording coverage. 
          Our system goes beyond simple audio capture, offering sophisticated metadata tracking, 
          quality analysis, and intelligent search capabilities.
        </p>
        
        <Callout type="info" title="Comprehensive Coverage">
          Unlike basic recording systems, Oreka provides enterprise-grade features including 
          multi-protocol support, advanced codec handling, and intelligent content management.
        </Callout>
      </section>

      {/* Call Types */}
      <section className="doc-section">
        <h2>Call Types</h2>
        <p>
          Oreka can record various types of telephony communications, from traditional phone calls 
          to modern VoIP and web-based communications.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Supported Call Types</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Traditional Telephony</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Landline phone calls</li>
                <li>• Mobile phone calls</li>
                <li>• Conference calls</li>
                <li>• Emergency calls</li>
                <li>• International calls</li>
                <li>• Toll-free numbers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Modern Communications</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• VoIP calls (SIP/RTP)</li>
                <li>• WebRTC communications</li>
                <li>• Video calls</li>
                <li>• Screen sharing sessions</li>
                <li>• Web conferencing</li>
                <li>• Unified communications</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Recording Scenarios</h3>
        <Table 
          headers={['Scenario', 'Description', 'Use Case']}
          rows={[
            ['Inbound Calls', 'Calls received by the organization', 'Customer service, sales inquiries'],
            ['Outbound Calls', 'Calls made by organization staff', 'Sales calls, follow-ups, surveys'],
            ['Internal Calls', 'Calls between organization members', 'Team collaboration, training'],
            ['Conference Calls', 'Multi-party communication sessions', 'Team meetings, client presentations'],
            ['Emergency Calls', 'Critical communication recordings', 'Security, compliance, legal'],
            ['Quality Monitoring', 'Calls recorded for training purposes', 'Agent evaluation, process improvement'],
          ]}
        />

        <Callout type="tip" title="Flexible Recording">
          Oreka can be configured to record all calls, selective calls based on rules, 
          or specific call types depending on your organization&apos;s needs.
        </Callout>
      </section>

      {/* Audio Codecs */}
      <section className="doc-section">
        <h2>Audio Codecs & Quality</h2>
        <p>
          Oreka supports a wide range of audio codecs and quality settings to ensure optimal 
          recording quality while maintaining storage efficiency.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Supported Codecs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Traditional Codecs</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• G.711 (PCM, 64 kbps)</li>
                <li>• G.726 (ADPCM, 32 kbps)</li>
                <li>• G.729 (Compressed, 8 kbps)</li>
                <li>• G.722 (Wideband, 64 kbps)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Modern Codecs</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Opus (Variable bitrate)</li>
                <li>• AMR (Adaptive, mobile optimized)</li>
                <li>• AAC (Advanced audio coding)</li>
                <li>• MP3 (Compressed format)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Quality Features</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Automatic codec detection</li>
                <li>• Real-time transcoding</li>
                <li>• Quality optimization</li>
                <li>• Noise reduction</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Quality Settings</h3>
        <p>
          Oreka provides configurable quality settings to balance audio quality with storage requirements:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Sample Rate</strong>: 8kHz, 16kHz, 44.1kHz, 48kHz</li>
          <li>• <strong>Bit Depth</strong>: 16-bit, 24-bit for professional quality</li>
          <li>• <strong>Channels</strong>: Mono, Stereo, Multi-channel support</li>
          <li>• <strong>Compression</strong>: Configurable compression ratios</li>
        </ul>
      </section>

      {/* Recording Modes */}
      <section className="doc-section">
        <h2>Recording Modes</h2>
        <p>
          Oreka offers multiple recording modes to accommodate different organizational needs 
          and compliance requirements.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Recording Modes</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                1
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Always Record</h4>
                <p className="text-gray-600 text-sm">
                  Records all calls automatically without user intervention.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                2
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Selective Recording</h4>
                <p className="text-gray-600 text-sm">
                  Records calls based on configurable rules and criteria.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                3
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Manual Recording</h4>
                <p className="text-gray-600 text-sm">
                  Users can start/stop recording during active calls.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                4
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Quality Monitoring</h4>
                <p className="text-gray-600 text-sm">
                  Records specific calls for training and quality assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metadata & Tagging */}
      <section className="doc-section">
        <h2>Metadata & Tagging</h2>
        <p>
          Oreka automatically captures comprehensive metadata for each recording, enabling 
          powerful search and organization capabilities.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Automatic Metadata</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Call Information</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Caller and callee numbers</li>
                <li>• Call duration and timestamps</li>
                <li>• Call direction (inbound/outbound)</li>
                <li>• Call result and disposition</li>
                <li>• Queue and agent information</li>
                <li>• Call quality metrics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">System Information</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Recording server and location</li>
                <li>• Audio format and codec details</li>
                <li>• File size and storage location</li>
                <li>• Recording method and mode</li>
                <li>• System performance metrics</li>
                <li>• Error logs and warnings</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Custom Tagging</h3>
        <p>
          Users can add custom tags and notes to recordings for better organization:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Business Tags</strong>: Customer type, product, issue category</li>
          <li>• <strong>Quality Tags</strong>: Excellent, good, needs improvement</li>
          <li>• <strong>Compliance Tags</strong>: Legal, regulatory, audit requirements</li>
          <li>• <strong>Training Tags</strong>: Example call, training material, best practice</li>
        </ul>
      </section>

      {/* Search & Retrieval */}
      <section className="doc-section">
        <h2>Search & Retrieval Features</h2>
        <p>
          Oreka provides powerful search capabilities to quickly find specific recordings 
          based on various criteria and content analysis.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Search Methods</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• <strong>Metadata Search</strong>: Phone numbers, dates, duration</li>
              <li>• <strong>Full-Text Search</strong>: Transcript content analysis</li>
              <li>• <strong>Semantic Search</strong>: AI-powered content understanding</li>
              <li>• <strong>Filter Search</strong>: Multiple criteria combination</li>
              <li>• <strong>Saved Searches</strong>: Reusable search queries</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Advanced Features</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• <strong>Similarity Search</strong>: Find related recordings</li>
              <li>• <strong>Pattern Recognition</strong>: Identify call patterns</li>
              <li>• <strong>Trend Analysis</strong>: Call volume and quality trends</li>
              <li>• <strong>Export Options</strong>: Multiple format support</li>
              <li>• <strong>Bulk Operations</strong>: Process multiple recordings</li>
            </ul>
          </div>
        </div>

        <Callout type="success" title="AI-Powered Search">
          Oreka&apos;s AI assistant can help you find recordings using natural language 
          queries and understand the context of your search requirements.
        </Callout>
      </section>

      {/* Compliance & Security */}
      <section className="doc-section">
        <h2>Compliance & Security</h2>
        <p>
          Oreka includes built-in features to meet regulatory requirements and ensure 
          data security and privacy.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Compliance Features</h3>
          
          <Table 
            headers={['Feature', 'Purpose', 'Implementation']}
            rows={[
              ['Tamper Protection', 'Prevent unauthorized modifications', 'Immutable storage, audit logs'],
              ['Access Control', 'Role-based permissions', 'User roles, access levels'],
              ['Audit Logging', 'Track all system activities', 'Complete activity history'],
              ['Data Retention', 'Automated retention policies', 'Configurable retention periods'],
              ['Encryption', 'Secure data storage', 'AES-256 encryption at rest'],
              ['Legal Hold', 'Preserve evidence', 'Immutable preservation system'],
            ]}
            compact
          />
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Regulatory Support</h3>
        <p>
          Oreka supports compliance with various industry regulations:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Financial Services</strong>: SOX, Dodd-Frank, Basel III</li>
          <li>• <strong>Healthcare</strong>: HIPAA, HITECH, 21 CFR Part 11</li>
          <li>• <strong>Telecommunications</strong>: CALEA, FCC requirements</li>
          <li>• <strong>General Business</strong>: GDPR, CCPA, industry standards</li>
        </ul>
      </section>

      {/* Integration Examples */}
      <section className="doc-section">
        <h2>Integration Examples</h2>
        <p>
          Here are examples of how to integrate Oreka with different systems and workflows:
        </p>

        <CodeBlock
          title="CRM Integration"
          language="python"
          code={`# Automatically attach recordings to CRM records
def attach_recording_to_contact(contact_id, phone_number, call_date):
    # Search for recordings matching criteria
    recordings = oreka_client.recordings.search(
        query=f"phone:{phone_number}",
        start_date=call_date,
        end_date=call_date
    )
    
    if recordings:
        recording = recordings[0]
        # Download and attach to CRM
        download_path = f"/tmp/recording_{recording['id']}.wav"
        oreka_client.recordings.download(recording['id'], download_path)
        
        # Upload to CRM system
        crm_client.attachments.create({
            'parent_id': contact_id,
            'name': f'Call Recording - {recording["caller"]}',
            'file_path': download_path
        })`}
        />

        <CodeBlock
          title="Quality Monitoring Workflow"
          language="python"
          code={`# Automated quality monitoring system
def monitor_call_quality():
    # Get recent recordings
    recent_calls = oreka_client.recordings.search(
        query="duration:>300",  # Calls longer than 5 minutes
        start_date="today"
    )
    
    for call in recent_calls:
        # Analyze call quality
        if call['quality_score'] < 0.7:
            # Flag for review
            flag_recording(call['id'], "Poor audio quality")
            
        if call['duration'] < 30:
            # Flag short calls
            flag_recording(call['id'], "Call duration too short")
            
        # Check for specific keywords
        if "complaint" in call.get('transcript', '').lower():
            flag_recording(call['id'], "Customer complaint detected")`}
        />
      </section>

      {/* Best Practices */}
      <section className="doc-section">
        <h2>Best Practices</h2>
        <p>
          Follow these guidelines to maximize the value of your Oreka recording system:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Recording Configuration</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Use appropriate quality settings for your needs</li>
              <li>• Implement proper retention policies</li>
              <li>• Configure backup and redundancy</li>
              <li>• Monitor storage usage and performance</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Data Management</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Implement consistent tagging strategies</li>
              <li>• Regular data cleanup and archiving</li>
              <li>• Monitor recording quality and issues</li>
              <li>• Train users on search and retrieval</li>
            </ul>
          </div>
        </div>

        <Callout type="success" title="Continuous Improvement">
          Regularly review your recording policies and usage patterns to optimize 
          the system for your organization&apos;s specific needs.
        </Callout>
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Now that you understand the recording types and features, explore these related topics:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
            <p className="text-gray-600 mb-4">
              Install and configure Oreka in your environment
            </p>
            <a href="/getting-started" className="text-blue-600 hover:text-blue-800 font-medium">
              Get Started →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Developer Guide</h3>
            <p className="text-gray-600 mb-4">
              Learn how to integrate Oreka with your systems
            </p>
            <a href="/developer-guide" className="text-blue-600 hover:text-blue-800 font-medium">
              View Developer Guide →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
