import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useCallback } from 'react';

export default function Hero() {
  // Lightweight parallax for the right portrait card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [10, -10]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(x, [-50, 50], [-10, 10]), { stiffness: 150, damping: 15 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - (rect.left + rect.width / 2);
    const posY = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-50, Math.min(50, posX)));
    y.set(Math.max(-50, Math.min(50, posY)));
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0); y.set(0);
  }, [x, y]);

  return (
    <section id="home" className="relative h-[85vh] md:h-[90vh] w-full bg-gray-950 text-white overflow-hidden">
      {/* Spline 3D scene (interactive) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays should never block interaction with the Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(59,130,246,0.25),transparent)]" />

      {/* Decorative floating lights */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -left-10 top-24 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute right-10 bottom-20 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center w-full">
          {/* Left copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
            >
              Aditia Pratama
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-3 text-lg md:text-xl text-gray-300"
            >
              Graphic Designer & Video Editor
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-5 max-w-2xl text-gray-300"
            >
              Membantu brand tampil menonjol melalui visual yang modern, elegan, dan berkarakter. Fokus pada desain yang fungsional dengan sentuhan premium.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#skills"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition-opacity shadow"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition-colors"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Right portrait with subtle 3D tilt */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=600&auto=format&fit=crop"
                alt="Aditia Pratama portrait"
                className="h-36 w-36 sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full shadow-2xl ring-4 ring-white/10 object-cover"
                style={{ transform: 'translateZ(30px)' }}
              />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -bottom-3 -right-3 h-10 w-10 rounded-full bg-blue-500/40 blur-xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transform: 'translateZ(60px)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
