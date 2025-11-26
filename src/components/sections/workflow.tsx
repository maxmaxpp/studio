'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const workflowSteps = [
    {
        title: "Discovery Chat",
        description: "A quick conversation to understand your needs, goals, and the kind of support you're looking for. This helps me get a clear picture of your brand, style, and priorities before we start."
    },
    {
        title: "Planning & Briefing",
        description: "Once I understand your direction, I create a simple plan or outline of the project. You'll receive a clear breakdown of deliverables, timelines, and what to expect."
    },
    {
        title: "Drafting",
        description: "This is where the creation begins—from layouts, templates, designs, content plans, to system structures. I build the first version based on the details we discussed."
    },
    {
        title: "Revisions",
        description: "We refine the work together. You can request adjustments so everything aligns with your vision—colors, layouts, copy, flow, or overall style."
    },
    {
        title: "Final Delivery",
        description: "Once everything is polished, I send the final files or give you access to your completed system/design. Everything is organized, ready to use, and ready to implement."
    },
    {
        title: "Posting / Scheduling (If Needed)",
        description: "For social media-related tasks, I can handle the uploading, scheduling, and organization of your content. This ensures consistency without the extra stress on your end."
    }
]

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


const Card = ({ 
    step, 
    i, 
    progress,
    range,
    targetScale,
} : {
    step: { title: string, description: string },
    i: number,
    progress: any,
    range: number[],
    targetScale: number
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={containerRef} className="sticky top-0 h-screen flex items-center justify-center">
            <motion.div
                style={{ 
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 600 600\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                }}
                className="relative h-[500px] w-full max-w-4xl rounded-2xl p-8 shadow-2xl bg-secondary border border-primary/10 flex flex-col justify-center bg-blend-soft-light"
            >
                <h3 className="font-headline text-3xl font-bold text-accent mb-4 text-center">{step.title}</h3>
                <p className="text-foreground/80 text-lg text-center max-w-lg mx-auto">{step.description}</p>
            </motion.div>
        </div>
    );
};

export default function WorkflowSection() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <section 
            id="workflow" 
            className="relative w-full bg-background py-20"
        >
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: 'radial-gradient(hsl(var(--border)) 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                }}
            />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Asterisk className="absolute top-1/4 left-[5%] w-8 h-8 opacity-30 text-accent animate-spin-slow [animation-delay:-1s]" />
              <Asterisk className="absolute top-1/2 right-[5%] w-14 h-14 opacity-40 text-accent animate-spin-slow [animation-delay:-3s]" />
              <Asterisk className="absolute top-[10%] right-[10%] w-12 h-12 opacity-50 text-accent animate-spin-slow" />
              <Asterisk className="absolute bottom-[15%] left-[10%] w-10 h-10 opacity-40 text-accent animate-spin-slow [animation-delay:-2s]" />
              <Asterisk className="absolute bottom-[5%] right-[15%] w-16 h-16 opacity-60 text-accent animate-spin-slow [animation-delay:-4s]" />
              <Asterisk className="absolute top-[5%] left-[15%] w-6 h-6 opacity-20 text-accent animate-spin-slow [animation-delay:-5s]" />
              <Asterisk className="absolute bottom-[20%] right-[25%] w-8 h-8 opacity-30 text-accent animate-spin-slow [animation-delay:-6s]" />
              <Asterisk className="absolute top-[30%] left-[20%] w-12 h-12 opacity-40 text-accent animate-spin-slow [animation-delay:-7s]" />
              <Asterisk className="absolute bottom-[10%] left-[30%] w-14 h-14 opacity-50 text-accent animate-spin-slow [animation-delay:-8s]" />
              <Asterisk className="absolute top-[40%] right-[20%] w-10 h-10 opacity-30 text-accent animate-spin-slow [animation-delay:-9s]" />
              <Asterisk className="absolute bottom-1/2 left-[2%] w-12 h-12 opacity-50 text-accent animate-spin-slow [animation-delay:-1s]" />
              <Asterisk className="absolute top-3/4 right-[2%] w-10 h-10 opacity-40 text-accent animate-spin-slow [animation-delay:-3s]" />
              <Asterisk className="absolute top-[5%] right-[2%] w-16 h-16 opacity-60 text-accent animate-spin-slow [animation-delay:-5s]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={containerRef} className="relative">
                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-6xl font-logo text-foreground/80">
                            My Workflow
                        </h2>
                    </div>
                    {workflowSteps.map((step, i) => {
                        const targetScale = 1 - ( (workflowSteps.length - i) * 0.05 );
                        return <Card 
                            step={step} 
                            i={i} 
                            key={i} 
                            progress={scrollYProgress} 
                            range={[i * .125, 1]}
                            targetScale={targetScale}
                        />;
                    })}
                </div>
            </div>
        </section>
    )
}
