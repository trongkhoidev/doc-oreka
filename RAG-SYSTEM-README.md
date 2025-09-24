# 🤖 Oreka RAG System - Complete Implementation Guide

A comprehensive AI-powered documentation system using Retrieval-Augmented Generation (RAG) for intelligent, context-aware responses about Oreka telephony recording system.

## 🚀 Quick Start (5 minutes)

### 1. **Automatic Setup**
```bash
# Make setup script executable
chmod +x setup-rag.sh

# Run automated setup
./setup-rag.sh
```

### 2. **Manual Setup**
```bash
# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
# Edit .env.local with your API keys

# Build project
npm run build

# Start development server
npm run dev
```

## 🏗️ System Architecture

### Core Components

```
oreka-docs/
├── src/
│   ├── lib/
│   │   └── rag.ts              # RAG system core
│   ├── app/
│   │   └── api/
│   │       └── chat/
│   │           └── route.ts     # Chat API endpoint
│   └── components/
│       └── ChatWidget.tsx       # AI chat interface
├── content/                     # Documentation source
│   ├── overview.md
│   ├── architecture.md
│   ├── tech-stack.md
│   ├── how-to-run.md
│   └── faq.md
├── scripts/
│   └── ingest.ts               # Content ingestion
└── supabase-setup.sql          # Database schema
```

### Technology Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **AI Engine**: OpenAI GPT-4, text-embedding-3-small
- **Vector Database**: Supabase with pgvector extension
- **Styling**: Tailwind CSS
- **Content**: Markdown files with automatic chunking

## 🔧 Configuration

### Environment Variables

Create `.env.local` file:

```env
# OpenAI Configuration
OPENAI_API_KEY=sk-your_openai_api_key_here
OPENAI_MODEL=gpt-4
OPENAI_EMBEDDING_MODEL=text-embedding-3-small

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# App Configuration
NEXT_PUBLIC_APP_NAME=Oreka Documentation
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_APP_ENV=development
```

### Supabase Setup

