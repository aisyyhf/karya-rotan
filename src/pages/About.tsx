import { CheckCircle2, MapPin } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { ProjectCTA } from '../components/sections/ProjectCTA';
import { PageMeta } from '../components/ui/PageMeta';
import { Reveal } from '../components/ui/Reveal';
import { company } from '../data/company';

const focusAreas = [
  ['Hospitality & F&B', 'Furniture, lighting, decor, dan elemen ruang untuk hotel, restoran, villa, serta area komersial.'],
  ['Produksi berbasis proyek', 'Ukuran, material, konstruksi, dan finishing ditinjau berdasarkan kebutuhan setiap ruang.'],
  ['Craft dengan sistem', 'Keterampilan pengrajin berjalan bersama komunikasi, pengawasan produksi, dan quality control.'],
];

export function About() {
  return (
    <>
      <PageMeta
        title="Tentang Kami"
        description="Kenali PT Karya Rotan Indonesia, perusahaan manufaktur furniture dan dekorasi natural berbasis di Bali sejak 2022."
      />
      <PageHeader
        eyebrow="Tentang Kami"
        title="Manufaktur berbasis craft, bekerja dengan sistem."
        subtitle="Kami menghubungkan keterampilan pengrajin Indonesia dengan kebutuhan hospitality dan F&B melalui produksi yang terstruktur."
        backgroundImage="/assets/images/workshop/workshop-team-check.webp"
        objectPosition="center"
      />

      <section className="section-space bg-kr-paper">
        <div className="site-container mx-auto grid max-w-[86rem] gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5" effect="soft-focus">
            <h2 className="display-md max-w-[11ch]">PT Karya Rotan Indonesia.</h2>
            <p className="mt-6 max-w-[44ch] text-sm leading-7 text-kr-muted">
              Perusahaan manufaktur di Bali yang memproduksi natural furniture, home decor, dan handicraft untuk hospitality, F&B, dan proyek komersial.
            </p>
            <p className="mt-4 max-w-[44ch] text-sm leading-7 text-kr-muted">
              Didirikan pada 2022 untuk menjembatani keterampilan pengrajin dengan kebutuhan industri melalui sistem produksi yang lebih terstruktur dan berkelanjutan.
            </p>

            <div className="mt-8 grid grid-cols-2 border-y border-kr-line py-5">
              <div>
                <p className="text-4xl font-medium tracking-[-.06em]">{company.established}</p>
                <p className="mt-1 text-xs text-kr-muted">Tahun berdiri</p>
              </div>
              <div className="border-l border-kr-line pl-5">
                <p className="text-4xl font-medium tracking-[-.06em] text-kr-accent">{company.partnerCount}</p>
                <p className="mt-1 text-xs text-kr-muted">Mitra usaha</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold">
              {['Badan usaha PT', 'Akta Pendirian', 'NIB'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-kr-accent" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="image-frame aspect-[16/10] lg:col-span-7" delay={0.08} effect="mask">
            <img src="/assets/images/workshop/artisan-frame-wide.webp" alt="Pengrajin menganyam rangka produk rotan di workshop" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="bg-kr-surface py-14 md:py-20">
        <div className="site-container mx-auto grid max-w-[86rem] gap-8 lg:grid-cols-12 lg:items-stretch">
          <Reveal className="lg:col-span-5" direction="left" effect="drift">
            <div className="image-frame h-[20rem] sm:h-[26rem] lg:h-full lg:min-h-[32rem]">
              <img src="/assets/images/company/showroom.jpg" alt="Koleksi furniture dan dekorasi rotan Karya Rotan Indonesia" loading="lazy" />
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pl-8">
            <Reveal effect="soft-focus">
              <h2 className="display-md max-w-[12ch]">Fokus pada kebutuhan ruang dan produksi.</h2>
              <p className="mt-5 max-w-[50ch] text-sm leading-7 text-kr-muted">{company.vision}</p>
            </Reveal>

            <div className="mt-8 border-t border-kr-line">
              {focusAreas.map(([title, description], index) => (
                <Reveal key={title} className="grid gap-3 border-b border-kr-line py-5 sm:grid-cols-[3rem_minmax(0,1fr)]" delay={index * 0.05} effect="scale">
                  <span className="text-xs font-bold text-kr-accent">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-.035em]">{title}</h3>
                    <p className="mt-2 max-w-[55ch] text-sm leading-6 text-kr-muted">{description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#5c4c29] py-14 text-white md:py-20">
        <div className="site-container mx-auto max-w-[86rem]">
          <Reveal className="max-w-3xl" effect="drift" direction="left">
            <h2 className="display-md max-w-[13ch] text-white">Nilai yang menjaga cara kami bekerja.</h2>
            <p className="mt-5 max-w-[52ch] text-sm leading-7 text-white/65">
              Empat prinsip yang digunakan tim kami saat berkomunikasi, memproduksi, dan menjaga komitmen kepada setiap mitra.
            </p>
          </Reveal>

          <div className="mt-10 border-t border-white/18">
            {company.values.map(([title, description], index) => (
              <Reveal key={title} className="grid gap-3 border-b border-white/18 py-5 md:grid-cols-12 md:items-baseline" delay={index * 0.04} effect="drift" direction={index % 2 === 0 ? 'left' : 'right'}>
                <span className="text-xs font-bold text-[#e1b37c] md:col-span-1">0{index + 1}</span>
                <h3 className="text-[clamp(2rem,3.5vw,3.5rem)] font-medium tracking-[-.05em] text-white md:col-span-5">{title}</h3>
                <p className="max-w-[50ch] text-sm leading-7 text-white/65 md:col-span-6">{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kr-paper py-14 md:py-20">
        <div className="site-container mx-auto max-w-[86rem]">
          <Reveal className="grid overflow-hidden rounded-lg bg-[#5c4c29] text-white lg:grid-cols-12" effect="scale">
            <div className="bg-[#e1b37c] p-7 text-[#2b2b2b] sm:p-10 lg:col-span-5 lg:row-span-2 lg:p-12">
              <MapPin aria-hidden="true" className="h-7 w-7" strokeWidth={1.5} />
              <p className="mt-10 text-sm font-semibold">Layanan perbaikan</p>
              <h2 className="mt-2 text-[clamp(3.5rem,7vw,6.5rem)] font-medium leading-none tracking-[-.065em]">{company.repairServiceArea}</h2>
              <p className="mt-5 max-w-[30ch] text-sm leading-6">Berbasis di Denpasar dengan layanan perbaikan untuk wilayah Bali.</p>
            </div>

            <div className="border-b border-white/18 p-7 sm:p-10 lg:col-span-7 lg:px-12">
              <p className="text-sm font-semibold text-[#e1b37c]">Gratis ongkos kirim</p>
              <p className="mt-3 text-2xl font-medium leading-snug tracking-[-.035em] text-white">{company.freeDeliveryArea}</p>
            </div>

            <div className="p-7 sm:p-10 lg:col-span-7 lg:px-12">
              <p className="text-sm font-semibold text-[#e1b37c]">Online order</p>
              <p className="mt-3 text-2xl font-medium leading-snug tracking-[-.035em] text-white">{company.onlineOrderArea}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-kr-paper py-14 md:py-20">
        <div className="site-container mx-auto max-w-[74rem]">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-7" effect="soft-focus">
              <h2 className="display-md max-w-[13ch]">Workshop Bali. Tim produksi di balik setiap karya.</h2>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={0.06} effect="drift" direction="right">
              <p className="max-w-[44ch] text-sm leading-7 text-kr-muted">
                Setiap produk dikerjakan di workshop Denpasar oleh tim produksi dan koordinasi yang mengawasi proses dari rangka hingga pemeriksaan akhir.
              </p>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-[minmax(0,1.45fr)_minmax(17rem,.55fr)]">
            <Reveal effect="mask">
              <figure>
                <div className="image-frame h-[18rem] sm:h-[22rem] md:h-[26rem]">
                  <img src="/assets/images/workshop/artisan-weaving-wide.webp" alt="Pengrajin menganyam produk rotan di workshop Denpasar" loading="lazy" />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-kr-line pt-3 text-sm">
                  <span className="font-semibold">Workshop produksi</span>
                  <span className="text-kr-muted">Denpasar, Bali</span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.08} effect="scale">
              <figure>
                <div className="image-frame h-[18rem] bg-white sm:h-[22rem] md:h-[26rem]">
                  <img
                    src="/assets/images/company/team.jpg"
                    alt="Tim produksi dan koordinasi PT Karya Rotan Indonesia"
                    loading="lazy"
                    className="!object-contain"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-kr-line pt-3 text-sm">
                  <span className="font-semibold">Tim produksi &amp; koordinasi</span>
                  <span className="text-kr-muted">Karya Rotan Indonesia</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <ProjectCTA title="Mari diskusikan kebutuhan proyek Anda." />
    </>
  );
}
