'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
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

const Card = ({ step }: { step: { title: string, description: string } }) => {
    return (
        <div
            className="group relative h-[450px] w-[450px] overflow-hidden bg-secondary/50 rounded-lg p-8 shadow-sm border border-primary/10 text-center flex flex-col justify-center"
        >
            <h3 className="font-headline text-2xl font-bold text-accent mb-4">{step.title}</h3>
            <p className="text-foreground/70">{step.description}</p>
        </div>
    );
};

export default function WorkflowSection() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]);

    return (
        <section 
            id="workflow" 
            ref={targetRef}
            className="relative h-[400vh] bg-background"
        >
            <div 
                className="sticky top-0 flex h-screen items-center overflow-hidden"
                style={{
                    backgroundImage: 'radial-gradient(hsl(var(--border)) 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                }}
            >
                <div className="absolute top-1/2 left-12 -translate-y-1/2">
                    <h2 className="text-6xl font-logo text-foreground/80 transform -rotate-90">
                        My Workflow
                    </h2>
                </div>
                <motion.div style={{ x }} className="flex gap-8 pl-48">
                    {workflowSteps.map((step, i) => {
                        return <Card step={step} key={i} />;
                    })}
                </motion.div>
            </div>
        </section>
    )
}
