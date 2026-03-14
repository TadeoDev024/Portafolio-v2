import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Falta API Key" }, { status: 500 });
    }

    const model = "gemini-2.5-flash";
    const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;

    // EL NUEVO PROMPT "ESTILO GEMINI"
    // Le decimos que sea útil, directo y que se adapte a lo que el usuario pida.
    const systemInstruction = `Eres un asistente de Inteligencia Artificial útil, directo y versátil. 
Tu objetivo es cumplir exactamente con lo que el usuario te pide.
- Si el usuario te saluda ("hola"), responde con un saludo natural y amigable.
- Si te pide redactar, resumir o crear algo, hazlo con la mejor calidad posible.
- No asumas un rol de "experto en tecnología" a menos que el usuario te pregunte de tecnología.
- Sé claro, conciso y utiliza un formato fácil de leer.`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ 
            text: `${systemInstruction}\n\nSolicitud del usuario: "${prompt}"\n\nRespuesta:` 
          }]
        }]
      })
    });

    const data = await response.json();

    if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
      return NextResponse.json({ 
        texto: data.candidates[0].content.parts[0].text 
      });
    }

    return NextResponse.json({ 
      error: data.error?.message || "Error desconocido de Google"
    }, { status: response.status });

  } catch (error: any) {
    return NextResponse.json({ error: "Fallo de conexión: " + error.message }, { status: 500 });
  }
}