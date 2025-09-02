'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamic import to prevent hydration mismatch
const DocumentationLayout = dynamic(
  () => import('./layout/DocumentationLayout'),
  {
    ssr: false, // Disable SSR completely
    loading: () => (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-gray-500">Loading Oreka Documentation...</div>
        </div>
      </div>
    ),
  }
);

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-gray-500">Loading Oreka Documentation...</div>
        </div>
      </div>
    }>
      <DocumentationLayout>
        {children}
      </DocumentationLayout>
    </Suspense>
  );
}
