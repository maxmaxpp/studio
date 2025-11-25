import { CodeXml, DatabaseZap, Megaphone, Palette, Facebook, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react';
import Image from 'next/image';


export const services = [
  {
    icon: DatabaseZap,
    title: 'Data Entry',
  },
  {
    icon: Megaphone,
    title: 'Social Media Manager',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
  },
  {
    icon: CodeXml,
    title: 'Development',
  },
];

export const projects = [
  {
    id: 1,
    title: 'E-commerce Data Migration',
    category: 'Data Entry',
    description: 'Migrated over 10,000 product listings to a new Shopify store using Notion for planning and tracking, ensuring data integrity and correct categorization.',
    imageUrlIds: ['project-data-1'],
    tech: ['Notion']
  },
  {
    id: 2,
    title: 'Startup Social Campaign',
    category: 'Social Media Manager',
    description: 'Launched and managed a multi-platform social media campaign that increased brand awareness by 300% in 3 months.',
    imageUrlIds: ['project-social-1'],
    tech: ['Facebook', 'Instagram']
  },
  {
    id: 3,
    title: 'Rebranding for "Innovate Co."',
    category: 'Graphic Design',
    description: 'Developed a complete new brand identity using Canva, including logo, color palette, and style guide for a tech startup.',
    imageUrlIds: ['project-design-1'],
    tech: ['Canva']
  },
  {
    id: 4,
    title: 'Portfolio Website for Photographer',
    category: 'Development',
    description: 'Designed and developed a fast, responsive portfolio website using Next.js to showcase their work.',
    imageUrlIds: ['project-dev-2'],
    liveUrl: 'https://heymaxx-dev-2.web.app',
    tech: ['Next.js', 'React', 'TypeScript']
  },
  {
    id: 5,
    title: 'Market Research Data Collation',
    category: 'Data Entry',
    description: 'Collated and cleaned market research survey data from multiple sources into a unified, analyzable dataset organized in Notion.',
    imageUrlIds: ['project-data-2'],
    tech: ['Notion']
  },
  {
    id: 6,
    title: 'Content Strategy for SaaS',
    category: 'Social Media Manager',
    description: 'Created a content calendar and managed daily posts, resulting in a 50% increase in user engagement.',
    imageUrlIds: ['project-social-2', 'project-social-2-b', 'project-social-2-c'],
    tech: ['Facebook', 'Instagram', 'LinkedIn']
  },
  {
    id: 7,
    title: 'Mobile App UI/UX',
    category: 'Graphic Design',
    description: 'Designed the user interface and experience for a new productivity mobile app, focusing on intuitive navigation.',
    imageUrlIds: ['project-design-2'],
    tech: ['Canva']
  },
  {
    id: 9,
    title: 'Event Poster Design',
    category: 'Graphic Design',
    description: 'Created a series of eye-catching posters for a local music festival using Canva.',
    imageUrlIds: ['project-design-3'],
    tech: ['Canva']
  },
  {
    id: 10,
    title: 'Social Media Graphics Pack',
    category: 'Graphic Design',
    description: 'Designed a pack of reusable social media templates in Canva for a small business to maintain brand consistency.',
    imageUrlIds: ['project-design-4'],
    tech: ['Canva']
  },
  {
    id: 13,
    title: 'New Awesome Design',
    category: 'Graphic Design',
    description: 'A description for your new awesome design project, created with Canva.',
    imageUrlIds: ['project-design-new'],
    tech: ['Canva']
  },
  {
    id: 14,
    title: 'Planet Logo Sketch',
    category: 'Graphic Design',
    description: 'A creative logo design featuring a planet with rings and stars, sketched in Canva.',
    imageUrlIds: ['project-design-planet'],
    tech: ['Canva']
  },
  {
    id: 11,
    title: 'Critique Corner',
    category: 'Development',
    description: 'A platform for designers and developers to share their work and receive constructive feedback, built with Next.js.',
    imageUrlIds: ['project-dev-3'],
    liveUrl: 'https://heymaxx-dev-3.web.app',
    tech: ['Next.js', 'React', 'TypeScript']
  },
  {
    id: 12,
    title: 'Liachuu',
    category: 'Development',
    description: 'An interactive web application for anime and manga enthusiasts to track, discover, and discuss their favorite series, built with Next.js.',
    imageUrlIds: ['project-dev-liachuu'],
    liveUrl: 'https://liachuu.web.app',
    tech: ['Next.js', 'React', 'TypeScript']
  }
];


export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

export const techStack = [
    {
      name: 'Notion',
      component: (
        <Image
          src="/tech-icons/notion.svg"
          alt="Notion"
          width={40}
          height={40}
        />
      ),
    },
    {
      name: 'Canva',
      component: (
        <Image
          src="/tech-icons/canva.svg"
          alt="Canva"
          width={40}
          height={40}
        />
      ),
    },
    {
      name: 'CapCut',
      component: (
        <Image
          src="/tech-icons/capcut.svg"
          alt="CapCut"
          width={40}
          height={40}
        />
      ),
    },
    { name: 'Facebook', component: <Facebook className="text-blue-600 w-10 h-10" /> },
    { name: 'Instagram', component: <Instagram className="text-pink-500 w-10 h-10" /> },
    {
      name: 'TikTok',
      component: (
        <Image
          src="/tech-icons/tiktok.svg"
          alt="TikTok"
          width={36}
          height={36}
        />
      ),
    },
    { name: 'LinkedIn', component: <Linkedin className="text-blue-700 w-10 h-10" /> },
    { name: 'YouTube', component: <Youtube className="text-red-600 w-10 h-10" /> },
    { name: 'Messenger', component: <MessageCircle className="text-green-500 w-10 h-10" /> },
    {
      name: 'Next.js',
      component: (
        <Image
          src="/tech-icons/nextjs.svg"
          alt="Next.js"
          width={40}
          height={40}
          className="dark:invert"
        />
      ),
    },
    {
      name: 'React',
      component: (
        <Image
          src="/tech-icons/react.svg"
          alt="React"
          width={40}
          height={40}
        />
      ),
    },
    {
      name: 'TypeScript',
      component: (
        <Image
          src="/tech-icons/typescript.svg"
          alt="TypeScript"
          width={40}
          height={40}
        />
      ),
    },
     {
      name: 'Framer Motion',
      component: (
        <Image
          src="/tech-icons/framer.svg"
          alt="Framer Motion"
          width={32}
          height={32}
        />
      ),
    },
    {
      name: 'Tailwind CSS',
      component: (
        <Image
          src="/tech-icons/tailwind.svg"
          alt="Tailwind CSS"
          width={40}
          height={40}
        />
      ),
    },
    {
      name: 'Firebase',
      component: (
        <Image
          src="/tech-icons/firebase.svg"
          alt="Firebase"
          width={36}
          height={36}
        />
      ),
    },
];

export const techStackWithProjects = techStack.map(tech => {
    const associatedProjects = projects.filter(p => p.tech?.includes(tech.name));
    return {
        ...tech,
        projects: associatedProjects
    }
});
