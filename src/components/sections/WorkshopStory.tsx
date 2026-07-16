import { Armchair, Grid3X3, Paintbrush, Search } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const stages = [
  { label: 'Produksi internal', Icon: Grid3X3 },
  { label: 'Perakitan', Icon: Armchair },
  { label: 'Finishing', Icon: Paintbrush },
  { label: 'Quality control', Icon: Search },
];

export function WorkshopStory() {
  return (
    <section className="section-space bg-kr-paper">
      <div className="site-container">
        <div className="mx-auto grid max-w-[86rem] gap-3 lg:h-[clamp(22rem,58vh,29rem)] lg:grid-cols-2">
          <Reveal className="image-frame aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full" effect="mask">
            <img
              src="/assets/images/workshop/artisan-weaving-wide.webp"
              alt="Produksi anyaman rotan di workshop Karya Rotan Indonesia"
              loading="lazy"
            />
          </Reveal>
          <div className="grid h-[19.5rem] grid-cols-[1.35fr_0.9fr] grid-rows-[1fr_0.86fr] gap-3 sm:h-[24rem] lg:h-auto lg:min-h-0">
            <Reveal className="image-frame min-h-0" delay={0.08} effect="drift" direction="right">
              <img src="/assets/images/workshop/artisan-welding.webp" alt="Proses pengelasan rangka furniture" loading="lazy" />
            </Reveal>
            <Reveal className="image-frame min-h-0" delay={0.12} effect="scale">
              <img src="/assets/images/workshop/artisan-weaving-detail.webp" alt="Detail proses menganyam produk rotan" loading="lazy" />
            </Reveal>
            <Reveal className="image-frame col-span-2 min-h-0" delay={0.16} effect="drift" direction="left">
              <img
                src="/assets/images/workshop/workshop-team-check.webp"
                alt="Tim meninjau proses produksi di workshop"
                loading="lazy"
                className="object-center"
              />
            </Reveal>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-[86rem] gap-8 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-7" effect="soft-focus">
            <h2 className="display-md max-w-none text-left">
              <span className="block">Dibuat langsung.</span>
              <span className="block">Diawasi sampai akhir.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.08} effect="drift" direction="right">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-[28ch] text-kr-muted">
                Setiap produk dikerjakan di workshop Bali oleh tenaga berpengalaman.
              </p>
              <p className="text-sm font-semibold text-kr-accent">Produksi internal</p>
            </div>
            <div className="mt-5 grid grid-cols-2 border-t border-kr-line pt-5 sm:grid-cols-4">
              {stages.map(({ label, Icon }, index) => (
                <div key={label} className={`group py-2 text-center ${index > 0 ? 'sm:border-l sm:border-kr-line' : ''}`}>
                  <Icon aria-hidden="true" className="mx-auto h-7 w-7 text-kr-tan transition-[transform,color] duration-500 ease-[var(--ease-kr)] group-hover:-translate-y-1 group-hover:rotate-[-4deg] group-hover:text-kr-accent" strokeWidth={1.5} />
                  <p className="mt-3 text-xs font-medium transition-colors duration-300 group-hover:text-kr-accent">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
