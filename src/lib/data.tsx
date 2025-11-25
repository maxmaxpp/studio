

import { CodeXml, DatabaseZap, Megaphone, Palette, Facebook, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

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

export const techStackWithProjects: { name: string; component: React.ReactNode; projectIds: number[] }[] = [
    {
      name: 'Notion',
      component: (
        <Image
          src="/tech-icons/notion.svg"
          alt="Notion"
          width={48}
          height={48}
          className="w-full h-auto"
        />
      ),
      projectIds: [1, 5],
    },
    {
      name: 'Canva',
      component: (
        <Image
          src="/tech-icons/canva.svg"
          alt="Canva"
          width={48}
          height={48}
          className="w-full h-auto"
        />
      ),
      projectIds: [3, 9, 10, 13, 14],
    },
    {
      name: 'CapCut',
      component: (
        <Image
          src="/tech-icons/capcut.svg"
          alt="CapCut"
          width={48}
          height={48}
          className="w-full h-auto"
        />
      ),
      projectIds: [],
    },
    { name: 'Facebook', component: <Facebook className="w-full h-auto text-blue-600" />, projectIds: [2, 6] },
    { name: 'Instagram', component: <Instagram className="w-full h-auto text-pink-500" />, projectIds: [2, 6] },
    {
      name: 'TikTok',
      component: (
        <Image
          src="/tech-icons/tiktok.svg"
          alt="TikTok"
          width={40}
          height={40}
          className="w-full h-auto"
        />
      ),
      projectIds: [2, 6],
    },
    { name: 'LinkedIn', component: <Linkedin className="w-full h-auto text-blue-700" />, projectIds: [2] },
    { name: 'Next.js', component: <CodeXml className="w-full h-auto" />, projectIds: [4, 11, 12] },
  ];
  
export const projects = [
  {
    id: 1,
    title: 'E-commerce Data Migration',
    category: 'Data Entry',
    description: 'Migrated over 10,000 product listings to a new Shopify store using Notion for planning and tracking, ensuring data integrity and correct categorization.',
    imageUrlIds: ['project-data-1'],
  },
  {
    id: 2,
    title: 'Startup Social Campaign',
    category: 'Social Media Manager',
    description: 'Launched and managed a multi-platform social media campaign that increased brand awareness by 300% in 3 months.',
    imageUrlIds: ['project-social-1'],
  },
  {
    id: 3,
    title: 'Rebranding for "Innovate Co."',
    category: 'Graphic Design',
    description: 'Developed a complete new brand identity using Canva, including logo, color palette, and style guide for a tech startup.',
    imageUrlIds: ['project-design-1'],
  },
  {
    id: 4,
    title: 'Portfolio Website for Photographer',
    category: 'Development',
    description: 'Designed and developed a fast, responsive portfolio website using Next.js to showcase their work.',
    imageUrlIds: ['project-dev-2'],
    liveUrl: 'https://heymaxx-dev-2.web.app',
  },
  {
    id: 5,
    title: 'Market Research Data Collation',
    category: 'Data Entry',
    description: 'Collated and cleaned market research survey data from multiple sources into a unified, analyzable dataset organized in Notion.',
    imageUrlIds: ['project-data-2'],
  },
  {
    id: 6,
    title: 'Content Strategy for SaaS',
    category: 'Social Media Manager',
    description: 'Created a content calendar and managed daily posts, resulting in a 50% increase in user engagement.',
    imageUrlIds: ['project-social-2', 'project-social-2-b', 'project-social-2-c'],
  },
  {
    id: 7,
    title: 'Mobile App UI/UX',
    category: 'Graphic Design',
    description: 'Designed the user interface and experience for a new productivity mobile app, focusing on intuitive navigation.',
    imageUrlIds: ['project-design-2'],
  },
  {
    id: 9,
    title: 'Event Poster Design',
    category: 'Graphic Design',
    description: 'Created a series of eye-catching posters for a local music festival using Canva.',
    imageUrlIds: ['project-design-3'],
  },
  {
    id: 10,
    title: 'Social Media Graphics Pack',
    category: 'Graphic Design',
    description: 'Designed a pack of reusable social media templates in Canva for a small business to maintain brand consistency.',
    imageUrlIds: ['project-design-4'],
  },
  {
    id: 13,
    title: 'New Awesome Design',
    category: 'Graphic Design',
    description: 'A description for your new awesome design project, created with Canva.',
    imageUrlIds: ['project-design-new'],
  },
  {
    id: 14,
    title: 'Planet Logo Sketch',
    category: 'Graphic Design',
    description: 'A creative logo design featuring a planet with rings and stars, sketched in Canva.',
    imageUrlIds: ['project-design-planet'],
  },
  {
    id: 11,
    title: 'Critique Corner',
    category: 'Development',
    description: 'A platform for designers and developers to share their work and receive constructive feedback, built with Next.js.',
    imageUrlIds: ['project-dev-3'],
    liveUrl: 'https://heymaxx-dev-3.web.app',
  },
  {
    id: 12,
    title: 'Liachuu',
    category: 'Development',
    description: 'An interactive web application for anime and manga enthusiasts to track, discover, and discuss their favorite series, built with Next.js.',
    imageUrlIds: ['project-dev-liachuu'],
    liveUrl: 'https://liachuu.web.app',
  }
];


export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];
