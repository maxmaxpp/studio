"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { projects, services } from '@/lib/data';
import placeholderData from '@/lib/placeholder-images.json';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const projectImage = placeholderData.placeholderImages.find(p => p.id === project.imageUrlId);

  if (!projectImage) {
    return null;
  }

  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl rounded-lg h-full flex flex-col border-none shadow-none">
      <CardContent className="p-0">
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg group transition-all duration-300 hover:shadow-xl cursor-pointer">
              <Image
                src={projectImage.imageUrl}
                alt={project.title}
                data-ai-hint={projectImage.imageHint}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-5xl w-full p-0">
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
      <CardHeader className="p-4 pl-0">
        <CardTitle className="font-headline text-xl font-bold">{project.title}</CardTitle>
        <CardDescription className="text-base text-foreground/70">{project.description}</CardDescription>
        <Button variant="link" className="p-0 h-auto justify-start text-base">View Project</Button>
      </CardHeader>
    </Card>
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
            <div className="flex flex-wrap gap-2 rounded-lg bg-muted p-1">
                {categories.map(category => (
                    <Button
                        key={category}
                        variant="ghost"
                        onClick={() => setSelectedCategory(category)}
                        className={cn(
                            "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                            selectedCategory === category
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:bg-background/50"
                        )}
                    >
                        {category}
                    </Button>
                ))}
            </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
