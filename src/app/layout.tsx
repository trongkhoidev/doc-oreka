import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oreka Documentation - Decentralized Prediction Markets',
  description: 'Complete documentation for Oreka, the decentralized prediction market platform on Aptos blockchain. Learn how to create markets, place bets, and earn rewards.',
  keywords: 'Oreka, prediction markets, Aptos, blockchain, DeFi, crypto, sports betting, news markets',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Prevent browser extensions from interfering with hydration */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <ChatWidget />
      </body>
    </html>
  );
}
