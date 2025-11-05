"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects } from '@/lib/data';
import placeholderData from '@/lib/placeholder-images.json';
import { services } from '@/lib/data';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const projectCategories = ['All', ...services.map(s => s.title)];

function ProjectCard({ project, isGraphicDesign }: { project: (typeof projects)[0], isGraphicDesign: boolean }) {
  const projectImage = placeholderData.placeholderImages.find(p => p.id === project.imageUrlId);

  if (!projectImage) {
    return null;
  }

  const galleryImage = (
    <div className="relative aspect-video overflow-hidden rounded-lg group transition-all duration-300 hover:shadow-xl">
      <Image
        src={projectImage.imageUrl}
        alt={project.title}
        data-ai-hint={projectImage.imageHint}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );

  if (isGraphicDesign) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer">{galleryImage}</div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0">
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
  }

  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl rounded-lg h-full">
      <CardContent className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={projectImage.imageUrl}
              alt={project.title}
              data-ai-hint={projectImage.imageHint}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
      </CardContent>
      <CardHeader className="p-4">
        <CardTitle className="font-headline text-lg">{project.title}</CardTitle>
        <CardDescription className="text-sm text-foreground/70">{project.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}


export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">My Projects</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mt-4">
            A selection of projects that showcase my skills and expertise. Graphic design projects can be clicked to view larger.
          </p>
        </div>
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-8 h-auto flex-wrap">
            {projectCategories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          {projectCategories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => category === 'All' || project.category === category)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} isGraphicDesign={project.category === 'Graphic Design'} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
