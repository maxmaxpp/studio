
'use client';

import { useMemo, useState } from 'react';
import { motion, PanInfo, useDragControls } from 'framer-motion';
import { projects } from '@/lib/data.tsx';
import placeholderData from '@/lib/placeholder-images.json';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Button } from '../ui/button';
import Link from 'next/link';

const ICON_SIZE = 250;
const GAP = 50;

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    imageUrlIds: string[];
    tech: string[];
    liveUrl?: string;
}

const ProjectSlideshow = ({ project }: { project: Project }) => {
    const images = project.imageUrlIds
        .map(id => placeholderData.placeholderImages.find(p => p.id === id))
        .filter(Boolean);

    if (images.length === 0) {
        return <div className="text-center text-muted-foreground">No images available for this project.</div>;
    }

    return (
        <Carousel className="w-full max-w-lg mx-auto">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                                {image && (
                                    <Image
                                        src={image.imageUrl}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
        </Carousel>
    )
}

const HoneycombGrid = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const dragControls = useDragControls();

    const honeycombPoints = useMemo(() => calculateHoneycombPoints(projects.length, ICON_SIZE, GAP), [projects.length]);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        // This function can be used for snapping or other logic on drag end if needed
    };

    return (
        <>
            <motion.div
                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                onPointerDown={(e) => dragControls.start(e)}
            />
            <motion.div
                drag
                dragControls={dragControls}
                dragConstraints={{
                    left: -1000,
                    right: 1000,
                    top: -1000,
                    bottom: 1000,
                }}
                dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
                onDragEnd={handleDragEnd}
                className="relative w-full h-full flex items-center justify-center"
            >
                <div className="relative">
                    {projects.map((project, index) => {
                        const point = honeycombPoints[index];
                        if (!point) return null;
                        const { x, y } = point;
                        const projectImage = placeholderData.placeholderImages.find(p => p.id === project.imageUrlIds[0]);

                        return (
                            <motion.div
                                key={project.id}
                                className="absolute flex items-center justify-center cursor-pointer pointer-events-auto"
                                style={{
                                    width: ICON_SIZE,
                                    height: ICON_SIZE,
                                    left: x,
                                    top: y,
                                    x: -ICON_SIZE / 2,
                                    y: -ICON_SIZE / 2,
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 20,
                                    delay: index * 0.05,
                                }}
                                whileHover={{ scale: 1.1, zIndex: 10, transition: { duration: 0.2 } }}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="w-full h-full bg-card rounded-full flex items-center justify-center shadow-lg border-2 border-border overflow-hidden">
                                    {projectImage && (
                                        <Image
                                            src={projectImage.imageUrl}
                                            alt={project.title}
                                            width={ICON_SIZE}
                                            height={ICON_SIZE}
                                            className="object-cover w-full h-full"
                                        />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
            <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
                <DialogContent className="sm:max-w-2xl bg-card/80 backdrop-blur-sm">
                    {selectedProject && (
                        <>
                            <DialogHeader>
                                <DialogTitle className="font-headline text-2xl text-primary">{selectedProject.title}</DialogTitle>
                                <DialogDescription className="text-base text-foreground/80">
                                    {selectedProject.description}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="py-4">
                                <ProjectSlideshow project={selectedProject} />
                            </div>
                            <div className='flex justify-between items-center pt-4'>
                                <div className="flex gap-2 flex-wrap">
                                    {selectedProject.tech.map(t => <span key={t} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">{t}</span>)}
                                </div>
                                {selectedProject.liveUrl && (
                                    <Button asChild variant="accent">
                                        <Link href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                                            View Live Site
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

function calculateHoneycombPoints(numIcons: number, iconSize: number, gap: number) {
    const points: { x: number; y: number }[] = [];
    if (numIcons === 0) return points;

    const horizontalSpacing = iconSize + gap;
    const verticalSpacing = (iconSize + gap) * (Math.sqrt(3) / 2);

    let n = 0;
    let ring = 0;

    while (n < numIcons) {
        if (ring === 0) {
            points.push({ x: 0, y: 0 });
            n++;
            ring++;
            continue;
        }

        let x = ring * horizontalSpacing;
        let y = 0;

        // Move to the first position of the ring
        for (let i = 0; i < ring; i++) {
            x -= horizontalSpacing / 2;
            y -= verticalSpacing;
        }
        
        const directions = [
            { x: horizontalSpacing, y: 0 }, // Right
            { x: horizontalSpacing / 2, y: verticalSpacing }, // Down-Right
            { x: -horizontalSpacing / 2, y: verticalSpacing }, // Down-Left
            { x: -horizontalSpacing, y: 0 }, // Left
            { x: -horizontalSpacing / 2, y: -verticalSpacing }, // Up-Left
            { x: horizontalSpacing / 2, y: -verticalSpacing }, // Up-Right
        ];
        
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < ring; j++) {
                if (n >= numIcons) break;
                points.push({ x, y });
                x += directions[i].x;
                y += directions[i].y;
                n++;
            }
             if (n >= numIcons) break;
        }
        ring++;
    }
    return points;
}


export default HoneycombGrid;
