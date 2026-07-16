export interface PortfolioItem {
  name: string;
  category: string;
  location: string;
  scope: string;
  material: string;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    name: 'Restaurant Come-Xia',
    category: 'Cafe & Restaurant',
    location: 'Alam Sutera',
    scope: 'Furniture dan lighting untuk ruang F&B.',
    material: 'Rotan natural dan material pendukung',
    image: '/assets/images/portfolio/restaurant-come-xia.webp',
  },
  {
    name: 'Crystal Kuta Hotel',
    category: 'Hotel',
    location: 'Bali',
    scope: 'Instalasi lighting rotan pada area hospitality.',
    material: 'Rotan natural',
    image: '/assets/images/portfolio/crystal-kuta-hotel.webp',
  },
  {
    name: 'Restoran DABO',
    category: 'Cafe & Restaurant',
    location: 'Denpasar',
    scope: 'Lighting dekoratif rotan untuk ruang restoran.',
    material: 'Rotan natural',
    image: '/assets/images/portfolio/restoran-dabo.webp',
  },
  {
    name: 'The Artini Djiwa Hotel',
    category: 'Hotel',
    location: 'Ubud',
    scope: 'Instalasi lighting rotan custom pada area hotel.',
    material: 'Rotan natural',
    image: '/assets/images/portfolio/artini-djiwa-hotel.webp',
  },
];

export const portfolioCapabilities = [
  'Hotel',
  'Cafe & Restaurant',
  'Villa',
  'Commercial Project',
  'Custom Furniture',
  'Panel Rotan Sintetis',
];
