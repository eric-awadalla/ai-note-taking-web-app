import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

export const generateAIResponse = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: userInput, // The user input is sent to Gemini API
    });

    return response.text || "No response from AI.";
  } catch (error) {
    console.error("Error with Gemini API:", error);
    return "Error generating response.";
  }
};
