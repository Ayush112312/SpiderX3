
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative bg-black">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="inline-block px-4 py-1 border border-red-900 text-red-600 text-xs font-bold tracking-[0.3em] uppercase mb-8">
          The Revelation
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-zinc-100">
          SURVIVE THE <span className="text-red-600">INCURSION</span>
        </h2>
        
        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
          <p>
            SpiderX Season 3 isn't just a server restart. It's a fundamental shift in reality. The overworld you once knew has been corrupted by a lingering malevolence. 
          </p>
          <p>
            Ancient ruins hold secrets that scream in the dark. The shadows themselves have grown hungry. Every block you mine, every step you take, something watches from the fog.
          </p>
          <p className="text-zinc-200 font-normal">
            New custom biomes, sanity mechanics, and a world-state that reacts to player fear. Will you rebuild civilization or become another ghost in the machine?
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Map Size', value: '30k x 30k' },
            { label: 'Difficulty', value: 'Hardcore+' },
            { label: 'Capacity', value: '500 Players' },
            { label: 'Version', value: '1.21.x' },
          ].map((stat, i) => (
            <div key={i} className="group border-l border-red-900/30 pl-4 hover:border-red-600 transition-colors">
              <p className="text-[10px] text-red-600 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-xl font-bold text-zinc-300 group-hover:text-white transition-colors">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
