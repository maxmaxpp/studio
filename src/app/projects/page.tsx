
'use client';

import { motion } from 'framer-motion';
import HoneycombGrid from '@/components/sections/honeycomb-grid';
import { useState } from 'react';
import Image from 'next/image';

export default function ProjectsPage() {
  const [isExploring, setIsExploring] = useState(false);

  const handleDragStart = () => {
    setIsExploring(true);
  };

  return (
    <div 
      className="relative h-[calc(100vh-8rem)] w-[calc(100vw)] -translate-x-1/2 left-1/2 overflow-hidden"
    >
       <div className="absolute inset-0 -z-10 opacity-40">
           <Image 
                src="/gal-design.png"
                alt="Galaxy background"
                fill
                className="object-cover"
           />
           <Image 
                src="/cons-design.png"
                alt="Constellation background"
                fill
                className="object-cover"
           />
       </div>

      <motion.div 
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: isExploring ? 0 : 1, y: isExploring ? -20 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-background/80 backdrop-blur-sm rounded-xl px-8 py-6 shadow-lg"
      >
        <h1 
          className="text-4xl md:text-5xl font-bold font-headline text-primary text-center"
        >
          My Projects
        </h1>
        <p 
          className="max-w-2xl mx-auto text-lg text-foreground/80 mt-2 text-center"
        >
          Drag to explore. Click to see details.
        </p>
      </motion.div>
      <HoneycombGrid isInteractive={true} onDragStart={handleDragStart} />
    </div>
  );
}
