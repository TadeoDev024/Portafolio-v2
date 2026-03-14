import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "No se encontró GEMINI_API_KEY en .env.local" }, { status: 500 });
    }

    // LISTA DE INTENTOS (Ordenados por rendimiento y estabilidad actual)
    const endpoints = [
      { ver: "v1beta", mod: "gemini-1.5-flash-latest" },
      { ver: "v1", mod: "gemini-1.5-flash" },
      { ver: "v1beta", mod: "gemini-1.5-pro" },
      { ver: "v1", mod: "gemini-pro" }
    ];

    let lastErrorMessage = "";

    // Bucle inteligente: Probará cada uno hasta que uno responda 200 OK
    for (const setup of endpoints) {
      try {
        console.log(`Intentando: ${setup.mod} en ${setup.ver}...`);
        
        const url = `https://generativelanguage.googleapis.com/${setup.ver}/models/${setup.mod}:generateContent?key=${apiKey}`;

        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `Eres un experto. Genera: ${prompt}` }] }]
          })
        });

        const data = await response.json();

        if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
          console.log(`✅ ¡Conexión exitosa con ${setup.mod}!`);
          return NextResponse.json({ 
            texto: data.candidates[0].content.parts[0].text,
            info: `Modelo: ${setup.mod}`
          });
        }

        lastErrorMessage = data.error?.message || "Error desconocido";
        console.warn(`⚠️ ${setup.mod} rechazado: ${lastErrorMessage}`);

      } catch (err: any) {
        lastErrorMessage = err.message;
      }
    }

    // SI TODO FALLA: El problema no es el modelo, es la cuenta o la red.
    return NextResponse.json({ 
      error: "Google bloqueó todos los intentos.",
      causa_real: lastErrorMessage,
      consejo: "1. Genera una API KEY nueva en Google AI Studio. 2. Asegúrate de que no estás usando una VPN o red restringida (como la de la facultad)."
    }, { status: 500 });

  } catch (error: any) {
    return NextResponse.json({ error: "Error de red: " + error.message }, { status: 500 });
  }
}