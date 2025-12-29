
import React from 'react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-40 bg-gradient-to-b from-black to-[#050505] relative overflow-hidden">
      {/* Red Ambient Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-red-900/10 blur-[150px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          JOIN THE <span className="text-red-600">CULT</span>
        </h2>
        <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Don't face the darkness alone. Join over 5,000 survivors in our official Discord to coordinate your survival, find a faction, and get live updates.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="https://discord.gg/spiderx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-12 py-6 bg-[#5865F2] hover:bg-white text-white hover:text-[#5865F2] transition-all duration-500 font-black tracking-[0.2em] uppercase rounded-none overflow-hidden shadow-[0_20px_50px_rgba(88,101,242,0.3)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
          >
            <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-red-600 transition-all"></div>
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.0821.0821 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
              </svg>
              Summon The Hype
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
