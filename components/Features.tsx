
import React from 'react';

// Fixed: Using React.FC to properly handle component props including the implicit 'key' prop in mappings
const FeatureCard: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
  <div className="group relative p-8 bg-zinc-900/50 border border-zinc-800 hover:border-red-600/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
       <span className="text-6xl font-black text-red-600">#</span>
    </div>
    <div className="mb-6 w-12 h-12 flex items-center justify-center bg-red-900/20 text-red-600 border border-red-900/50 group-hover:bg-red-600 group-hover:text-white transition-all">
       <span className="minecraft-font text-2xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-4 text-zinc-100 group-hover:text-red-500 transition-colors">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
    
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-900/0 via-red-600 to-red-900/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    { icon: 'S', title: 'Dark Survival', desc: 'A custom-tuned survival experience where the environment is as dangerous as other players. Watch your light levels.' },
    { icon: 'M', title: 'Immersive Mystery', desc: 'Dynamic world events triggered by server-wide actions. Every season has a story waiting to be unraveled.' },
    { icon: 'G', title: 'Horror Elements', desc: 'Custom soundscapes, hallucinations, and eerie encounters that bring a true sense of dread to your Minecraft gameplay.' },
    { icon: 'E', title: 'Evolving Map', desc: 'The world changes over time. New ruins appear, biomes shift, and the darkness spreads as the season progresses.' },
    { icon: 'C', title: 'Custom Economy', desc: 'A player-driven economy built on scavenging rare artifacts from high-risk zones. High risk, legendary rewards.' },
    { icon: 'P', title: 'Proximity Chat', desc: 'Fully integrated voice chat for maximum immersion. Whisper to allies... or hear the screams of your enemies.' },
  ];

  return (
    <section id="features" className="py-32 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">THE <span className="text-red-600">CORRUPTION</span> FEATURES</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
