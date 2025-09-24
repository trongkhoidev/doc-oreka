# Oreka Documentation with AI-Powered RAG System

This is a comprehensive documentation website for Oreka, an open-source telephony recording and retrieval system, enhanced with an AI-powered RAG (Retrieval-Augmented Generation) system.

## 🚀 Features

- **Comprehensive Documentation**: Detailed guides for Oreka architecture, technology stack, and implementation
- **AI-Powered Chat**: Intelligent assistant that answers questions based on Oreka documentation
- **Vector Search**: Semantic search using OpenAI embeddings and Supabase vector database
- **Real-time Responses**: Context-aware AI responses with source attribution
- **Professional UI**: Modern, responsive design with Tailwind CSS

## 🏗️ Architecture

The system consists of:

- **Frontend**: Next.js with Tailwind CSS
- **AI Service**: OpenAI GPT-4 integration
- **Vector Database**: Supabase with pgvector extension
- **RAG System**: Retrieval-Augmented Generation for intelligent responses
- **Content Management**: Markdown-based documentation with automatic ingestion

## 📋 Prerequisites

- Node.js 18+ and npm
- OpenAI API key
- Supabase project with pgvector extension enabled

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd oreka-docs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4
OPENAI_EMBEDDING_MODEL=text-embedding-3-small

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# App Configuration
NEXT_PUBLIC_APP_NAME=Oreka Documentation
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### 4. Set up Supabase Database

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the SQL script from `supabase-setup.sql`
4. Ensure the `pgvector` extension is enabled

### 5. Add your documentation content

Place your markdown files in the `content/` directory. The system will automatically process and ingest them.

## 🚀 Usage

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Ingest Documentation

After adding or updating content in the `content/` directory:

```bash
npm run ingest
```

This will:
- Process all markdown files
- Generate embeddings using OpenAI
- Store chunks in Supabase vector database
- Make content available for AI search

## 📚 Content Structure

The `content/` directory should contain markdown files with the following structure:

```markdown
# Document Title

## Section 1
Content with **keywords** and descriptions.

## Section 2
More content with **technical terms** and examples.
```

### Supported Metadata

- **Title**: First heading (#) becomes the document title
- **Source**: Filename becomes the source identifier
- **Section**: First ## heading becomes the primary section
- **Tags**: Bold text (**keyword**) becomes searchable tags

## 🤖 AI Chat System

### Features

- **Context-Aware Responses**: AI understands conversation history
- **Source Attribution**: Every response cites documentation sources
- **Relevance Scoring**: Shows confidence level for responses
- **Suggested Questions**: Pre-built questions for common topics

### Usage

1. Click the chat button (bottom-right corner)
2. Configure your OpenAI API key if not already set
3. Ask questions about Oreka
4. Get intelligent, context-aware responses

### Example Questions

- "What are the core components of Oreka?"
- "How does OrkAudio work?"
- "What codecs does Oreka support?"
- "How is Oreka deployed?"
- "What is the architecture of Oreka?"

## 🔧 Configuration

### OpenAI Models

- **Chat Model**: GPT-4 (configurable via `OPENAI_MODEL`)
- **Embedding Model**: text-embedding-3-small (configurable via `OPENAI_EMBEDDING_MODEL`)

### Vector Database

- **Similarity Threshold**: 0.7 (configurable in `lib/rag.ts`)
- **Max Results**: 5 (configurable in search functions)
- **Chunk Size**: 1000 characters (configurable in ingest script)

### Performance Tuning

- **Index Lists**: 100 (for IVFFlat index)
- **Batch Processing**: Configurable in ingest script
- **Caching**: Redis integration available (optional)

## 📊 Monitoring and Maintenance

### Health Checks

```bash
# Check API health
curl http://localhost:3000/api/chat

# Check system status
npm run health-check
```

### Database Maintenance

```sql
-- Get system statistics
SELECT * FROM get_docs_stats();

-- Clean up old documents
SELECT cleanup_old_docs(30);

-- Reindex embeddings
SELECT reindex_embeddings();
```

### Logs and Debugging

- Check browser console for frontend errors
- Check server logs for API errors
- Use Supabase dashboard for database monitoring

## 🔒 Security Considerations

- **API Keys**: Never commit API keys to version control
- **Environment Variables**: Use `.env.local` for local development
- **Database Access**: Use service role key only for server-side operations
- **Rate Limiting**: Implement rate limiting for production use

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Docker

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

### Manual Deployment

1. Build the application: `npm run build`
2. Copy `.next`, `public`, and `package.json` to server
3. Install dependencies: `npm ci --only=production`
4. Start the application: `npm start`

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Content Guidelines

- Use clear, concise language
- Include code examples where relevant
- Add metadata tags for better searchability
- Keep content up-to-date with latest Oreka versions

### Code Standards

- Follow TypeScript best practices
- Use ESLint for code quality
- Write meaningful commit messages
- Test changes locally before submitting

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

### Common Issues

1. **API Key Errors**: Check OpenAI API key configuration
2. **Database Connection**: Verify Supabase credentials
3. **Vector Extension**: Ensure pgvector is enabled in Supabase
4. **Memory Issues**: Check chunk size and batch processing settings

### Getting Help

- Check the [Issues](../../issues) page for known problems
- Create a new issue for bugs or feature requests
- Review the [Discussions](../../discussions) for community help

## 🔮 Future Enhancements

- **Multi-language Support**: Internationalization for global users
- **Advanced Analytics**: User interaction and AI performance metrics
- **Content Versioning**: Track documentation changes over time
- **Integration APIs**: Connect with external documentation sources
- **Advanced Search**: Filters, faceted search, and saved queries

## 📄 Changelog

### v1.0.0
- Initial release with RAG system
- OpenAI GPT-4 integration
- Supabase vector database
- Comprehensive Oreka documentation
- AI-powered chat interface

---

**Built with ❤️ for the Oreka community**
