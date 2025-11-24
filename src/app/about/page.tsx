import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="relative py-12 sm:py-16">
      <div className="absolute -top-24 -right-48 opacity-30 md:opacity-50 pointer-events-none">
        <Image src="/sun-design.png" alt="Sun design" width={600} height={600} />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <Image
              src="/heymaxx-portrait.png"
              alt="A portrait of Jenna."
              data-ai-hint="woman sitting"
              width={400}
              height={600}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="md:col-span-3 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              About Me
            </h1>
            <div className="text-lg text-foreground/80 space-y-4">
                <p>
                Hi, I’m Jenna—a Creative Virtual Assistant who loves building organized, aesthetic, and efficient digital spaces. I specialize in Notion setups, productivity systems, content planning, social media posting & scheduling, basic copywriting, and creative tasks like graphics, simple brand design, and video editing.
                </p>
                <p>
                My experience in the BPO industry strengthened my communication, multitasking, and client-handling skills—skills I now bring into every project. Whether it’s organizing workflows, crafting digital layouts, managing content, or creating visuals, I always aim for clarity, intention, and my maximum effort.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
