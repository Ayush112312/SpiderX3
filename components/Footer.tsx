
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
             <div className="w-6 h-6 bg-red-600"></div>
             <span className="font-bold tracking-tighter text-lg uppercase">SPIDERX <span className="text-red-600">S3</span></span>
          </div>
          <p className="text-zinc-600 text-xs tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} SpiderX Network. All rights reserved.<br />
            Not an official Minecraft product. Not approved by or associated with Mojang.
          </p>
        </div>
        
        <div className="flex gap-6">
          {['Youtube', 'X (Twitter)', 'Instagram', 'Tiktok'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-zinc-500 hover:text-red-500 transition-colors text-xs uppercase font-bold tracking-widest"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
      
      {/* Easter Egg Bottom Line */}
      <div className="mt-12 text-center overflow-hidden h-4">
        <p className="text-[10px] text-zinc-900 select-none cursor-default hover:text-red-900 transition-colors">
          he is watching you from the static he is watching you from the static he is watching you from the static
        </p>
      </div>
    </footer>
  );
};

export default Footer;
