# How to Run Oreka

## Prerequisites

Before running Oreka, ensure you have the following installed:

- **Java 11+** (LTS version recommended)
- **PostgreSQL 12+** with pgvector extension
- **Linux/Unix environment** (Ubuntu 20.04+ recommended)
- **4GB+ RAM** (8GB+ recommended for production)
- **100GB+ storage** for audio recordings

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/voiceip/oreka.git
cd oreka
```

### 2. Database Setup

Create a PostgreSQL database and enable the pgvector extension:

```sql
-- Connect to PostgreSQL
psql -U postgres

-- Create database
CREATE DATABASE oreka;

-- Enable pgvector extension
CREATE EXTENSION vector;

-- Create required tables (see database schema)
```

### 3. Configuration

Copy the example configuration file:

```bash
cp config/oreka.conf.example config/oreka.conf
```

Edit `config/oreka.conf` with your database credentials and settings:

```ini
[database]
host=localhost
port=5432
name=oreka
user=oreka_user
password=your_password

[recording]
storage_path=/var/spool/oreka/recordings
max_file_size=100MB
compression=mp3
```

### 4. Build and Run

#### Using Maven

```bash
# Build the project
mvn clean install

# Run OrkTrack (metadata management)
java -jar orktrack/target/orktrack-*.jar

# Run OrkAudio (recording engine)
./orkaudio/orkaudio --config config/oreka.conf

# Run OrkWeb (web interface)
java -jar orkweb/target/orkweb-*.jar
```

#### Using Docker

```bash
# Build Docker images
docker build -t oreka/orktrack orktrack/
docker build -t oreka/orkaudio orkaudio/
docker build -t oreka/orkweb orkweb/

# Run with Docker Compose
docker-compose up -d
```

## Development Environment

### Local Development Setup

1. **Install Development Tools**
   ```bash
   # Install Maven
   sudo apt install maven

   # Install PostgreSQL development headers
   sudo apt install libpq-dev

   # Install audio development libraries
   sudo apt install portaudio19-dev libasound2-dev
   ```

2. **IDE Setup**
   - **IntelliJ IDEA**: Import as Maven project
   - **Eclipse**: Import existing Maven project
   - **VS Code**: Install Java and Maven extensions

3. **Debug Configuration**
   ```bash
   # Run with debug flags
   mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005"
   ```

### Testing

Run the test suite:

```bash
# Unit tests
mvn test

# Integration tests
mvn verify

# Run specific test
mvn test -Dtest=OrkTrackTest
```

## Production Deployment

### System Requirements

- **CPU**: 4+ cores (8+ for high-volume deployments)
- **Memory**: 8GB+ RAM (16GB+ recommended)
- **Storage**: SSD storage for database, HDD for recordings
- **Network**: Gigabit Ethernet, low latency to telephony infrastructure

### Deployment Options

#### Traditional Package Installation

1. **Create System User**
   ```bash
   sudo useradd -r -s /bin/false oreka
   sudo mkdir -p /var/spool/oreka
   sudo chown oreka:oreka /var/spool/oreka
   ```

2. **Install Dependencies**
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install postgresql postgresql-contrib
   sudo apt install openjdk-11-jdk
   sudo apt install nginx
   ```

3. **Configure Services**
   ```bash
   # Copy service files
   sudo cp systemd/orktrack.service /etc/systemd/system/
   sudo cp systemd/orkaudio.service /etc/systemd/system/
   sudo cp systemd/orkweb.service /etc/systemd/system/

   # Enable and start services
   sudo systemctl enable orktrack orkaudio orkweb
   sudo systemctl start orktrack orkaudio orkweb
   ```

#### Docker Deployment

1. **Create Docker Network**
   ```bash
   docker network create oreka-network
   ```

2. **Run with Docker Compose**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

3. **Monitor Services**
   ```bash
   docker-compose logs -f
   docker stats
   ```

### Load Balancing

For high-availability deployments:

1. **Multiple OrkAudio Instances**
   ```bash
   # Run multiple instances on different ports
   ./orkaudio --port 8081 --config config/oreka1.conf
   ./orkaudio --port 8082 --config config/oreka2.conf
   ```

