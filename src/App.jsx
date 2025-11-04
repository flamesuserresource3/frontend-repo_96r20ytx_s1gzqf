import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Phone } from 'lucide-react';

function ExperienceItem({ role, company, period, location, details }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gray-900/60 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg text-white font-medium">{role}</h4>
          <p className="text-sm text-gray-300">{company}</p>
        </div>
        <span className="text-xs text-gray-400 inline-flex items-center gap-1"><Calendar className="h-4 w-4" />{period}</span>
      </div>
      <div className="mt-2 text-xs text-gray-400 inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{location}</div>
      <p className="mt-4 text-sm text-gray-300">{details}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />

        <section id="experience" className="py-20 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold">Experience</h2>
                <p className="text-gray-400 mt-2">Riwayat pengalaman profesional</p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-gray-400"><Briefcase className="h-5 w-5" /> 4+ Years</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <ExperienceItem
                  role="Senior Graphic Designer"
                  company="Aurora Creative Studio"
                  period="2022 — Present"
                  location="Jakarta, Indonesia"
                  details="Memimpin pembuatan identitas visual dan kampanye digital untuk berbagai brand, berfokus pada konsistensi dan performa."
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} viewport={{ once: true }}>
                <ExperienceItem
                  role="Video Editor"
                  company="Lumen Media Agency"
                  period="2020 — 2022"
                  location="Bandung, Indonesia"
                  details="Mengolah footage, motion graphics, dan sound design untuk iklan dan konten social media yang engaging."
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                <ExperienceItem
                  role="Freelance Designer"
                  company="Self-employed"
                  period="2018 — 2020"
                  location="Remote"
                  details="Mengerjakan proyek branding, UI sederhana, dan materi promosi untuk UMKM dan startup."
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} viewport={{ once: true }}>
                <ExperienceItem
                  role="Social Media Specialist"
                  company="Wave Digital"
                  period="2017 — 2018"
                  location="Surabaya, Indonesia"
                  details="Menyusun kalender konten, tata letak feed, dan optimasi visual untuk peningkatan engagement."
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Saya menyukai fotografi, sinematografi, dan eksplorasi tipografi. Di waktu luang,
                saya menikmati street photography dan eksperimen color grading. Prinsip kerja saya
                adalah kombinasi estetika yang bersih, hierarki visual yang kuat, dan cerita yang jelas.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
              <div className="aspect-[16/10] rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.25),transparent_40%)] border border-white/10" />
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold">Contact</h2>
              <p className="text-gray-400 mt-2">Siap berkolaborasi? Ayo mulai percakapan.</p>
            </div>
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/10 bg-gray-800/50 p-6">
                <h3 className="font-medium text-white mb-4">Info Kontak</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-blue-400" /> +62 812-3456-7890</div>
                  <div className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"></path><path d="m22 6-10 7L2 6"></path></svg> hello@example.com</div>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-white/10 bg-gray-800/50 p-6">
                <div className="grid grid-cols-1 gap-4">
                  <input className="bg-gray-900/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Nama" required />
                  <input className="bg-gray-900/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Email" type="email" required />
                  <textarea className="bg-gray-900/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Pesan" rows="4" required />
                </div>
                <button className="mt-4 w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition-opacity shadow">Kirim Pesan</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
