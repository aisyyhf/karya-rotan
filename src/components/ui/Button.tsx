import type { MouseEventHandler, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'light';
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  withArrow?: boolean;
}

const variants = {
  primary: 'bg-kr-accent text-white hover:bg-[#493d22] border-transparent',
  outline: 'border-kr-ink/25 text-kr-ink hover:border-kr-accent hover:text-kr-accent',
  light: 'border-white/35 text-white hover:bg-white hover:text-[#2b2b2b]',
};

export function Button({
  children,
  variant = 'primary',
  href = '/',
  className = '',
  target,
  rel,
  onClick,
  withArrow = true,
}: ButtonProps) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-3 whitespace-nowrap rounded-full border px-6 py-3 text-sm font-bold shadow-transparent transition-[transform,background-color,color,border-color,box-shadow] duration-500 ease-[var(--ease-kr)] hover:-translate-y-1 hover:shadow-[0_16px_38px_-22px_rgb(92_76_41_/_0.65)] active:translate-y-0 active:scale-[0.98] ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && (
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 transition-transform duration-500 ease-[var(--ease-kr)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-6">
          <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.8} />
        </span>
      )}
    </>
  );

  if (href.startsWith('/')) {
    return (
      <Link className={classes} to={href}>
        {content}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} target={target} rel={rel} onClick={onClick}>
      {content}
    </a>
  );
}
