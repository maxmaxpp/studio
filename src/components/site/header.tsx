"use client";

import Link from "next/link";
import { Briefcase, Github, Linkedin } from "lucide-react";

export default function SiteHeader() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
            <Link href="/" className="text-2xl font-bold font-headline text-primary">
                Heymaxx.site
            </Link>
            <div className="flex items-center gap-4">
                <Link href="https://www.upwork.com/freelancers/~01c7e137b49c42ea81" aria-label="Upwork" target="_blank" rel="noopener noreferrer">
                    <Briefcase className="h-6 w-6 transition-colors text-muted-foreground hover:text-primary" />
                </Link>
                <Link href="https://www.linkedin.com/in/angelyne-potenciano-57a930389/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 transition-colors text-muted-foreground hover:text-primary" />
                </Link>
                <Link href="https://github.com/potensmarxella-lang" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6 transition-colors text-muted-foreground hover:text-primary" />
                </Link>
            </div>
        </div>
      </div>
    </header>
  );
}
