import { publicSite } from '../../site.config.mjs';

export const site = {
  brandName: 'Trailwise',
  brandStatus: 'Working brand',
  tagline: 'Your first overnight hike, sorted.',
  title: 'Trailwise | Beginner hiking gear made simpler',
  description:
    'Beginner-friendly hiking gear guidance, starter kits and practical Australian advice for your first overnight hike.',
  url: publicSite.url,
  contactEmail: publicSite.contactEmail,
  theme: {
    ink: '#1d2a25',
    forest: '#2f4c3c',
    moss: '#697a55',
    sand: '#e9dfcb',
    clay: '#97472f',
    paper: '#f8f5ef',
    white: '#fffdf8',
  },
} as const;

export const primaryNav = [
  { href: '/build-my-kit', label: 'Build My Kit' },
  { href: '/starter-kits', label: 'Starter Kits' },
  { href: '/gear', label: 'Gear' },
  { href: '/learn', label: 'Learn' },
] as const;
