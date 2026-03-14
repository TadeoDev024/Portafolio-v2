import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.GEMINI_API_KEY;
  return NextResponse.json({
    existe: !!key,
    comienzo: key ? key.substring(0, 5) + "..." : "No encontrada"
  });
}