

import Image from 'next/image';
import { services } from '@/lib/data';
import placeholderData from '@/lib/placeholder-images.json';

const serviceImages: { [key: string]: string } = {
    'Data Entry': 'service-data-entry',
    'Social Media Manager': 'service-social-media',
    'Graphic Design': 'service-graphic-design',
    'Development': 'service-development'
}


export default function ServicesPage() {
    const servicesToDisplay = services.filter(service => service.title !== 'Development');

  return (
    <div className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute -top-24 -right-48 opacity-30 pointer-events-none">
            <Image src="/sun-design.png" alt="Sun design" width={600} height={600} />
        </div>
        <div className="absolute -bottom-48 -left-48 opacity-30 pointer-events-none">
            <Image src="/cons-design.png" alt="Constellation design" width={500} height={500} />
        </div>

        <div className="container mx-auto relative text-center">
            <div className="flex items-center justify-center mb-12">
                <h1 className="text-6xl font-logo text-primary -mr-2">My</h1>
                <h2 className="text-6xl font-headline font-bold text-foreground/80">Services</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {servicesToDisplay.map(service => {
                    const imageId = serviceImages[service.title];
                    const image = placeholderData.placeholderImages.find(p => p.id === imageId);
                    
                    return (
                        <div key={service.title} className="flex flex-col items-center">
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
                           <div className="mt-4 bg-primary/80 text-primary-foreground px-6 py-2 rounded-lg shadow-md text-base font-medium">
                               {service.title === 'Data Entry' ? 'System & Productivity' : 
                                service.title === 'Graphic Design' ? 'Graphic Design & Multimedia' : 
                                'Social Media Management'}
                           </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
}
