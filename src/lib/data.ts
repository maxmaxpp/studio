
import { CodeXml, DatabaseZap, Megaphone, Palette } from 'lucide-react';

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
    description: 'Migrated over 10,000 product listings to a new Shopify store, ensuring data integrity and correct categorization.',
    imageUrlId: 'project-data-1',
  },
  {
    id: 2,
    title: 'Startup Social Campaign',
    category: 'Social Media Manager',
    description: 'Launched and managed a multi-platform social media campaign that increased brand awareness by 300% in 3 months.',
    imageUrlId: 'project-social-1',
  },
  {
    id: 3,
    title: 'Rebranding for "Innovate Co."',
    category: 'Graphic Design',
    description: 'Developed a complete new brand identity, including logo, color palette, and style guide for a tech startup.',
    imageUrlId: 'project-design-1',
  },
  {
    id: 4,
    title: 'Portfolio Website for Photographer',
    category: 'Development',
    description: 'Designed and developed a fast, responsive portfolio website using Next.js to showcase their work.',
    imageUrlId: 'project-dev-2',
    liveUrl: 'https://heymaxx-dev-2.web.app',
  },
  {
    id: 5,
    title: 'Market Research Data Collation',
    category: 'Data Entry',
    description: 'Collated and cleaned market research survey data from multiple sources into a unified, analyzable dataset.',
    imageUrlId: 'project-data-2',
  },
  {
    id: 6,
    title: 'Content Strategy for SaaS',
    category: 'Social Media Manager',
    description: 'Created a content calendar and managed daily posts, resulting in a 50% increase in user engagement.',
    imageUrlId: 'project-social-2',
  },
  {
    id: 7,
    title: 'Mobile App UI/UX',
    category: 'Graphic Design',
    description: 'Designed the user interface and experience for a new productivity mobile app, focusing on intuitive navigation.',
    imageUrlId: 'project-design-2',
  },
  {
    id: 9,
    title: 'Event Poster Design',
    category: 'Graphic Design',
    description: 'Created a series of eye-catching posters for a local music festival.',
    imageUrlId: 'project-design-3',
  },
  {
    id: 10,
    title: 'Social Media Graphics Pack',
    category: 'Graphic Design',
    description: 'Designed a pack of reusable social media templates for a small business to maintain brand consistency.',
    imageUrlId: 'project-design-4',
  },
  {
    id: 13,
    title: 'New Awesome Design',
    category: 'Graphic Design',
    description: 'A description for your new awesome design project.',
    imageUrlId: 'project-design-new',
  },
  {
    id: 11,
    title: 'Critique Corner',
    category: 'Development',
    description: 'A platform for designers and developers to share their work and receive constructive feedback.',
    imageUrlId: 'project-dev-3',
    liveUrl: 'https://heymaxx-dev-3.web.app',
  },
  {
    id: 12,
    title: 'Liachuu',
    category: 'Development',
    description: 'An interactive web application for anime and manga enthusiasts to track, discover, and discuss their favorite series.',
    imageUrlId: 'project-dev-liachuu',
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
