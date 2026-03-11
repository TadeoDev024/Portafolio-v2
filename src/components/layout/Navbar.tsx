"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#30363d] bg-[#0d1117]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-[#58a6ff] to-[#a371f7] bg-clip-text text-transparent">
              Tadeo.dev
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#e6edf3] hover:text-[#58a6ff] transition-colors font-medium">Inicio</Link>
            <Link href="/sobre-mi" className="text-[#e6edf3] hover:text-[#58a6ff] transition-colors font-medium">Sobre Mí</Link>
            <Link href="/proyectos" className="text-[#e6edf3] hover:text-[#58a6ff] transition-colors font-medium">Proyectos</Link>
            <Link href="/contacto" className="text-[#e6edf3] hover:text-[#58a6ff] transition-colors font-medium">Contacto</Link>
          </div>

          <div className="flex items-center">
             <Link href="/contacto" className="bg-gradient-to-r from-[#238636] to-[#2ea043] text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform shadow-[0_4px_15px_rgba(46,160,67,0.4)]">
                Hablemos
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}