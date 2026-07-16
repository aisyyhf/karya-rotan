# Karya Rotan Indonesia

Website company profile **PT Karya Rotan Indonesia**, perusahaan manufaktur di Bali yang memproduksi natural furniture, home decor, dan handicraft rotan untuk kebutuhan hospitality, F&B, dan proyek komersial.

Website ini menampilkan profil perusahaan, kategori produk, portfolio proyek, alur layanan custom, katalog produk (PDF), serta informasi kontak untuk calon klien dan mitra.

## Teknologi

- [React 19](https://react.dev/) + TypeScript
- [Vite](https://vite.dev/) sebagai build tool
- [React Router](https://reactrouter.com/) untuk routing
- [Tailwind CSS 4](https://tailwindcss.com/) untuk styling
- [Framer Motion](https://www.framer.com/motion/) untuk animasi/reveal
- [Lucide React](https://lucide.dev/) untuk ikon
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) untuk linting

## Persyaratan

- Node.js (disarankan versi LTS terbaru)
- npm

## Menjalankan proyek

```bash
npm install
npm run dev
```

Website akan berjalan di alamat lokal yang ditampilkan Vite (default `http://localhost:5173`).

## Skrip yang tersedia

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan development server |
| `npm run lint` | Menjalankan pemeriksaan kode dengan oxlint |
| `npm run build` | Type-check (`tsc -b`) lalu build production dengan Vite |
| `npm run preview` | Menjalankan preview hasil build production secara lokal |

Hasil production build tersedia di folder `dist` dan dapat dibuat ulang kapan saja melalui perintah `npm run build`.

## Halaman

Routing didefinisikan di `src/App.tsx`:

| Path | Halaman | Deskripsi |
| --- | --- | --- |
| `/` | Home | Landing page: hero, preview produk, portfolio, dan cerita workshop |
| `/about` | About | Profil, visi misi, dan nilai perusahaan |
| `/products` | Products | Kategori produk (furniture rotan, synthetic rattan, lighting, dll.) |
| `/portfolio` | Portfolio | Daftar proyek yang sudah dikerjakan |
| `/custom-project` | Custom Project | Alur pemesanan produk custom |
| `/catalog` | Catalog | Unduh katalog produk (PDF) |
| `/contact` | Contact | Informasi kontak, alamat, dan WhatsApp |
| `*` | NotFound | Halaman 404 |

## Struktur proyek

```
src/
├── App.tsx              # Routing utama & layout halaman
├── main.tsx              # Entry point React
├── components/
│   ├── layout/            # Navbar, Footer, PageHeader
│   ├── sections/          # Section per halaman (Hero, AboutPreview, dll.)
│   └── ui/                # Komponen UI reusable (Button, Reveal, WhatsAppButton, dll.)
├── data/
│   ├── company.ts          # Data profil perusahaan (kontak, alamat, visi misi, nilai)
│   ├── navigation.ts       # Data navbar & footer
│   ├── products.ts         # Data kategori produk
│   └── portfolio.ts        # Data proyek portfolio
├── pages/                # Halaman-halaman di atas
└── styles/
    └── globals.css          # Style global & konfigurasi Tailwind

public/assets/
├── catalog/               # Katalog produk (cover & PDF)
└── images/
    ├── company/             # Foto profil perusahaan/showroom
    ├── portfolio/           # Foto proyek portfolio
    └── workshop/            # Foto workshop & proses produksi
```

## Mengubah konten

Sebagian besar konten teks dan data bersifat data-driven, sehingga dapat diubah tanpa menyentuh komponen:

- **Data perusahaan** (nama, alamat, kontak, WhatsApp, visi misi, nilai) → `src/data/company.ts`
- **Menu navigasi** → `src/data/navigation.ts`
- **Kategori produk** → `src/data/products.ts`
- **Daftar proyek portfolio** → `src/data/portfolio.ts`
- **Gambar** → tambahkan file ke `public/assets/images/...` lalu referensikan path-nya di file data terkait
- **Katalog PDF** → ganti file di `public/assets/catalog/`

## Deploy

Setelah `npm run build`, isi folder `dist` berupa static site yang dapat di-deploy ke layanan hosting statis mana pun (misalnya Netlify, Vercel, atau Nginx/Apache biasa). Karena menggunakan client-side routing (React Router), pastikan server dikonfigurasi untuk melakukan fallback semua route ke `index.html`.
