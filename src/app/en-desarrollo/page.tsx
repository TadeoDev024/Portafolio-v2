import Link from "next/link";

export const metadata = {
  title: "En Desarrollo | Tadeo.dev",
  description: "Este proyecto se encuentra actualmente en fase de desarrollo.",
};

export default function EnDesarrolloPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 max-w-lg shadow-lg relative overflow-hidden">
        {/* Efecto de resplandor sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#a371f7]/5 to-[#58a6ff]/5 pointer-events-none" />

        <div className="text-6xl mb-6 animate-bounce">🚧</div>
        
        <h1 className="text-3xl font-bold text-[#e6edf3] mb-4 relative z-10">
          Proyecto en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58a6ff] to-[#a371f7]">Desarrollo</span>
        </h1>
        
        <p className="text-[#8b949e] mb-8 relative z-10 leading-relaxed">
          Estoy trabajando activamente en la arquitectura y el código de este proyecto. ¡Vuelve pronto para ver el resultado final!
        </p>

        <Link
          href="/proyectos"
          className="relative z-10 inline-flex justify-center items-center py-2.5 px-6 bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] hover:text-[#e6edf3] text-[#8b949e] font-bold rounded-lg transition-all"
        >
          ← Volver a Proyectos
        </Link>
      </div>
    </div>
  );
}