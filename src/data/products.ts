export interface Product {
  title: string;
  image: string;
  description: string;
  items: string[];
  startingPriceInfo: string;
}

export const products: Product[] = [
  {
    title: 'Furniture Rotan',
    image: '/assets/images/company/showroom.jpg',
    description:
      'Meja, kursi, sofa, dan seating berbahan rotan alami untuk interior hospitality dan ruang komersial.',
    items: ['Meja indoor dan outdoor', 'Kursi dining, lounge, dan bar', 'Sofa dan seating custom'],
    startingPriceInfo: 'Harga mengikuti ukuran, material, dan spesifikasi proyek.',
  },
  {
    title: 'Synthetic Rattan',
    image: '/assets/images/prod-synthetic-rattan.png',
    description:
      'Pilihan rotan sintetis untuk kebutuhan area outdoor dan semi-outdoor dengan tampilan anyaman natural.',
    items: ['Furniture outdoor', 'Pilihan warna anyaman', 'Ukuran dan konstruksi custom'],
    startingPriceInfo: 'Harga mengikuti ukuran, konstruksi, dan pilihan anyaman.',
  },
  {
    title: 'Lighting',
    image: '/assets/images/portfolio/restoran-dabo.webp',
    description:
      'Kap lampu dan instalasi lighting rotan untuk menciptakan atmosfer hangat pada hotel, restoran, dan villa.',
    items: ['Kap lampu gantung', 'Instalasi komposisi lampu', 'Bentuk custom'],
    startingPriceInfo: 'Harga mengikuti dimensi, bentuk, dan jumlah unit.',
  },
  {
    title: 'Decor & Handicraft',
    image: '/assets/images/company/woven-baskets.jpg',
    description:
      'Home decor dan kerajinan material natural untuk melengkapi identitas ruang hunian maupun komersial.',
    items: ['Basket dan storage', 'Dekorasi meja', 'Aksesori ruang'],
    startingPriceInfo: 'Harga mengikuti model, material, dan kuantitas.',
  },
  {
    title: 'Panel Rotan Sintetis',
    image: '/assets/images/prod-panel-rotan.png',
    description:
      'Panel anyaman untuk partisi, dinding aksen, dan elemen dekoratif pada interior proyek.',
    items: ['Panel partisi', 'Dinding aksen', 'Ukuran dan pola custom'],
    startingPriceInfo: 'Harga mengikuti ukuran panel, pola, dan kebutuhan pemasangan.',
  },
];
