'use client';

import HoneycombGrid from '@/components/sections/honeycomb-grid';

export default function ProjectsPage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-background">
      <div className="text-center pt-16 md:pt-24 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">My Tech Stack</h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mt-4">
          Drag to explore the technologies I work with. Scroll to zoom in and out.
        </p>
      </div>
      <HoneycombGrid />
    </div>
  );
}
