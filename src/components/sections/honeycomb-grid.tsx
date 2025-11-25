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
            const { x, y } = honeycombPoints[index];
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
  const points = [];
  let ring = 0;
  let countInRing = 1;

  points.push({ x: 0, y: 0 }); // Center icon

  while (points.length < numIcons) {
    ring++;
    const iconsInRing = 6 * ring;
    for (let i = 0; i < iconsInRing && points.length < numIcons; i++) {
      const angle = (Math.PI / 3) * i - (Math.PI / 6) * (ring % 2);
      const dist = (iconSize + gap) * ring;
      
      let x = dist * Math.cos(angle);
      let y = dist * Math.sin(angle);
      
      // Adjust for hexagonal packing
      if(ring > 0) {
        const side = Math.floor(i / ring);
        const step = i % ring;

        const hexWidth = (iconSize + gap) * Math.sqrt(3);
        const hexHeight = (iconSize + gap) * 2;

        let startX = 0, startY = 0;
        let dx = 0, dy = 0;

        switch(side) {
            case 0: // Right
                startX = ring * hexWidth/2;
                startY = -ring * hexHeight/4;
                dx = 0;
                dy = step * hexHeight/2;
                break;
            case 1: // Bottom right
                startX = ring * hexWidth/2;
                startY = ring * hexHeight/4;
                dx = -step * hexWidth/2;
                dy = step * hexHeight/4;
                break;
            case 2: // Bottom left
                startX = 0;
                startY = ring * hexHeight/2;
                dx = -step * hexWidth/2;
                dy = -step * hexHeight/4;
                break;
            case 3: // Left
                startX = -ring * hexWidth/2;
                startY = ring * hexHeight/4;
                dx = 0;
                dy = -step * hexHeight/2;
                break;
            case 4: // Top left
                startX = -ring * hexWidth/2;
                startY = -ring * hexHeight/4;
                dx = step * hexWidth/2;
                dy = -step * hexHeight/4;
                break;
            case 5: // Top right
                startX = 0;
                startY = -ring * hexHeight/2;
                dx = step * hexWidth/2;
                dy = step * hexHeight/4;
                break;
        }

        const angle_deg = i / iconsInRing * 360;
        const radius = (iconSize + gap) * ring;
        x = radius * Math.cos(angle_deg * Math.PI / 180);
        y = radius * Math.sin(angle_deg * Math.PI / 180);
      }
      
      points.push({ x: points[0].x + x, y: points[0].y + y });
    }
  }

  // A more structured hexagonal layout calculation
  const structuredPoints: {x:number, y:number}[] = [];
  const h = (iconSize + gap); // height of hexagon (apothem to apothem)
  const w = h * Math.sqrt(3) / 2; // width from center to vertex
  
  let currentRing = 0;
  let index = 0;

  while(index < numIcons) {
      if (currentRing === 0) {
          structuredPoints.push({ x: 0, y: 0 });
          index++;
      } else {
          let curr = { x: 0, y: -currentRing * h }; // Start at top
          // Top-right to right
          for(let i=0; i<currentRing && index < numIcons; i++) {
              curr = {x: curr.x + w, y: curr.y + h/2};
              structuredPoints.push(curr);
              index++;
          }
          // Right to bottom-right
          for(let i=0; i<currentRing && index < numIcons; i++) {
              curr = {x: curr.x, y: curr.y + h};
              structuredPoints.push(curr);
              index++;
          }
           // Bottom-right to bottom-left
          for(let i=0; i<currentRing && index < numIcons; i++) {
              curr = {x: curr.x - w, y: curr.y + h/2};
              structuredPoints.push(curr);
              index++;
          }
          // Bottom-left to left
          for(let i=0; i<currentRing && index < numIcons; i++) {
              curr = {x: curr.x - w, y: curr.y - h/2};
              structuredPoints.push(curr);
              index++;
          }
          // Left to top-left
          for(let i=0; i<currentRing && index < numIcons; i++) {
              curr = {x: curr.x, y: curr.y - h};
              structuredPoints.push(curr);
              index++;
          }
          // Top-left to top
          for(let i=0; i<currentRing-1 && index < numIcons; i++) {
              curr = {x: curr.x + w, y: curr.y - h/2};
              structuredPoints.push(curr);
              index++;
          }
           if (index < numIcons) {
              curr = {x: curr.x + w, y: curr.y - h/2};
              index++;
          }
      }
      currentRing++;
  }
  
  return structuredPoints;
}


export default HoneycombGrid;
