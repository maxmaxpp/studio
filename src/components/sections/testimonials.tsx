'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useCollection, WithId } from '@/firebase/firestore/use-collection';
import { collection, query, orderBy } from 'firebase/firestore';
import { useFirestore, useMemoFirebase } from '@/firebase/provider';
import placeholderData from '@/lib/placeholder-images.json';
import { Skeleton } from '@/components/ui/skeleton';
import AddTestimonial from './testimonial-form';
import { StarRating } from '../ui/star-rating';

interface Testimonial {
  name: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrlId?: string;
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: WithId<Testimonial>;
}) {
  const avatarImage = placeholderData.placeholderImages.find(
    (p) => p.id === testimonial.avatarUrlId
  );
  return (
    <div className="p-1 h-full">
      <Card className="h-full flex flex-col justify-between bg-background shadow-lg rounded-xl border-none">
        <CardContent className="p-6 flex flex-col items-center text-center">
           {testimonial.rating > 0 && (
             <StarRating rating={testimonial.rating} className="mb-4" size={20} />
           )}
          <p className="text-foreground/80 italic mb-6 flex-grow">
            "{testimonial.quote}"
          </p>
          <div className="flex flex-col items-center mt-auto">
            {avatarImage ? (
              <Avatar className="h-16 w-16 mb-4">
                <AvatarImage
                  src={avatarImage.imageUrl}
                  alt={testimonial.name}
                  data-ai-hint={avatarImage.imageHint}
                />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
            ) : (
              <Avatar className="h-16 w-16 mb-4">
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
            )}
            <p className="font-bold text-lg font-headline text-primary">
              {testimonial.name}
            </p>
            <p className="text-sm text-foreground/60">{testimonial.company}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TestimonialSkeleton() {
  return (
    <div className="p-1 h-full">
       <Card className="h-full flex flex-col justify-between bg-background shadow-lg rounded-xl border-none">
        <CardContent className="p-6 flex flex-col items-center text-center">
             <Skeleton className="h-5 w-24 mb-4" />
            <Skeleton className="h-4 w-3/4 mb-6" />
             <Skeleton className="h-4 w-1/2 mb-2" />
            <div className="flex flex-col items-center mt-auto">
                <Skeleton className="h-16 w-16 rounded-full mb-4" />
                <Skeleton className="h-6 w-24 mb-2" />
                <Skeleton className="h-4 w-32" />
            </div>
        </CardContent>
       </Card>
    </div>
  );
}

export default function TestimonialsSection() {
  const firestore = useFirestore();
  const testimonialsCollection = useMemoFirebase(
    () => (firestore ? query(collection(firestore, 'testimonials'), orderBy('createdAt', 'desc')) : null),
    [firestore]
  );
  const {
    data: testimonials,
    isLoading,
    error,
  } = useCollection<Testimonial>(testimonialsCollection);

  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            What Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mt-4">
            Hear from businesses that have benefited from my services.
          </p>
        </div>

        {error && (
          <div className="text-center text-red-500">
            <p>Error loading testimonials: {error.message}</p>
          </div>
        )}

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {isLoading &&
              Array.from({ length: 3 }).map((_, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialSkeleton />
                </CarouselItem>
              ))}
            {!isLoading &&
              testimonials &&
              testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
        <div className="text-center mt-12">
          <AddTestimonial />
        </div>
      </div>
    </section>
  );
}
