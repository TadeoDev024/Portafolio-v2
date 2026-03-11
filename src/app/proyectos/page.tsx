import ProjectCard from "@/components/ui/ProjectCard";

const PROJECTS_DATA = [
  {
    title: "Web Corporativa - GNC Group",
    challenge: "La empresa requería digitalizar su presencia institucional con una web rápida, segura y que reflejara autoridad corporativa.",
    solution: "Desarrollo de una arquitectura moderna enfocada en SEO y rendimiento perfecto, asegurando tiempos de carga mínimos.",
    techStack: ["Next.js", "Tailwind CSS", "Figma"],
    link: "https://gncgroup.com.ar" // Reemplaza esto con tu link real
  },
  {
    title: "Generador de Contenido IA",
    challenge: "Necesidad de crear copys de marketing automáticamente para agilizar procesos de creación de contenido.",
    solution: "Aplicación Fullstack conectada a la API de Google Gemini (2.5 Flash) procesando prompts de manera eficiente.",
    techStack: ["API REST", "Google Gemini", "JavaScript"],
    link: "/ia-generador" // Reemplaza con tu link
  },
  {
    title: "Web Profesional - Nutricionista",
    challenge: "Crear una marca personal digital fuerte para atraer pacientes y ofrecer planes nutricionales descargables.",
    solution: "Diseño de una landing page optimizada para conversión (CRO) con integración de formularios de contacto directos.",
    techStack: ["HTML5", "CSS3", "JavaScript", "UX/UI"],
    link: "https://tu-enlace-nutricionista.com"
  },
  {
    title: "Landing con Chatbot Inteligente",
    challenge: "Proporcionar soporte de ventas 24/7 para un negocio local, respondiendo dudas frecuentes automáticamente.",
    solution: "Implementación de 'TadeoBot', un asistente virtual interactivo impulsado por IA con interfaz tipo mensajería.",
    techStack: ["JavaScript", "CSS Custom", "Gemini API"],
    link: "https://tu-portafolio-viejo.com/chatbot.html"
  },
  {
    title: "Selector de Skins - LoL",
    challenge: "Manejar grandes volúmenes de datos de un juego popular para mostrar contenido visual filtrable a los usuarios.",
    solution: "Integración robusta de APIs, manejo de estados en el frontend y optimización de renderizado de imágenes.",
    techStack: ["React", "API REST", "Frontend"],
    link: "https://tu-enlace-skins-lol.com"
  },
  {
    title: "Plataforma Barbería",
    challenge: "El negocio buscaba una solución autogestionable para que el dueño pudiera actualizar horarios sin depender de un dev.",
    solution: "Desarrollo e implementación de un sitio en WordPress con un tema personalizado y optimización de rendimiento.",
    techStack: ["WordPress", "PHP", "SEO Local"],
    link: "https://tu-enlace-barberia.com"
  }
];

export const metadata = {
  title: "Proyectos | Tadeo.dev",
  description: "Proyectos destacados de desarrollo web.",
};

export default function ProyectosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#e6edf3] mb-4">
          Proyectos<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58a6ff] to-[#a371f7]"> Destacados</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl">
          Explora mis trabajos más recientes. Haz clic en las tarjetas para ver los proyectos funcionando en vivo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            challenge={project.challenge}
            solution={project.solution}
            techStack={project.techStack}
            link={project.link}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}