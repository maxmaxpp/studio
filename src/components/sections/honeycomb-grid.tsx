'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { techStack } from '@/lib/data.tsx';

const ICON_SIZE = 80;
const GAP = 16;

const HoneycombGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const honeycombPoints = calculateHoneycombPoints(techStack.length, ICON_SIZE, GAP);

  return (
    <div ref={containerRef} className="relative w-full h-[150vh] cursor-grab active:cursor-grabbing">
      <div className="sticky top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
        <motion.div
          drag
          dragConstraints={{
            left: -300,
            right: 300,
            top: -300,
            bottom: 300,
          }}
          className="relative"
          style={{ scale, y }}
        >
          {techStack.map((item, index) => {
            const point = honeycombPoints[index];
            if (!point) return null; // Add a safeguard
            const { x, y } = point;
            return (
              <motion.div
                key={item.name}
                className="absolute flex items-center justify-center"
                style={{
                  width: ICON_SIZE,
                  height: ICON_SIZE,
                  left: x - ICON_SIZE / 2,
                  top: y - ICON_SIZE / 2,
                }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-full h-full bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-border">
                  {item.component}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

function calculateHoneycombPoints(numIcons: number, iconSize: number, gap: number) {
  if (numIcons === 0) return [];

  const points: { x: number; y: number }[] = [];
  points.push({ x: 0, y: 0 }); // Center icon

  if (numIcons === 1) return points;

  let ring = 1;
  while (points.length < numIcons) {
    for (let i = 0; i < ring; i++) {
      if (points.length >= numIcons) break;
      const x = (iconSize + gap) * Math.sqrt(3) * (ring - i / 2);
      const y = (iconSize + gap) * (3 / 2) * i;
      points.push({ x, y });
      if (i > 0) points.push({ x, y: -y });
      if (ring - i / 2 !== 0) points.push({ x: -x, y });
      if (i > 0 && ring - i / 2 !== 0) points.push({ x: -x, y: -y });
    }
    for (let i = 1; i < ring; i++) {
        if (points.length >= numIcons) break;
        const x = (iconSize + gap) * Math.sqrt(3) * i/2;
        const y = (iconSize + gap) * (3/2) * ring;
        points.push({x, y});
        points.push({x: -x, y});
        points.push({x, y: -y});
        points.push({x: -x, y: -y});
    }
    ring++;
  }
  return points;
}

export default HoneycombGrid;
