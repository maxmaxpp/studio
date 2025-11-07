"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Home, Mail, Brush } from "lucide-react";

const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/projects', label: 'Projects', icon: Brush },
    { href: '/#contact', label: 'Contact', icon: Mail },
]

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
            <nav className="hidden md:flex items-center gap-2">
                {navLinks.map(link => (
                     <Button key={link.href} asChild variant="ghost">
                        <Link href={link.href} className="text-base font-medium text-muted-foreground transition-colors hover:text-primary gap-2">
                            <link.icon className="h-4 w-4" />
                            {link.label}
                        </Link>
                     </Button>
                ))}
            </nav>
        </div>
      </div>
    </header>
  );
}
