import { ArrowUpRight, Clock, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { PageMeta } from '../components/ui/PageMeta';
import { Reveal } from '../components/ui/Reveal';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { company } from '../data/company';

const contacts = [
  [Phone, 'WhatsApp', company.whatsapp, company.whatsappUrl],
  [Mail, 'Email', company.email, `mailto:${company.email}`],
  [Instagram, 'Instagram', `@${company.instagram}`, company.instagramUrl],
] as const;

export function Contact() {
  return (
    <>
      <PageMeta
        title="Kontak"
        description="Hubungi PT Karya Rotan Indonesia melalui WhatsApp, email, Instagram, atau kunjungi workshop kami di Jalan Sekar Tunjung XV No. 1A, Denpasar."
      />
      <PageHeader
        eyebrow="Kontak"
        title="Mari bicara soal proyek Anda."
        subtitle="Kirim kebutuhan produk, referensi desain, atau jadwalkan kunjungan ke workshop kami di Denpasar."
        backgroundImage="/assets/images/workshop/workshop-team-check.webp"
        objectPosition="center"
      />

      <section className="section-space bg-kr-paper">
        <div className="site-container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal effect="soft-focus">
              <h2 className="display-md max-w-[10ch]">Pilih saluran yang paling nyaman.</h2>
              <p className="mt-6 max-w-[42ch] text-kr-muted">
                WhatsApp adalah jalur tercepat untuk konsultasi produk dan custom project. Email tersedia untuk korespondensi formal.
              </p>
              <div className="mt-8">
                <WhatsAppButton />
              </div>
            </Reveal>

            <div className="mt-12">
              {contacts.map(([Icon, label, value, href], index) => (
                <Reveal key={label} delay={index * 0.05} effect="drift" direction="left">
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-t border-kr-line px-2 py-5 transition-[transform,background-color] duration-500 ease-[var(--ease-kr)] hover:translate-x-1 hover:bg-[#d8c6b2]/25"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 text-kr-accent" strokeWidth={1.7} />
                    <span><strong className="block text-sm">{label}</strong><span className="mt-1 block break-all text-sm text-kr-muted">{value}</span></span>
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-kr-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8 flex gap-3 border-t border-kr-line pt-5" delay={0.15}>
              <Clock aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-kr-accent" strokeWidth={1.7} />
              <div>
                <p className="text-sm font-bold">Kunjungan workshop</p>
                <p className="mt-1 text-sm text-kr-muted">{company.visitInformation}</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={0.08} effect="mask">
            <div className="overflow-hidden rounded-lg border border-kr-line bg-kr-surface">
              <iframe
                title="Lokasi workshop Karya Rotan Indonesia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5772655760773!2d115.2494488!3d-8.6365315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f79a95df6ef%3A0xe54c13a29ec60a6e!2sJl.%20Sekar%20Tunjung%20XV%20No.1A%2C%20Kesiman%20Kertalangu%2C%20Kec.%20Denpasar%20Tim.%2C%20Kota%20Denpasar%2C%20Bali%2080237!5e0!3m2!1sid!2sid!4v1719736800000!5m2!1sid!2sid"
                className="h-[24rem] w-full border-0 md:h-[30rem]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex flex-col gap-5 border-t border-kr-line p-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-kr-accent" strokeWidth={1.7} />
                  <div>
                    <p className="font-bold">Workshop</p>
                    <p className="mt-1 max-w-[38ch] text-sm leading-6 text-kr-muted">{company.address}</p>
                  </div>
                </div>
                <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="text-link shrink-0 text-sm">
                  Buka Maps <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
