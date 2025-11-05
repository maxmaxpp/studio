"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { projects } from '@/lib/data';
import placeholderData from '@/lib/placeholder-images.json';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Button } from '../ui/button';

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
             <DialogTitle className="sr-only">{project.title}</DialogTitle>
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
  return (
    <section id="portfolio" className="w-full py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
