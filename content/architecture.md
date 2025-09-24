# Oreka Architecture

## System Overview

Oreka follows a modular, distributed architecture designed for high availability and scalability. The system is built around three core components that work together to provide comprehensive telephony recording capabilities.

## Architecture Diagram

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Telephony     │    │   OrkAudio      │    │   OrkTrack      │
│   Infrastructure│────│   (Recording    │────│   (Metadata     │
│   (SIP/RTP)     │    │    Engine)      │    │   Management)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │                       │
                                │                       │
                                ▼                       ▼
                       ┌─────────────────┐    ┌─────────────────┐
                       │   Audio Storage │    │   PostgreSQL    │
                       │   (File System) │    │   (Metadata DB) │
                       └─────────────────┘    └─────────────────┘
                                │                       │
                                │                       │
                                └───────────┬───────────┘
                                            │
                                            ▼
                                   ┌─────────────────┐
                                   │    OrkWeb      │
                                   │  (Web UI/API)  │
                                   └─────────────────┘
```

## Core Components

### 1. OrkAudio - Audio Recording Engine

**Purpose**: Primary audio capture and processing component

**Responsibilities**:
- Capture audio streams from SIP/RTP sources
- Real-time audio compression and format conversion
- Quality monitoring and error handling
- Audio file management and storage

**Technical Details**:
- **Language**: C++ for performance-critical audio processing
- **Protocols**: SIP, RTP, various audio codecs
- **Formats**: WAV, MP3, OGG, FLAC support
- **Compression**: Real-time encoding with configurable quality

**Deployment**:
- Runs as a system service (systemd on Linux)
- Can be deployed on dedicated recording servers
- Supports multiple instances for load balancing

### 2. OrkTrack - Metadata Management

**Purpose**: Track and manage call metadata and events

**Responsibilities**:
- Call event correlation and tracking
- Metadata extraction and storage
- Call routing and participant information
- Event logging and audit trails

**Technical Details**:
- **Language**: Java for business logic and database operations
- **Database**: PostgreSQL for metadata storage
- **Events**: Call start/end, transfers, holds, participants
- **Correlation**: Links related calls and events

**Database Schema**:
```sql
-- Core tables
calls (id, start_time, end_time, duration, source, destination)
call_events (id, call_id, event_type, timestamp, data)
participants (id, call_id, role, extension, name)
recordings (id, call_id, file_path, format, size, duration)
```

### 3. OrkWeb - Web Interface and API

**Purpose**: Provide web-based access to recorded calls and system management

**Responsibilities**:
- User authentication and authorization
- Call search and retrieval interface
- Audio playback and download
- System administration and configuration
- REST API for external integrations

**Technical Details**:
- **Frontend**: Modern JavaScript framework (React/Vue.js)
- **Backend**: Java servlet container (Tomcat)
- **API**: RESTful endpoints for external access
- **Security**: Role-based access control (RBAC)

## Data Flow

### 1. Call Recording Process

1. **Call Initiation**: SIP call starts, OrkAudio detects new call
2. **Audio Capture**: OrkAudio begins recording RTP audio stream
3. **Metadata Collection**: OrkTrack captures call events and metadata
4. **Storage**: Audio saved to file system, metadata to database
5. **Correlation**: OrkTrack links audio files with call metadata
6. **Indexing**: Call becomes searchable through OrkWeb

### 2. Call Retrieval Process

1. **Search Request**: User searches for calls through OrkWeb
2. **Query Processing**: OrkWeb queries PostgreSQL database
3. **Results Display**: Matching calls shown with metadata
4. **Audio Access**: User selects call for playback/download
5. **File Retrieval**: OrkWeb streams audio from storage
6. **Access Logging**: All access attempts logged for audit

## Storage Architecture

### Audio Storage

**File System Structure**:
```
/var/spool/oreka/recordings/
├── YYYY/
│   ├── MM/
│   │   ├── DD/
│   │   │   ├── HH/
│   │   │   │   ├── call_12345.wav
│   │   │   │   ├── call_12346.wav
│   │   │   │   └── ...
│   │   └── ...
│   └── ...
└── ...
```

**Storage Features**:
- Hierarchical organization by date/time
- Configurable retention policies
- Automatic cleanup of expired recordings
- Support for multiple storage backends

### Database Storage

**PostgreSQL Configuration**:
- **Version**: 12+ recommended
- **Extensions**: Required extensions for full functionality
- **Backup**: Automated backup strategies
- **Replication**: Master-slave setup for high availability

## Network Architecture

### Internal Communication

**Component Communication**:
- OrkAudio ↔ OrkTrack: TCP/IP for metadata exchange
- OrkTrack ↔ OrkWeb: Database queries and API calls
- OrkWeb ↔ Storage: File system access and database queries

**Security**:
- Internal network isolation
- Encrypted communication channels
- Firewall rules for component access

### External Interfaces

**SIP Integration**:
- Passive monitoring of SIP traffic
- Support for various SIP server configurations
- RTP stream capture and processing

**Web Access**:
- HTTPS for secure web access
- Load balancer support for high availability
- CDN integration for global access

## Scalability Features

### Horizontal Scaling

**Multiple Instances**:
- OrkAudio instances can run on multiple servers
- OrkTrack can be clustered for high availability
- OrkWeb supports load balancing

**Load Distribution**:
- Round-robin call distribution
- Geographic distribution for global deployments
- Automatic failover and recovery

### Vertical Scaling

**Resource Allocation**:
- Configurable memory and CPU limits
- Database connection pooling
- Audio processing optimization

## Deployment Options

### Docker Deployment

**Containerization**:
- Each component in separate containers
- Docker Compose for local development
- Kubernetes for production orchestration

**Benefits**:
- Consistent environment across deployments
- Easy scaling and updates
- Simplified dependency management

### Traditional Deployment

**Package Installation**:
- Debian packages for Ubuntu/Debian systems
- RPM packages for Red Hat/CentOS systems
- Manual installation scripts available

**System Requirements**:
- Linux kernel 4.4+
- 4GB RAM minimum, 8GB+ recommended
- 100GB+ storage for recordings
- Network interface for SIP monitoring

## Monitoring and Maintenance

### Health Checks

**Component Monitoring**:
- Service status monitoring
- Resource usage tracking
- Error rate monitoring
- Performance metrics collection

**Alerting**:
- Email notifications for critical issues
- SNMP integration for enterprise monitoring
- Webhook support for custom integrations

### Backup and Recovery

**Backup Strategy**:
- Automated database backups
- Recording file synchronization
- Configuration backup and versioning
- Disaster recovery procedures

**Recovery Procedures**:
- Component restart procedures
- Database recovery processes
- Full system restoration
- Data integrity verification
