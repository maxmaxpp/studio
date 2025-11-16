
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { projects, services } from '@/lib/data';
import placeholderData from '@/lib/placeholder-images.json';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

type Project = (typeof projects)[0];
type PlaceholderImage = (typeof placeholderData.placeholderImages)[0];

function ProjectImage({ image, projectTitle }: { image: PlaceholderImage; projectTitle: string }) {
  return (
    <Image
      src={image.imageUrl}
      alt={projectTitle}
      data-ai-hint={image.imageHint}
      fill
      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
    />
  );
}

function ProjectSlideshow({ images, projectTitle, isDialog }: { images: PlaceholderImage[]; projectTitle: string; isDialog?: boolean }) {
  if (!images.length) return null;

  if (images.length === 1 && !isDialog) {
    return (
       <div className={cn("relative overflow-hidden rounded-t-lg group transition-all duration-300", isDialog ? "aspect-video" : "aspect-[4/3] cursor-pointer")}>
        <Image
          src={images[0].imageUrl}
          alt={projectTitle}
          data-ai-hint={images[0].imageHint}
          fill
          className={cn("object-cover transition-transform duration-500 ease-in-out", !isDialog && "group-hover:scale-105")}
        />
      </div>
    )
  }
  
  return (
    <Carousel className={cn("w-full", isDialog ? "p-8" : "group")}>
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
             <div className={cn("relative overflow-hidden rounded-lg", isDialog ? "aspect-video" : "aspect-[4/3]")}>
              <Image
                src={image.imageUrl}
                alt={projectTitle}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious className={cn("absolute left-2 top-1/2 -translate-y-1/2 z-10", isDialog ? "sm:inline-flex" : "hidden group-hover:inline-flex")} />
          <CarouselNext className={cn("absolute right-2 top-1/2 -translate-y-1/2 z-10", isDialog ? "sm:inline-flex" : "hidden group-hover:inline-flex")} />
        </>
      )}
    </Carousel>
  );
}


function ProjectCard({ project }: { project: Project }) {
  const projectImages = project.imageUrlIds
    .map(id => placeholderData.placeholderImages.find(p => p.id === id))
    .filter((p): p is PlaceholderImage => !!p);

  if (!projectImages.length) {
    return null;
  }

  return (
    <motion.div
      layout
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="w-full"
    >
      <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl rounded-lg h-full flex flex-col border bg-card/80 shadow-sm hover:shadow-primary/10">
        <CardContent className="p-0">
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <ProjectSlideshow images={projectImages} projectTitle={project.title} />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-full p-0 bg-background border-none rounded-lg shadow-2xl">
              <DialogTitle className='sr-only'>{project.title}</DialogTitle>
              <ProjectSlideshow images={projectImages} projectTitle={project.title} isDialog />
            </DialogContent>
          </Dialog>
        </CardContent>
        <CardHeader className="p-4 flex-grow">
          <CardTitle className="font-headline text-xl font-bold">{project.title}</CardTitle>
          <CardDescription className="text-base text-foreground/70">{project.description}</CardDescription>
        </CardHeader>
        {project.liveUrl && (
          <CardFooter className="p-4 pt-0">
            <Button asChild className="w-full" variant="outline">
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Work
              </Link>
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}


export default function PortfolioSection() {
  const categories = services.map(s => s.title);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  
  const filteredProjects = projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="w-full py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 rounded-full bg-muted p-1.5 shadow-inner">
                {categories.map(category => (
                    <Button
                        key={category}
                        variant="ghost"
                        onClick={() => setSelectedCategory(category)}
                        className={cn(
                            "rounded-full px-4 md:px-5 py-2 text-xs md:text-sm font-medium transition-colors shrink-0",
                            selectedCategory === category
                            ? "bg-background text-primary shadow-sm"
                            : "text-muted-foreground hover:text-primary"
                        )}
                    >
                        {category}
                    </Button>
                ))}
            </div>
        </div>
        
        <motion.div 
          layout
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className={cn(
            selectedCategory === 'Graphic Design'
              ? 'columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'
              : 'grid sm:grid-cols-2 gap-x-8 gap-y-12'
          )}
        >
          {filteredProjects.map((project) => {
            const projectImage = placeholderData.placeholderImages.find(p => p.id === project.imageUrlIds[0]);
            if (!projectImage) return null;

            if (selectedCategory === 'Graphic Design') {
              return (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <motion.div
                      className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid shadow-md hover:shadow-primary/20 transition-shadow duration-300"
                      variants={{
                        hidden: { opacity: 0, y: 30, scale: 0.98 },
                        visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
                      }}
                      layout
                    >
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        data-ai-hint={projectImage.imageHint}
                        width={projectImage.width}
                        height={projectImage.height}
                        className="object-cover w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                       <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-full p-0 bg-background/80 backdrop-blur-md border-none rounded-lg shadow-2xl">
                    <DialogTitle className='sr-only'>{project.title}</DialogTitle>
                    <div className="relative aspect-video">
                        <Image
                            src={projectImage.imageUrl}
                            alt={project.title}
                            data-ai-hint={projectImage.imageHint}
                            fill
                            className="object-contain"
                        />
                    </div>
                  </DialogContent>
                </Dialog>
              );
            } else {
              return <ProjectCard key={project.id} project={project} />;
            }
          })}
        </motion.div>
      </div>
    </section>
  );
}
