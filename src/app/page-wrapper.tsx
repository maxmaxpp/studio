'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import SiteHeader from '@/components/site/header';
import SiteFooter from '@/components/site/footer';
import HoneycombGrid from '@/components/sections/honeycomb-grid';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectsPage = pathname === '/projects';

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 -z-10 opacity-30",
          !isProjectsPage && "blur-sm"
        )}
      >
        <HoneycombGrid />
      </div>
      <div
        className={cn(
          "relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-background/80 min-h-screen flex flex-col",
          !isProjectsPage && "backdrop-blur-sm"
        )}
      >
        <SiteHeader />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
