import { BriefcaseBusiness, FileImage, Images, LayoutTemplate } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { CustomFlow } from '../components/sections/CustomFlow';
import { ProjectCTA } from '../components/sections/ProjectCTA';
import { PageMeta } from '../components/ui/PageMeta';
import { Reveal } from '../components/ui/Reveal';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { company } from '../data/company';

const productionInputs = [
  [FileImage, 'Gambar kerja', 'Dimensi, tampak, atau detail teknis yang sudah disiapkan.'],
  [Images, 'Foto referensi', 'Foto produk, sketsa, atau contoh bentuk yang menjadi acuan.'],
  [LayoutTemplate, 'Desain interior', 'Konsep ruang dari interior designer atau tim proyek.'],
  [BriefcaseBusiness, 'Kebutuhan proyek', 'Jenis ruang, fungsi, jumlah unit, dan target penggunaan.'],
] as const;

const planningNotes = [
  ['Pesanan custom', 'Dapat dimulai dari satu produk sesuai kebutuhan Anda.'],
  ['Estimasi pengerjaan', `${company.customTimeline}, menyesuaikan desain, material, finishing, dan jumlah unit.`],
];

const materials = [
  ['Rotan alami', 'Furniture, lighting, dan dekorasi interior.'],
  ['Rotan sintetis', 'Area outdoor atau semi-outdoor sesuai spesifikasi.'],
  ['Kombinasi material', 'Kayu, metal, kain, dan material pendukung lainnya.'],
];

export function CustomProject() {
  return (
    <>
      <PageMeta
        title="Custom Project"
        description="Produksi furniture dan dekorasi rotan custom tanpa minimum order, dengan estimasi pengerjaan mulai dari 2 minggu."
      />
      <PageHeader
        eyebrow="Custom Project"
        title="Dari gambar referensi ke produk siap ruang."
        subtitle="Tim kami meninjau desain, konstruksi, material, ukuran, dan finishing sebelum produksi dimulai di workshop Bali."
        backgroundImage="/assets/images/workshop/artisan-weaving-wide.webp"
        objectPosition="center"
      />

      <section className="section-space bg-kr-surface">
        <div className="site-container mx-auto max-w-[86rem]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-5" effect="soft-focus">
              <h2 className="display-md max-w-[11ch]">Bisa dimulai dari materi yang Anda miliki.</h2>
              <p className="mt-6 max-w-[46ch] text-sm leading-7 text-kr-muted">
                Referensi tidak harus langsung berupa gambar produksi final. Tim kami akan membantu meninjau kelengkapan informasi sebelum penawaran.
              </p>
              <div className="mt-7">
                <WhatsAppButton label="Kirim referensi" message="Halo Karya Rotan Indonesia, saya ingin mengirim referensi untuk custom project." />
              </div>
            </Reveal>

            <Reveal className="image-frame aspect-[16/10] lg:col-span-7" delay={0.08} effect="mask">
              <img src="/assets/images/workshop/artisan-frame-wide.webp" alt="Proses pengerjaan furniture custom di workshop" loading="lazy" />
            </Reveal>
          </div>

          <div className="mt-10 grid border-t border-kr-line sm:grid-cols-2 lg:grid-cols-4">
            {productionInputs.map(([Icon, title, description], index) => (
              <Reveal
                key={title}
                className={`py-6 sm:px-6 ${index > 0 ? 'border-t border-kr-line' : ''} ${index % 2 === 1 ? 'sm:border-l' : ''} ${index < 2 ? 'sm:border-t-0' : ''} ${index > 0 ? 'lg:border-l lg:border-t-0' : ''}`}
                delay={index * 0.05}
                effect="scale"
              >
                <Icon aria-hidden="true" className="h-6 w-6 text-kr-accent" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl font-semibold tracking-[-.035em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-kr-muted">{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CustomFlow />

      <section className="section-space bg-[#5c4c29] text-white">
        <div className="site-container mx-auto grid max-w-[86rem] gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" effect="drift" direction="left">
            <h2 className="display-md max-w-[10ch] text-white">{company.minimumOrder}.</h2>
            <p className="mt-6 max-w-[42ch] text-sm leading-7 text-white/58">
              Pesanan custom dapat dimulai dari satu produk. Estimasi waktu tetap ditinjau berdasarkan detail pengerjaan.
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {planningNotes.map(([title, description], index) => (
                <Reveal key={title} className="border-t border-white/18 py-5" delay={index * 0.06} effect="drift" direction={index % 2 === 0 ? 'left' : 'right'}>
                  <p className="text-xs font-bold text-[#e1b37c]">{title}</p>
                  <p className="mt-4 text-xl font-medium leading-8 text-white">{description}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8 border-t border-white/18 pt-5" delay={0.1} effect="soft-focus">
              <p className="text-xs font-bold text-[#d8c6b2]">Pilihan material</p>
              <div className="mt-4 grid gap-5 sm:grid-cols-3">
                {materials.map(([title, description]) => (
                  <div key={title}>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-xs leading-6 text-white/55">{description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space bg-kr-paper">
        <div className="site-container mx-auto max-w-[86rem]">
          <Reveal className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" effect="soft-focus">
            <h2 className="display-md max-w-[10ch]">Proses produksi di workshop.</h2>
            <p className="max-w-[42ch] text-sm leading-7 text-kr-muted">
              Dokumentasi rangka, anyaman, perakitan, dan pengerjaan manual oleh tim produksi di Bali.
            </p>
          </Reveal>

          <div className="grid h-[clamp(19rem,52vh,28rem)] grid-cols-[1.3fr_1fr_0.8fr] gap-3">
            <Reveal className="image-frame" effect="mask">
              <img src="/assets/images/workshop/artisan-round-weaving.webp" alt="Produksi furniture rotan custom di workshop Bali" loading="lazy" />
            </Reveal>
            <Reveal className="image-frame" delay={0.06} effect="scale">
              <img src="/assets/images/workshop/artisan-welding.webp" alt="Pengerjaan rangka furniture custom" loading="lazy" />
            </Reveal>
            <Reveal className="image-frame" delay={0.12} effect="drift" direction="right">
              <img src="/assets/images/workshop/artisan-weaving-detail.webp" alt="Detail proses anyaman oleh pengrajin" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      <ProjectCTA title="Siap mengirim referensi?" body="Sertakan gambar, ukuran perkiraan, lokasi penggunaan, dan jumlah kebutuhan untuk memulai peninjauan." />
    </>
  );
}
