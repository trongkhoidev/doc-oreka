import React from 'react';

interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}

export default function Step({ number, title, children, isLast = false }: StepProps) {
  return (
    <div className="relative">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
            {number}
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <div className="text-gray-600">{children}</div>
        </div>
      </div>
      {!isLast && (
        <div className="ml-4 mt-4 border-l-2 border-gray-200 h-8"></div>
      )}
    </div>
  );
}
