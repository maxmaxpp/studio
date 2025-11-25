
'use client';

import { Facebook, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

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


export default function TechStack() {
  const duplicatedIcons = [...icons, ...icons, ...icons];

  return (
    <section className="py-16 overflow-hidden">
        <div className="w-full relative h-48">
            <motion.div
                className="absolute top-0 left-0 flex gap-8"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    ease: 'linear',
                    duration: 30,
                    repeat: Infinity,
                }}
                style={{
                    width: '300%',
                }}
            >
                {duplicatedIcons.map((icon, index) => (
                    <motion.div
                        key={`${icon.name}-${index}`}
                        className="flex-shrink-0 p-3 bg-card/70 backdrop-blur-sm rounded-lg"
                        animate={{
                            y: [0, -30, 0, 30, 0]
                        }}
                        transition={{
                            duration: 4,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'loop',
                            delay: index * 0.1
                        }}
                    >
                        {icon.component}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
}
