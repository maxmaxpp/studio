'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import WorkExperience from '@/components/sections/work-experience';

export default function AboutPage() {
  return (
    <div className="relative py-12 sm:py-16">
      <div className="absolute -top-24 -right-48 opacity-30 md:opacity-50 pointer-events-none">
        <Image src="/sun-design.png" alt="Sun design" width={600} height={600} />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex flex-col items-center gap-8">
            <motion.div 
              layoutId="heymaxx-portrait" 
              className="flex justify-center"
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <Image
                src="/heymaxx-portrait.png"
                alt="A portrait of Jenna."
                data-ai-hint="woman sitting"
                width={400}
                height={600}
                className="rounded-lg object-cover shadow-lg"
              />
            </motion.div>
            <div className="flex gap-4">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-accent/30" />
              ))}
            </div>
          </div>
          <div className="md:col-span-3 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              About Me
            </h1>
            <div className="text-lg text-foreground/80 space-y-4">
              <p>
                Hi, I’m Jenna—a Creative Virtual Assistant who loves building
                organized, aesthetic, and efficient digital spaces. I specialize
                in Notion setups, productivity systems, content planning, social
                media posting & scheduling, basic copywriting, and creative
                tasks like graphics, simple brand design, and video editing.
              </p>
              <p>
                My experience in the BPO industry strengthened my
                communication, multitasking, and client-handling skills—skills
                I now bring into every project. Whether it’s organizing
                workflows, crafting digital layouts, managing content, or
                creating visuals, I always aim for clarity, intention, and my
                maximum effort.
              </p>
            </div>
          </div>
        </div>
        <WorkExperience />
      </div>
    </div>
  );
}
