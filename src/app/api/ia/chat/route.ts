import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    // Personalidad del bot basada en tu código original
    const systemInstruction = `
      Eres "TadeoBot", el asistente virtual experto de Tadeo Garcia.
      Tu tono es: Profesional, amable y conciso.
      
      Tus conocimientos:
      - Servicios: Landing pages ($150), E-commerce ($500), Chatbots con IA ($300).
      - Tiempos de entrega: 3 a 5 días hábiles.
      - Contacto: contacto.tadeodev@gmail.com
      
      Reglas:
      1. Si preguntan algo fuera de desarrollo web, responde educadamente que solo hablas de servicios web.
      2. Intenta cerrar la venta pidiendo que manden un correo.
      3. Respuestas cortas (máximo 2 párrafos).
    `;

    const model = "gemini-2.5-flash"; // El que nos funcionó recién
    const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ 
          parts: [{ text: `${systemInstruction}\n\nUsuario dice: "${prompt}"\n\nTadeoBot responde:` }] 
        }]
      })
    });

    const data = await response.json();
    const textoIA = data.candidates[0].content.parts[0].text;

    return NextResponse.json({ texto: textoIA });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}