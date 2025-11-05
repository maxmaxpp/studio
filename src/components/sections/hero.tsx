'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="w-full h-screen min-h-[600px] flex items-center justify-center bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter mb-4 text-primary"
        >
          Expertise at Your Service
        </motion.h1>
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-8"
        >
          From meticulous data entry to stunning graphic design, I provide reliable and high-quality freelance services to help your business thrive.
        </motion.p>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.5 }}
           className="flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg" className="font-bold">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold border-2">
            <Link href="#portfolio">View My Work</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
