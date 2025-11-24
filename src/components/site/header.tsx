"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Home, Mail, Brush, Menu, Info, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#services', label: 'My Services' },
    { href: '/projects', label: 'Project' },
    { href: '/#contact', label: 'Contact' },
    { href: '/about', label: 'About Me' },
]

export default function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-4xl font-logo text-primary">
                Heymaxx.site
            </Link>
            <nav className="hidden md:flex items-center gap-1">
                {navLinks.map(link => (
                     <Button key={link.href} asChild variant="link" className="text-base font-medium text-primary/80 transition-colors hover:text-primary hover:underline underline-offset-4 decoration-2">
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                     </Button>
                ))}
            </nav>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="grid gap-4 py-6">
                            {navLinks.map(link => (
                                <Link key={link.href} href={link.href} className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
