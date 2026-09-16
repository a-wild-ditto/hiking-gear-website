import { publicSite } from '../../site.config.mjs';

/*
 * Brand identity lives here. Rename or restyle the whole site by editing
 * this file: brand name, tagline, colour tokens, fonts and radii are all
 * injected as CSS custom properties by BaseLayout.
 */
export const site = {
  brandName: 'Bush Gums',
  tagline: 'Your first overnight hike, sorted.',
  title: 'Bush Gums | Affordable beginner overnight hiking gear Australia',
  description:
    'Curated starter hiking kits and lightweight value gear for Australian beginners planning a first overnight trip. Compare real product research and trade-offs.',
  url: publicSite.url,
  contactEmail: publicSite.contactEmail,
} as const;

/*
 * Palette: forest + cool mist + one amber accent.
 * Amber is the ONLY accent. It fills primary buttons and marks small
 * highlights. It is never used as text on light surfaces (contrast).
 */
export const theme = {
  light: {
    bg: '#f3f5f2', // cool mist page ground
    surface: '#fbfcfa', // raised panels, inputs
    'surface-2': '#e4e9e4', // quiet sage-grey tint
    ink: '#16241e', // forest charcoal text
    'ink-muted': '#4a5a53',
    line: '#cfd8d1',
    'line-strong': '#7a8c82',
    deep: '#1c3328', // deep forest surface (Build My Kit band, footer)
    'on-deep': '#eef2ee',
    'on-deep-muted': '#b3c2b9',
    accent: '#d9922e', // muted amber
    'accent-hover': '#e6a449',
    'on-accent': '#16241e',
    focus: '#1c3328',
    brand: '#1f4a2c', // logo green
  },
  dark: {
    bg: '#0f1814',
    surface: '#15211c',
    'surface-2': '#1b2a23',
    ink: '#e6ece7',
    'ink-muted': '#a8b6ae',
    line: '#2a3b33',
    'line-strong': '#6b8075',
    deep: '#182a21',
    'on-deep': '#eef2ee',
    'on-deep-muted': '#b3c2b9',
    accent: '#e0a04a',
    'accent-hover': '#ebb266',
    'on-accent': '#16241e',
    focus: '#e0a04a',
    brand: '#cfe0d3',
  },
  /*
   * Radius rule: every surface (cards, images, panels) uses --radius (10px).
   * Controls (inputs, option tiles) use --radius-sm (6px).
   * Buttons are full pill (--radius-pill). No other radii.
   */
  radius: { radius: '10px', 'radius-sm': '6px', 'radius-pill': '999px' },
  fonts: {
    sans: "'Geist Variable', 'Segoe UI', system-ui, sans-serif",
    mono: "'Geist Mono Variable', ui-monospace, 'SFMono-Regular', monospace",
  },
} as const;

const vars = (o: Record<string, string>) =>
  Object.entries(o)
    .map(([k, v]) => `--${k}:${v};`)
    .join('');

export const themeCss = `:root{${vars(theme.light)}${vars(theme.radius)}--font-sans:${theme.fonts.sans};--font-mono:${theme.fonts.mono};color-scheme:light dark}@media (prefers-color-scheme: dark){:root{${vars(theme.dark)}}}`;

export const primaryNav = [
  { href: '/starter-kits', label: 'Starter Kits' },
  { href: '/gear', label: 'Gear' },
  { href: '/learn', label: 'Guides' },
] as const;
