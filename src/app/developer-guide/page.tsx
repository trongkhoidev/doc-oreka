import { Callout, CodeBlock, Table } from '@/components/ui';

export default function DeveloperGuidePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Developer Guide</h1>
        <p className="text-xl text-gray-600">
          Integration guides and development resources for Oreka telephony recording system
        </p>
      </div>

      {/* Overview */}
      <section className="doc-section">
        <h2>Developer Overview</h2>
        <p>
          Oreka provides comprehensive APIs and integration interfaces for developers to 
          build custom applications, integrate with existing systems, and extend the 
          recording capabilities. Whether you&apos;re building a custom dashboard, integrating 
          with CRM systems, or creating automated workflows, our developer tools make 
          integration seamless.
        </p>
        
        <Callout type="info" title="Open Source">
          Oreka is fully open source, allowing developers to inspect, modify, and contribute 
          to the codebase. All components are available on GitHub with comprehensive documentation.
        </Callout>
      </section>

      {/* API Integration */}
      <section className="doc-section">
        <h2>REST API Integration</h2>
        <p>
          Use Oreka&apos;s comprehensive REST APIs to fetch recording data, manage users, 
          and integrate with your existing applications and workflows.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">API Base URLs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Production</h4>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                https://oreka.yourdomain.com/api/v1
              </code>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Development</h4>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                http://localhost:8080/api/v1
              </code>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 mt-6">Core API Endpoints</h3>
        <Table 
          headers={['Endpoint', 'Method', 'Purpose', 'Authentication']}
          rows={[
            ['/recordings', 'GET', 'List recordings with filters', 'Bearer Token'],
            ['/recordings/{id}', 'GET', 'Get specific recording details', 'Bearer Token'],
            ['/recordings/{id}/download', 'GET', 'Download recording file', 'Bearer Token'],
            ['/recordings/search', 'POST', 'Search recordings by criteria', 'Bearer Token'],
            ['/users', 'GET', 'List users and permissions', 'Admin Token'],
            ['/system/health', 'GET', 'System health check', 'None'],
            ['/system/stats', 'GET', 'System statistics and metrics', 'Bearer Token'],
          ]}
        />
      </section>

      {/* Authentication */}
      <section className="doc-section">
        <h2>Authentication & Security</h2>
        <p>
          Oreka uses JWT-based authentication with role-based access control to ensure 
          secure access to recordings and system resources.
        </p>

        <CodeBlock
          title="Authentication Example"
          language="python"
          code={`import requests
import json

# Login to get access token
def authenticate(username, password):
    url = "https://oreka.example.com/api/auth/login"
    payload = {
        "username": username,
        "password": password
    }
    
    response = requests.post(url, json=payload)
    if response.status_code == 200:
        return response.json()["access_token"]
    else:
        raise Exception("Authentication failed")

# Use token for API calls
def get_recordings(access_token, limit=100):
    url = "https://oreka.example.com/api/recordings"
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    params = {"limit": limit}
    
    response = requests.get(url, headers=headers, params=params)
    return response.json()`}
        />

        <Callout type="warning" title="Security Best Practices">
          Always use HTTPS in production, implement proper token storage, and never expose 
          authentication credentials in client-side code.
        </Callout>
      </section>

      {/* Recording Management */}
      <section className="doc-section">
        <h2>Recording Management APIs</h2>
        <p>
          Manage recordings programmatically with comprehensive APIs for search, retrieval, 
          and metadata management.
        </p>

        <CodeBlock
          title="Search Recordings"
          language="python"
          code={`def search_recordings(access_token, query, start_date=None, end_date=None):
    url = "https://oreka.example.com/api/recordings/search"
    headers = {"Authorization": f"Bearer {access_token}"}
    
    payload = {
        "query": query,
        "filters": {}
    }
    
    if start_date:
        payload["filters"]["start_date"] = start_date
    if end_date:
        payload["filters"]["end_date"] = end_date
    
    response = requests.post(url, json=payload, headers=headers)
    return response.json()

# Example usage
recordings = search_recordings(
    token, 
    "customer service call", 
    start_date="2024-01-01",
    end_date="2024-01-31"
)`}
        />

        <CodeBlock
          title="Download Recording"
          language="python"
          code={`def download_recording(access_token, recording_id, output_path):
    url = f"https://oreka.example.com/api/recordings/{recording_id}/download"
    headers = {"Authorization": f"Bearer {access_token}"}
    
    response = requests.get(url, headers=headers, stream=True)
    
    if response.status_code == 200:
        with open(output_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        return True
    else:
        return False

# Download specific recording
success = download_recording(token, "rec_123", "call_recording.wav")`}
        />
      </section>

      {/* Webhook Integration */}
      <section className="doc-section">
        <h2>Webhook Integration</h2>
        <p>
          Set up webhooks to receive real-time notifications about new recordings, 
          system events, and user activities.
        </p>

        <CodeBlock
          title="Webhook Configuration"
          language="python"
          code={`def configure_webhook(access_token, webhook_url, events):
    url = "https://oreka.example.com/api/webhooks"
    headers = {"Authorization": f"Bearer {access_token}"}
    
    payload = {
        "url": webhook_url,
        "events": events,  # ["recording.completed", "user.login", "system.alert"]
        "secret": "your_webhook_secret",
        "enabled": True
    }
    
    response = requests.post(url, json=payload, headers=headers)
    return response.json()

# Configure webhook for new recordings
webhook = configure_webhook(
    token,
    "https://your-app.com/webhooks/oreka",
    ["recording.completed", "recording.failed"]
)`}
        />

        <CodeBlock
          title="Webhook Handler"
          language="python"
          code={`from flask import Flask, request
import hmac
import hashlib

app = Flask(__name__)

@app.route('/webhooks/oreka', methods=['POST'])
def oreka_webhook():
    # Verify webhook signature
    signature = request.headers.get('X-Oreka-Signature')
    payload = request.get_data()
    
    expected_signature = hmac.new(
        b'your_webhook_secret',
        payload,
        hashlib.sha256
    ).hexdigest()
    
    if not hmac.compare_digest(signature, expected_signature):
        return "Unauthorized", 401
    
    # Process webhook data
    data = request.json
    event_type = data.get('event')
    
    if event_type == 'recording.completed':
        recording_id = data['recording']['id']
        # Process new recording
        process_new_recording(recording_id)
    
    return "OK", 200`}
        />
      </section>

      {/* SDK and Libraries */}
      <section className="doc-section">
        <h2>SDK and Libraries</h2>
        <p>
          Use official SDKs and community libraries to simplify integration with Oreka:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Official SDKs</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• <strong>Python SDK</strong>: Full-featured Python client</li>
              <li>• <strong>JavaScript SDK</strong>: Node.js and browser support</li>
              <li>• <strong>Java SDK</strong>: Enterprise Java integration</li>
              <li>• <strong>REST API</strong>: Language-agnostic HTTP API</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Community Libraries</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• <strong>PHP Client</strong>: Community-maintained PHP library</li>
              <li>• <strong>Go Client</strong>: High-performance Go client</li>
              <li>• <strong>Ruby Gem</strong>: Ruby on Rails integration</li>
              <li>• <strong>PowerShell</strong>: Windows automation scripts</li>
            </ul>
          </div>
        </div>

        <CodeBlock
          title="Python SDK Usage"
          language="python"
          code={`from oreka_sdk import OrekaClient

# Initialize client
client = OrekaClient(
    base_url="https://oreka.example.com",
    username="your_username",
    password="your_password"
)

# Search recordings
recordings = client.recordings.search(
    query="customer complaint",
    start_date="2024-01-01",
    end_date="2024-01-31"
)

# Download recording
client.recordings.download("rec_123", "output.wav")

# Get system statistics
stats = client.system.get_stats()`}
        />
      </section>

      {/* Integration Examples */}
      <section className="doc-section">
        <h2>Integration Examples</h2>
        <p>
          Here are some real-world integration examples to help you get started:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">CRM Integration</h3>
            <p className="text-gray-600 text-sm mb-3">
              Automatically attach call recordings to customer records in Salesforce, 
              HubSpot, or other CRM systems.
            </p>
            <CodeBlock
              title="Salesforce Integration"
              language="python"
              code={`def attach_recording_to_lead(lead_id, recording_id):
    # Download recording
    recording_path = f"/tmp/recording_{recording_id}.wav"
    oreka_client.recordings.download(recording_id, recording_path)
    
    # Upload to Salesforce
    sf_client.Lead.attachment.create({
        'ParentId': lead_id,
        'Name': f'Call Recording {recording_id}',
        'Body': open(recording_path, 'rb').read()
    })`}
            />
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Quality Monitoring</h3>
            <p className="text-gray-600 text-sm mb-3">
              Automatically analyze call quality and flag recordings for review 
              based on predefined criteria.
            </p>
            <CodeBlock
              title="Quality Analysis"
              language="python"
              code={`def analyze_call_quality(recording_id):
    # Get recording metadata
    recording = oreka_client.recordings.get(recording_id)
    
    # Analyze quality metrics
    if recording['duration'] < 30:  # Too short
        flag_for_review(recording_id, "Duration too short")
    
    if recording['quality_score'] < 0.7:  # Poor quality
        flag_for_review(recording_id, "Poor audio quality")`}
            />
          </div>
        </div>
      </section>

      {/* Performance and Best Practices */}
      <section className="doc-section">
        <h2>Performance and Best Practices</h2>
        <p>
          Follow these best practices to ensure optimal performance and reliability 
          when integrating with Oreka:
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Performance Guidelines</h3>
          
          <Table 
            headers={['Practice', 'Benefit', 'Implementation']}
            rows={[
              ['Connection Pooling', 'Reuse connections', 'Use connection pools for HTTP clients'],
              ['Batch Operations', 'Reduce API calls', 'Group multiple operations in single requests'],
              ['Caching', 'Improve response time', 'Cache frequently accessed data'],
              ['Async Processing', 'Non-blocking operations', 'Use async/await or background jobs'],
              ['Rate Limiting', 'Avoid API throttling', 'Implement exponential backoff'],
            ]}
            compact
          />
        </div>

        <Callout type="tip" title="Monitoring Integration">
          Monitor your integration performance with metrics like API response times, 
          error rates, and throughput to identify optimization opportunities.
        </Callout>
      </section>

      {/* Testing and Development */}
      <section className="doc-section">
        <h2>Testing and Development</h2>
        <p>
          Set up a development environment and test your integration before deploying 
          to production:
        </p>

        <CodeBlock
          title="Test Environment Setup"
          language="bash"
          code={`# Start Oreka in development mode
docker-compose -f docker-compose.dev.yml up -d

# Set environment variables
export OREKA_API_URL=http://localhost:8080
export OREKA_USERNAME=admin
export OREKA_PASSWORD=admin123

# Run integration tests
python -m pytest tests/test_oreka_integration.py

# Test specific endpoints
curl -X GET "http://localhost:8080/api/system/health"
curl -X POST "http://localhost:8080/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'`}
        />
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Ready to start integrating? Explore these resources:
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
            <h3 className="text-lg font-semibold mb-2">Architecture</h3>
            <p className="text-gray-600 mb-4">
              Understand the system design and components
            </p>
            <a href="/architecture" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