1. **Create Project**
   - Go to [Supabase Dashboard](https://supabase.com/dashboard)
   - Create new project
   - Wait for setup completion

2. **Enable pgvector**
   ```sql
   -- In Supabase SQL Editor
   CREATE EXTENSION IF NOT EXISTS vector;
   ```

3. **Run Setup Script**
   ```sql
   -- Copy and paste supabase-setup.sql content
   -- This creates tables and functions
   ```

4. **Get Credentials**
   - Go to Settings → API
   - Copy Project URL and Service Role Key

## 📚 Content Management

### Content Structure

The system automatically processes markdown files from the `content/` directory:

```markdown
# Document Title

## Section 1
Content with **keywords** for better search.

## Section 2
More content with **technical terms**.

### Subsection
Detailed information about specific topics.
```

### Content Ingestion

```bash
# Ingest all content
npm run ingest

# Or run manually
npx tsx scripts/ingest.ts
```

**What happens during ingestion:**
1. **File Reading**: Reads all `.md` files from `content/`
2. **Chunking**: Splits content into 1000-character chunks
3. **Embedding**: Generates OpenAI embeddings for each chunk
4. **Storage**: Stores chunks and embeddings in Supabase
5. **Metadata**: Extracts titles, sections, and tags

### Adding New Content

1. **Create Markdown File**
   ```bash
   # Add new file to content/
   touch content/new-topic.md
   ```

2. **Write Content**
   ```markdown
   # New Topic
   
   ## Introduction
   Detailed explanation...
   
   ## Features
   - Feature 1
   - Feature 2
   ```

3. **Ingest Content**
   ```bash
   npm run ingest
   ```

## 🤖 AI Chat System

### How It Works

1. **User Query**: User asks question in chat interface
2. **Query Embedding**: System generates embedding for user question
3. **Vector Search**: Searches Supabase for similar content chunks
4. **Context Retrieval**: Retrieves most relevant chunks
5. **AI Generation**: OpenAI generates response using retrieved context
6. **Response Delivery**: Returns answer with source citations

### Chat Interface Features

- **Floating Widget**: Always accessible chat button
- **Conversation History**: Maintains context across messages
- **Source Citations**: Shows which documents were referenced
- **Similarity Scores**: Indicates confidence in retrieved content
- **API Key Management**: Secure OpenAI key configuration

### Example Queries

**Basic Questions:**
- "What is Oreka?"
- "How do I install Oreka?"
- "What codecs are supported?"

**Advanced Questions:**
- "Explain the architecture of Oreka"
- "How do I configure high availability?"
- "What are the security features?"

**Technical Questions:**
- "How does OrkAudio work?"
- "What database does Oreka use?"
- "How do I optimize performance?"

## 🔍 Search and Retrieval

### Vector Similarity Search

The system uses cosine similarity to find relevant content:

```typescript
// Search configuration
const searchConfig = {
  match_threshold: 0.7,    // Minimum similarity score
  match_count: 5,          // Number of results
  chunk_size: 1000         // Characters per chunk
};
```

### Search Results

Each search returns:
- **Content Chunks**: Relevant text segments
- **Similarity Scores**: 0.0 to 1.0 confidence
- **Metadata**: Source, title, section information
- **Context**: Extracted relevant sentences

### Optimizing Search

1. **Content Structure**
   - Use descriptive headings
   - Include relevant keywords
   - Structure with clear sections

2. **Chunking Strategy**
   - Optimal chunk size: 1000 characters
   - Preserve context boundaries
   - Avoid breaking mid-sentence

3. **Metadata Enhancement**
   - Descriptive titles
   - Relevant tags
   - Section categorization

## 📊 Monitoring and Analytics

### Health Checks

```bash
# API health check
curl http://localhost:3000/api/chat

# Expected response
{
  "status": "healthy",
  "message": "RAG system is operational"
}
```

### Performance Metrics

- **Response Time**: Target < 2 seconds
- **Accuracy**: Target > 90% with proper context
- **Uptime**: 99.9% (depends on OpenAI/Supabase)
- **Cost**: ~$0.01-0.05 per query

### Logging and Debugging

```typescript
// Enable debug logging
console.log('Search results:', searchResults);
console.log('Generated response:', response);
console.log('API call duration:', duration);
```

## 🚀 Deployment

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Production (Vercel)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy RAG system"
   git push origin main
   ```

2. **Connect Vercel**
   - Import GitHub repository
   - Add environment variables
   - Deploy automatically

3. **Environment Variables**
   - Add all variables from `.env.local`
   - Ensure production values are correct

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build and run
docker build -t oreka-rag .
docker run -p 3000:3000 oreka-rag
```

## 🔒 Security Considerations

### API Key Management

- **Never commit API keys** to version control
- **Use environment variables** for all sensitive data
- **Rotate keys regularly** for production systems
- **Monitor usage** to detect unauthorized access

### Data Privacy

- **Content encryption** at rest and in transit
- **Access logging** for all queries
- **User authentication** for sensitive operations
- **Data retention** policies compliance

### Network Security

- **HTTPS only** for production deployments
- **Firewall rules** to restrict access
- **Rate limiting** to prevent abuse
- **CORS configuration** for web security

## 🧪 Testing

### Unit Tests

```bash
# Run tests
npm test

# Test specific components
npm test -- --testNamePattern="RAG"
```

### Integration Tests

```bash
# Test API endpoints
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"query": "What is Oreka?"}'
```

### Load Testing

```bash
# Install artillery
npm install -g artillery

# Run load test
artillery quick --count 100 --num 10 http://localhost:3000/api/chat
```

## 🔧 Customization

### AI Model Configuration

```typescript
// In src/lib/rag.ts
const AI_MODELS = {
  'gpt-4': 'gpt-4',
  'gpt-3.5-turbo': 'gpt-3.5-turbo',
  'claude-3': 'claude-3-sonnet'
};

const EMBEDDING_MODELS = {
  'text-embedding-3-small': 'text-embedding-3-small',
  'text-embedding-3-large': 'text-embedding-3-large'
};
```

### Prompt Engineering

```typescript
// Customize system prompt
const systemPrompt = `You are an expert AI assistant for [Your Domain].

IMPORTANT GUIDELINES:
1. [Your specific guidelines]
2. [Behavior rules]
3. [Response format requirements]

Focus on helping users understand:
- [Topic 1]
- [Topic 2]
- [Topic 3]`;
```

### Search Parameters

```typescript
// Adjust search behavior
const searchConfig = {
  match_threshold: 0.8,    // Higher = more strict
  match_count: 10,         // More results
  chunk_size: 500,         // Smaller chunks
  max_tokens: 2000         // Longer responses
};
```

## 📈 Performance Optimization

### Caching Strategies

1. **Response Caching**
   ```typescript
   // Cache frequent queries
   const cache = new Map();
   const cachedResponse = cache.get(queryHash);
   ```

2. **Embedding Caching**
   ```typescript
   // Cache embeddings for repeated content
   const embeddingCache = new Map();
   ```

3. **Database Optimization**
   ```sql
   -- Optimize vector search
   CREATE INDEX ON docs USING ivfflat (embedding vector_cosine_ops);
   ```

### Scaling Considerations

1. **Horizontal Scaling**
   - Multiple API instances
   - Load balancer distribution
   - Shared database backend

2. **Vertical Scaling**
   - Increase server resources
   - Optimize database performance
   - Use faster storage solutions

3. **CDN Integration**
   - Static asset caching
   - Global content distribution
   - Reduced latency

## 🚨 Troubleshooting

### Common Issues

**"OpenAI API key not configured"**
- Check `.env.local` file exists
- Verify `OPENAI_API_KEY` is set correctly
- Restart development server

**"Supabase configuration not found"**
- Verify Supabase URL and service key
- Check `.env.local` format
- Ensure Supabase project is active

**"Module not found" errors**
- Run `npm install` again
- Check file paths in `src/lib/`
- Verify `tsconfig.json` paths

**Build failures**
- Check all environment variables
- Verify dependencies are installed
- Check console for specific errors

### Debug Commands

```bash
# Check system health
curl http://localhost:3000/api/chat

# Verify dependencies
npm list @supabase/supabase-js openai

# Check environment
cat .env.local

# Rebuild project
npm run build

# Check logs
npm run dev 2>&1 | tee debug.log
```

### Performance Issues

**Slow Response Times**
- Check OpenAI API latency
- Verify Supabase performance
- Monitor system resources
- Optimize chunk sizes

**High Costs**
- Monitor API usage
- Implement caching
- Optimize prompt length
- Use appropriate models

**Memory Issues**
- Check chunk sizes
- Monitor embedding generation
- Optimize database queries
- Implement garbage collection

## 🔮 Future Enhancements

### Planned Features

1. **Multi-Model Support**
   - Anthropic Claude
   - Google Gemini
   - Local LLM options

2. **Advanced Analytics**
   - Query analytics dashboard
   - Usage patterns
   - Performance metrics
   - Cost optimization

3. **Content Management**
   - Web-based content editor
   - Version control
   - Collaborative editing
   - Content validation

4. **Integration APIs**
   - Webhook support
   - REST API endpoints
   - GraphQL interface
   - Plugin system

### Community Contributions

We welcome contributions! Areas of interest:

- **Performance optimization**
- **New AI model integrations**
- **Enhanced search algorithms**
- **Better content processing**
- **Additional deployment options**

## 📚 Additional Resources

### Documentation

- [Oreka Project](https://github.com/voiceip/oreka)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

### Community

- [GitHub Issues](https://github.com/voiceip/oreka/issues)
- [Discord Community](https://discord.gg/oreka)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/oreka)

### Support

- **Documentation**: Check this README first
- **Community**: Ask in Discord or GitHub
- **Issues**: Report bugs on GitHub
- **Contributions**: Submit pull requests

---

## 🎉 Congratulations!

You now have a fully functional RAG system for Oreka documentation! The system provides:

✅ **Intelligent AI responses** based on your documentation  
✅ **Vector similarity search** for accurate content retrieval  
✅ **Professional chat interface** with source citations  
✅ **Scalable architecture** ready for production  
✅ **Comprehensive documentation** for maintenance  

**Next Steps:**
1. Configure your API keys
2. Ingest your documentation content
3. Test the AI chat system
4. Deploy to production
5. Monitor and optimize performance

**Happy coding with Oreka RAG System! 🚀**
