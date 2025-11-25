'use client';

import HoneycombGrid from '@/components/sections/honeycomb-grid';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <div className="relative w-full h-[150vh] overflow-hidden bg-background">
      <div className="text-center pt-16 md:pt-24 mb-8 sticky top-0 z-20 bg-background/80 backdrop-blur-sm pb-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold font-headline text-primary"
        >
          My Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-foreground/80 mt-4"
        >
          Drag to explore. Scroll to zoom. Click to see details.
        </motion.p>
      </div>
      <HoneycombGrid />
    </div>
  );
}
