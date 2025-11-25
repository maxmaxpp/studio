
'use client';

import Image from 'next/image';
import { services } from '@/lib/data.ts';
import placeholderData from '@/lib/placeholder-images.json';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import TechStack from '@/components/sections/tech-stack';

const serviceImages: { [key: string]: string } = {
    'Data Entry': 'service-data-entry',
    'Social Media Manager': 'service-social-media',
    'Graphic Design': 'service-graphic-design',
    'Development': 'service-development'
}

const serviceDetails: { [key: string]: { title: string; description: string; items: string[] } } = {
    'System & Productivity': {
        title: 'System & Productivity',
        description: 'Streamlining workflows and organizing your digital space.',
        items: [
            'Notion workspace setup (dashboards, databases, trackers)',
            'Process mapping & documentation',
            'Workflow creation for tasks, projects, and content',
            'Productivity system development (routines, templates, automation plans)',
            'Digital organization (files, folders, assets, reference docs)',
            'Project planning & task management support',
            'Creating SOPs and structured guides for teams or solo operators',
            'Basic data tracking using Notion, Excel, or Google Sheets'
        ]
    },
    'Social Media Management': {
        title: 'Social Media Management',
        description: 'Helping you stay consistent, organized, and present online.',
        items: [
            'Content planning and monthly content calendars',
            'Caption writing and basic copywriting',
            'Content scheduling & posting',
            'Basic engagement monitoring (likes, comments, mentions)',
            'Hashtag research & optimization',
            'Trend research and content ideas',
            'Profile optimization (bio, highlights, links, branding)',
            'Visual content organization and asset management'
        ]
    },
    'Graphic Design & Multimedia': {
        title: 'Graphic Design & Multimedia',
        description: 'Creating visuals that align with your brand’s identity.',
        items: [
            'Social media graphics (feeds, stories, promos)',
            'Branding assets (color palettes, elements, icons)',
            'Simple logo concepts',
            'Video editing for short-form content',
            'Reels/TikTok editing and layouting',
            'Banner, header, and cover photo design',
            'Infographics & visual explainers',
            'Product mockups and basic promotional materials'
        ]
    }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0, x: '50vw', y: '50vh' },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};


export default function ServicesPage() {
    const servicesToDisplay = services.filter(service => service.title !== 'Development');

  return (
    <>
    <div 
        className="relative pt-12 sm:pt-16 pb-24 sm:pb-32 overflow-hidden"
        style={{
            backgroundImage: 'radial-gradient(hsl(var(--border)) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
        }}
    >
        <div className="absolute inset-0 -z-10 opacity-30">
            <TechStack />
        </div>

        <div className="absolute -top-24 -right-48 opacity-40 pointer-events-none">
            <Image src="/gal-design.png" alt="Galaxy design" width={600} height={600} />
        </div>
        <div className="absolute -bottom-48 -left-48 opacity-40 pointer-events-none">
            <Image src="/cons-design.png" alt="Constellation design" width={500} height={500} />
        </div>

        <div className="container mx-auto relative text-center">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center mb-12"
            >
                <h1 className="text-6xl font-logo text-primary mr-4">My</h1>
                <h2 className="text-6xl font-headline font-bold text-foreground/80">Services</h2>
            </motion.div>
            
            <motion.div 
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {servicesToDisplay.map(service => {
                    const imageId = serviceImages[service.title];
                    const image = placeholderData.placeholderImages.find(p => p.id === imageId);
                    const serviceLabel = service.title === 'Data Entry' ? 'System & Productivity' : 
                                       service.title === 'Graphic Design' ? 'Graphic Design & Multimedia' : 
                                       'Social Media Management';
                    const details = serviceDetails[serviceLabel];
                    
                    return (
                        <motion.div key={service.title} className="flex flex-col items-center" variants={itemVariants}>
                           <div className="w-full bg-card/60 rounded-lg p-2 border shadow-sm">
                               <div className="flex items-center gap-1.5 px-2 py-1.5 border-b mb-2">
                                   <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                   <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                                   <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                               </div>
                               {image && (
                                   <div className="relative aspect-[4/3] w-full overflow-hidden rounded-b-md">
                                        <Image 
                                            src={image.imageUrl}
                                            alt={service.title}
                                            data-ai-hint={image.imageHint}
                                            fill
                                            className="object-cover"
                                        />
                                   </div>
                               )}
                           </div>
                           <Dialog>
                             <DialogTrigger asChild>
                               <button className="mt-4 bg-primary/80 text-primary-foreground px-6 py-2 rounded-lg shadow-md text-base font-medium hover:bg-primary/90 transition-colors">
                                 {serviceLabel}
                               </button>
                             </DialogTrigger>
                             <DialogContent className="sm:max-w-md">
                               <DialogHeader>
                                 <DialogTitle className="font-headline text-2xl text-primary">{details.title}</DialogTitle>
                                 <DialogDescription className="text-base">
                                   {details.description}
                                 </DialogDescription>
                               </DialogHeader>
                               <ul className="list-disc list-inside space-y-2 py-4 text-foreground/80">
                                   {details.items.map(item => <li key={item}>{item}</li>)}
                               </ul>
                             </DialogContent>
                           </Dialog>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    </div>
    </>
  );
}
