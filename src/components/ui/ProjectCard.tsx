"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  challenge: string;
  solution: string;
  techStack: string[];
  link: string; // <-- Nueva propiedad requerida
  delay?: number;
}

export default function ProjectCard({ title, challenge, solution, techStack, link, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#a371f7] transition-colors duration-300 flex flex-col h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#a371f7]/0 to-[#58a6ff]/0 group-hover:from-[#a371f7]/5 group-hover:to-[#58a6ff]/5 rounded-xl transition-all duration-300 pointer-events-none" />

      <h3 className="text-2xl font-bold text-[#e6edf3] mb-4 group-hover:text-[#58a6ff] transition-colors">
        {title}
      </h3>
      
      <div className="flex-grow space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-1">El Desafío</h4>
          <p className="text-sm text-[#e6edf3]/80 leading-relaxed">{challenge}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-1">La Solución</h4>
          <p className="text-sm text-[#e6edf3]/80 leading-relaxed">{solution}</p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-[#30363d] flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className="px-3 py-1 text-xs font-medium bg-[#0d1117] border border-[#30363d] rounded-full text-[#58a6ff]">
              {tech}
            </span>
          ))}
        </div>
        
        {/* El botón de redirección */}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-2 w-full text-center py-2 px-4 bg-[#238636] hover:bg-[#2ea043] text-white font-bold rounded-lg transition-colors inline-block z-10"
        >
          Ver Proyecto en Vivo ↗
        </a>
      </div>
    </motion.div>
  );
}