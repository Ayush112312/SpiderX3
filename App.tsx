
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Countdown from './components/Countdown';
import Community from './components/Community';
import Footer from './components/Footer';
import FogOverlay from './components/FogOverlay';
import Navigation from './components/Navigation';
import LoreOracle from './components/LoreOracle';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[100]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-red-600 font-bold tracking-widest uppercase animate-pulse">Initializing Darkness...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-red-900 selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-10 bg-noise"></div>
      
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Features />
        <LoreOracle />
        <Countdown targetDate={new Date('2025-10-31T00:00:00')} />
        <Community />
      </main>

      <Footer />
      
      <FogOverlay />
      
      <div className="fixed top-1/4 right-10 w-2 h-1 bg-red-600 blur-[2px] rounded-full opacity-20 animate-pulse z-0"></div>
      <div className="fixed top-1/4 right-[44px] w-2 h-1 bg-red-600 blur-[2px] rounded-full opacity-20 animate-pulse z-0"></div>
      
      <div className="fixed bottom-1/3 left-20 w-1.5 h-0.5 bg-red-600 blur-[1px] rounded-full opacity-10 animate-pulse z-0" style={{ animationDelay: '1.5s' }}></div>
      <div className="fixed bottom-1/3 left-[88px] w-1.5 h-0.5 bg-red-600 blur-[1px] rounded-full opacity-10 animate-pulse z-0" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default App;
