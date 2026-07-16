import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/navigation';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const location = useLocation();
  const home = location.pathname === '/';
  const transparent = home && !scrolled;

  useMotionValueEvent(scrollY, 'change', (value) => {
    const next = value > 24;
    setScrolled((current) => (current === next ? current : next));
  });

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <nav
      aria-label="Navigasi utama"
      className={`fixed inset-x-0 top-0 z-50 transition-[height,background-color] duration-300 ${
        transparent
          ? 'h-[72px] bg-transparent md:h-[88px]'
          : 'h-[72px] border-b border-white/10 bg-kr-ink'
      }`}
    >
      <div className={`${home ? 'hero-shell' : 'site-container'} relative flex h-full items-center justify-between gap-6`}>
        <Link to="/" aria-label="Karya Rotan Indonesia, kembali ke Home" className="group shrink-0">
          <img
            src="/assets/images/logo.png"
            alt="Karya Rotan Indonesia"
            className={`w-auto object-contain transition-[height,transform,opacity] duration-500 ease-[var(--ease-kr)] group-hover:scale-[1.04] group-hover:opacity-80 ${transparent ? 'h-12 md:h-14' : 'h-10 md:h-11'}`}
          />
        </Link>

        <div className="ml-auto hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `group relative isolate overflow-hidden rounded-full px-4 py-2 text-[13px] font-semibold transition-[color,background-color,transform] duration-500 ease-[var(--ease-kr)] before:absolute before:inset-0 before:-z-10 before:scale-75 before:rounded-full before:bg-white/10 before:opacity-0 before:transition-[transform,opacity] before:duration-500 before:ease-[var(--ease-kr)] hover:-translate-y-0.5 hover:before:scale-100 hover:before:opacity-100 ${
                  isActive
                    ? transparent
                      ? 'text-white before:scale-100 before:opacity-100'
                      : 'bg-[#d8c6b2] text-[#2b2b2b] before:hidden'
                    : 'text-white/70 hover:text-[#e1b37c]'
                }`
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </div>

        {!transparent && (
          <div className="hidden lg:block">
            <WhatsAppButton className="min-h-10 !bg-[#e1b37c] px-5 py-2 text-xs !text-[#2b2b2b] hover:!bg-[#d8c6b2]" />
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <motion.span animate={reduceMotion ? { rotate: 0, scale: 1 } : { rotate: open ? 90 : 0, scale: open ? 0.94 : 1 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-kr-ink text-white lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="site-container flex min-h-full flex-col justify-between py-8">
              <div>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.45, delay: 0.04 + index * 0.045, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <RouterNavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        `group flex items-center justify-between border-b border-white/12 py-4 text-2xl font-medium transition-colors duration-300 ${
                          isActive ? 'text-[#e1b37c]' : 'text-white hover:text-[#d8c6b2]'
                        }`
                      }
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-white/35 transition-transform duration-500 ease-[var(--ease-kr)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#e1b37c]" />
                    </RouterNavLink>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 border-t border-white/15 pt-6">
                <WhatsAppButton className="w-full !bg-[#e1b37c] !text-[#2b2b2b] hover:!bg-[#d8c6b2]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
