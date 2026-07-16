import { company } from '../../data/company';
import { Reveal } from '../ui/Reveal';
import { WhatsAppButton } from '../ui/WhatsAppButton';

interface ProjectCTAProps {
  title?: string;
  body?: string;
}

export function ProjectCTA({
  title = 'Mulai dari satu percakapan.',
  body = 'Kirim referensi, kebutuhan ruang, atau pertanyaan produk. Tim kami akan membantu menentukan langkah berikutnya.',
}: ProjectCTAProps) {
  return (
    <section className="bg-[#5c4c29] py-16 text-white md:py-20">
      <div className="site-container grid items-end gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <h2 className="display-md max-w-[11ch] text-white">{title}</h2>
          <p className="mt-6 max-w-[56ch] text-white/65">{body}</p>
          <div className="mt-8">
            <WhatsAppButton className="!bg-[#e1b37c] !text-[#2b2b2b] hover:!bg-[#d8c6b2]" />
          </div>
        </Reveal>
        <Reveal className="border-t border-white/20 pt-5 lg:col-span-4" delay={0.1}>
          <p className="text-sm font-semibold text-[#d8c6b2]">WhatsApp</p>
          <a className="mt-2 block text-lg text-white transition-[transform,color] duration-500 ease-[var(--ease-kr)] hover:translate-x-1 hover:text-[#e1b37c]" href={company.whatsappUrl} target="_blank" rel="noreferrer">
            {company.whatsapp}
          </a>
          <p className="mt-6 text-sm font-semibold text-[#d8c6b2]">Workshop</p>
          <p className="mt-2 text-sm leading-7 text-white/65">{company.shortAddress}</p>
        </Reveal>
      </div>
    </section>
  );
}
