
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import PageWrapper from './page-wrapper';

export const metadata: Metadata = {
  title: 'Heymaxx.site | Freelance Services',
  description: 'Professional freelance services in Data Entry, Social Media Management, Graphic Design, and Development.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body text-foreground antialiased overflow-x-hidden'
        )}
      >
        <FirebaseClientProvider>
          <PageWrapper>{children}</PageWrapper>
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
