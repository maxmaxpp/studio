'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useCollection, WithId } from '@/firebase/firestore/use-collection';
import { collection, query, orderBy } from 'firebase/firestore';
import { useFirestore, useMemoFirebase } from '@/firebase/provider';
import placeholderData from '@/lib/placeholder-images.json';
import { Skeleton } from '@/components/ui/skeleton';
import AddTestimonial from './testimonial-form';
import { StarRating } from '../ui/star-rating';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

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
    <li className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]">
      <blockquote className="flex flex-col justify-between h-full">
        <div className="relative z-20 mt-2">
            {testimonial.rating > 0 && (
                <StarRating rating={testimonial.rating} className="mb-4" size={20} />
            )}
            <span className="text-sm leading-[1.6] text-foreground/80 font-normal">
                "{testimonial.quote}"
            </span>
        </div>
        <div className="relative z-20 mt-6 flex flex-row items-center">
          <span className="flex flex-col gap-1">
             {avatarImage ? (
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={avatarImage.imageUrl}
                  alt={testimonial.name}
                  data-ai-hint={avatarImage.imageHint}
                />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
            ) : (
              <Avatar className="h-12 w-12">
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
            )}
            <div className='flex flex-col'>
                <span className="text-base leading-[1.6] text-primary font-bold">
                    {testimonial.name}
                </span>
                <span className=" text-sm leading-[1.6] text-foreground/60 font-normal">
                    {testimonial.company}
                </span>
            </div>
          </span>
        </div>
      </blockquote>
    </li>
  );
}

function TestimonialSkeleton() {
  return (
    <li className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]">
      <Skeleton className="h-5 w-24 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    </li>
  );
}


const InfiniteMovingTestimonials = ({
    testimonials,
    isLoading,
    speed = "slow",
  }: {
    testimonials: WithId<Testimonial>[] | null;
    isLoading: boolean;
    speed?: "fast" | "normal" | "slow";
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
  
    useEffect(() => {
        if (scrollerRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            addAnimation();
        }
    }, [testimonials, isLoading]);
  
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
          const scrollerContent = Array.from(scrollerRef.current.children);
    
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            if (scrollerRef.current) {
                scrollerRef.current.appendChild(duplicatedItem);
            }
          });
    
          getDirection();
          getSpeed();
        }
    }
    
    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty("--animation-direction", "forwards");
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className="scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            "animate-scroll"
          )}
        >
            {isLoading && Array.from({ length: 5 }).map((_, i) => <TestimonialSkeleton key={i} />)}
            {!isLoading && testimonials?.map((testimonial) => (
                <TestimonialCard testimonial={testimonial} key={testimonial.id} />
            ))}
        </ul>
      </div>
    );
};
  

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
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
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

        <InfiniteMovingTestimonials testimonials={testimonials} isLoading={isLoading} />

        <div className="text-center mt-12">
          <AddTestimonial />
        </div>
      </div>
    </section>
  );
}
