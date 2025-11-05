import { Briefcase, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Heymaxx.site. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://www.upwork.com/freelancers/~01c7e137b49c42ea81" aria-label="Upwork" target="_blank" rel="noopener noreferrer">
            <Briefcase className="h-6 w-6 transition-colors hover:text-primary" />
          </Link>
          <Link href="https://www.linkedin.com/in/angelyne-potenciano-57a930389/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 transition-colors hover:text-primary" />
          </Link>
          <Link href="https://github.com/potensmarxella-lang" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
