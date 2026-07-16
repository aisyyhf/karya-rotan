export interface NavLink {
  label: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Tentang', path: '/about' },
  { label: 'Produk', path: '/products' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Custom Project', path: '/custom-project' },
  { label: 'Kontak', path: '/contact' },
];

export const footerLinks = [
  ...navLinks.slice(1),
  { label: 'Katalog', path: '/catalog' },
];
