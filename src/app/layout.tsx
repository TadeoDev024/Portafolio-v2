import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tadeo | Full-Stack Developer",
  description: "Portafolio profesional de desarrollo web y soluciones IA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-[#0d1117] text-[#e6edf3] min-h-screen flex flex-col`}>
        
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          {/* Footer base */}
          <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] mt-20">
            <p>© {new Date().getFullYear()} Tadeo — Proyecto corporativo</p>
          </footer>
        
      </body>
    </html>
  );
}