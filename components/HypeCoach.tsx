import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, MessageSquare } from 'lucide-react';

const HypeCoach: React.FC = () => {
  const [hypeMessage, setHypeMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const generateHype = async () => {
    setLoading(true);
    try {
        // IMPORTANT: In a real production app, ensure API keys are handled securely.
        // This relies on the environment variable as per instructions.
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            setHypeMessage("API Key missing! Just imagine I said something AWESOME! 🚀");
            setLoading(false);
            return;
        }

        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: "Generate a short, extremely high-energy, 'Wolf of Wall Street' style motivational quote for a call center sales agent about making huge money this weekend (Dec 6 & 7). Use emojis. Keep it under 20 words. No hashtags.",
        });

        const text = response.text;
        setHypeMessage(text);
    } catch (error) {
        console.error("Hype generation failed", error);
        setHypeMessage("THE TRAIN DOESN'T STOP FOR ERRORS! KEEP DIALING! 🚂💨");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="mt-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-6 border border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-20">
            <Sparkles className="w-16 h-16 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 mr-2 text-purple-400" />
            NEED A BOOST?
        </h3>

        {hypeMessage && (
            <div className="mb-6 p-4 bg-black/30 rounded-xl border border-white/5 animate-pulse">
                <p className="text-lg md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 italic">
                    "{hypeMessage}"
                </p>
            </div>
        )}

        <button
            onClick={generateHype}
            disabled={loading}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-bold text-white transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50"
        >
            {loading ? "FUELING UP..." : "GET HYPE FROM AI COACH"}
        </button>
    </div>
  );
};

export default HypeCoach;