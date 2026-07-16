import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '../../data/company';
import { Button } from '../ui/Button';

export function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 42]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0]);

  return (
    <section ref={heroRef} id="hero" className="relative flex min-h-[100dvh] items-end overflow-hidden bg-[#5c4c29] text-white">
      <motion.img
        src="/assets/images/portfolio/hero-restaurant.webp"
        alt="Interior restoran dengan furniture dan lampu rotan Karya Rotan Indonesia"
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        style={{ y: reduceMotion ? 0 : imageY }}
        initial={reduceMotion ? false : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,28,13,.7)_0%,rgba(35,28,13,.44)_34%,rgba(35,28,13,.12)_62%,transparent_82%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(35,28,13,.4)_0%,transparent_46%)]" />

      <motion.div
        className="hero-shell relative pb-[clamp(4rem,10vh,6.5rem)] pt-32"
        style={{ y: reduceMotion ? 0 : contentY, opacity: reduceMotion ? 1 : contentOpacity }}
      >
        <motion.div
          className="max-w-5xl"
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title leading-[1.02] tracking-[-.06em] text-white">
            <span className="block">Furniture rotan untuk</span>
            <span className="block">ruang yang berkarakter.</span>
          </h1>
          <p className="body-lg mt-6 max-w-[48ch] font-medium text-[#e1b37c]">
            Produksi di Bali untuk hotel, restoran, villa, retail, dan proyek komersial.
          </p>
          <div className="mt-9 flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:gap-9">
            <Button
              href={company.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              withArrow={false}
              className="min-h-14 min-w-[15rem] justify-between border-transparent !bg-[#e1b37c] px-8 py-4 text-base !text-[#2b2b2b] hover:!bg-[#d8c6b2]"
            >
              <span>Konsultasi proyek</span>
              <ArrowRight aria-hidden="true" className="h-5 w-5 transition-transform duration-500 ease-[var(--ease-kr)] group-hover:translate-x-1.5" strokeWidth={1.8} />
            </Button>
            <Link
              to="/products"
              className="border-b border-white/80 pb-1 text-base font-semibold text-white transition-[transform,color,border-color] duration-500 ease-[var(--ease-kr)] hover:translate-x-1 hover:border-[#e1b37c] hover:text-[#e1b37c]"
            >
              Lihat produk
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
