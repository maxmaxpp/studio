import { CodeXml, DatabaseZap, Megaphone, Palette } from 'lucide-react';

export const services = [
  {
    icon: DatabaseZap,
    title: 'Data Entry',
    description: 'Accurate and efficient data entry services to help you organize and manage your information effectively. From spreadsheets to databases, I ensure your data is clean and accessible.',
  },
  {
    icon: Megaphone,
    title: 'Social Media Manager',
    description: 'Grow your online presence with strategic social media management. I create engaging content, manage your accounts, and analyze performance to build your brand and connect with your audience.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Visually stunning designs that communicate your message. From logos and branding to marketing materials and web graphics, I create assets that make an impact.',
  },
  {
    icon: CodeXml,
    title: 'Development',
    description: 'Custom web development solutions to bring your ideas to life. I build responsive, user-friendly websites and applications tailored to your specific needs using modern technologies.',
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
    id: 8,
    title: 'Custom WordPress Plugin',
    category: 'Development',
    description: 'Built a custom WordPress plugin to handle event registrations and ticketing for a non-profit organization.',
    imageUrlId: 'project-dev-1',
  },
];


export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];
