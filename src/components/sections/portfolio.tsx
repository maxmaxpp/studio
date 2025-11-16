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

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const projectImage = placeholderData.placeholderImages.find(p => p.id === project.imageUrlId);

  if (!projectImage) {
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
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg group transition-all duration-300 cursor-pointer">
                <Image
                  src={projectImage.imageUrl}
                  alt={project.title}
                  data-ai-hint={projectImage.imageHint}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-full p-0 bg-background border-none rounded-lg shadow-2xl">
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
            const projectImage = placeholderData.placeholderImages.find(p => p.id === project.imageUrlId);
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
