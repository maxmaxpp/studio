'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { projects } from '@/lib/data';
import placeholderData from '@/lib/placeholder-images.json';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const NUM_CIRCLES = projects.length;
const CIRCLE_SIZE = 80;
const GAP = 20;

function getGridSize(numCircles: number) {
  const sqrt = Math.sqrt(numCircles);
  const rows = Math.ceil(sqrt);
  const cols = Math.ceil(numCircles / rows);
  return { rows, cols };
}

const { rows, cols } = getGridSize(NUM_CIRCLES);
const GRID_WIDTH = cols * (CIRCLE_SIZE + GAP) - GAP;
const GRID_HEIGHT = rows * (CIRCLE_SIZE + GAP) - GAP;

export default function ProjectGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [3, 1]);
  const a = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [90, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        <div 
            className="absolute inset-0"
            style={{
                backgroundImage: 'radial-gradient(hsl(var(--border)) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
            }}
        />
        <motion.div
          style={{ scale, rotate }}
          className="absolute left-1/2 top-1/2"
        >
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: `${GAP}px`,
              width: `${GRID_WIDTH}px`,
              height: `${GRID_HEIGHT}px`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            {projects.map((project, i) => {
              const image = placeholderData.placeholderImages.find(p => p.id === project.imageUrlIds[0]);

              return (
                <motion.div
                  key={project.id}
                  style={{ opacity: a }}
                  className="relative flex items-center justify-center"
                >
                  <Link href={project.liveUrl || '#'} target={project.liveUrl ? '_blank' : '_self'}>
                    <motion.div
                        whileHover={{ scale: 1.1, zIndex: 10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="relative rounded-full overflow-hidden shadow-lg border border-border/10"
                        style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
                    >
                        {image ? (
                            <Image
                                src={image.imageUrl}
                                alt={project.title}
                                data-ai-hint={image.imageHint}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center text-xs text-center p-2 text-muted-foreground">
                                {project.title}
                            </div>
                        )}
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
