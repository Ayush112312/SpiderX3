
import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-red-900/30' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-red-600 flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
            <span className="text-white font-bold rotate-[-45] group-hover:rotate-0 transition-transform">X</span>
          </div>
          <span className="font-bold tracking-tighter text-xl hidden sm:block">SPIDERX <span className="text-red-600">S3</span></span>
        </div>
        
        <div className="flex gap-8 items-center text-sm font-medium tracking-widest uppercase">
          <a href="#about" className="hover:text-red-500 transition-colors hidden md:block">Abyss</a>
          <a href="#oracle" className="hover:text-red-500 transition-colors hidden md:block">Oracle</a>
          <a href="#features" className="hover:text-red-500 transition-colors hidden md:block">Realms</a>
          <a href="#countdown" className="hover:text-red-500 transition-colors">Manifest</a>
          <a href="#community" className="px-4 py-2 bg-red-700/20 border border-red-600/50 hover:bg-red-600 transition-all duration-300 rounded shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            Join Discord
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
