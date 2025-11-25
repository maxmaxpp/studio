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
      {!isProjectsPage && (
        <div className="fixed inset-0 -z-10 opacity-30 blur-sm">
          <HoneycombGrid isInteractive={false} />
        </div>
      )}
      <div
        className={cn(
          'relative z-10 mx-auto flex min-h-screen flex-col',
          !isProjectsPage &&
            'max-w-5xl bg-background/80 px-4 backdrop-blur-sm sm:px-6 lg:px-8'
        )}
      >
        <SiteHeader />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
