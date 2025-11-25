
'use client';

import PortfolioSection from '@/components/sections/portfolio';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">My Work</h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mt-4">
          A selection of projects I'm proud of.
        </p>
      </div>
      <PortfolioSection />
    </div>
  );
}
