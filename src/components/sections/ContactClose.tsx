import { ArrowRight, MessageCircle } from 'lucide-react';
import { company } from '../../data/company';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export function ContactClose() {
  return (
    <section id="contact" className="overflow-hidden bg-[#5c4c29] text-white">
      <div className="grid lg:min-h-[23rem] lg:grid-cols-12">
        <div className="site-container py-12 lg:col-span-7 lg:mr-0 lg:w-full lg:max-w-[54rem] lg:py-14 lg:pl-[max(2.5rem,calc((100vw-86rem)/2))]">
          <Reveal effect="drift" direction="left">
            <h2 className="text-[clamp(2.75rem,min(4.8vw,8vh),4.75rem)] font-medium leading-[0.98] tracking-[-.06em] text-white">
              <span className="block">Bawa referensi.</span>
              <span className="block text-[#e1b37c]">Kami bantu wujudkan.</span>
            </h2>
            <p className="mt-5 max-w-[56ch] text-sm leading-7 text-white/62">
              Tim kami membantu meninjau desain, material, ukuran, dan kebutuhan produksi untuk proyek Anda.
            </p>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                withArrow={false}
                className="!rounded-none !bg-[#e1b37c] px-7 !text-[#2b2b2b] hover:!bg-[#d8c6b2]"
              >
                Konsultasi via WhatsApp <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white/58 transition-colors hover:text-white"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4 text-[#d8c6b2]" strokeWidth={1.6} />
                {company.whatsapp}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="grid min-h-[17rem] grid-cols-[3.5rem_1fr] lg:col-span-5 lg:min-h-0" direction="right" delay={0.08} effect="mask">
          <div className="flex items-center justify-center bg-[#e1b37c] px-2 py-5">
            <p className="[writing-mode:vertical-rl] rotate-180 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-[#2b2b2b]">
              Dibuat di Bali
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src="/assets/images/workshop/artisan-uniform-detail.webp"
              alt="Pengrajin Karya Rotan Indonesia bekerja dengan seragam workshop"
              loading="lazy"
              className="h-full w-full object-cover object-[42%_center] transition-transform duration-700 ease-[var(--ease-kr)] hover:scale-[1.025]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
