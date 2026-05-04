import { TreePine } from "lucide-react";

export function Thumbnail() {
  return (
    <div className="w-[1280px] h-[720px] bg-surface flex items-center justify-center relative overflow-hidden font-sans mx-auto shadow-2xl scale-75 origin-top mt-10">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1600&auto=format&fit=crop" 
          alt="Stadium" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full px-20 flex justify-between items-center">
        
        {/* Left Side: Typography */}
        <div className="space-y-6">
           <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-pink-ball/30 bg-pink-ball/10 backdrop-blur-md mb-8">
              <TreePine className="w-5 h-5 text-cricket-green-light" />
              <span className="text-pink-ball uppercase tracking-widest font-bold text-sm">Season 1 • Planting Seeds</span>
           </div>

           <h1 className="text-white text-8xl font-serif font-bold italic leading-none drop-shadow-2xl">
             JBMR <br/>
             <span className="text-cricket-green-light">GREEN</span>
           </h1>

           <div className="pt-6">
              <h2 className="text-ink bg-paper inline-block px-4 py-2 font-black text-4xl uppercase tracking-tighter -skew-x-12">
                 TEST TROPHY
              </h2>
           </div>

           <p className="text-white/80 text-3xl font-light mt-4 max-w-xl">
              4 Elite Teams. 3 Days. <br/>
              <strong className="text-pink-ball">The Pink Ball Challenge.</strong>
           </p>
        </div>

        {/* Right Side: Visual pop */}
        <div className="relative">
           <div className="w-[450px] h-[450px] rounded-full bg-pink-ball/20 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
           <img 
             src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop" 
             alt="Pink Ball"
             className="w-[500px] h-[500px] object-cover rounded-full shadow-[0_0_100px_rgba(255,42,112,0.6)] mix-blend-normal relative z-10 border-8 border-surface p-2"
             style={{ filter: 'brightness(1.2) contrast(1.1)' }}
           />
        </div>
        
      </div>
    </div>
  );
}
