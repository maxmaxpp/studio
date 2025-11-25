
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
        fill="currentColor"
      />
    </svg>
  );

const DownArrow = () => (
    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/30">
        <path d="M12 4V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 31L12 36L17 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


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

export default function WorkflowSection() {
  return (
    <section 
        id="workflow" 
        className="w-full py-20 md:py-32 relative overflow-hidden"
        style={{
            backgroundImage: 'radial-gradient(hsl(var(--border)) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
        }}
    >
        <Asterisk className="absolute top-1/4 left-10 w-20 h-20 text-primary/30 opacity-50 -rotate-12" />
        <Asterisk className="absolute top-1/3 right-24 w-12 h-12 text-accent/30 opacity-50 rotate-12" />
        <Asterisk className="absolute bottom-1/4 left-20 w-10 h-10 text-accent/30 opacity-50 rotate-6" />
        <Asterisk className="absolute bottom-1/3 right-8 w-24 h-24 text-primary/30 opacity-50 -rotate-6" />

        <div className="container mx-auto px-4 md:px-6 text-center relative">
            <h2 className="text-6xl font-logo text-foreground/80 mb-16">
                My Workflow
            </h2>

            <div className="flex flex-col items-center gap-4">
                {workflowSteps.map((step, index) => (
                    <>
                        <div key={step.title} className="bg-secondary/50 rounded-lg p-6 max-w-lg w-full shadow-sm border border-primary/10">
                            <h3 className="font-headline text-2xl font-bold text-accent mb-2">{step.title}</h3>
                            <p className="text-foreground/70">{step.description}</p>
                        </div>
                        {index < workflowSteps.length - 1 && <DownArrow />}
                    </>
                ))}
            </div>
        </div>
    </section>
  )
}
