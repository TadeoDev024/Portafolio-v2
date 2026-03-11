"use client";

import { motion } from "framer-motion";

export default function SobreMiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#e6edf3] mb-4">Sobre Mí</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#58a6ff] to-[#a371f7] mx-auto rounded-full"></div>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#58a6ff] to-[#a371f7]" />
          
          <div className="space-y-6 text-lg text-[#8b949e] leading-relaxed">
            <p>
              Soy un desarrollador enfocado en crear experiencias digitales rápidas, escalables y orientadas a la conversión. Mi objetivo principal es transformar problemas de negocio complejos en interfaces limpias y sistemas robustos.
            </p>
            <p>
              Actualmente me encuentro perfeccionando mis bases arquitectónicas como estudiante de la tecnicatura en programación en la UTN FRT. Esto me permite combinar la rigurosidad académica con la agilidad requerida en proyectos del mundo real.
            </p>
            <p>
              Me apasiona la eficiencia tecnológica y la resolución de problemas mediante el código. Me enfoco en optimizar flujos de trabajo y procesos operativos, demostrando mi interés no solo en escribir líneas de código, sino en diseñar soluciones que aporten valor real y tangible a cada proyecto.
            </p>
          </div>

          {/* Grilla de Habilidades Técnicas */}
          <div className="mt-12 pt-12 border-t border-[#30363d]">
            <h3 className="text-xl font-bold text-[#e6edf3] mb-6">Stack Tecnológico Principal</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Next.js (App Router)', 'React & TypeScript', 
                'Node.js & Serverless', 'Tailwind CSS', 
                'PostgreSQL & Prisma', 'Framer Motion', 
                'Google Gemini API', 'WordPress & PHP'
              ].map((skill, index) => (
                <motion.div 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                  className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 text-center text-sm font-medium text-[#58a6ff] hover:border-[#a371f7] transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}