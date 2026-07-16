import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '../../data/company';
import { footerLinks } from '../../data/navigation';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-kr-ink py-8 text-white md:py-10">
      <div className="site-container">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 lg:col-span-5">
            <img src="/assets/images/logo.png" alt="Karya Rotan Indonesia" className="h-10 w-auto" />
            <p className="mt-4 max-w-sm text-xs leading-6 text-white/58">{company.description}</p>
          </div>

          <div className="lg:col-span-3">
              <p className="text-xs font-bold text-[#d8c6b2]">Navigasi</p>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-white/68">
              {footerLinks.map((link) => (
                <Link key={link.path} to={link.path} className="inline-block transition-[transform,color] duration-300 hover:translate-x-1 hover:text-[#e1b37c]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
              <p className="text-xs font-bold text-[#d8c6b2]">Kontak</p>
            <div className="mt-4 space-y-3 text-xs text-white/68">
              <a href={company.whatsappUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-3 transition-[transform,color] duration-300 hover:translate-x-1 hover:text-white">
                  <Phone aria-hidden="true" className="h-4 w-4 text-[#e1b37c]" strokeWidth={1.8} />
                {company.whatsapp}
              </a>
              <a href={`mailto:${company.email}`} className="group flex items-center gap-3 break-all transition-[transform,color] duration-300 hover:translate-x-1 hover:text-white">
                  <Mail aria-hidden="true" className="h-4 w-4 text-[#e1b37c]" strokeWidth={1.8} />
                {company.email}
              </a>
              <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="group flex items-start gap-3 transition-[transform,color] duration-300 hover:translate-x-1 hover:text-white">
                  <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#e1b37c]" strokeWidth={1.8} />
                {company.shortAddress}
              </a>
              <a href={company.instagramUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-3 transition-[transform,color] duration-300 hover:translate-x-1 hover:text-white">
                  <Instagram aria-hidden="true" className="h-4 w-4 text-[#e1b37c]" strokeWidth={1.8} />
                @{company.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/12 pt-4 text-[0.6875rem] text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}</p>
          <p>Bagian dari {company.group}</p>
        </div>
      </div>
    </footer>
  );
}
