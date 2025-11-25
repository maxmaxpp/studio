'use client';

import { motion, useDragControls } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import placeholderData from '@/lib/placeholder-images.json';
import { useMemo } from 'react';

const ICON_SIZE = 90;
const GAP = 10;

// Function to generate honeycomb grid coordinates
function generateHoneycombCoordinates(count: number) {
  const coords = [];
  let q = 0, r = 0;
  coords.push({ q, r });

  const directions = [
    { q: 1, r: 0 }, { q: 0, r: 1 }, { q: -1, r: 1 },
    { q: -1, r: 0 }, { q: 0, r: -1 }, { q: 1, r: -1 }
  ];

  let ring = 1;
  while (coords.length < count) {
    q = ring;
    r = 0;
    for (let i = 0; i < ring; i++) {
        q--;
        r++;
    }
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < ring; j++) {
        if (coords.length >= count) break;
        coords.push({ q, r });
        q += directions[i].q;
        r += directions[i].r;
      }
      if (coords.length >= count) break;
    }
    ring++;
  }
  return coords;
}

function hexToPixel(q: number, r: number, size: number, gap: number) {
  const effectiveSize = size + gap;
  const x = effectiveSize * (3/2 * q);
  const y = effectiveSize * (Math.sqrt(3)/2 * q + Math.sqrt(3) * r);
  return { x, y };
}

export default function AppleWatchGrid() {
  const dragControls = useDragControls();
  const coordinates = useMemo(() => generateHoneycombCoordinates(projects.length), []);

  const gridItems = useMemo(() => {
    return projects.map((project, i) => {
      const coord = coordinates[i] || { q: 0, r: 0 };
      const { x, y } = hexToPixel(coord.q, coord.r, ICON_SIZE, GAP);
      const image = placeholderData.placeholderImages.find(p => p.id === project.imageUrlIds[0]);

      return {
        ...project,
        x,
        y,
        image,
      };
    });
  }, [coordinates]);

  const bounds = useMemo(() => {
    if (gridItems.length === 0) return { minX: 0, maxX: 0, minY: 0, maxY: 0 };
    const xs = gridItems.map(p => p.x);
    const ys = gridItems.map(p => p.y);
    return {
      minX: Math.min(...xs),
      maxX: Math.max(...xs),
      minY: Math.min(...ys),
      maxY: Math.max(...ys),
    };
  }, [gridItems]);
  
  const containerWidth = bounds.maxX - bounds.minX + ICON_SIZE * 2;
  const containerHeight = bounds.maxY - bounds.minY + ICON_SIZE * 2;

  return (
    <div
      className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
      onPointerDown={(e) => dragControls.start(e)}
      style={{ touchAction: 'none' }}
    >
      <motion.div
        drag="x"
        dragControls={dragControls}
        dragConstraints={{ 
            left: -containerWidth / 4, 
            right: containerWidth / 4,
        }}
        className="relative"
        style={{ width: containerWidth, height: containerHeight }}
      >
        {gridItems.map((project) => (
          <motion.div
            key={project.id}
            className="absolute"
            style={{
              width: ICON_SIZE,
              height: ICON_SIZE,
              left: `calc(50% + ${project.x}px)`,
              top: `calc(50% + ${project.y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
            whileHover={{ scale: 1.15, zIndex: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Link href={project.liveUrl || '#'} target={project.liveUrl ? '_blank' : '_self'} className="block w-full h-full">
              <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-border/20">
                {project.image ? (
                  <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    data-ai-hint={project.image.imageHint}
                    fill
                    className="object-cover"
                  />
                ) : (
                   <div className="w-full h-full bg-muted flex items-center justify-center text-xs text-center p-2 text-muted-foreground">
                        {project.title}
                    </div>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
