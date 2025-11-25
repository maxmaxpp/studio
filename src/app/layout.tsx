
'use client';

import { usePathname } from 'next/navigation';
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import SiteHeader from '@/components/site/header';
import SiteFooter from '@/components/site/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import HoneycombGrid from '@/components/sections/honeycomb-grid';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap" rel="stylesheet" />
        <meta name="title" content="Heymaxx.site | Freelance Services" />
        <meta name="description" content="Professional freelance services in Data Entry, Social Media Management, Graphic Design, and Development." />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body text-foreground antialiased overflow-x-hidden'
        )}
      >
        <div className="fixed inset-0 -z-10 opacity-30">
            <HoneycombGrid />
        </div>
        <FirebaseClientProvider>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-grow">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
