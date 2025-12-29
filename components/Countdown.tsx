
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

      if (distance < 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="countdown" className="py-32 bg-black relative overflow-hidden">
      {/* Decorative spider web background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-red-600 fill-none">
          <circle cx="50" cy="50" r="10" />
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="40" />
          <path d="M50,0 L50,100 M0,50 L100,50 M15,15 L85,85 M85,15 L15,85" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-[0.2em] text-zinc-300">
          THE <span className="text-red-600">INCURSION</span> BEGINS IN
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="bg-zinc-900 border-2 border-zinc-800 p-8 md:p-12 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-1 h-full bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                 <span className="text-5xl md:text-7xl font-black text-white minecraft-font text-glow block mb-2">
                   {String(item.value).padStart(2, '0')}
                 </span>
                 <span className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-red-600">
                   {item.label}
                 </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-zinc-500 minecraft-font text-xl animate-pulse">
          October 31st, 2025 • High Noon
        </p>
      </div>
    </section>
  );
};

export default Countdown;
