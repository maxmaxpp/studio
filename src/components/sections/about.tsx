import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">
              Jenna
            </h1>
            <p className="text-lg text-foreground/80">
            Hi, I’m Jenna—a Creative Virtual Assistant who loves building organized, aesthetic, and efficient digital spaces. I specialize in Notion setups, productivity systems, content planning, social media posting & scheduling, basic copywriting, and creative tasks like graphics, simple brand design, and video editing.
            </p>
            <p>
            My experience in the BPO industry strengthened my communication, multitasking, and client-handling skills—skills I now bring into every project. Whether it’s organizing workflows, crafting digital layouts, managing content, or creating visuals, I always aim for clarity, intention, and my maximum effort.
            </p>
          </div>
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <Image
              src="/heymaxx-portrait.png"
              alt="A portrait of Heymaxx."
              data-ai-hint="woman portrait"
              width={200}
              height={200}
              className="rounded-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
