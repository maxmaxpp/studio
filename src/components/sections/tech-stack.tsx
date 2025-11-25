
'use client';

import { Facebook, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';

const icons = [
  {
    name: 'Notion',
    component: (
      <Image
        src="/tech-icons/notion.svg"
        alt="Notion"
        width={48}
        height={48}
        className="w-10 h-10 md:w-12 md:h-12"
      />
    ),
  },
  {
    name: 'Canva',
    component: (
      <Image
        src="/tech-icons/canva.svg"
        alt="Canva"
        width={48}
        height={48}
        className="w-10 h-10 md:w-12 md:h-12"
      />
    ),
  },
  {
    name: 'CapCut',
    component: (
      <Image
        src="/tech-icons/capcut.svg"
        alt="CapCut"
        width={48}
        height={48}
        className="w-10 h-10 md:w-12 md:h-12"
      />
    ),
  },
  { name: 'Facebook', component: <Facebook className="text-blue-600 w-10 h-10 md:w-12 md:h-12" /> },
  { name: 'Instagram', component: <Instagram className="text-pink-500 w-10 h-10 md:w-12 md:h-12" /> },
  {
    name: 'TikTok',
    component: (
      <Image
        src="/tech-icons/tiktok.svg"
        alt="TikTok"
        width={40}
        height={40}
        className="w-9 h-9 md:w-10 md:h-10"
      />
    ),
  },
  { name: 'LinkedIn', component: <Linkedin className="text-blue-700 w-10 h-10 md:w-12 md-h-12" /> },
  { name: 'YouTube', component: <Youtube className="text-red-600 w-10 h-10 md:w-12 md-h-12" /> },
  { name: 'Messenger', component: <MessageCircle className="text-green-500 w-10 h-10 md:w-12 md-h-12" /> },
];

function generatePoints(numPoints: number, width: number, height: number, amplitude: number, frequency: number) {
  let points = '';
  for (let i = 0; i <= numPoints; i++) {
    const x = (i / numPoints) * width;
    const y = height / 2 + amplitude * Math.sin((i / numPoints) * Math.PI * 2 * frequency);
    points += `${x},${y} `;
  }
  return points.trim();
}


export default function TechStack() {
    const duplicatedIcons = useMemo(() => [...icons, ...icons, ...icons], []);

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 1200 200" className="absolute w-full h-auto" preserveAspectRatio="none">
                <motion.path
                    d="M 0 100 Q 300 0, 600 100 T 1200 100"
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                    strokeDasharray="5 5"
                />
            </svg>

            {duplicatedIcons.map((icon, index) => {
                const totalIcons = duplicatedIcons.length;
                const pathLength = 1200; 

                return (
                    <motion.div
                        key={`${icon.name}-${index}`}
                        className="absolute flex-shrink-0"
                        style={{
                            offsetPath: `path('M 0 100 Q 300 0, 600 100 T 1200 100')`,
                            offsetDistance: '0%',
                            top: 0, 
                            left: 0, 
                        }}
                        animate={{
                            offsetDistance: '100%',
                        }}
                        transition={{
                            duration: 15,
                            ease: 'linear',
                            repeat: Infinity,
                            delay: (index / totalIcons) * 15,
                        }}
                    >
                        <motion.div
                             className="p-3 bg-card/70 backdrop-blur-sm rounded-lg"
                             animate={{
                                 y: [0, -20, 0, 20, 0]
                             }}
                             transition={{
                                 duration: 3,
                                 ease: 'easeInOut',
                                 repeat: Infinity,
                                 repeatType: 'loop',
                                 delay: index * 0.2
                             }}
                        >
                            {icon.component}
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
}
