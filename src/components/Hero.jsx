import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] md:h-[90vh] w-full bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center w-full">
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
              <a href="#skills" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition-opacity shadow">
                View My Work
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition-colors">
                Contact Me
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=600&auto=format&fit=crop"
              alt="Aditia Pratama portrait"
              className="h-36 w-36 sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full shadow-2xl ring-4 ring-white/10 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
