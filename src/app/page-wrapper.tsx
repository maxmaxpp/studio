'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import SiteHeader from '@/components/site/header';
import SiteFooter from '@/components/site/footer';

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
          'relative z-10 mx-auto flex min-h-screen flex-col',
          !isProjectsPage &&
            'max-w-5xl bg-background px-4 sm:px-6 lg:px-8'
        )}
      >
        <SiteHeader />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
