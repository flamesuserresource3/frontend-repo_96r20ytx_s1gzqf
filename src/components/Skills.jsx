import { Palette, Video, Share2, Code, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Brand identity, poster, and marketing assets with premium aesthetics.'
  },
  {
    icon: Video,
    title: 'Video Editing',
    desc: 'Story-driven edits, color grading, motion graphics, and reels.'
  },
  {
    icon: Share2,
    title: 'Social Media',
    desc: 'Content strategy, layout systems, and growth-focused visuals.'
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Modern, responsive landing pages and portfolios.'
  },
  {
    icon: Camera,
    title: 'Photography',
    desc: 'Product and lifestyle shots that elevate brand perception.'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Skills</h2>
          <p className="text-gray-400 mt-3">Kombinasi kreatif dan teknis untuk hasil yang maksimal</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-950 p-6 hover:border-white/20 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-sm text-gray-400 mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
