
'use client';

import { motion, useDragControls, PanInfo } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects as allProjects, techStackWithProjects } from '@/lib/data.tsx';
import placeholderData from '@/lib/placeholder-images.json';
import { useMemo, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const ICON_SIZE = 90;
const GAP = 10;

// Function to generate honeycomb grid coordinates
function generateHoneycombCoordinates(count: number) {
  const coords = [];
  let q = 0, r = 0;
  coords.push({ q, r });

  const directions = [
    { q: 1, r: 0 }, { q: 0, r: 1 }, { q: -1, r: 1 },
    { q: -1, r: 0 }, { q: 0, r: -1 }, { q: 1, r: -1 }
  ];

  let ring = 1;
  while (coords.length < count) {
    q = ring;
    r = 0;
    for (let i = 0; i < ring; i++) {
        q--;
        r++;
    }
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < ring; j++) {
        if (coords.length >= count) break;
        coords.push({ q, r });
        q += directions[i].q;
        r += directions[i].r;
      }
      if (coords.length >= count) break;
    }
    ring++;
  }
  return coords;
}

function hexToPixel(q: number, r: number, size: number, gap: number) {
  const effectiveSize = size + gap;
  const x = effectiveSize * (3/2 * q);
  const y = effectiveSize * (Math.sqrt(3)/2 * q + Math.sqrt(3) * r);
  return { x, y };
}

type PlaceholderImage = (typeof placeholderData.placeholderImages)[0];

function ProjectSlideshow({ images, projectTitle }: { images: PlaceholderImage[]; projectTitle: string; }) {
    if (!images || images.length === 0) {
        return <div className="aspect-video bg-muted rounded-lg flex items-center justify-center"><p className="text-muted-foreground">No images for this project.</p></div>;
    }
  
  return (
    <Carousel className="w-full group">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
             <div className="relative overflow-hidden rounded-lg aspect-video">
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
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden sm:inline-flex group-hover:inline-flex" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden sm:inline-flex group-hover:inline-flex" />
        </>
      )}
    </Carousel>
  );
}


export default function AppleWatchGrid() {
  const dragControls = useDragControls();
  const coordinates = useMemo(() => generateHoneycombCoordinates(techStackWithProjects.length), []);
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const wasDragged = useRef(false);

  const gridItems = useMemo(() => {
    return techStackWithProjects.map((tech, i) => {
      const coord = coordinates[i] || { q: 0, r: 0 };
      const { x, y } = hexToPixel(coord.q, coord.r, ICON_SIZE, GAP);
      
      const relatedProjects = tech.projectIds
        .map(id => allProjects.find(p => p.id === id))
        .filter((p): p is (typeof allProjects)[0] => !!p);

      return {
        ...tech,
        x,
        y,
        relatedProjects,
      };
    });
  }, [coordinates]);

  const bounds = useMemo(() => {
    if (gridItems.length === 0) return { minX: 0, maxX: 0, minY: 0, maxY: 0 };
    const xs = gridItems.map(p => p.x);
    const ys = gridItems.map(p => p.y);
    return {
      minX: Math.min(...xs),
      maxX: Math.max(...xs),
      minY: Math.min(...ys),
      maxY: Math.max(...ys),
    };
  }, [gridItems]);
  
  const containerWidth = bounds.maxX - bounds.minX + ICON_SIZE * 2;
  const containerHeight = bounds.maxY - bounds.minY + ICON_SIZE * 2;

  const onDragStart = () => {
    wasDragged.current = false;
  };

  const onDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 5 || Math.abs(info.offset.y) > 5) {
      wasDragged.current = true;
    }
  };

  return (
    <div
      className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
    >
      <motion.div
        drag
        dragControls={dragControls}
        onDragStart={onDragStart}
        onDrag={onDrag}
        dragConstraints={{ 
            left: -(containerWidth / 2) + (typeof window !== 'undefined' ? window.innerWidth / 2 : 500) - ICON_SIZE / 2,
            right: (containerWidth / 2) - (typeof window !== 'undefined' ? window.innerWidth / 2 : 500) + ICON_SIZE / 2,
            top: -(containerHeight / 2) + (typeof window !== 'undefined' ? window.innerHeight / 2 : 400) - ICON_SIZE / 2,
            bottom: (containerHeight / 2) - (typeof window !== 'undefined' ? window.innerHeight / 2 : 400) + ICON_SIZE / 2,
        }}
        className="relative"
        style={{ width: containerWidth, height: containerHeight }}
      >
        {gridItems.map((tech) => (
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              width: ICON_SIZE,
              height: ICON_SIZE,
              left: `calc(50% + ${tech.x}px)`,
              top: `calc(50% + ${tech.y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
            whileHover={{ scale: 1.15, zIndex: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Dialog open={openDialog === tech.name} onOpenChange={(isOpen) => setOpenDialog(isOpen ? tech.name : null)}>
              <DialogTrigger asChild>
                 <div
                  className="w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-border/20 cursor-pointer p-3 bg-card flex items-center justify-center"
                  onClick={() => !wasDragged.current && setOpenDialog(tech.name)}
                  onPointerDown={(e) => {
                    // This allows dragging to start from the icon itself
                    dragControls.start(e, { snapToCursor: false });
                  }}
                >
                    {tech.component}
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-6 bg-background/90 backdrop-blur-md border-none rounded-lg shadow-2xl">
                 <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl font-headline text-primary">
                        {tech.name} Projects
                    </DialogTitle>
                    <DialogDescription>
                        Here are some of the projects where I've used {tech.name}.
                    </DialogDescription>
                 </DialogHeader>
                 <div className="grid gap-8 py-4 max-h-[70vh] overflow-y-auto">
                    {tech.relatedProjects.length > 0 ? tech.relatedProjects.map(project => {
                        if (!project) return null;
                        const projectImages = project.imageUrlIds
                            .map(id => placeholderData.placeholderImages.find(p => p.id === id))
                            .filter((p): p is PlaceholderImage => !!p);

                        return (
                            <div key={project.id} className="grid md:grid-cols-2 gap-6 items-center">
                                <ProjectSlideshow images={projectImages} projectTitle={project.title} />
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold font-headline">{project.title}</h3>
                                    <p className="text-foreground/80">{project.description}</p>
                                    {project.liveUrl && (
                                        <Button asChild variant="outline">
                                            <Link href={project.liveUrl} target="_blank">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                View Live Work
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        )
                    }) : (
                        <p className="text-center text-foreground/70">No projects found for this technology yet.</p>
                    )}
                 </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
