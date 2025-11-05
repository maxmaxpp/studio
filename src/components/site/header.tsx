"use client";

import Link from "next/link";
import { Button } from "../ui/button";

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
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
            <nav className="hidden md:flex items-center gap-6">
                {navLinks.map(link => (
                     <Link key={link.href} href={link.href} className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
                        {link.label}
                     </Link>
                ))}
            </nav>
        </div>
      </div>
    </header>
  );
}
