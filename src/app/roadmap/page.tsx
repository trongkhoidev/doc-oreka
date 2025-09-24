import { Callout, Step } from '@/components/ui';

export default function RoadmapPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Roadmap</h1>
        <p className="text-xl text-gray-600">
          Future development plans and vision for Oreka telephony recording system
        </p>
      </div>

      {/* Vision Statement */}
      <section className="doc-section">
        <h2>Our Vision</h2>
        <p>
          Oreka aims to become the leading enterprise telephony recording and content management 
          platform, revolutionizing how organizations capture, analyze, and utilize their 
          communication data. We envision a world where every call becomes a valuable asset 
          for compliance, training, and business intelligence.
        </p>
        
        <Callout type="info" title="Long-term Goal">
          To create the most intelligent, secure, and scalable telephony recording system 
          that transforms communication data into actionable insights and ensures regulatory 
          compliance for organizations worldwide.
        </Callout>
      </section>

      {/* Development Phases */}
      <section className="doc-section">
        <h2>Development Phases</h2>
        <p>
          Our roadmap is divided into phases, each building upon the previous to create 
          a comprehensive and robust telephony recording platform.
        </p>

        <Step number={1} title="Phase 1: Foundation (Q1-Q2 2024)">
          <p>
            Establish the core infrastructure and launch the basic telephony recording system 
            with essential features and components.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Completed Features:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Core OrkAudio recording engine</li>
              <li>• Basic OrkTrack metadata management</li>
              <li>• OrkWeb user interface</li>
              <li>• PostgreSQL database with pgvector</li>
              <li>• Multi-codec audio support</li>
            </ul>
          </div>
        </Step>

        <Step number={2} title="Phase 2: Enhancement (Q3-Q4 2024)">
          <p>
            Enhance system capabilities with advanced features, improved performance, and 
            expanded integration options.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Planned Features:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• AI-powered transcription and analysis</li>
              <li>• Advanced search and content discovery</li>
              <li>• Comprehensive API ecosystem</li>
              <li>• Mobile applications</li>
              <li>• Enhanced security and compliance features</li>
            </ul>
          </div>
        </Step>

        <Step number={3} title="Phase 3: Intelligence (Q1-Q2 2025)">
          <p>
            Introduce cutting-edge AI and machine learning features for intelligent content 
            analysis and automated workflows.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Innovation Features:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Natural language processing and understanding</li>
              <li>• Sentiment analysis and emotion detection</li>
              <li>• Automated quality scoring and flagging</li>
              <li>• Predictive analytics and insights</li>
              <li>• Advanced compliance automation</li>
            </ul>
          </div>
        </Step>

        <Step number={4} title="Phase 4: Ecosystem (Q3-Q4 2025)" isLast>
          <p>
            Build a comprehensive ecosystem with advanced integrations, cloud services, and 
            community-driven development.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Ecosystem Features:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Cloud-native deployment options</li>
              <li>• Advanced CRM and business system integrations</li>
              <li>• Marketplace for plugins and extensions</li>
              <li>• Enterprise-grade security and compliance</li>
              <li>• Global expansion and localization</li>
            </ul>
          </div>
        </Step>
      </section>

      {/* AI & Machine Learning */}
      <section className="doc-section">
        <h2>AI & Machine Learning Integration</h2>
        <p>
          Artificial intelligence will play a crucial role in transforming raw audio data 
          into actionable insights and automated workflows.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Content Analysis</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Automatic speech recognition (ASR)</li>
              <li>• Natural language understanding (NLU)</li>
              <li>• Sentiment analysis and emotion detection</li>
              <li>• Topic classification and extraction</li>
              <li>• Key phrase and entity recognition</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Intelligent Automation</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Automated quality scoring</li>
              <li>• Intelligent content flagging</li>
              <li>• Smart categorization and tagging</li>
              <li>• Predictive maintenance alerts</li>
              <li>• Automated compliance monitoring</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">AI Capabilities</h3>
        <p>
          Our AI models will continuously learn and improve to provide better insights:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Speech Recognition:</strong> High-accuracy transcription in multiple languages</li>
          <li>• <strong>Content Understanding:</strong> Deep analysis of call content and context</li>
          <li>• <strong>Quality Assessment:</strong> Automated evaluation of call quality and agent performance</li>
          <li>• <strong>Compliance Monitoring:</strong> Real-time detection of regulatory violations</li>
        </ul>
      </section>

      {/* Cloud & Scalability */}
      <section className="doc-section">
        <h2>Cloud & Scalability</h2>
        <p>
          Oreka will expand to offer cloud-native solutions and enhanced scalability options 
          for organizations of all sizes.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Cloud Offerings</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">SaaS Platform</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Fully managed cloud service</li>
                <li>• Automatic scaling and updates</li>
                <li>• Multi-tenant architecture</li>
                <li>• Global CDN distribution</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Hybrid Solutions</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• On-premise + cloud hybrid</li>
                <li>• Edge computing support</li>
                <li>• Multi-cloud deployments</li>
                <li>• Disaster recovery options</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Enterprise Cloud</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Private cloud deployments</li>
                <li>• Dedicated infrastructure</li>
                <li>• Custom security policies</li>
                <li>• SLA guarantees</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Scalability Features</h3>
        <p>
          The cloud platform will provide enterprise-grade scalability:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Auto-scaling:</strong> Automatic resource allocation based on demand</li>
          <li>• <strong>Global Distribution:</strong> Multi-region deployments for low latency</li>
          <li>• <strong>Load Balancing:</strong> Intelligent traffic distribution across servers</li>
          <li>• <strong>Storage Optimization:</strong> Intelligent tiering and compression</li>
        </ul>
      </section>

      {/* Advanced Integrations */}
      <section className="doc-section">
        <h2>Advanced Integrations</h2>
        <p>
          Oreka will expand its integration ecosystem to connect with more business systems 
          and provide seamless workflows.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">CRM & Business Systems</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Salesforce integration</li>
              <li>• HubSpot and Pipedrive</li>
              <li>• Microsoft Dynamics</li>
              <li>• Zoho CRM</li>
              <li>• Custom API integrations</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Communication Platforms</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Microsoft Teams</li>
              <li>• Zoom and Webex</li>
              <li>• Slack and Discord</li>
              <li>• WhatsApp Business</li>
              <li>• SMS and messaging platforms</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Workflow Automation</h3>
        <p>
          Advanced workflow automation will include:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Trigger-based Actions:</strong> Automatic responses to specific events</li>
          <li>• <strong>Workflow Orchestration:</strong> Complex multi-step processes</li>
          <li>• <strong>API Webhooks:</strong> Real-time notifications and data exchange</li>
          <li>• <strong>Custom Scripts:</strong> User-defined automation rules</li>
        </ul>
      </section>

      {/* Compliance & Security */}
      <section className="doc-section">
        <h2>Enhanced Compliance & Security</h2>
        <p>
          Oreka will continue to enhance its compliance and security features to meet 
          evolving regulatory requirements and security threats.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Advanced Security Features</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Security Enhancements</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Zero-trust security model</li>
                <li>• Advanced threat detection</li>
                <li>• Behavioral analytics</li>
                <li>• End-to-end encryption</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Compliance Features</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Automated compliance monitoring</li>
                <li>• Regulatory reporting tools</li>
                <li>• Audit trail automation</li>
                <li>• Legal hold management</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Regulatory Support</h3>
        <p>
          Enhanced support for industry-specific regulations:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Financial Services:</strong> SOX, Dodd-Frank, Basel III, MiFID II</li>
          <li>• <strong>Healthcare:</strong> HIPAA, HITECH, 21 CFR Part 11, GDPR</li>
          <li>• <strong>Telecommunications:</strong> CALEA, FCC, OFCOM requirements</li>
          <li>• <strong>General Business:</strong> ISO 27001, SOC 2, PCI DSS</li>
        </ul>
      </section>

      {/* Mobile & Accessibility */}
      <section className="doc-section">
        <h2>Mobile & Accessibility</h2>
        <p>
          Oreka will expand to mobile platforms and enhance accessibility to serve users 
          across different devices and needs.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Mobile Applications</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• iOS and Android apps</li>
              <li>• Offline recording capabilities</li>
              <li>• Push notifications</li>
              <li>• Mobile-optimized interface</li>
              <li>• Cross-platform synchronization</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Accessibility Features</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Screen reader support</li>
              <li>• Voice navigation</li>
              <li>• High contrast modes</li>
              <li>• Keyboard navigation</li>
              <li>• Multi-language support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Analytics & Insights */}
      <section className="doc-section">
        <h2>Advanced Analytics & Insights</h2>
        <p>
          Oreka will provide comprehensive analytics and business intelligence capabilities 
          to help organizations make data-driven decisions.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Analytics Capabilities</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Performance Analytics</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Agent performance metrics</li>
                <li>• Call quality trends</li>
                <li>• Customer satisfaction scores</li>
                <li>• Response time analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Business Intelligence</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Customer behavior analysis</li>
                <li>• Market trend identification</li>
                <li>• Predictive analytics</li>
                <li>• Custom reporting dashboards</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Reporting Features</h3>
        <p>
          Comprehensive reporting and visualization capabilities:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Real-time Dashboards:</strong> Live monitoring and metrics</li>
          <li>• <strong>Custom Reports:</strong> User-defined report templates</li>
          <li>• <strong>Automated Scheduling:</strong> Regular report generation and distribution</li>
          <li>• <strong>Data Export:</strong> Multiple format support (PDF, Excel, CSV)</li>
        </ul>
      </section>

      {/* Community & Ecosystem */}
      <section className="doc-section">
        <h2>Community & Ecosystem</h2>
        <p>
          Oreka will build a vibrant community and ecosystem to support users, developers, 
          and partners.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Developer Community</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Open API documentation</li>
              <li>• Developer SDKs and tools</li>
              <li>• Plugin marketplace</li>
              <li>• Hackathons and challenges</li>
              <li>• Community support forums</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Partner Ecosystem</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• System integrator partnerships</li>
              <li>• Technology partnerships</li>
              <li>• Channel partner program</li>
              <li>• Training and certification</li>
              <li>• Joint marketing initiatives</li>
            </ul>
          </div>
        </div>

        <Callout type="success" title="Get Involved">
          Join the Oreka community to contribute to the platform&apos;s development and 
          help shape the future of enterprise telephony recording.
        </Callout>
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Ready to be part of Oreka&apos;s journey? Here&apos;s how you can get involved:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">Get Started</h3>
            <p className="text-gray-600 mb-4">
              Experience the current platform and provide feedback
            </p>
            <a href="/getting-started" className="text-blue-600 hover:text-blue-800 font-medium">
              Get Started →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">Join Community</h3>
            <p className="text-gray-600 mb-4">
              Connect with other users and developers
            </p>
            <a href="https://discord.gg/oreka" className="text-blue-600 hover:text-blue-800 font-medium">
              Join Discord →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">Contribute</h3>
            <p className="text-gray-600 mb-4">
              Help build the future of Oreka
            </p>
            <a href="https://github.com/voiceip/oreka" className="text-blue-600 hover:text-blue-800 font-medium">
              View GitHub →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
