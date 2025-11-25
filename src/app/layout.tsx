
'use client';

import { usePathname } from 'next/navigation';
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import SiteHeader from '@/components/site/header';
import SiteFooter from '@/components/site/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import TechStack from '@/components/sections/tech-stack';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showTechStack = pathname === '/services';

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
        <FirebaseClientProvider>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
          {showTechStack && <TechStack />}
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}

