import { ArrowUpRight, MapPin } from 'lucide-react';
import { ProjectCTA } from '../components/sections/ProjectCTA';
import { PageMeta } from '../components/ui/PageMeta';
import { Reveal } from '../components/ui/Reveal';
import { company } from '../data/company';
import { portfolioCapabilities, portfolioItems } from '../data/portfolio';

export function Portfolio() {
  return (
    <>
      <PageMeta
        title="Portfolio"
        description="Lihat pengerjaan furniture dan instalasi rotan Karya Rotan Indonesia untuk hotel, restoran, villa, dan ruang komersial."
      />

      <section className="bg-[#5c4c29] pb-0 pt-[calc(72px+3rem)] text-white md:pt-[calc(72px+4rem)]">
        <div className="site-container mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8" effect="soft-focus">
            <p className="kicker text-[#e1b37c]">Portfolio proyek</p>
            <h1 className="mt-5 max-w-[13ch] pb-2 text-[clamp(3.2rem,6.6vw,6.8rem)] font-medium leading-[.99] tracking-[-.065em] text-white">
              Furniture dan detail yang menemukan ruangnya.
            </h1>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.08} effect="drift" direction="right">
            <p className="max-w-[44ch] text-sm leading-7 text-white/68">
              Dokumentasi hasil akhir proyek hospitality yang memperlihatkan skala, karakter material, dan penerapannya di dalam ruang.
            </p>
          </Reveal>
        </div>

        <Reveal className="site-container mx-auto mt-10 h-[20rem] max-w-[96rem] overflow-hidden rounded-t-lg sm:h-[24rem] md:h-[clamp(24rem,52vh,31rem)]" delay={0.12} effect="mask">
          <img
            src="/assets/images/portfolio/hero-restaurant.webp"
            alt="Interior restoran dengan furniture dan lighting rotan Karya Rotan Indonesia"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </Reveal>
      </section>

      <section className="bg-kr-surface py-7 md:py-8">
        <div className="site-container mx-auto max-w-[86rem]">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-8" effect="drift" direction="left">
            <p className="shrink-0 text-sm font-semibold">Enam kategori pengerjaan</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {portfolioCapabilities.map((capability, index) => (
                <span key={capability} className="text-base font-medium tracking-[-.025em] sm:text-lg">
                  {index > 0 && <span className="mr-5 text-kr-accent">/</span>}
                  {capability}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-kr-paper py-14 md:py-20">
        <div className="site-container mx-auto max-w-[86rem]">
          <Reveal className="max-w-4xl" effect="soft-focus">
            <h2 className="display-md max-w-[12ch]">Catatan proyek terpilih.</h2>
            <p className="mt-5 max-w-[52ch] text-sm leading-7 text-kr-muted">
              Empat dokumentasi proyek yang tersedia saat ini, lengkap dengan lokasi, jenis pekerjaan, dan material utama.
            </p>
          </Reveal>

          <div className="mt-10 border-t border-kr-line">
            {portfolioItems.map((item, index) => {
              const message = `Halo Karya Rotan Indonesia, saya ingin berdiskusi tentang proyek serupa ${item.name}.`;
              return (
                <Reveal key={item.name} delay={index * 0.04} effect={index % 2 === 0 ? 'drift' : 'scale'} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <article className="group grid gap-5 border-b border-kr-line px-2 py-6 transition-[transform,background-color] duration-700 ease-[var(--ease-kr)] hover:translate-x-1 hover:bg-white/55 lg:grid-cols-12 lg:items-stretch">
                    <div className="flex items-start lg:col-span-1 lg:py-2">
                      <span className="text-xs font-bold text-kr-accent">0{index + 1}</span>
                    </div>

                    <div className="image-frame h-[15rem] lg:col-span-4 lg:h-[14rem]">
                      <img src={item.image} alt={`${item.name}, ${item.location}`} loading="lazy" />
                    </div>

                    <div className="flex flex-col justify-between lg:col-span-3 lg:py-2">
                      <div>
                        <p className="text-xs font-bold text-kr-accent">{item.category}</p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-[-.045em]">{item.name}</h3>
                      </div>
                      <p className="mt-5 inline-flex items-center gap-2 text-sm text-kr-muted">
                        <MapPin aria-hidden="true" className="h-4 w-4 text-kr-accent" strokeWidth={1.7} />
                        {item.location}
                      </p>
                    </div>

                    <dl className="grid gap-4 border-t border-kr-line pt-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-2">
                      <div>
                        <dt className="text-xs text-kr-muted">Jenis pekerjaan</dt>
                        <dd className="mt-2 text-sm font-medium leading-6">{item.scope}</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-kr-muted">Material</dt>
                        <dd className="mt-2 text-sm font-medium leading-6">{item.material}</dd>
                      </div>
                    </dl>

                    <div className="flex items-end lg:col-span-1 lg:justify-end lg:pb-2">
                      <a
                        href={`${company.whatsappUrl}?text=${encodeURIComponent(message)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-semibold transition-[color,gap] duration-500 ease-[var(--ease-kr)] hover:gap-3 hover:text-kr-accent"
                        aria-label={`Diskusikan proyek serupa ${item.name} melalui WhatsApp`}
                      >
                        WhatsApp
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectCTA
        title="Punya kebutuhan untuk ruang Anda?"
        body="Bagikan jenis ruang, kebutuhan produk, dan referensi desain untuk memulai pembahasan proyek."
      />
    </>
  );
}
