'use client';

import React, { useState } from 'react';

interface CodeBlockProps {
  title?: string;
  language: string;
  code: string;
}

export default function CodeBlock({ title, language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  if (!code) {
    return <div className="text-gray-500">No code provided</div>;
  }

  return (
    <div className="my-6">
      {title && (
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium text-gray-900">{title}</h4>
          <button
            onClick={copyToClipboard}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-sm text-gray-300">{language}</span>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm text-gray-100 font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
}
