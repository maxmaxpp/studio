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
                    top: `calc(-5vh + ${i * 25}px)`
                }}
                className="relative h-[500px] w-full max-w-4xl rounded-2xl p-8 shadow-2xl bg-secondary border border-primary/10 flex flex-col justify-center"
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
            style={{
                backgroundImage: 'radial-gradient(hsl(var(--border)) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
            }}
        >
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
