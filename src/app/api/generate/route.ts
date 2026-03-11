import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "API Key no configurada" }, { status: 500 });
    }

    // Usamos el modelo que ya tenías configurado
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Actúa como un experto en marketing digital. Genera una descripción profesional, persuasiva y técnica basada en esta idea: "${prompt}"` }] }]
      })
    });

    const data = await response.json();
    
    if (!response.ok) throw new Error(data.error?.message || "Error en Google API");

    const textoIA = data.candidates[0].content.parts[0].text;
    return NextResponse.json({ texto: textoIA });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}