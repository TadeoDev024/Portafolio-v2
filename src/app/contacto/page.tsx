"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enviado, setEnviado] = useState(false);

  // Simulamos el envío del formulario temporalmente
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aquí en el futuro llamaremos a tu API para guardar el mensaje
    setTimeout(() => {
      setIsSubmitting(false);
      setEnviado(true);
      
      // Reseteamos el mensaje de éxito después de 3 segundos
      setTimeout(() => setEnviado(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Cabecera Pública */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#e6edf3] mb-4">Contacto</h1>
          <p className="text-[#8b949e] max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o buscas sumar un desarrollador a tu equipo? 
            Envíame un mensaje y me pondré en contacto contigo a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna Izquierda: Formulario de Contacto */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-[#e6edf3] mb-6">Envíame un mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#8b949e] mb-1">Tu Nombre o Empresa</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-[#e6edf3] focus:outline-none focus:border-[#58a6ff] transition-colors"
                  
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#8b949e] mb-1">Email de contacto</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-[#e6edf3] focus:outline-none focus:border-[#58a6ff] transition-colors"
                  
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#8b949e] mb-1">Detalles del proyecto</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-[#e6edf3] focus:outline-none focus:border-[#58a6ff] transition-colors resize-none"
                  placeholder="Cuéntame sobre tu idea o propuesta..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  enviado 
                    ? 'bg-[#238636] text-white' 
                    : 'bg-gradient-to-r from-[#58a6ff] to-[#a371f7] text-white hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(88,166,255,0.3)]'
                } disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                {isSubmitting ? 'Enviando...' : enviado ? '¡Mensaje Enviado! ✓' : 'Enviar Consulta'}
              </button>
            </form>
          </div>

          {/* Columna Derecha: Descarga de CV e Info extra */}
          <div className="space-y-6">
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#238636]/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-[#238636]/20 transition-all" />
              
              <h3 className="text-xl font-bold text-[#e6edf3] mb-4">Curriculum Vitae</h3>
              <p className="text-[#8b949e] mb-6 text-sm leading-relaxed">
                Descarga mi CV completo para ver en detalle mi historial académico, mis experiencias laborales y mi stack tecnológico completo.
              </p>
              
              {/* Cambia el href "/mi-cv.pdf" por la ruta real donde pongas tu PDF en la carpeta public */}
              <a 
                href="/mi-cv.pdf" 
                download
                className="w-full bg-transparent border border-[#238636] text-[#2ea043] hover:bg-[#238636] hover:text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 text-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Descargar CV (PDF)
              </a>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl p-6">
              <h4 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-2">Tiempos de respuesta</h4>
              <p className="text-[#e6edf3] text-sm">
                Suelo responder a todas las propuestas en un plazo menor a <strong>24 horas hábiles</strong>.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}