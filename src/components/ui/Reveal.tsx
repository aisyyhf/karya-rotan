import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  effect?: 'rise' | 'drift' | 'scale' | 'mask' | 'soft-focus';
}

export function Reveal({ children, className = '', delay = 0, direction = 'up', effect = 'rise' }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offsets = {
    up: { x: 0, y: 28 },
    left: { x: -28, y: 0 },
    right: { x: 28, y: 0 },
    none: { x: 0, y: 0 },
  };
  const side = direction === 'left' ? -1 : 1;
  const initial = {
    rise: { opacity: 0, ...offsets[direction] },
    drift: { opacity: 0, x: 12 * side, y: 10 },
    scale: { opacity: 0, scale: 0.965, y: 18 },
    mask: { opacity: 0, y: 24, clipPath: 'inset(0 0 18% 0 round 0.5rem)' },
    'soft-focus': { opacity: 0, y: 22, filter: 'blur(8px)' },
  }[effect];
  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    clipPath: 'inset(0 0 0% 0 round 0.5rem)',
    filter: 'blur(0px)',
  };

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : initial}
      whileInView={visible}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: effect === 'mask' ? 0.95 : 0.78, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
