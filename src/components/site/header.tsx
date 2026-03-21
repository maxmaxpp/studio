
"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from "../ui/sheet";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/services', label: 'My Services' },
    { href: '/projects', label: 'Project' },
    { href: '/#contact', label: 'Contact' },
]

const NavLink = ({ href, label, onLinkClick }: { href: string; label: string; onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void; }) => {
    return (
        <Button asChild variant="link" className="text-base font-medium text-primary/80 transition-colors hover:text-primary hover:underline underline-offset-4 decoration-2">
            <Link href={href} onClick={(e) => onLinkClick(e, href)}>
                {label}
            </Link>
        </Button>
    )
}

const MobileNavLink = ({ href, label, onLinkClick }: { href: string; label: string; onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void; }) => {
    return (
         <SheetClose asChild>
            <Link href={href} onClick={(e) => onLinkClick(e, href)} className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary">
                {label}
            </Link>
        </SheetClose>
    )
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Only handle hash links on the homepage
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // For other links, allow default Next.js behavior
  };


  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-sm" : ""
      )}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
            <Link href="/" className="text-4xl font-logo text-primary">
                Heymaxx.site
            </Link>
            <nav className="hidden md:flex items-center gap-1">
                {navLinks.map(link => (
                     <Button key={link.href} asChild variant="link" className="text-base font-medium text-primary/80 transition-colors hover:text-primary hover:underline underline-offset-4 decoration-2">
                        <Link href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
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
                        <SheetHeader className="p-4">
                           <SheetTitle className="text-2xl font-headline text-primary">Menu</SheetTitle>
                           <SheetDescription>
                                Navigate through the different sections of the site.
                           </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-6 px-4">
                            {navLinks.map(link => (
                                <SheetClose key={link.href} asChild>
                                    <Link href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary">
                                        {link.label}
                                    </Link>
                                </SheetClose>
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
