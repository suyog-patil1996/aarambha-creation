// Single-page anchor nav: labels map to section ids rendered on Home.
// Gallery/Team/Pricing/FAQ pages still exist under src/pages + src/routes
// (architecture preserved) but are intentionally not linked from the nav.
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '#about' },
  { label: 'Services', to: '#services' },
  { label: 'Portfolio', to: '#portfolio' },
  { label: 'Contact', to: '#contact' },
];
