
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const LoreOracle: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askTheVoid = async () => {
    if (!input.trim() || loading) return;
    
    setLoading(true);
    setResponse('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const genResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: input,
        config: {
          systemInstruction: "You are 'The Voice of the Void' from the SpiderX Season 3 Minecraft server. Your tone is dark, cryptic, cinematic, and slightly threatening. You speak in riddles about a corruption taking over the world. Keep responses concise (under 3 sentences) and immersive. Never break character. Mention spiders, webs, or the coming darkness occasionally.",
          temperature: 0.9,
          topP: 0.95,
        },
      });

      setResponse(genResponse.text || "The void is silent... for now.");
    } catch (error) {
      console.error("Connection to the void failed:", error);
      setResponse("The connection to the abyss has been severed. Try again when the stars align.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="oracle" className="py-32 relative bg-[#050505] border-y border-red-900/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">WHISPER INTO THE <span className="text-red-600">VOID</span></h2>
          <p className="text-zinc-500 italic">The shadows might just whisper back.</p>
        </div>

        <div className="relative group">
          {/* Animated Crystal/Eye */}
          <div className={`mx-auto w-24 h-24 mb-12 flex items-center justify-center transition-all duration-1000 ${loading ? 'scale-125' : 'scale-100'}`}>
            <div className={`absolute w-full h-full bg-red-600/20 rounded-full blur-xl animate-pulse ${loading ? 'opacity-100' : 'opacity-40'}`}></div>
            <div className={`relative w-12 h-12 bg-black border-2 border-red-600 rotate-45 flex items-center justify-center transition-all duration-500 ${loading ? 'animate-spin' : ''}`}>
              <div className="w-4 h-4 bg-red-600"></div>
            </div>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What secrets does the darkness hold?"
              className="w-full bg-black border-b-2 border-red-900/50 p-6 text-xl text-center text-zinc-100 placeholder:text-zinc-800 focus:outline-none focus:border-red-600 transition-colors resize-none h-32 minecraft-font"
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), askTheVoid())}
            />
            
            <button
              onClick={askTheVoid}
              disabled={loading || !input.trim()}
              className="mt-8 px-8 py-3 bg-red-900/20 border border-red-600 text-red-600 font-bold uppercase tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {loading ? 'Consulting the Void...' : 'Invoke Response'}
            </button>
          </div>

          {response && (
            <div className="mt-16 p-8 bg-zinc-900/30 border border-zinc-800 relative animate-[fadeIn_0.5s_ease-out]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-[#050505] text-[10px] text-red-600 uppercase tracking-widest font-bold">
                The Void Speaks
              </div>
              <p className="text-2xl text-zinc-300 italic tracking-wide leading-relaxed">
                "{response}"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoreOracle;
