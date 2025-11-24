'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Asterisk = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="54"
    height="53"
    viewBox="0 0 54 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27 0.999982L29.5358 20.4641L45.9228 9.53588L35.011 23.011L53.021 27L35.011 30.989L45.9228 44.4641L29.5358 33.5359L27 53L24.4642 33.5359L8.07718 44.4641L18.989 30.989L0.979004 27L18.989 23.011L8.07718 9.53588L24.4642 20.4641L27 0.999982Z"
      fill="hsl(var(--accent))"
      fillOpacity="0.5"
    />
  </svg>
);

export default function HeroSection() {
  return (
    <section id="home" className="w-full py-20 md:py-32 relative">
       <div className="absolute -top-10 -left-16 opacity-30 md:opacity-50">
        <Image src="/planet-design.png" alt="Planet design" width={300} height={300} />
       </div>
       <Asterisk className="absolute top-20 right-1/3 w-12 h-12 opacity-50 text-accent" />
       <Asterisk className="absolute bottom-24 left-1/4 w-10 h-10 opacity-40 text-accent" />
       <Asterisk className="absolute bottom-16 right-1/4 w-16 h-16 opacity-60 text-accent" />
       <Asterisk className="absolute top-1/4 left-1/4 w-8 h-8 opacity-30 text-accent" />
       <Asterisk className="absolute top-1/2 right-1/4 w-14 h-14 opacity-40 text-accent" />


      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight text-foreground/90"
                >
                    Bringing Clarity, 
                    Creativity, and Care 
                    to Your Business
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-foreground/70"
                >
                    With a mix of structure, creativity, and thoughtful execution, I support you in keeping your business organized, efficient, and beautifully presented.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-wrap gap-4 justify-center md:justify-start items-center"
                >
                    <Button asChild size="lg" variant="accent">
                        <Link href="/#contact">WORK WITH ME</Link>
                    </Button>
                    <Button asChild size="lg" variant="link" className="text-accent-foreground/80 hover:text-accent-foreground">
                        <a href="/CV.pdf" download>DOWNLOAD CV</a>
                    </Button>
                </motion.div>
            </div>
            <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
                className="flex justify-center"
            >
                <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[460px] rounded-t-full overflow-hidden shadow-2xl shadow-primary/20">
                     <Image
                        src="/heymaxx-portrait.png"
                        alt="A portrait of Heymaxx."
                        data-ai-hint="woman portrait"
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
