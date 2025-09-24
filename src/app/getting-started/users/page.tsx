import { Callout, Step, CodeBlock, Table } from '@/components/ui';

export default function GettingStartedUsersPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started for Users</h1>
        <p className="text-xl text-gray-600">
          Complete guide to start using Oreka telephony recording system
        </p>
      </div>

      {/* Overview */}
      <section className="doc-section">
        <h2>Welcome to Oreka</h2>
        <p>
          Oreka is an enterprise-grade telephony recording system that helps organizations 
          capture, manage, and analyze call recordings for compliance, quality assurance, 
          and business intelligence. Whether you&apos;re an agent, supervisor, or administrator, 
          Oreka provides powerful tools to work with your call recordings.
        </p>
        
        <Callout type="info" title="What You&apos;ll Learn">
          This guide will walk you through accessing the system, searching recordings, 
          managing your account, and using advanced features like AI-powered search.
        </Callout>
      </section>

      {/* Prerequisites */}
      <section className="doc-section">
        <h2>Prerequisites</h2>
        <p>
          Before you can start using Oreka, you&apos;ll need a few things set up:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">System Access</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• User account created by administrator</li>
              <li>• Valid username and password</li>
              <li>• Appropriate role permissions</li>
              <li>• Network access to Oreka system</li>
              <li>• Supported web browser</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Browser Requirements</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Chrome 90+ (recommended)</li>
              <li>• Firefox 88+</li>
              <li>• Safari 14+</li>
              <li>• Edge 90+</li>
              <li>• JavaScript enabled</li>
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

        <Step number={1} title="Access the System">
          <p>
            Open your web browser and navigate to your organization&apos;s Oreka system URL. 
            You&apos;ll be presented with the login page.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Login Process:</h4>
            <ol className="text-gray-600 text-sm space-y-1 list-decimal list-inside">
              <li>Navigate to your Oreka system URL</li>
              <li>Enter your username and password</li>
              <li>Click &quot;Sign In&quot; button</li>
              <li>Complete any additional authentication if required</li>
              <li>Access the main dashboard</li>
            </ol>
          </div>
        </Step>

        <Step number={2} title="Explore the Dashboard">
          <p>
            Once logged in, you&apos;ll see the main dashboard with quick access to key features 
            and recent recordings.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Dashboard Features:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Recent recordings overview</li>
              <li>• Quick search functionality</li>
              <li>• System status and notifications</li>
              <li>• Quick access to common tasks</li>
              <li>• User profile and settings</li>
            </ul>
          </div>
        </Step>

        <Step number={3} title="Search for Recordings">
          <p>
            Use the search functionality to find specific recordings based on various criteria 
            like phone numbers, dates, or content.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Search Options:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Basic search by phone number or date</li>
              <li>• Advanced search with multiple filters</li>
              <li>• AI-powered semantic search</li>
              <li>• Saved search queries</li>
              <li>• Export search results</li>
            </ul>
          </div>
        </Step>

        <Step number={4} title="Play and Download Recordings">
          <p>
            Listen to recordings directly in the browser or download them for offline use 
            and analysis.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">Recording Access:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Stream recordings in browser</li>
              <li>• Download in multiple formats</li>
              <li>• Adjust playback speed</li>
              <li>• Add notes and tags</li>
              <li>• Share recordings with team members</li>
            </ul>
          </div>
        </Step>

        <Step number={5} title="Use AI Assistant" isLast>
          <p>
            Take advantage of Oreka&apos;s AI assistant to help you find recordings, 
            understand content, and get insights from your call data.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <h4 className="font-medium text-gray-900 mb-2">AI Features:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Natural language search queries</li>
              <li>• Content analysis and insights</li>
              <li>• Automated quality assessment</li>
              <li>• Pattern recognition and trends</li>
              <li>• Intelligent recommendations</li>
            </ul>
          </div>
        </Step>
      </section>

      {/* User Roles and Permissions */}
      <section className="doc-section">
        <h2>User Roles and Permissions</h2>
        <p>
          Oreka uses role-based access control to ensure users can only access the features 
          and data they need for their job responsibilities.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Agent Role</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Access to own call recordings</li>
              <li>• Basic search functionality</li>
              <li>• Add notes and tags</li>
              <li>• View quality scores</li>
              <li>• Limited system access</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Supervisor Role</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Access to team recordings</li>
              <li>• Advanced search and analytics</li>
              <li>• Quality monitoring tools</li>
              <li>• Performance reporting</li>
              <li>• Team management features</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Administrator Role</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Full system access</li>
              <li>• User management</li>
              <li>• System configuration</li>
              <li>• Security and compliance</li>
              <li>• System monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Search and Discovery */}
      <section className="doc-section">
        <h2>Search and Discovery</h2>
        <p>
          Oreka provides powerful search capabilities to help you quickly find the recordings 
          you need.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Search Methods</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Basic Search</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Phone number search</li>
                <li>• Date range filtering</li>
                <li>• Call duration filtering</li>
                <li>• Agent/extension search</li>
                <li>• Call direction filtering</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Advanced Search</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Multiple criteria combination</li>
                <li>• Quality score filtering</li>
                <li>• Tag and note search</li>
                <li>• Custom metadata search</li>
                <li>• Saved search queries</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">AI-Powered Search</h3>
        <p>
          Use natural language to find recordings:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>&quot;Find calls about customer complaints&quot;</strong> - Semantic search for content</li>
          <li>• <strong>&quot;Show me calls from last week with long duration&quot;</strong> - Complex queries</li>
          <li>• <strong>&quot;Find calls where agent mentioned pricing&quot;</strong> - Content-based search</li>
          <li>• <strong>&quot;Show calls with poor quality scores&quot;</strong> - Quality-based filtering</li>
        </ul>
      </section>

      {/* Working with Recordings */}
      <section className="doc-section">
        <h2>Working with Recordings</h2>
        <p>
          Once you&apos;ve found recordings, you can interact with them in various ways 
          to extract value and insights.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Playback Features</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Adjust playback speed (0.5x to 2x)</li>
              <li>• Jump to specific timestamps</li>
              <li>• Volume control and audio settings</li>
              <li>• Keyboard shortcuts for navigation</li>
              <li>• Mobile-responsive playback</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Content Management</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Add notes and comments</li>
              <li>• Apply tags and categories</li>
              <li>• Flag recordings for review</li>
              <li>• Share with team members</li>
              <li>• Export in multiple formats</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Quality Assessment</h3>
        <p>
          Evaluate call quality and agent performance:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Quality Scoring:</strong> Automated quality metrics and scoring</li>
          <li>• <strong>Performance Analytics:</strong> Agent performance tracking and trends</li>
          <li>• <strong>Training Opportunities:</strong> Identify areas for improvement</li>
          <li>• <strong>Best Practices:</strong> Learn from high-quality calls</li>
        </ul>
      </section>

      {/* AI Assistant Usage */}
      <section className="doc-section">
        <h2>Using the AI Assistant</h2>
        <p>
          Oreka&apos;s AI assistant can help you work more efficiently with your recordings 
          and discover insights you might miss.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">AI Assistant Features</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Search Assistance</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Natural language queries</li>
                <li>• Context-aware search</li>
                <li>• Intelligent suggestions</li>
                <li>• Query refinement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Content Analysis</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Sentiment analysis</li>
                <li>• Topic identification</li>
                <li>• Key phrase extraction</li>
                <li>• Trend detection</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Example AI Interactions</h3>
        <p>
          Here are some ways to interact with the AI assistant:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>&quot;Find calls where customers were unhappy&quot;</strong> - Sentiment-based search</li>
          <li>• <strong>&quot;What are the most common customer issues?&quot;</strong> - Trend analysis</li>
          <li>• <strong>&quot;Show me calls that mention our new product&quot;</strong> - Content filtering</li>
          <li>• <strong>&quot;Which agents have the best customer satisfaction?&quot;</strong> - Performance analysis</li>
        </ul>
      </section>

      {/* Best Practices */}
      <section className="doc-section">
        <h2>Best Practices</h2>
        <p>
          Follow these guidelines to get the most out of Oreka and work efficiently:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Efficient Searching</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Use specific search criteria</li>
              <li>• Save frequently used searches</li>
              <li>• Leverage AI assistant for complex queries</li>
              <li>• Use filters to narrow results</li>
              <li>• Export results for further analysis</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Content Organization</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Use consistent tagging strategies</li>
              <li>• Add detailed notes to recordings</li>
              <li>• Flag important calls for review</li>
              <li>• Share relevant recordings with team</li>
              <li>• Regular cleanup of old tags</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Security and Privacy</h3>
        <p>
          Protect sensitive information and maintain compliance:
        </p>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>• <strong>Secure Access:</strong> Always log out when finished</li>
          <li>• <strong>Data Handling:</strong> Follow organizational data policies</li>
          <li>• <strong>Sharing:</strong> Only share recordings with authorized personnel</li>
          <li>• <strong>Compliance:</strong> Understand and follow regulatory requirements</li>
        </ul>
      </section>

      {/* Troubleshooting */}
      <section className="doc-section">
        <h2>Troubleshooting Common Issues</h2>
        <p>
          Here are solutions to common problems you might encounter:
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Common Issues and Solutions</h3>
          
          <Table 
            headers={['Issue', 'Cause', 'Solution']}
            rows={[
              ['Can\'t log in', 'Invalid credentials or account locked', 'Check username/password, contact admin'],
              ['Recordings won\'t play', 'Browser compatibility or codec issues', 'Try different browser, check audio settings'],
              ['Search not working', 'Incorrect search syntax or filters', 'Simplify search, check filter settings'],
              ['Slow performance', 'Large result sets or system load', 'Use more specific search criteria'],
              ['Missing recordings', 'Permission issues or data retention', 'Check user role, contact administrator'],
            ]}
          />
        </div>

        <Callout type="tip" title="Getting Help">
          If you encounter issues not covered here, contact your system administrator 
          or check the system documentation for more detailed troubleshooting guides.
        </Callout>
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Now that you understand the basics, explore these advanced topics:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">Advanced Features</h3>
            <p className="text-gray-600 mb-4">
              Learn about advanced search and analytics
            </p>
            <a href="/market-types" className="text-blue-600 hover:text-blue-800 font-medium">
              Explore Features →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">System Architecture</h3>
            <p className="text-gray-600 mb-4">
              Understand how the system works
            </p>
            <a href="/architecture" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">Training Resources</h3>
            <p className="text-gray-600 mb-4">
              Access training materials and guides
            </p>
            <a href="/ai-training-guide" className="text-blue-600 hover:text-blue-800 font-medium">
              View Training →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
