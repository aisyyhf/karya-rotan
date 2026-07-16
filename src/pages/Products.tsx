import { PageHeader } from '../components/layout/PageHeader';
import { ProjectCTA } from '../components/sections/ProjectCTA';
import { PageMeta } from '../components/ui/PageMeta';
import { Reveal } from '../components/ui/Reveal';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { products, type Product } from '../data/products';

interface ProductCopyProps {
  product: Product;
  light?: boolean;
  compact?: boolean;
}

function ProductCopy({ product, light = false, compact = false }: ProductCopyProps) {
  const muted = light ? 'text-white/62' : 'text-kr-muted';
  const line = light ? 'border-white/18' : 'border-kr-line';

  return (
    <div className={`flex h-full flex-col ${compact ? 'p-6' : 'p-7 md:p-9'}`}>
      <h2 className={`${compact ? 'text-3xl' : 'text-[clamp(2.25rem,3.5vw,3.75rem)]'} font-medium leading-[1.02] tracking-[-.055em]`}>
        {product.title}
      </h2>
      <p className={`mt-4 max-w-[52ch] text-sm leading-7 ${muted}`}>{product.description}</p>

      <div className={`mt-6 grid gap-x-6 gap-y-2 border-t pt-4 text-sm font-medium sm:grid-cols-2 ${line}`}>
        {product.items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div className={`mt-6 border-t pt-4 ${line}`}>
        <p className={`text-xs ${muted}`}>Harga mulai dari</p>
        <p className="mt-1 font-semibold">Sesuai spesifikasi</p>
        <p className={`mt-1 text-xs leading-5 ${muted}`}>{product.startingPriceInfo}</p>
      </div>

      <div className="mt-auto pt-6">
        <WhatsAppButton
          variant={light ? 'light' : 'outline'}
          label="Minta harga via WhatsApp"
          message={`Halo Karya Rotan Indonesia, saya ingin menanyakan harga untuk kategori ${product.title}.`}
        />
      </div>
    </div>
  );
}

export function Products() {
  return (
    <>
      <PageMeta
        title="Produk"
        description="Jelajahi furniture rotan, synthetic rattan, lighting, decor, handicraft, dan panel rotan sintetis untuk proyek hospitality."
      />
      <PageHeader
        eyebrow="Produk"
        title="Koleksi untuk ruang yang membutuhkan karakter."
        subtitle="Lima kategori produk dengan ukuran, material, dan finishing yang dapat disesuaikan untuk kebutuhan proyek."
        backgroundImage="/assets/images/company/showroom.jpg"
        objectPosition="center"
      />

      <section className="section-space bg-kr-paper">
        <div className="site-container mx-auto max-w-[86rem]">
          <Reveal className="mb-10 grid gap-5 lg:grid-cols-12 lg:items-end" effect="soft-focus">
            <h2 className="display-md max-w-[13ch] lg:col-span-8">Lima kategori. Satu proses produksi.</h2>
            <p className="max-w-[43ch] text-sm leading-7 text-kr-muted lg:col-span-4">
              Kirim ukuran, referensi, dan kebutuhan penggunaan. Material serta konstruksi akan ditinjau sesuai konteks ruang.
            </p>
          </Reveal>

          <Reveal effect="mask">
            <article className="group grid overflow-hidden bg-[#5c4c29] text-white lg:grid-cols-[1.18fr_0.82fr]">
              <div className="h-[22rem] overflow-hidden lg:h-auto lg:min-h-[27rem]">
                <img
                  src={products[0].image}
                  alt={products[0].title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-kr)] group-hover:scale-[1.035]"
                />
              </div>
              <ProductCopy product={products[0]} light />
            </article>
          </Reveal>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {products.slice(1, 3).map((product, index) => (
              <Reveal key={product.title} delay={index * 0.06} effect={index % 2 === 0 ? 'drift' : 'scale'} direction={index % 2 === 0 ? 'left' : 'right'}>
                <article className="group grid h-full bg-kr-surface transition-[transform,box-shadow] duration-700 ease-[var(--ease-kr)] hover:-translate-y-1 hover:shadow-[0_24px_55px_-38px_rgb(92_76_41_/_0.72)]">
                  <div className="h-[16rem] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-kr)] group-hover:scale-[1.035]"
                    />
                  </div>
                  <ProductCopy product={product} compact />
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4" delay={0.08} effect="drift" direction="right">
            <article className="group grid overflow-hidden bg-kr-accent text-white lg:grid-cols-[0.82fr_1.18fr]">
              <ProductCopy product={products[3]} light />
              <div className="h-[20rem] overflow-hidden lg:h-auto lg:min-h-[24rem]">
                <img
                  src={products[3].image}
                  alt={products[3].title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-kr)] group-hover:scale-[1.035]"
                />
              </div>
            </article>
          </Reveal>

          <Reveal className="mt-4 border-y border-kr-line py-4" delay={0.1} effect="scale">
            <article className="group grid bg-kr-surface lg:grid-cols-[1.08fr_0.92fr]">
              <div className="h-[19rem] overflow-hidden">
                <img
                  src={products[4].image}
                  alt={products[4].title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-kr)] group-hover:scale-[1.035]"
                />
              </div>
              <ProductCopy product={products[4]} compact />
            </article>
          </Reveal>
        </div>
      </section>

      <ProjectCTA
        title="Butuh ukuran atau bentuk khusus?"
        body="Kirim gambar referensi, gambar kerja, atau konsep interior. Kami akan meninjau kebutuhan konstruksi dan materialnya."
      />
    </>
  );
}
