#!/usr/bin/env tsx

/**
 * Oreka Documentation Ingest Script
 * 
 * This script processes markdown files from the content/ directory and ingests them
 * into the Supabase vector database for RAG (Retrieval-Augmented Generation).
 * 
 * Usage:
 *   pnpm dlx tsx scripts/ingest.ts
 *   npm run ingest
 */

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { ragSystem, chunkText, extractMetadata } from '../src/lib/rag';

// Configuration
const CONTENT_DIR = join(process.cwd(), 'content');
const CHUNK_SIZE = 1000; // Maximum characters per chunk

interface IngestResult {
  file: string;
  chunks: number;
  success: boolean;
  error?: string;
}

async function ingestFile(filePath: string): Promise<IngestResult> {
  try {
    console.log(`Processing: ${filePath}`);
    
    // Read markdown file
    const content = readFileSync(filePath, 'utf-8');
    
    // Extract metadata from content
    const filename = filePath.split('/').pop() || 'unknown';
    const metadata = extractMetadata(content, filename);
    
    // Split content into chunks
    const chunks = chunkText(content, CHUNK_SIZE);
    
    console.log(`  - Title: ${metadata.title}`);
    console.log(`  - Chunks: ${chunks.length}`);
    console.log(`  - Tags: ${metadata.tags?.join(', ') || 'none'}`);
    
    // Ingest each chunk
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const chunkMetadata = {
        ...metadata,
        title: `${metadata.title} - Part ${i + 1}`,
        chunkIndex: i,
        totalChunks: chunks.length,
      };
      
      await ragSystem.ingestDocument(chunk, chunkMetadata);
    }
    
    return {
      file: filename,
      chunks: chunks.length,
      success: true,
    };
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return {
      file: filePath.split('/').pop() || 'unknown',
      chunks: 0,
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

async function ingestAllFiles(): Promise<void> {
  try {
    console.log('🚀 Starting Oreka documentation ingestion...\n');
    
    // Check if content directory exists
    if (!require('fs').existsSync(CONTENT_DIR)) {
      console.error(`❌ Content directory not found: ${CONTENT_DIR}`);
      console.log('Please create the content/ directory with your markdown files.');
      process.exit(1);
    }
    
    // Get all markdown files
    const files = readdirSync(CONTENT_DIR)
      .filter(file => file.endsWith('.md'))
      .map(file => join(CONTENT_DIR, file));
    
    if (files.length === 0) {
      console.log('📁 No markdown files found in content/ directory');
      console.log('Please add some .md files to get started.');
      return;
    }
    
    console.log(`📚 Found ${files.length} markdown files to process:\n`);
    
    // Process each file
    const results: IngestResult[] = [];
    
    for (const file of files) {
      const result = await ingestFile(file);
      results.push(result);
      console.log(''); // Add spacing between files
    }
    
    // Summary
    console.log('📊 Ingestion Summary:');
    console.log('=====================');
    
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);
    const totalChunks = successful.reduce((sum, r) => sum + r.chunks, 0);
    
    console.log(`✅ Successful: ${successful.length}/${results.length} files`);
    console.log(`❌ Failed: ${failed.length}/${results.length} files`);
    console.log(`📝 Total chunks ingested: ${totalChunks}`);
    
    if (failed.length > 0) {
      console.log('\n❌ Failed files:');
      failed.forEach(f => {
        console.log(`  - ${f.file}: ${f.error}`);
      });
    }
    
    if (successful.length > 0) {
      console.log('\n🎉 Ingestion completed successfully!');
      console.log('Your Oreka documentation is now available for AI-powered search and responses.');
    }
    
  } catch (error) {
    console.error('💥 Fatal error during ingestion:', error);
    process.exit(1);
  }
}

// Health check before starting
async function checkSystemHealth(): Promise<boolean> {
  try {
    console.log('🔍 Checking system health...');
    
    const isHealthy = await ragSystem.healthCheck();
    
    if (isHealthy) {
      console.log('✅ System is healthy and ready for ingestion');
      return true;
    } else {
      console.log('❌ System health check failed');
      console.log('Please check your OpenAI API key and Supabase configuration');
      return false;
    }
  } catch (error) {
    console.error('❌ Health check error:', error);
    return false;
  }
}

// Main execution
async function main() {
  try {
    // Check system health first
    const isHealthy = await checkSystemHealth();
    if (!isHealthy) {
      console.log('\n💡 Troubleshooting tips:');
      console.log('1. Ensure OPENAI_API_KEY is set in your environment');
      console.log('2. Check NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
      console.log('3. Verify your Supabase database has the required tables and functions');
      console.log('4. Ensure the pgvector extension is enabled in Supabase');
      process.exit(1);
    }
    
    console.log(''); // Add spacing
    
    // Start ingestion
    await ingestAllFiles();
    
  } catch (error) {
    console.error('💥 Unexpected error:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

export { ingestAllFiles, ingestFile, checkSystemHealth };
