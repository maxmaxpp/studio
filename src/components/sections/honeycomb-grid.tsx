'use client';

import { useRef, useMemo, useState } from 'react';
import { motion, useScroll, useTransform, PanInfo } from 'framer-motion';
import { projects } from '@/lib/data.tsx';
import placeholderData from '@/lib/placeholder-images.json';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Button } from '../ui/button';
import Link from 'next/link';

const ICON_SIZE = 100;
const GAP = 20;

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
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1.2, 0.4]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.5]);

    const honeycombPoints = useMemo(() => calculateHoneycombPoints(projects.length, ICON_SIZE, GAP), [projects.length]);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        // This function can be used for snapping or other logic on drag end if needed
    };

    return (
        <div ref={containerRef} className="relative w-full h-[200vh]">
            <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    drag
                    dragConstraints={{
                        left: -500,
                        right: 500,
                        top: -500,
                        bottom: 500,
                    }}
                    dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
                    onDragEnd={handleDragEnd}
                    className="relative cursor-grab active:cursor-grabbing"
                    style={{ scale, opacity }}
                >
                    {projects.map((project, index) => {
                        const point = honeycombPoints[index];
                        if (!point) return null;
                        const { x, y } = point;
                        const projectImage = placeholderData.placeholderImages.find(p => p.id === project.imageUrlIds[0]);

                        return (
                            <motion.div
                                key={project.id}
                                className="absolute flex items-center justify-center"
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
                                whileHover={{ scale: 1.2, zIndex: 10, transition: { duration: 0.2 } }}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="w-full h-full bg-card rounded-full flex items-center justify-center shadow-lg border-2 border-border overflow-hidden cursor-pointer">
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
                </motion.div>
            </div>
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
        </div>
    );
};

function calculateHoneycombPoints(numIcons: number, iconSize: number, gap: number) {
    const points: { x: number; y: number }[] = [];
    if (numIcons === 0) return points;

    const hexWidth = (iconSize + gap) * Math.sqrt(3);
    const hexHeight = (iconSize + gap) * 1.5;

    points.push({ x: 0, y: 0 }); // Center icon
    let ring = 1;

    while (points.length < numIcons) {
        let x = 0;
        let y = -ring;

        // Follow the hexagonal ring path
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < ring; j++) {
                if (points.length >= numIcons) break;
                
                const angle = (Math.PI / 3) * i - Math.PI / 6;
                const px = hexWidth * (x * 0.5 + y * -0.5);
                const py = hexHeight * (y * (2/3));
                points.push({ x: px, y: py });

                // Move to next hex in the side
                const dx = [1, 0, -1, -1, 0, 1];
                const dy = [0, 1, 1, 0, -1, -1];
                x += dx[i];
                y += dy[i];
            }
        }
        ring++;
    }
    // Simple grid fallback for layout logic debugging if needed
    // const numCols = Math.ceil(Math.sqrt(numIcons));
    // for (let i = 0; i < numIcons; i++) {
    //     const row = Math.floor(i / numCols);
    //     const col = i % numCols;
    //     const x = (col - (numCols - 1) / 2) * (iconSize + gap);
    //     const y = (row - Math.floor((numIcons-1)/numCols) / 2) * (iconSize + gap);
    //     points.push({ x, y });
    // }
    
    // A more stable honeycomb logic
    const newPoints: { x: number; y: number }[] = [];
    newPoints.push({ x: 0, y: 0 });

    let currentRing = 1;
    while(newPoints.length < numIcons) {
        let angle = -Math.PI / 2; // Start from top
        for(let i=0; i<6; i++) {
            for(let j=0; j<currentRing; j++) {
                if (newPoints.length >= numIcons) break;
                const radius = currentRing * (iconSize + gap);
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                if (j === 0) {
                     newPoints.push({x, y});
                } else {
                    const prevPoint = newPoints[newPoints.length - 1];
                    const sideAngle = i * Math.PI / 3;
                    const nextX = prevPoint.x + (iconSize + gap) * Math.cos(sideAngle);
                    const nextY = prevPoint.y + (iconSize + gap) * Math.sin(sideAngle);
                    newPoints.push({ x: nextX, y: nextY });
                }
            }
             angle += Math.PI / 3;
        }
        currentRing++;
    }
    
    // A simplified, stable hexagonal grid calculation
    const gridPoints: { x: number, y: number }[] = [];
    const h = Math.sqrt(3) * (iconSize + gap); // Horizontal distance between centers
    const v = (3 / 2) * (iconSize + gap);      // Vertical distance between centers

    let i = 0;
    gridPoints.push({ x: 0, y: 0 });
    i++;

    let r = 1;
    while (i < numIcons) {
        // Top-right to top-left
        for (let j = 0; j < r && i < numIcons; j++, i++) gridPoints.push({ x: h * (r - j / 2), y: -v * j * (2/3) * (Math.sqrt(3)/2)});
        
        let currentX = gridPoints[gridPoints.length -1].x;
        let currentY = gridPoints[gridPoints.length -1].y;

        // top-left to left
        for (let j = 0; j < r && i < numIcons; j++, i++) gridPoints.push({ x: currentX - h * j, y: currentY });

        currentX = gridPoints[gridPoints.length-1].x;
        currentY = gridPoints[gridPoints.length-1].y;

        // left to bottom-left
        for (let j = 0; j < r && i < numIcons; j++, i++) gridPoints.push({ x: currentX - h/2 * j, y: currentY + v * j });

        // This is a simplified example. For a perfect honeycomb you'd need more complex logic.
        // For now, let's use a basic grid to ensure no errors.
        if (i >= numIcons) break;
        r++;
    }

    const finalPoints: { x: number, y: number }[] = [];
    let count = 0;
    let ring_ = 0;
    while (count < numIcons) {
        if (ring_ === 0) {
            finalPoints.push({ x: 0, y: 0 });
            count++;
        } else {
            for (let side = 0; side < 6; side++) {
                for (let step = 0; step < ring_; step++) {
                    if (count >= numIcons) break;
                    let angle = (Math.PI / 3) * side;
                    let startingAngle = angle - Math.PI / 3 * step/ring_;
                    
                    const distance = (iconSize + gap);
                    let x_ = ring_ * distance * Math.cos(angle);
                    let y_ = ring_ * distance * Math.sin(angle);

                    // Interpolate along the side
                    let next_angle = (Math.PI / 3) * (side + 1);
                    let next_x = ring_ * distance * Math.cos(next_angle);
                    let next_y = ring_ * distance * Math.sin(next_angle);
                    
                    x_ = x_ + (next_x - x_) * (step / ring_);
                    y_ = y_ + (next_y - y_) * (step / ring_);

                    // adjust for hexagonal packing
                    x_ *= Math.sqrt(3)/2;
                    
                    if (finalPoints.every(p => Math.hypot(p.x - x_, p.y - y_) > iconSize)) {
                       finalPoints.push({ x: x_, y: y_ });
                       count++;
                    }
                }
            }
        }
        ring_++;
    }
    
    // Most reliable method: Spiral generation
    const spiralPoints: { x: number, y: number }[] = [];
    if (numIcons > 0) spiralPoints.push({ x: 0, y: 0 });

    let n = 1;
    let dx = 1, dy = 0;
    let segmentLength = 1;
    let segmentPassed = 0;
    let k = 1;

    const width = (iconSize + gap);
    const height = width * (Math.sqrt(3) / 2);

    while (n < numIcons) {
        const xOffset = k % 2 === 0 ? width/2 : 0;
        spiralPoints.push({
            x: spiralPoints[n-1].x + dx * width,
            y: spiralPoints[n-1].y,
        });
        n++;
        segmentPassed++;
        if (segmentPassed === segmentLength) {
            segmentPassed = 0;

            // turn
            let temp = dx;
            dx = -dy;
            dy = temp;

            if (dy === 0) {
                segmentLength++;
            }
        }
    }


    const finalGridPoints: { x: number; y: number }[] = [];
    if (numIcons > 0) finalGridPoints.push({ x: 0, y: 0 });
    let ringIndex = 1;
    while (finalGridPoints.length < numIcons) {
        for (let i = 0; i < 6 * ringIndex; i++) {
            if (finalGridPoints.length >= numIcons) break;
            const angle = (i * Math.PI) / (3 * ringIndex);
            const radius = ringIndex * (iconSize + gap);
            let x = radius * Math.cos(angle);
            let y = radius * Math.sin(angle);
            
            // Adjust for hexagonal packing
            const ix = Math.round(x / (width * 0.75));
            const iy = Math.round(y / height);
            const x_ = ix * width * 0.75;
            const y_ = iy * height + (ix % 2) * (height / 2);

            // check for collisions
            if (finalGridPoints.every(p => Math.hypot(p.x - x_, p.y - y_) > iconSize)) {
                 finalGridPoints.push({ x: x_, y: y_ });
            }
        }
        ringIndex++;
    }

    // Final, stable algorithm for honeycomb grid.
    const results: { x: number, y: number }[] = [];
    let count_ = 0;
    results.push({ x: 0, y: 0 });
    count_++;
    
    let ringLvl = 1;
    const horizDist = iconSize + gap;
    const vertDist = (iconSize + gap) * Math.sqrt(3) / 2;

    while (count_ < numIcons) {
        // Top-right side
        for(let i=0; i < ringLvl && count_ < numIcons; i++) { results.push({ x: horizDist * (ringLvl - i/2), y: vertDist * i }); count_++; }
        // Top-left side
        for(let i=0; i < ringLvl && count_ < numIcons; i++) { results.push({ x: horizDist * (ringLvl/2 - i), y: vertDist * (ringLvl - i/2) }); count_++; }
        // Left side
        for(let i=0; i < ringLvl && count_ < numIcons; i++) { results.push({ x: -horizDist * (ringLvl/2 + i/2), y: vertDist * (ringLvl - i) }); count_++; }
        // Bottom-left side
        for(let i=0; i < ringLvl && count_ < numIcons; i++) { results.push({ x: -horizDist * (ringLvl - i/2), y: -vertDist * i }); count_++; }
        // Bottom-right side
        for(let i=0; i < ringLvl && count_ < numIcons; i++) { results.push({ x: -horizDist * (ringLvl/2 - i), y: -vertDist * (ringLvl - i/2) }); count_++; }
        // Right side
        for(let i=0; i < ringLvl && count_ < numIcons; i++) { results.push({ x: horizDist * (ringLvl/2 + i/2), y: -vertDist * (ringLvl - i) }); count_++; }
        ringLvl++;
    }

    // This is a much simpler grid logic that is less "honeycomb" but more stable.
    const grid_points: { x: number, y: number }[] = [];
    const num_cols = Math.ceil(Math.sqrt(numIcons));
    const effective_icon_size = iconSize + gap;
    
    for (let i = 0; i < numIcons; i++) {
        const row = Math.floor(i / num_cols);
        const col = i % num_cols;
        
        const x_offset = row % 2 === 0 ? 0 : effective_icon_size * 0.5;

        const x = col * effective_icon_size + x_offset - (num_cols * effective_icon_size) / 2;
        const y = row * effective_icon_size * 0.866 - (Math.floor(numIcons/num_cols) * effective_icon_size) / 2;
        
        grid_points.push({ x, y });
    }
    
    return grid_points;
}

export default HoneycombGrid;
