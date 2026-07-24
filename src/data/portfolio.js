import printStackImage from '../assets/images/print-stack.jpg';
import largeFormatImage from '../assets/images/large-format.jpg';

export const PORTFOLIO_CATEGORIES = ['All', 'Offset Printing', 'Large Format', 'Branding', 'Packaging', 'Digital'];

export const PORTFOLIO = [
  {
    id: 1,
    title: 'Corporate Stationery Suite',
    category: 'Offset Printing',
    image: printStackImage,
    description: 'Business cards, letterheads, and brochures printed with premium finishing.',
  },
  {
    id: 2,
    title: 'Grand Festival Banner Campaign',
    category: 'Large Format',
    image: largeFormatImage,
    description: 'Large-format festival banners produced for high-visibility retail promotions.',
  },
  {
    id: 3,
    title: 'Brand Identity Refresh',
    category: 'Branding',
    image: null,
    description: 'A complete logo and visual identity system for a growing local business.',
  },
  {
    id: 4,
    title: 'Product Packaging Design',
    category: 'Packaging',
    image: null,
    description: 'Structural and visual packaging design built to stand out on the shelf.',
  },
  {
    id: 5,
    title: 'Wedding Invitation Suite',
    category: 'Offset Printing',
    image: null,
    description: 'Premium wedding stationery with custom finishing and tactile detailing.',
  },
  {
    id: 6,
    title: 'Social Media Creative Pack',
    category: 'Digital',
    image: null,
    description: 'Scroll-stopping digital creatives designed for social media campaigns.',
  },
];