2. **Nginx Load Balancer**
   ```nginx
   upstream oreka_backend {
       server 127.0.0.1:8081;
       server 127.0.0.1:8082;
       server 127.0.0.1:8083;
   }

   server {
       listen 80;
       server_name oreka.yourdomain.com;

       location / {
           proxy_pass http://oreka_backend;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

## Monitoring and Maintenance

### Health Checks

1. **Service Status**
   ```bash
   # Check service status
   sudo systemctl status orktrack orkaudio orkweb

   # Check logs
   sudo journalctl -u orktrack -f
   sudo journalctl -u orkaudio -f
   sudo journalctl -u orkweb -f
   ```

2. **Database Health**
   ```sql
   -- Check connection count
   SELECT count(*) FROM pg_stat_activity;

   -- Check table sizes
   SELECT schemaname, tablename, pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
   FROM pg_tables WHERE schemaname = 'public';
   ```

3. **Storage Monitoring**
   ```bash
   # Check disk usage
   df -h /var/spool/oreka

   # Check recording file count
   find /var/spool/oreka -name "*.wav" | wc -l
   ```

### Backup and Recovery

1. **Database Backup**
   ```bash
   # Create backup
   pg_dump -U oreka_user -h localhost oreka > oreka_backup_$(date +%Y%m%d).sql

   # Restore backup
   psql -U oreka_user -h localhost oreka < oreka_backup_20241219.sql
   ```

2. **Recording Backup**
   ```bash
   # Sync recordings to backup storage
   rsync -av /var/spool/oreka/ backup-server:/oreka-backup/

   # Compress old recordings
   find /var/spool/oreka -name "*.wav" -mtime +30 -exec gzip {} \;
   ```

### Performance Tuning

1. **JVM Settings**
   ```bash
   # Optimize JVM for production
   export JAVA_OPTS="-Xms4g -Xmx8g -XX:+UseG1GC -XX:MaxGCPauseMillis=200"
   ```

2. **PostgreSQL Tuning**
   ```sql
   -- Adjust shared buffers
   ALTER SYSTEM SET shared_buffers = '2GB';
   ALTER SYSTEM SET effective_cache_size = '6GB';
   ALTER SYSTEM SET maintenance_work_mem = '256MB';
   ```

3. **File System Optimization**
   ```bash
   # Use XFS for better performance
   sudo mkfs.xfs /dev/sdb1
   sudo mount -o noatime,nodiratime /dev/sdb1 /var/spool/oreka
   ```

## Troubleshooting

### Common Issues

1. **OrkAudio Won't Start**
   ```bash
   # Check audio device permissions
   sudo usermod -a -G audio oreka

   # Check PortAudio installation
   ldconfig -p | grep portaudio
   ```

2. **Database Connection Issues**
   ```bash
   # Check PostgreSQL status
   sudo systemctl status postgresql

   # Check connection limits
   sudo -u postgres psql -c "SHOW max_connections;"
   ```

3. **Recording Quality Issues**
   ```bash
   # Check audio device configuration
   arecord -l

   # Test audio capture
   arecord -D hw:0,0 -f S16_LE -r 8000 test.wav
   ```

### Debug Mode

Enable debug logging:

```bash
# Set debug level
export OREKA_LOG_LEVEL=DEBUG

# Run with verbose output
./orkaudio --verbose --config config/oreka.conf
```

### Performance Profiling

1. **JVM Profiling**
   ```bash
   # Enable JFR (Java Flight Recorder)
   java -XX:+FlightRecorder -XX:StartFlightRecording=duration=60s,filename=profile.jfr -jar orktrack.jar
   ```

2. **System Profiling**
   ```bash
   # Monitor system resources
   top -p $(pgrep -f oreka)
   iostat -x 1
   ```

## Security Considerations

### Network Security

1. **Firewall Configuration**
   ```bash
   # Allow only necessary ports
   sudo ufw allow 22/tcp    # SSH
   sudo ufw allow 80/tcp    # HTTP
   sudo ufw allow 443/tcp   # HTTPS
   sudo ufw allow 5432/tcp  # PostgreSQL (internal only)
   ```

2. **SSL/TLS Configuration**
   ```bash
   # Generate SSL certificate
   sudo certbot --nginx -d oreka.yourdomain.com

   # Configure HTTPS in Nginx
   ```

### Access Control

1. **Database Security**
   ```sql
   -- Create read-only user for web interface
   CREATE USER oreka_web WITH PASSWORD 'secure_password';
   GRANT SELECT ON ALL TABLES IN SCHEMA public TO oreka_web;
   ```

2. **File Permissions**
   ```bash
   # Secure recording storage
   sudo chmod 750 /var/spool/oreka
   sudo chown oreka:oreka /var/spool/oreka
   ```

## Scaling and High Availability

### Horizontal Scaling

1. **Multiple Recording Servers**
   - Deploy OrkAudio on multiple servers
   - Use load balancer for distribution
   - Synchronize recordings to central storage

2. **Database Clustering**
   - PostgreSQL read replicas
   - Connection pooling with PgBouncer
   - Automated failover

### Vertical Scaling

1. **Resource Optimization**
   - Increase JVM heap size
   - Optimize PostgreSQL settings
   - Use faster storage (NVMe SSDs)

2. **Caching Strategy**
   - Redis for session storage
   - Application-level caching
   - CDN for static assets

## Integration Examples

### REST API Usage

```bash
# Get recording list
curl -H "Authorization: Bearer $TOKEN" \
     https://oreka.yourdomain.com/api/recordings

# Download recording
curl -H "Authorization: Bearer $TOKEN" \
     https://oreka.yourdomain.com/api/recordings/123/download \
     -o recording_123.wav
```

### Webhook Integration

```bash
# Configure webhook for new recordings
curl -X POST -H "Authorization: Bearer $TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"url": "https://your-app.com/webhook", "events": ["recording.completed"]}' \
     https://oreka.yourdomain.com/api/webhooks
```

### Monitoring Integration

```bash
# Prometheus metrics endpoint
curl https://oreka.yourdomain.com/metrics

# Health check endpoint
curl https://oreka.yourdomain.com/health
```

---

**Next Steps**: After setting up Oreka, consider implementing monitoring, backup strategies, and security hardening for production use.
