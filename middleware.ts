// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Aquí puedes añadir lógica adicional si lo necesitas.
    // Por defecto, si no hay token, withAuth redirigirá al login.
    return NextResponse.next();
  },
  {
    callbacks: {
      // Retorna true si el usuario está autenticado
      authorized: ({ token }) => !!token,
    },
    // Redirige a esta página si el usuario no está autenticado
    pages: {
      signIn: '/api/auth/signin', // Puedes crear una página de login custom en el futuro
    },
  }
);

// Define qué rutas estarán protegidas por el middleware
export const config = {
  matcher: [
    "/consultas/:path*", // Protege la ruta /consultas y sus subrutas
  ],
};