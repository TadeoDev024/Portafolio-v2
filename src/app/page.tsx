"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Elementos decorativos de fondo (Glows sutiles) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#58a6ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a371f7]/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl space-y-8 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#e6edf3] tracking-tight">
          Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58a6ff] to-[#a371f7]">Tadeo Garcia</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[#8b949e] font-light max-w-2xl mx-auto">
          Desarrollador Full-Stack & Especialista en automatización e integraciones de Inteligencia Artificial.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <Link 
            href="/proyectos" 
            className="px-8 py-4 bg-[#e6edf3] text-[#0d1117] rounded-lg font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(230,237,243,0.1)]"
          >
            Ver mis proyectos
          </Link>
          <Link 
            href="/sobre-mi" 
            className="px-8 py-4 bg-[#161b22] text-[#e6edf3] border border-[#30363d] rounded-lg font-bold hover:border-[#58a6ff] hover:text-[#58a6ff] hover:scale-105 transition-all"
          >
            Conóceme más
          </Link>
        </div>
      </motion.div>
    </div>
  );
}