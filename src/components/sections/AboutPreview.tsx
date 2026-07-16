import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { company } from '../../data/company';
import { Reveal } from '../ui/Reveal';

export function AboutPreview() {
  return (
    <section id="about" className="section-space bg-kr-paper">
      <div className="site-container">
        <div className="mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal effect="drift" direction="left">
              <h2 className="max-w-[15ch] text-balance text-[clamp(2.5rem,min(3.4vw,6.5vh),3.5rem)] font-medium leading-[1.03] tracking-[-.055em]">
                Dari Bali, memproduksi furniture untuk hospitality dan F&B.
              </h2>
            </Reveal>

            <Reveal className="mt-8 border-t border-kr-line pt-5" delay={0.08} effect="soft-focus">
              <div className="grid grid-cols-[0.8fr_1.2fr] gap-5">
                <div>
                  <p className="text-xs font-semibold text-kr-muted">Sejak {company.established}</p>
                  <p className="mt-1 text-5xl font-medium tracking-[-.06em] text-kr-accent">{company.partnerCount}</p>
                  <p className="text-sm text-kr-muted">mitra usaha</p>
                </div>
                <div className="border-l border-kr-line pl-5">
                  <p className="text-xs font-semibold text-kr-muted">Lokasi utama</p>
                  <p className="mt-2 text-xl font-medium tracking-[-.035em]">Bali & Jakarta</p>
                  <p className="mt-2 text-sm text-kr-muted">Manufaktur berbasis proyek</p>
                </div>
              </div>
              <p className="mt-5 max-w-[42ch] text-[0.9375rem] leading-6 text-kr-muted">
                Kami menghubungkan pengrajin berpengalaman dengan kebutuhan hospitality dan F&B melalui produksi yang terstruktur.
              </p>
              <Link to="/about" className="text-link mt-4 text-sm">
                Kenali perusahaan <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal className="image-frame aspect-[4/3] sm:aspect-[16/10] lg:col-span-7" delay={0.08} direction="right" effect="mask">
            <img
              src="/assets/images/workshop/workshop-team-check.webp"
              alt="Tim Karya Rotan Indonesia meninjau produksi di workshop"
              loading="lazy"
              className="object-center"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
