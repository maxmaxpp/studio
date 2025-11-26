
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
       </div>
       <div className="absolute inset-0 -z-10 opacity-20">
           <Image 
                src="/cons-design.png"
                alt="Constellation background"
                fill
                className="object-cover"
           />
       </div>
       <div 
        className="absolute inset-0 -z-10 opacity-20" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 600 600\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
        />

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
