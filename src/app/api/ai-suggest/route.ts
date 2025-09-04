import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  const { job, candidate } = await req.json();

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "Gemini API key not found" },
      { status: 500 }
    );
  }

  try {
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      You are a concise recruiting helper.
      Job: ${job}
      Candidate: ${candidate}
      Return *only valid JSON* with:
      - headline (string)
      - bullets (array of 3 short strings)
      - fitScore (0-100 number)
    `;

    const result = await model.generateContent(prompt);
    let text = result.response.text();

    // ✅ Strip code fences if present
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (err) {
      console.error("Failed to parse Gemini output:", text);
      return NextResponse.json({ error: "Invalid JSON from Gemini" }, { status: 500 });
    }

    return NextResponse.json(parsed);
  } catch (err) {
    console.error("Gemini error:", err);
    return NextResponse.json({ error: "Gemini request failed" }, { status: 500 });
  }
}
