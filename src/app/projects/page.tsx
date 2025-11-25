
'use client';

import { motion } from 'framer-motion';

export default function ProjectsPage() {

  return (
    <div 
      className="relative w-full min-h-[calc(100vh-10rem)] overflow-hidden"
    >
      <div className="text-center pt-12 pb-8 absolute top-0 left-0 right-0 z-20 pointer-events-none">
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
          Drag to explore. Click to see details.
        </motion.p>
      </div>
      {/* The HoneycombGrid is now rendered by PageWrapper on this route */}
    </div>
  );
}
