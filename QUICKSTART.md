# 🚀 Oreka RAG System - Quick Start Guide

Get your AI-powered documentation system running in 5 minutes!

## ⚡ Quick Setup (5 minutes)

### 1. **Run Setup Script**
```bash
chmod +x setup-rag.sh
./setup-rag.sh
```

### 2. **Configure API Keys**
Edit `.env.local` and add your keys:
```env
OPENAI_API_KEY=sk-your-key-here
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-key
```

### 3. **Setup Supabase Database**
- Go to [Supabase Dashboard](https://supabase.com/dashboard)
- Create new project
- Run `supabase-setup.sql` in SQL Editor
- Copy URL and service key to `.env.local`

### 4. **Start Development Server**
```bash
npm run dev
```

### 5. **Test AI Chat**
- Open website
- Click chat button (bottom-right)
- Ask: "What is Oreka?"

## 🔑 Get API Keys

### OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in/Create account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)

### Supabase Keys
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create new project
3. Go to Settings → API
4. Copy:
   - Project URL
   - Service Role Key (anon key won't work)

## 📚 Add Your Documentation

### Option 1: Use Existing Content
The system already has Oreka documentation in `content/`:
- `overview.md` - Platform overview
- `architecture.md` - System architecture
- `tech-stack.md` - Technology details

### Option 2: Add Your Own
1. Create markdown files in `content/`
2. Use proper structure:
```markdown
# Document Title

## Section 1
Content with **keywords** for better search.

## Section 2
More content with **technical terms**.
```

### Option 3: Ingest All Content
```bash
npm run ingest
```

## 🤖 Test AI Features

### Basic Questions
- "What is Oreka?"
- "How does OrkAudio work?"
- "What codecs are supported?"

### Advanced Questions
- "Explain the architecture of Oreka"
- "How do I deploy Oreka?"
- "What are the security features?"

### Expected Responses
- ✅ Context-aware answers
- ✅ Source citations
- ✅ Confidence levels
- ✅ Related suggestions

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
```

## 📊 System Status

### Health Check
```bash
# API endpoint health
GET /api/chat

# Expected response
{
  "status": "healthy",
  "message": "RAG system is operational"
}
```

### Performance Metrics
- **Response Time**: < 2 seconds
- **Accuracy**: > 90% with proper context
- **Uptime**: 99.9% (depends on OpenAI/Supabase)

## 🔧 Advanced Configuration

### Customize AI Behavior
Edit `src/lib/rag.ts`:
```typescript
// Adjust similarity threshold
match_threshold: 0.7, // 0.0 to 1.0

// Change max results
match_count: 5, // Number of context chunks

// Modify chunk size
const CHUNK_SIZE = 1000; // Characters per chunk
```

### Add More AI Models
```typescript
// Support multiple models
const AI_MODELS = {
  'gpt-4': 'gpt-4',
  'gpt-3.5-turbo': 'gpt-3.5-turbo',
  'claude-3': 'claude-3-sonnet'
};
```

### Custom Prompts
```typescript
// Modify system prompt in generateResponse()
const systemPrompt = `You are an expert AI assistant for [Your Domain]...`;
```

## 🚀 Production Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy automatically

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

### Manual Server
1. `npm run build`
2. Copy `.next`, `public`, `package.json`
3. `npm ci --only=production`
4. `npm start`

## 📈 Monitoring & Maintenance

### Health Monitoring
- API response times
- Error rates
- OpenAI quota usage
- Supabase performance

### Regular Tasks
- Update documentation content
- Run `npm run ingest` after changes
- Monitor API costs
- Backup Supabase data

### Performance Optimization
- Adjust chunk sizes
- Optimize similarity thresholds
- Cache frequent queries
- Monitor vector database performance

## 🎯 Success Metrics

### What to Expect
- **First Response**: < 3 seconds
- **Accuracy**: > 85% for documented topics
- **User Satisfaction**: High engagement with chat
- **Cost**: < $10/month for moderate usage

### Optimization Tips
- Use descriptive document titles
- Include relevant keywords in **bold**
- Structure content with clear sections
- Regular content updates

## 🆘 Need Help?

### Documentation
- [Full README](README.md)
- [API Reference](docs/api.md)
- [Architecture Guide](docs/architecture.md)

### Community
- GitHub Issues
- Discord Community
- Stack Overflow

### Support
- Check troubleshooting section above
- Review error logs
- Verify configuration
- Test with simple queries first

---

**🎉 You're all set! Your Oreka RAG System is ready to provide intelligent, context-aware responses to your users.**
