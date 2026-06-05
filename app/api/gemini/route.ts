import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Standard initialization as per framework guidelines
// Safe fallback if API key is not yet configured in developer secrets
const getAiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export async function POST(req: NextRequest) {
  let prompt = "";
  let purpose = "";
  let name = "";

  try {
    const body = await req.json();
    prompt = body.prompt || "";
    purpose = body.purpose || "";
    name = body.name || "";
  } catch (e) {
    console.error("Failed to parse request JSON:", e);
  }

  try {
    const aiInstance = getAiClient();

    if (!aiInstance) {
      // Graceful local helper output fallback if key has not been entered yet
      return NextResponse.json({
        text: `Dear P.P. Maniya Education and Medical Trust,\n\nI am pleased to register my sincere support for your wonderful initiatives in ${purpose || "Education and Healthcare"}. As a member of our community, I deeply admire the transparency and legacy established by Late Popatbhai Premjibhai Maniya. Please accept this contribution to help advance our shared vision of a compassionate, self-reliant society.\n\nWarm regards,\n${name || "A Benevolent Supporter"}`
      });
    }

    const systemPrompt = `You are a professional, warm, and highly respectful assistant writing donor letters and volunteer applications for the "Late Popatbhai Premjibhai Maniya (P.P. Maniya) Trust", a leading humanitarian education & healthcare charity in Surat, Gujarat. Write a natural, heartwarming, and professional letter based on the user's input:
User Name: ${name || "A Benevolent Supporter"}
Context/Purpose: ${purpose || "General Welfare"}
User Notes/Prompt: ${prompt || "Generate a heartwarming letter of support"}
Keep the letter concise (around 2-3 short, elegant paragraphs), focusing on themes of legacy, transparency, and grassroots community upliftment. do not use placeholders like [Your Name], replace them with actual values.`;

    const response = await aiInstance.models.generateContent({
      model: "gemini-2.5-flash",
      contents: systemPrompt,
    });

    return NextResponse.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini Integration Error:", error);
    return NextResponse.json({
      text: `Dear P.P. Maniya Trust,\n\nI am honored to support your impactful programs. May this contribution help bring quality education and healthcare to those who need it most.\n\nSincerely,\n${name || "A Benevolent Supporter"}`
    });
  }
}
