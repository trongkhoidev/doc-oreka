import { Callout, Step, CodeBlock, Table } from '@/components/ui';

export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1>
        <p className="text-xl text-gray-600">
          Quick start guide for installing and configuring Oreka telephony recording system
        </p>
      </div>

      {/* Overview */}
      <section className="doc-section">
        <h2>Quick Overview</h2>
        <p>
          Oreka is an enterprise-grade telephony recording system that provides comprehensive 
          call recording capabilities with advanced search, storage, and management features. 
          This guide will walk you through the essential steps to get Oreka up and running.
        </p>
        
        <Callout type="info" title="What You&apos;ll Learn">
          By the end of this guide, you&apos;ll understand how to install Oreka, configure 
          the system, and start recording calls in your environment.
        </Callout>
      </section>

      {/* Prerequisites */}
      <section className="doc-section">
        <h2>Prerequisites</h2>
        <p>Before you begin, make sure you have the following:</p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">System Requirements</h3>
            <p className="text-gray-600 mb-4">
              Minimum system requirements for Oreka:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Linux/Unix environment (Ubuntu 20.04+ recommended)</li>
              <li>• 4GB+ RAM (8GB+ recommended)</li>
              <li>• 100GB+ storage for recordings</li>
              <li>• Java 11+ (LTS version)</li>
              <li>• PostgreSQL 12+ with pgvector</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Network Requirements</h3>
            <p className="text-gray-600 mb-4">
              Network configuration for telephony integration:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Access to SIP/RTP streams</li>
              <li>• Network connectivity to telephony infrastructure</li>
              <li>• Firewall rules for required ports</li>
              <li>• SSL/TLS certificates for secure access</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="doc-section">
        <h2>Step-by-Step Installation</h2>
        
        <Step number={1} title="Prepare Your Environment">
          <p>
            Ensure your system meets the minimum requirements and install necessary dependencies 
            including Java, PostgreSQL, and development tools.
          </p>
          <CodeBlock
            title="Install Dependencies"
            language="bash"
            code={`# Ubuntu/Debian
sudo apt update
sudo apt install openjdk-11-jdk postgresql postgresql-contrib
sudo apt install build-essential libpq-dev portaudio19-dev

# CentOS/RHEL
sudo yum install java-11-openjdk-devel postgresql postgresql-server
sudo yum groupinstall "Development Tools"`}
          />
        </Step>

        <Step number={2} title="Setup Database">
          <p>
            Create PostgreSQL database and enable the pgvector extension for vector similarity search.
          </p>
          <CodeBlock
            title="Database Setup"
            language="sql"
            code={`-- Connect to PostgreSQL
sudo -u postgres psql

-- Create database and user
CREATE DATABASE oreka;
CREATE USER oreka_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE oreka TO oreka_user;

-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Run setup script
\\i supabase-setup.sql`}
          />
        </Step>

        <Step number={3} title="Install Oreka">
          <p>
            Download and install Oreka components, configure system services, and set up 
            the recording environment.
          </p>
          <CodeBlock
            title="Installation Commands"
            language="bash"
            code={`# Clone repository
git clone https://github.com/voiceip/oreka.git
cd oreka

# Build components
mvn clean install

# Create system user
sudo useradd -r -s /bin/false oreka
sudo mkdir -p /var/spool/oreka/recordings
sudo chown oreka:oreka /var/spool/oreka`}
          />
        </Step>

        <Step number={4} title="Configure System">
          <p>
            Configure OrkAudio, OrkTrack, and OrkWeb components with your specific 
            environment settings and telephony configuration.
          </p>
          <CodeBlock
            title="Configuration Files"
            language="bash"
            code={`# Copy configuration templates
cp config/oreka.conf.example config/oreka.conf
cp config/orkaudio.conf.example config/orkaudio.conf

# Edit configuration files
nano config/oreka.conf
nano config/orkaudio.conf

# Key configuration sections:
# [database] - Database connection settings
# [recording] - Storage and quality settings
# [audio] - Codec and format settings`}
          />
        </Step>

        <Step number={5} title="Start Services" isLast>
          <p>
            Start all Oreka services, verify they&apos;re running correctly, and test 
            the recording functionality.
          </p>
          <CodeBlock
            title="Start Services"
            language="bash"
            code={`# Start OrkTrack (metadata management)
java -jar orktrack/target/orktrack-*.jar &

# Start OrkAudio (recording engine)
./orkaudio/orkaudio --config config/orkaudio.conf &

# Start OrkWeb (web interface)
java -jar orkweb/target/orkweb-*.jar &

# Check service status
ps aux | grep oreka
netstat -tlnp | grep :8080`}
          />
        </Step>
      </section>

      {/* Configuration Details */}
      <section className="doc-section">
        <h2>Configuration Details</h2>
        <p>
          Understanding the configuration options is crucial for optimal system performance 
          and integration with your telephony infrastructure.
        </p>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-semibold mb-4">Key Configuration Sections</h3>
          
          <Table 
            headers={['Section', 'Purpose', 'Key Settings']}
            rows={[
              ['[database]', 'Database connection and performance', 'host, port, name, user, password, pool_size'],
              ['[recording]', 'Recording storage and quality', 'storage_path, max_file_size, compression, retention_days'],
              ['[audio]', 'Audio processing settings', 'sample_rate, channels, bit_depth, codec'],
              ['[storage]', 'Storage optimization', 'compression_enabled, encryption_enabled, backup_enabled'],
              ['[network]', 'Network and security', 'bind_address, ssl_enabled, max_connections'],
            ]}
            compact
          />
        </div>

        <Callout type="warning" title="Configuration Security">
          Always use strong passwords for database connections and ensure configuration 
          files have appropriate permissions (600 or 640).
        </Callout>
      </section>

      {/* Docker Deployment */}
      <section className="doc-section">
        <h2>Docker Deployment (Alternative)</h2>
        <p>
          For easier deployment and management, Oreka also supports Docker-based installation:
        </p>

        <CodeBlock
          title="Docker Compose"
          language="yaml"
          code={`version: '3.8'
services:
  orkaudio:
    build: ./orkaudio
    ports:
      - "8081:8081"
    volumes:
      - ./config:/etc/oreka
      - ./recordings:/var/spool/oreka
    environment:
      - OREKA_DB_HOST=postgres
      - OREKA_DB_NAME=oreka
      - OREKA_DB_USER=oreka_user
      - OREKA_DB_PASSWORD=your_password

  orktrack:
    build: ./orktrack
    ports:
      - "8082:8082"
    depends_on:
      - postgres
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/oreka

  orkweb:
    build: ./orkweb
    ports:
      - "8080:8080"
    depends_on:
      - orktrack
      - orkaudio

  postgres:
    image: postgres:15
    environment:
      - POSTGRES_DB=oreka
      - POSTGRES_USER=oreka_user
      - POSTGRES_PASSWORD=your_password
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./supabase-setup.sql:/docker-entrypoint-initdb.d/setup.sql

volumes:
  postgres_data:`}
        />
      </section>

      {/* Testing and Verification */}
      <section className="doc-section">
        <h2>Testing and Verification</h2>
        <p>
          After installation, it&apos;s important to verify that all components are working 
          correctly and can record calls as expected.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Service Health Checks</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Verify all services are running</li>
              <li>• Check service logs for errors</li>
              <li>• Test database connectivity</li>
              <li>• Verify web interface accessibility</li>
              <li>• Test API endpoints</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Recording Tests</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Test audio device detection</li>
              <li>• Verify codec support</li>
              <li>• Test recording quality</li>
              <li>• Verify storage functionality</li>
              <li>• Test search capabilities</li>
            </ul>
          </div>
        </div>

        <CodeBlock
          title="Health Check Commands"
          language="bash"
          code={`# Check service status
sudo systemctl status orktrack orkaudio orkweb

# Check logs
sudo journalctl -u orkaudio -f
sudo journalctl -u orktrack -f

# Test database connection
psql -U oreka_user -h localhost -d oreka -c "SELECT 1;"

# Test web interface
curl -I http://localhost:8080

# Test API endpoints
curl http://localhost:8080/api/health`}
        />
      </section>

      {/* Troubleshooting */}
      <section className="doc-section">
        <h2>Common Issues and Solutions</h2>
        <p>
          Here are some common issues you might encounter during installation and their solutions:
        </p>

        <Table 
          headers={['Issue', 'Cause', 'Solution']}
          rows={[
            ['OrkAudio won\'t start', 'Audio device permissions', 'Add user to audio group'],
            ['Database connection failed', 'Incorrect credentials', 'Verify database settings'],
            ['Recording quality issues', 'Codec mismatch', 'Check audio configuration'],
            ['Web interface not accessible', 'Port conflicts', 'Check port availability'],
            ['Storage permission errors', 'File permissions', 'Fix directory permissions'],
          ]}
        />

        <Callout type="tip" title="Debug Mode">
          Enable debug logging by setting <code>OREKA_LOG_LEVEL=DEBUG</code> environment 
          variable for detailed troubleshooting information.
        </Callout>
      </section>

      {/* Next Steps */}
      <section className="doc-section">
        <h2>Next Steps</h2>
        <p>
          Now that you have Oreka installed and running, here are some recommended next steps:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">User Management</h3>
            <p className="text-gray-600 mb-4">
              Set up user accounts, roles, and permissions for your organization
            </p>
            <a href="/user-management" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">Integration</h3>
            <p className="text-gray-600 mb-4">
              Integrate with your existing telephony infrastructure and systems
            </p>
            <a href="/integration" className="text-blue-600 hover:text-blue-800 font-medium">
              Explore Integration →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">Monitoring</h3>
            <p className="text-gray-600 mb-4">
              Set up monitoring, alerting, and performance optimization
            </p>
            <a href="/monitoring" className="text-blue-600 hover:text-blue-800 font-medium">
              View Monitoring →
            </a>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="doc-section">
        <h2>Need Help?</h2>
        <p>
          If you encounter any issues or have questions during installation, here are some resources:
        </p>
        
        <Callout type="success" title="Support Channels">
          <ul className="space-y-2">
            <li>• <strong>Documentation:</strong> Browse our comprehensive guides</li>
            <li>• <strong>GitHub:</strong> Check issues and contribute to the project</li>
            <li>• <strong>Community:</strong> Join our Discord for discussions</li>
            <li>• <strong>Email:</strong> Contact our support team directly</li>
          </ul>
        </Callout>
      </section>
    </div>
  );
}
