
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Silhouette & Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
         {/* Simplified Minecraft Steve Silhouette shape */}
         <div className="relative w-64 h-96 bg-black border border-red-900/20 shadow-[0_0_100px_rgba(220,38,38,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-black border-b border-red-900/20"></div>
            {/* Glowing Eyes */}
            <div className="absolute top-12 left-[calc(50%-24px)] w-4 h-2 bg-red-600 rounded-full shadow-[0_0_15px_#dc2626] animate-pulse"></div>
            <div className="absolute top-12 left-[calc(50%+8px)] w-4 h-2 bg-red-600 rounded-full shadow-[0_0_15px_#dc2626] animate-pulse"></div>
         </div>
      </div>

      {/* Atmospheric Fog Layers (Inside Hero) */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-10"></div>

      <div className="relative z-20 text-center px-4">
        <p className="minecraft-font text-red-500 text-2xl mb-4 tracking-[0.5em] opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          A NEW EVIL AWAKENS
        </p>
        
        <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter uppercase relative group">
          <span className="relative z-10 glitch-text cursor-default inline-block">
            SPIDERX
          </span>
          <br />
          <span className="text-red-600 text-glow inline-block transition-transform duration-700 hover:scale-105">
            SEASON 3
          </span>
        </h1>

        <div className="max-w-xl mx-auto">
          <p className="text-zinc-400 text-lg md:text-xl font-light tracking-widest italic animate-[fadeIn_2s_ease-out_forwards]">
            "The darkness returns... and it remembers your name."
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-[fadeIn_2.5s_ease-out_forwards]">
          <a href="#about" className="group relative px-10 py-4 bg-transparent border border-red-600 overflow-hidden transition-all duration-300">
            <div className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></div>
            <span className="relative z-10 font-bold tracking-widest uppercase group-hover:text-white transition-colors duration-300">
              Explore The Void
            </span>
          </a>
          <a href="#countdown" className="text-red-500 font-bold tracking-widest uppercase hover:text-white transition-all flex items-center gap-2">
            <span>The Timer Tolls</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Cinematic Web SVG Overlays */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none transform rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-red-900 fill-none">
          <path d="M0,0 Q50,0 100,0 M0,0 Q0,50 0,100 M0,0 L100,100 M20,0 L0,20 M40,0 L0,40 M60,0 L0,60 M80,0 L0,80" strokeWidth="0.5" />
          <path d="M0,20 Q20,20 20,0 M0,40 Q40,40 40,0 M0,60 Q60,60 60,0" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
