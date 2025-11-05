import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { testimonials } from '@/lib/data';
import placeholderData from '@/lib/placeholder-images.json';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">What Clients Say</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mt-4">
            Hear from businesses that have benefited from my services.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const avatarImage = placeholderData.placeholderImages.find(p => p.id === testimonial.avatarUrlId);
              return (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between bg-background shadow-lg rounded-lg">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <p className="text-foreground/80 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                        <div className="flex flex-col items-center mt-auto">
                          {avatarImage && (
                             <Avatar className="h-16 w-16 mb-4">
                               <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />
                               <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                             </Avatar>
                          )}
                          <p className="font-bold text-lg font-headline text-primary">{testimonial.name}</p>
                          <p className="text-sm text-foreground/60">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
