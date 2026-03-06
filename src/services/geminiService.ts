import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const geminiService = {
  async generateQuiz(topic: string, difficulty: string) {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: `Generate a 5-question multiple choice quiz about ${topic} at ${difficulty} level. Return as JSON.`,
      config: {
        responseMimeType: "application/json",
      },
    });
    return JSON.parse(response.text || "{}");
  },

  async getRecommendations(studentData: any) {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: `Based on this student performance data: ${JSON.stringify(studentData)}, provide 3 personalized learning recommendations. Return as JSON array of objects with 'title' and 'description'.`,
      config: {
        responseMimeType: "application/json",
      },
    });
    return JSON.parse(response.text || "[]");
  }
};
