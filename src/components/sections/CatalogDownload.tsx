import { Download, FileText, MessageCircle } from 'lucide-react';
import { company } from '../../data/company';
import { Reveal } from '../ui/Reveal';

export function CatalogDownload() {
  const catalogUrl = '/assets/catalog/mini-catalog-pt-karya-rotan-indonesia.pdf';

  return (
    <section className="overflow-hidden bg-kr-surface py-14 md:py-16" aria-labelledby="catalog-download-title">
      <div className="site-container mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-12 lg:items-center">
        <Reveal className="relative min-h-[25rem] lg:col-span-6" direction="left" effect="scale">
          <div className="absolute inset-y-5 left-[24%] right-[24%] rotate-[5deg] bg-kr-accent" />
          <div className="absolute inset-y-3 left-[22%] right-[22%] rotate-[1.5deg] border border-kr-line bg-kr-paper" />
          <a
            href={catalogUrl}
            download
            aria-label="Unduh Mini Catalog PT Karya Rotan Indonesia"
            className="group absolute inset-y-0 left-[20%] right-[20%] -rotate-[2deg] overflow-hidden bg-white shadow-[0_26px_70px_-30px_rgb(24_24_21_/_0.45)] transition-[transform,box-shadow] duration-700 ease-[var(--ease-kr)] hover:rotate-0 hover:scale-[1.02] hover:shadow-[0_32px_80px_-28px_rgb(92_76_41_/_0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kr-accent"
          >
            <img
              src="/assets/catalog/mini-catalog-cover.png"
              alt="Sampul Mini Catalog PT Karya Rotan Indonesia"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </a>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={0.08} effect="soft-focus">
          <h2 id="catalog-download-title" className="max-w-[15ch] text-[clamp(2.5rem,4vw,4rem)] font-medium leading-[1.02] tracking-[-.055em]">
            Katalog produk siap dijelajahi.
          </h2>
          <p className="mt-5 max-w-[55ch] text-sm leading-7 text-kr-muted">
            Temukan pilihan furniture, produk outdoor, lighting, dekorasi, serta layanan perbaikan untuk kebutuhan rumah dan proyek komersial.
          </p>

          <div className="mt-7 flex flex-col gap-4 border-y border-kr-line py-5 sm:flex-row sm:items-center">
            <FileText aria-hidden="true" className="h-9 w-9 shrink-0 text-kr-accent" strokeWidth={1.45} />
            <div className="min-w-0 flex-1">
              <p className="font-semibold">Mini Catalog Karya Rotan Indonesia</p>
            </div>
            <a
              href={catalogUrl}
              download
              className="group inline-flex min-h-12 items-center justify-center gap-2 bg-kr-accent px-5 text-sm font-semibold text-white shadow-transparent transition-[transform,box-shadow,background-color] duration-500 ease-[var(--ease-kr)] hover:-translate-y-1 hover:bg-[#493d22] hover:shadow-[0_16px_38px_-22px_rgb(92_76_41_/_0.65)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kr-accent"
            >
              <Download aria-hidden="true" className="h-4 w-4 transition-transform duration-500 ease-[var(--ease-kr)] group-hover:translate-y-0.5" />
              Unduh katalog
            </a>
          </div>
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="text-link mt-5 text-sm"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" strokeWidth={1.6} />
            Tanya produk via WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
