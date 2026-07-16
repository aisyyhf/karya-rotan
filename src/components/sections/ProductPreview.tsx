import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../../data/products';
import { products } from '../../data/products';
import { Reveal } from '../ui/Reveal';

const supportingProducts = [products[1], products[4], products[2], products[3]];

interface ProductCardProps {
  product: Product;
  delay?: number;
  featured?: boolean;
}

function ProductCard({ product, delay = 0, featured = false }: ProductCardProps) {
  return (
    <Reveal delay={delay} effect={featured ? 'mask' : 'scale'}>
      <Link
        to="/products"
        className="group block overflow-hidden rounded-lg bg-kr-paper transition-[transform,box-shadow] duration-700 ease-[var(--ease-kr)] hover:-translate-y-1.5 hover:shadow-[0_24px_55px_-38px_rgb(92_76_41_/_0.72)]"
        aria-label={`Lihat kategori ${product.title}`}
      >
        <div className={`overflow-hidden ${featured ? 'aspect-[5/3]' : 'aspect-[4/3]'}`}>
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-kr)] group-hover:scale-[1.035]"
          />
        </div>
        <div className="flex items-center gap-4 border-t border-kr-line px-5 py-4 transition-colors duration-500 group-hover:bg-[#d8c6b2]/35">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e1b37c]/35 transition-transform duration-500 ease-[var(--ease-kr)] group-hover:translate-x-1 group-hover:rotate-[-8deg]">
            <ArrowRight aria-hidden="true" className="h-4 w-4 text-kr-accent" strokeWidth={1.6} />
          </span>
          <span className="font-semibold transition-transform duration-500 ease-[var(--ease-kr)] group-hover:translate-x-1">{product.title}</span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ProductPreview() {
  return (
    <section id="products" className="section-space bg-kr-surface">
      <div className="site-container">
        <div className="mx-auto grid max-w-[86rem] gap-2 lg:grid-cols-[0.92fr_1fr]">
          <div className="grid content-start gap-2">
            <Reveal className="flex flex-col items-start px-3 pb-7 pt-1" effect="soft-focus">
              <h2 className="display-md font-semibold">
                <span className="block">Lima kategori.</span>
                <span className="block">Satu standar produksi.</span>
              </h2>
              <Link
                to="/products"
                className="group mt-6 inline-flex items-center gap-2 border-b border-kr-accent pb-1 font-semibold text-kr-accent transition-[color,gap,border-color] duration-500 ease-[var(--ease-kr)] hover:gap-3 hover:border-kr-ink hover:text-kr-ink"
              >
                Jelajahi produk
              </Link>
            </Reveal>

            <ProductCard product={products[0]} featured delay={0.05} />
          </div>

          <div className="grid content-start gap-2 sm:grid-cols-2">
            {supportingProducts.map((product, index) => (
              <ProductCard key={product.title} product={product} delay={0.06 + index * 0.04} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
