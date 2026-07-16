import { motion, useReducedMotion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  eyebrow?: string;
  objectPosition?: string;
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage,
  eyebrow,
  objectPosition = 'center',
}: PageHeaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <header className="page-header relative flex items-end overflow-hidden bg-[#5c4c29] text-white">
      <motion.img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
        initial={reduceMotion ? false : { scale: 1.035 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,28,13,.9)_0%,rgba(35,28,13,.54)_48%,rgba(35,28,13,.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(35,28,13,.8)_0%,transparent_58%)]" />

      <div className="page-header-content site-container relative">
        <motion.div
          className="max-w-4xl"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {eyebrow && <p className="kicker mb-5 text-[#e1b37c]">{eyebrow}</p>}
          <h1 className="display-lg max-w-[12ch] text-white lg:max-w-[16ch]">{title}</h1>
          <p className="body-lg mt-6 max-w-[52ch] text-white/78">{subtitle}</p>
        </motion.div>
      </div>
    </header>
  );
}
