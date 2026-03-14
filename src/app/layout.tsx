import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ChatFlotante from "@/components/ui/ChatFlotante"; // Importa el nuevo componente

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-[#0d1117] text-[#e6edf3] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Aquí es donde vive el chatbot para todo el sitio */}
        <ChatFlotante />
        
        <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e]">
          <p>© {new Date().getFullYear()} Tadeo — Desarrollador Full-Stack</p>
        </footer>
      </body>
    </html>
  );
}