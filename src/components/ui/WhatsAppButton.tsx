import { MessageCircle } from 'lucide-react';
import { company } from '../../data/company';
import { Button } from './Button';

interface WhatsAppButtonProps {
  floating?: boolean;
  label?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'light';
  message?: string;
}

export function WhatsAppButton({
  floating = false,
  label = 'Konsultasi proyek',
  className = '',
  variant = 'primary',
  message,
}: WhatsAppButtonProps) {
  const href = message
    ? `${company.whatsappUrl}?text=${encodeURIComponent(message)}`
    : company.whatsappUrl;

  if (floating) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1f9d55] px-4 py-3 text-sm font-bold text-white shadow-[0_16px_50px_-18px_rgba(0,0,0,.65)] transition-[transform,box-shadow] duration-500 ease-[var(--ease-kr)] hover:-translate-y-1.5 hover:scale-[1.025] hover:shadow-[0_20px_58px_-18px_rgba(31,157,85,.7)] active:translate-y-0 active:scale-[0.98] md:bottom-7 md:right-7"
        aria-label="Buka WhatsApp Karya Rotan Indonesia"
      >
        <MessageCircle aria-hidden="true" className="h-5 w-5 transition-transform duration-500 ease-[var(--ease-kr)] group-hover:rotate-[-8deg] group-hover:scale-110" strokeWidth={1.8} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    );
  }

  return (
    <Button
      href={href}
      target="_blank"
      rel="noreferrer"
      variant={variant}
      className={className}
    >
      {label}
    </Button>
  );
}
