
import React from 'react';

const FogOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      <style>
        {`
          @keyframes fog-move-1 {
            0% { transform: translateX(-25%) translateY(10%) scale(1); }
            50% { transform: translateX(25%) translateY(-10%) scale(1.1); }
            100% { transform: translateX(-25%) translateY(10%) scale(1); }
          }
          @keyframes fog-move-2 {
            0% { transform: translateX(25%) translateY(-5%) scale(1.1); }
            50% { transform: translateX(-25%) translateY(5%) scale(1); }
            100% { transform: translateX(25%) translateY(-5%) scale(1.1); }
          }
          .fog-cloud {
            position: absolute;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(20,0,0,0.15) 0%, rgba(0,0,0,0) 70%);
            filter: blur(80px);
          }
        `}
      </style>
      <div className="fog-cloud opacity-40 animate-[fog-move-1_40s_linear_infinite]" style={{ top: '-50%', left: '-50%' }}></div>
      <div className="fog-cloud opacity-30 animate-[fog-move-2_50s_linear_infinite]" style={{ top: '-40%', right: '-40%', background: 'radial-gradient(circle, rgba(100,0,0,0.08) 0%, rgba(0,0,0,0) 60%)' }}></div>
      
      {/* Bottom heavy fog */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
    </div>
  );
};

export default FogOverlay;
