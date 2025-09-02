'use client';

import React, { useState, useRef, useEffect } from 'react';
import { realAIService, AIRequest } from '@/lib/ai-service';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  sources?: string[];
  confidence?: number;
  relatedQuestions?: string[];
  analysis?: {
    questionType: string;
    complexity: string;
    topics: string[];
  };
  metadata?: {
    model: string;
    tokensUsed: number;
    processingTime: number;
  };
}

export default function AIChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your Oreka AI assistant powered by OpenAI. I can analyze your questions and provide intelligent responses based on Oreka documentation. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState([
    'What is Oreka?',
    'How does the poly-option system work?',
    'What is Aptos blockchain?',
    'How do smart contracts work?',
    'What are the trading fees?'
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Use the real AI service
      const aiRequest: AIRequest = {
        question: inputValue,
        conversationHistory: messages.slice(-4).map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        }))
      };

      const aiResponse = await realAIService.processRequest(aiRequest);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: aiResponse.answer,
        timestamp: new Date(),
        sources: aiResponse.sources,
        confidence: aiResponse.confidence,
        relatedQuestions: aiResponse.relatedQuestions,
        analysis: aiResponse.analysis,
        metadata: aiResponse.metadata
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Update suggested questions based on related topics
      if (aiResponse.relatedQuestions.length > 0) {
        setSuggestedQuestions(prev => [
          ...aiResponse.relatedQuestions.slice(0, 3),
          ...prev.slice(0, 2)
        ]);
      }

    } catch (error) {
      console.error('AI Service Error:', error);
      
      // Fallback response
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'I apologize, but I\'m currently experiencing technical difficulties. Please check your API key configuration or try again later.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    // Auto-send the suggested question
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        type: 'user',
        content: question,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      // Process with AI service
      setTimeout(async () => {
        try {
          const aiRequest: AIRequest = { question };
          const aiResponse = await realAIService.processRequest(aiRequest);
          
          const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            type: 'assistant',
            content: aiResponse.answer,
            timestamp: new Date(),
            sources: aiResponse.sources,
            confidence: aiResponse.confidence,
            relatedQuestions: aiResponse.relatedQuestions,
            analysis: aiResponse.analysis,
            metadata: aiResponse.metadata
          };
          
          setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
          console.error('AI Service Error:', error);
          const fallbackMessage: Message = {
            id: (Date.now() + 1).toString(),
            type: 'assistant',
            content: 'I apologize, but I\'m currently experiencing technical difficulties. Please check your API key configuration.',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, fallbackMessage]);
        } finally {
          setIsTyping(false);
        }
      }, 1000);
    }, 100);
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      realAIService.setApiKey(apiKey.trim());
      setShowApiKeyInput(false);
      setApiKey('');
      
      // Add success message
      const successMessage: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: 'API key configured successfully! I\'m now ready to provide intelligent responses using OpenAI. Ask me anything about Oreka!',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, successMessage]);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center"
        aria-label="Open AI Chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <div>
                  <h3 className="font-semibold">Oreka AI Assistant</h3>
                  <p className="text-xs text-blue-100">Powered by OpenAI GPT-4</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                  className="text-white hover:text-blue-100 transition-colors p-1"
                  title="Configure API Key"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* API Key Input */}
          {showApiKeyInput && (
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <form onSubmit={handleApiKeySubmit} className="space-y-2">
                <input
                  type="password"
                  placeholder="Enter OpenAI API Key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApiKeyInput(false)}
                    className="px-3 py-1 bg-gray-500 text-white text-xs rounded-md hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  
                  {/* Show AI response details */}
                  {message.type === 'assistant' && (
                    <div className="mt-2 space-y-1">
                      {message.confidence && (
                        <div className="text-xs text-gray-500">
                          Confidence: {Math.round(message.confidence * 100)}%
                        </div>
                      )}
                      {message.sources && message.sources.length > 0 && (
                        <div className="text-xs text-gray-500">
                          Sources: {message.sources.length} document(s)
                        </div>
                      )}
                      {message.metadata && (
                        <div className="text-xs text-gray-500">
                          Model: {message.metadata.model} • Tokens: {message.metadata.tokensUsed} • Time: {message.metadata.processingTime}ms
                        </div>
                      )}
                    </div>
                  )}
                  
                  <p className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md hover:bg-blue-100 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Oreka..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
