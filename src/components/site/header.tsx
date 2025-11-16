"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Home, Mail, Brush, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

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
                     <Button key={link.href} asChild variant="ghost" className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
                        <Link href={link.href}>
                            <link.icon className="h-4 w-4" />
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
                                    <link.icon className="h-5 w-5" />
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
