
'use client';

import { Facebook, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react';
import Image from 'next/image';

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

const IconCarousel = () => (
    <div
      className="flex flex-nowrap gap-4 animate-[scroll_20s_linear_infinite]"
    >
      {[...icons, ...icons].map((icon, index) => (
        <div
          key={`${icon.name}-${index}`}
          className="flex-shrink-0 p-3 bg-card/70 backdrop-blur-sm rounded-full shadow-lg"
        >
          {icon.component}
        </div>
      ))}
    </div>
)

export default function TechStack() {
  return (
    <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto text-center z-10">
            <div
                className="relative w-full overflow-hidden"
                style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
                <IconCarousel />
            </div>
        </div>
    </section>
  );
}
