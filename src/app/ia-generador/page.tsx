"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IAGeneradorPage() {
  const [prompt, setPrompt] = useState("");
  const [resultado, setResultado] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generarTexto = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResultado(""); // Limpiamos el anterior

    try {
      const response = await fetch("/api/ia/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Error desconocido");

      setResultado(data.texto);
    } catch (error: any) {
      setResultado(`❌ Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#e6edf3]">
            Generador de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58a6ff] to-[#a371f7]">Contenido IA</span>
          </h1>
          <p className="text-[#8b949e] text-lg max-w-2xl mx-auto">
            Impulsado por Gemini 2.5 Flash. Transforma tus ideas simples en descripciones profesionales para proyectos o marketing.
          </p>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#8b949e] uppercase tracking-wider">Tu idea o concepto</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ej: Una plataforma de e-commerce para artistas locales..."
              className="w-full h-32 bg-[#0d1117] border border-[#30363d] rounded-xl p-4 text-[#e6edf3] focus:ring-2 focus:ring-[#58a6ff] focus:outline-none transition-all resize-none"
            />
          </div>

          <button
            onClick={generarTexto}
            disabled={isLoading || !prompt.trim()}
            className="w-full py-4 bg-gradient-to-r from-[#58a6ff] to-[#a371f7] text-white font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:grayscale disabled:scale-100"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Procesando con IA...
              </span>
            ) : "Generar Descripción Profesional"}
          </button>

          <AnimatePresence>
            {resultado && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-6 border-t border-[#30363d]"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-[#58a6ff] uppercase tracking-widest">Resultado de la IA</span>
                  <button 
                    onClick={() => navigator.clipboard.writeText(resultado)}
                    className="text-xs text-[#8b949e] hover:text-[#e6edf3] transition-colors flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                    Copiar
                  </button>
                </div>
                <div className="bg-[#0d1117] border-l-4 border-[#238636] rounded-r-xl p-5 font-mono text-sm leading-relaxed text-[#3fb950] whitespace-pre-wrap shadow-inner">
                  {resultado}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}