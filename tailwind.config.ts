import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // Ensure all utility classes are available
  safelist: [
    'bg-white',
    'bg-gray-50',
    'bg-gray-100',
    'bg-gray-200',
    'bg-gray-600',
    'bg-blue-50',
    'bg-blue-100',
    'bg-blue-600',
    'bg-green-50',
    'bg-green-100',
    'bg-green-600',
    'bg-purple-50',
    'bg-purple-100',
    'bg-purple-600',
    'bg-yellow-50',
    'bg-yellow-100',
    'bg-yellow-600',
    'text-white',
    'text-gray-50',
    'text-gray-100',
    'text-gray-200',
    'text-gray-400',
    'text-gray-500',
    'text-gray-600',
    'text-gray-700',
    'text-gray-800',
    'text-gray-900',
    'text-blue-600',
    'text-blue-700',
    'text-blue-800',
    'text-green-600',
    'text-purple-600',
    'text-yellow-600',
    'border-gray-200',
    'border-blue-200',
    'border-green-200',
    'border-purple-200',
    'border-yellow-200',
    'hover:bg-gray-100',
    'hover:bg-blue-100',
    'hover:shadow-lg',
    'hover:text-gray-900',
    'hover:text-blue-800',
  ],
};

export default config;
