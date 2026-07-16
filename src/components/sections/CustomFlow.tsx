import { ArrowRight } from 'lucide-react';
import { company } from '../../data/company';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';

const customSteps = [
  'Konsultasi',
  'Review desain',
  'Konfirmasi material',
  'Penawaran',
  'Produksi',
  'Quality control',
  'Pengiriman',
];

export function CustomFlow() {
  return (
    <section id="custom" className="section-space bg-kr-paper">
      <div className="site-container mx-auto max-w-[80rem]">
        <Reveal className="mx-auto max-w-5xl text-center" effect="soft-focus">
          <h2 className="display-md">
            <span className="block">Dari referensi menjadi</span>
            <span className="block">produk siap proyek.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[82ch] text-[clamp(1rem,1.2vw,1.125rem)] leading-7 text-kr-muted">
            Kami menyesuaikan desain, material, ukuran, dan finishing sebelum produksi dimulai.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
            <span className="text-kr-accent">{company.minimumOrder}</span>
            <span>Estimasi pengerjaan {company.customTimeline.toLowerCase()}</span>
          </div>
        </Reveal>

        <Reveal className="custom-flow-media image-frame mt-8 h-[14rem] md:h-[clamp(13.5rem,38vh,15.5rem)]" delay={0.08} effect="mask">
          <img
            src="/assets/images/workshop/artisan-frame-wide.webp"
            alt="Pengrajin menyiapkan rangka produk rotan custom"
            loading="lazy"
            className="object-center"
          />
        </Reveal>

        <Reveal className="no-scrollbar mt-6 overflow-x-auto" delay={0.1} effect="drift" direction="left">
          <div className="flex min-w-[62rem] items-center">
            {customSteps.map((step, index) => (
              <div key={step} className="group flex flex-1 items-center">
                <p className={`whitespace-nowrap text-sm transition-[transform,color] duration-500 ease-[var(--ease-kr)] group-hover:-translate-y-1 group-hover:text-kr-accent ${index === 0 ? 'font-semibold' : 'font-medium'}`}>{step}</p>
                {index < customSteps.length - 1 && (
                  <span className="mx-4 flex min-w-8 flex-1 items-center text-kr-muted">
                    <span className="h-px flex-1 bg-kr-line" />
                    <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform duration-500 ease-[var(--ease-kr)] group-hover:translate-x-1" strokeWidth={1.4} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-6 flex justify-end" delay={0.12} effect="scale">
          <Button
            href={company.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            withArrow={false}
            className="!rounded-none px-8"
          >
            Mulai konsultasi <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
