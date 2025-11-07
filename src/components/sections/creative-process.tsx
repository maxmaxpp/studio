import { Lightbulb, Pencil, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: Lightbulb,
    title: '1. Discovery & Concept',
    description: 'We start by understanding your vision and goals to create a solid concept.',
  },
  {
    icon: Pencil,
    title: '2. Design & Development',
    description: 'I bring the concept to life with creative design and precise development.',
  },
  {
    icon: Rocket,
    title: '3. Launch & Refine',
    description: 'After launch, I monitor and refine the project to ensure optimal performance.',
  },
];

export default function CreativeProcessSection() {
  return (
    <section id="process" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">My Creative Process</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mt-4">
            A collaborative journey from idea to execution.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background box-content hidden md:block"></div>
                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary mb-6">
                    <step.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
