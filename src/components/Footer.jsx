import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-gray-400">NPM 2110199999 — Nama Lengkap: Aditia Pratama</p>
            <p className="text-xs text-gray-500 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@example.com" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
