import { TreePine, Sprout, Leaf } from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ from = 0, to, duration = 2, suffix = "", decimals = 0 }: { from?: number, to: number, duration?: number, suffix?: string, decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const display = useTransform(count, (latest) => `${Number(latest.toFixed(decimals))}${suffix}`);

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function GreenInitiative() {
  return (
    <div className="bg-paper min-h-screen font-sans shrink-0">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-ink/5">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1628191010210-a59de33e5941?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center pointer-events-none mix-blend-multiply" />
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
            <TreePine className="w-12 h-12 mx-auto mb-8 text-cricket-green" />
            <h6 className="text-xs font-bold tracking-widest uppercase text-ink/70 mb-6">Green Initiative</h6>
            <h1 className="text-5xl md:text-7xl font-serif font-medium mb-10 leading-tight">
              Growing the Game. <br /> <i className="text-cricket-green">Growing the Planet.</i>
            </h1>
            <p className="text-xl md:text-2xl text-ink/60 font-light max-w-2xl mx-auto italic font-serif">
              "We Plant Trees Because Growth Takes Time — Just Like Test Cricket"
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 sm:px-6 lg:px-8">
        {/* Stats Placeholder */}
        <div className="relative mb-16 md:mb-24">
          <div className="bg-surface rounded-[3rem] p-12 md:p-20 text-center border border-ink/5 relative overflow-hidden">
             <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center pointer-events-none" />
             <div className="w-24 h-24 bg-cricket-green/10 text-cricket-green rounded-full flex items-center justify-center mx-auto mb-10 relative z-10 shadow-inner">
               <Sprout className="w-12 h-12" />
             </div>
             <h2 className="text-4xl md:text-5xl font-serif text-ink mb-6 relative z-10">Our Milestones are Growing</h2>
             <p className="text-xl text-ink/60 font-light max-w-2xl mx-auto relative z-10 mb-10 leading-relaxed">
               We are currently resetting our impact counters for the upcoming season. Every match in the JBMR Green Test Trophy will contribute to these goals.
             </p>
             <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-cricket-green/20 bg-cricket-green/5 text-cricket-green font-bold text-xs uppercase tracking-widest relative z-10">
               <div className="w-2 h-2 bg-cricket-green rounded-full animate-pulse" />
               Impact Tracking Coming Soon
             </div>
          </div>
        </div>

        <section className="mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-ink mb-6 md:mb-8">The Philosophy</h2>
            <div className="text-xl md:text-2xl text-ink/70 font-light leading-relaxed font-serif italic border-t border-ink/10 pt-8 md:pt-12 mb-8 md:mb-12">
              <p>
                The JBMR Green Test Trophy is more than a cricket tournament—it is a commitment to sustainability.
                Just like Test cricket demands patience, discipline, and time, nature also requires care and long-term dedication.
                <br/><br/>
                Through this initiative, we plant trees to build a greener future while reviving the true spirit of the game.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cricket-green to-cricket-green-dark text-paper p-10 rounded-[2rem] shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-pink-ball/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none transition-all duration-700 group-hover:scale-150" />
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628191010210-a59de33e5941?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
               <p className="relative z-10 text-xl font-bold tracking-wide leading-relaxed font-sans uppercase">
                 "A tournament where cricket excellence meets environmental responsibility—creating impact beyond the boundary."
               </p>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[400px] md:h-[600px]">
             <div className="md:col-span-8 h-[250px] md:h-full">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80" alt="Plantation" className="rounded-[2rem] w-full h-full object-cover" />
             </div>
             <div className="md:col-span-4 flex flex-col gap-4 h-full">
                <img src="https://images.unsplash.com/photo-1587280501635-68a0e8235f30?w=800&q=80" alt="Volunteers" className="rounded-[2rem] w-full flex-1 object-cover" />
                <img src="https://images.unsplash.com/photo-1466692476877-296b0dc1a700?w=800&q=80" alt="Saplings" className="rounded-[2rem] w-full flex-1 object-cover" />
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
