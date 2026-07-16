import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../../data/portfolio';
import { Reveal } from '../ui/Reveal';

export function PortfolioPreview() {
  const [active, setActive] = useState(0);

  return (
    <section id="portfolio" className="section-space overflow-hidden bg-kr-surface">
      <div className="site-container">
        <Reveal className="mb-8 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end" effect="drift" direction="left">
          <h2 className="display-md max-w-[9ch]">Ruang nyata. Pengerjaan nyata.</h2>
          <Link to="/portfolio" className="text-link shrink-0">
            Lihat portfolio <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="portfolio-preview-track no-scrollbar -mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-4 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0">
          {portfolioItems.map((item, index) => (
            <Reveal
              key={item.name}
              className={`min-w-[78vw] snap-center transition-[flex] duration-700 ease-[var(--ease-kr)] sm:min-w-[48vw] lg:min-w-0 ${
                active === index ? 'lg:flex-[2.2]' : 'lg:flex-1'
              }`}
              delay={index * 0.04}
              effect={index % 2 === 0 ? 'mask' : 'scale'}
            >
              <article
                className="group flex h-full flex-col outline-none"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={0}
              >
                <div className="image-frame min-h-[24rem] flex-1 lg:min-h-0">
                  <img src={item.image} alt={`${item.name}, ${item.location}`} loading="lazy" />
                </div>
                <div className="border-t border-kr-line py-4 transition-transform duration-500 ease-[var(--ease-kr)] group-hover:translate-x-1 group-focus:translate-x-1">
                  <p className="font-bold transition-colors duration-300 group-hover:text-kr-accent group-focus:text-kr-accent">{item.name}</p>
                  <p className={`mt-1 text-sm text-kr-accent transition-opacity ${active === index ? 'opacity-100' : 'lg:opacity-0'}`}>
                    {item.scope}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
