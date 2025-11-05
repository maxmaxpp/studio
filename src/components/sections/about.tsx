import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">
              Heymaxx
            </h1>
            <p className="text-lg text-foreground/80">
              I'm a dedicated and versatile freelancer with a passion for helping businesses succeed. With a strong background in technology and design, I've honed my skills across multiple disciplines to offer a comprehensive suite of services. Whether it's organizing complex data, building a vibrant social media presence, creating beautiful designs, or developing a functional website, I am committed to providing solutions that are both effective and efficient.
            </p>
          </div>
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <Image
              src="/heymaxx-portrait.jpg"
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
