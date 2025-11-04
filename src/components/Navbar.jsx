import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass =
    'px-3 py-2 text-sm md:text-base text-gray-300 hover:text-white transition-colors';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-gray-900/70 shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 h-16">
        <a href="#home" className="font-semibold tracking-wide text-white">
          <span className="text-lg md:text-xl">Aditia Pratama</span>
        </a>
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden md:flex items-center gap-2">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#skills" className={linkClass}>Skills</a>
          <a href="#experience" className={linkClass}>Experience</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#contact" className="ml-2 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm md:text-base shadow hover:opacity-90 transition-opacity">Contact</a>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-gray-900/95">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
            <a onClick={() => setOpen(false)} href="#home" className={linkClass}>Home</a>
            <a onClick={() => setOpen(false)} href="#skills" className={linkClass}>Skills</a>
            <a onClick={() => setOpen(false)} href="#experience" className={linkClass}>Experience</a>
            <a onClick={() => setOpen(false)} href="#about" className={linkClass}>About</a>
            <a onClick={() => setOpen(false)} href="#contact" className={`${linkClass} text-white`}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
