'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react';
import Image from 'next/image';

const icons = [
  {
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
  { component: <Facebook className="text-blue-600" /> },
  { component: <Instagram className="text-pink-500" /> },
  {
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
  { component: <Linkedin className="text-blue-700" /> },
  { component: <Youtube className="text-red-600" /> },
  { component: <MessageCircle className="text-green-500" /> },
];

const Wave = () => (
    <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path 
                fill="hsl(var(--background))" 
                fillOpacity="1" 
                d="M0,256L48,245.3C96,235,192,213,288,202.7C384,192,480,192,576,208C672,224,768,256,864,250.7C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
        </svg>
    </div>
);

export default function TechStack() {
  return (
    <section className="relative -mt-24 md:-mt-32 pb-16 pt-32 bg-secondary overflow-hidden">
        <Wave />
        <div className="relative container mx-auto text-center z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-12">
                My Tech Stack
            </h2>
            <div className="relative w-full flex justify-center">
                <div className="relative w-full max-w-4xl h-48">
                    {icons.map((icon, index) => (
                        <motion.div
                            key={index}
                            className="absolute"
                            style={{
                                top: '50%',
                                left: `${(index / (icons.length - 1)) * 90 + 5}%`,
                            }}
                            animate={{
                                y: ['-40%', '-60%', '-40%'],
                                x: ['-50%', '-50%', '-50%'],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "mirror",
                                delay: Math.random() * 2
                            }}
                        >
                            <div className="p-3 bg-card/70 backdrop-blur-sm rounded-full shadow-lg text-4xl md:text-5xl">
                                {icon.component}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
