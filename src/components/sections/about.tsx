import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import placeholderData from '@/lib/placeholder-images.json';

const aboutImage = placeholderData.placeholderImages.find(p => p.id === 'about-heymaxx');

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden shadow-2xl rounded-lg">
              <CardContent className="p-0">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    data-ai-hint={aboutImage.imageHint}
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                )}
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">About Me</h2>
            <p className="text-lg text-foreground/80">
              Hi, I'm Heymaxx, a dedicated and versatile freelancer with a passion for helping businesses succeed. With a strong background in technology and design, I've honed my skills across multiple disciplines to offer a comprehensive suite of services.
            </p>
            <p className="text-lg text-foreground/80">
              My approach is simple: I listen to your needs, understand your goals, and deliver high-quality work that exceeds expectations. Whether it's organizing complex data, building a vibrant social media presence, creating beautiful designs, or developing a functional website, I am committed to providing solutions that are both effective and efficient. I believe in building strong, collaborative relationships with my clients, ensuring transparency and communication every step of the way.
            </p>
            <p className="text-lg text-foreground/80">
              Let's work together to bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
