#!/bin/bash

# Oreka RAG System Setup Script
# This script helps you set up the RAG system automatically

echo "🚀 Oreka RAG System Setup"
echo "=========================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the oreka-docs directory"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Error: Node.js 18+ is required. Current version: $(node --version)"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo ""
    echo "🔧 Creating .env.local file..."
    cat > .env.local << EOF
# Oreka RAG System Environment Configuration
# Fill in your actual values below

# OpenAI Configuration
# Get your API key from: https://platform.openai.com/api-keys
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4
OPENAI_EMBEDDING_MODEL=text-embedding-3-small

# Supabase Configuration
# Get these from your Supabase project dashboard
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# App Configuration
NEXT_PUBLIC_APP_NAME=Oreka Documentation
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_APP_ENV=development
EOF
    echo "✅ Created .env.local file"
    echo "⚠️  Please edit .env.local and add your actual API keys"
else
    echo "✅ .env.local already exists"
fi

# Check if content directory exists
if [ ! -d "content" ]; then
    echo ""
    echo "📁 Creating content directory..."
    mkdir -p content
    echo "✅ Created content directory"
    echo "📝 Add your markdown files to the content/ directory"
else
    echo "✅ Content directory exists"
fi

# Check if scripts directory exists
if [ ! -d "scripts" ]; then
    echo ""
    echo "📁 Creating scripts directory..."
    mkdir -p scripts
    echo "✅ Created scripts directory"
fi

# Make ingest script executable
if [ -f "scripts/ingest.ts" ]; then
    chmod +x scripts/ingest.ts
    echo "✅ Made ingest script executable"
fi

# Build the project
echo ""
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Edit .env.local and add your API keys"
echo "2. Set up Supabase database (run supabase-setup.sql)"
echo "3. Add markdown files to content/ directory"
echo "4. Run: npm run ingest"
echo "5. Start development server: npm run dev"
echo ""
echo "🔗 Useful links:"
echo "- OpenAI API Keys: https://platform.openai.com/api-keys"
echo "- Supabase Dashboard: https://supabase.com/dashboard"
echo "- Supabase Setup SQL: supabase-setup.sql"
echo ""
echo "🚀 Happy coding with Oreka RAG System!"
