import { Check, Download, MessageCircle } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { PageMeta } from '../components/ui/PageMeta';
import { Reveal } from '../components/ui/Reveal';
import { company } from '../data/company';

const catalogContents = [
  'Furniture rotan dan produk outdoor',
  'Lighting dan produk dekoratif',
  'Pilihan material dan ukuran custom',
  'Layanan perbaikan furniture',
];

const catalogUrl = '/assets/catalog/mini-catalog-pt-karya-rotan-indonesia.pdf';

export function Catalog() {
  return (
    <>
      <PageMeta
        title="Katalog"
        description="Unduh Mini Catalog PT Karya Rotan Indonesia untuk melihat furniture, produk outdoor, lighting, dekorasi, dan layanan perbaikan."
      />
      <PageHeader
        eyebrow="Katalog"
        title="Pilihan produk untuk ruang dan proyek Anda."
        subtitle="Jelajahi furniture, produk outdoor, lighting, dekorasi, dan layanan perbaikan dalam satu katalog."
        backgroundImage="/assets/images/company/woven-baskets.jpg"
        objectPosition="center"
      />

      <section className="section-space bg-kr-paper">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5" effect="soft-focus">
            <h2 className="display-md max-w-[10ch]">Lihat pilihan sebelum memulai konsultasi.</h2>
            <p className="body-lg mt-6 max-w-[45ch] text-kr-muted">
              Mini catalog ini memuat referensi produk, material, ukuran, dan layanan yang dapat disesuaikan dengan kebutuhan Anda.
            </p>
            <div className="mt-8">
              <a
                href={catalogUrl}
                download
                className="group inline-flex min-h-12 items-center justify-center gap-2 bg-kr-accent px-6 text-sm font-semibold text-white transition-[transform,box-shadow,background-color] duration-500 ease-[var(--ease-kr)] hover:-translate-y-1 hover:bg-[#493d22] hover:shadow-[0_16px_38px_-22px_rgb(92_76_41_/_0.65)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kr-accent"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                Unduh katalog
              </a>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-link mt-5 text-sm"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" strokeWidth={1.6} />
                Tanya produk via WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal className="grid gap-3 sm:grid-cols-2 lg:col-span-7" delay={0.08} effect="mask">
            <div className="image-frame min-h-[22rem] sm:row-span-2">
              <img src="/assets/catalog/mini-catalog-cover.png" alt="Sampul Mini Catalog PT Karya Rotan Indonesia" loading="lazy" className="object-contain" />
            </div>
            <div className="image-frame min-h-[15rem]">
              <img src="/assets/images/portfolio/restoran-dabo.webp" alt="Koleksi lighting rotan" loading="lazy" />
            </div>
            <div className="image-frame min-h-[15rem]">
              <img src="/assets/images/company/woven-baskets.jpg" alt="Koleksi decor dan handicraft" loading="lazy" />
            </div>
          </Reveal>
        </div>

        <div className="site-container mt-16 border-t border-kr-line pt-8">
          <Reveal effect="drift" direction="left">
            <h2 className="text-3xl font-medium tracking-[-.05em]">Isi mini catalog</h2>
          </Reveal>
          <div className="mt-7 grid gap-0 md:grid-cols-4">
            {catalogContents.map((item, index) => (
              <Reveal key={item} className="group border-b border-kr-line py-5 transition-transform duration-500 ease-[var(--ease-kr)] hover:-translate-y-1 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0" delay={index * 0.05} effect="scale">
                <Check aria-hidden="true" className="h-5 w-5 text-kr-accent" strokeWidth={1.8} />
                <p className="mt-4 text-sm font-semibold leading-6">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
