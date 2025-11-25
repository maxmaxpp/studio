'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function SiteFooter() {
  const pathname = usePathname();
  const isProjectsPage = pathname === '/projects';

  return (
    <footer
      className={cn(
        "py-8 bg-transparent",
        !isProjectsPage && "backdrop-blur-md"
      )}
    >
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Heymaxx.site. All rights reserved.
      </div>
    </footer>
  );
}
