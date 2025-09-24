import { NextRequest, NextResponse } from 'next/server';
import { ragSystem } from '@/lib/rag';

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory, apiKey } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Process the request using RAG system (pass per-request apiKey if provided)
    const response = await ragSystem.processRequest(message, conversationHistory, { apiKey });

    return NextResponse.json({
      success: true,
      data: response,
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Failed to process chat request'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Health check endpoint
    const isHealthy = await ragSystem.healthCheck();
    
    if (isHealthy) {
      return NextResponse.json({
        status: 'healthy',
        message: 'RAG system is operational',
        timestamp: new Date().toISOString(),
      });
    } else {
      return NextResponse.json(
        { 
          status: 'unhealthy',
          message: 'RAG system is experiencing issues'
        },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error('Health check error:', error);
    
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Health check failed'
      },
      { status: 500 }
    );
  }
}
