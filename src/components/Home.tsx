import { Link } from "react-router-dom";
import { TreePine, Trophy, Droplet, ArrowRight, ArrowUpRight, Landmark, Zap, Leaf, Building2, Moon, Sprout, Calendar } from "lucide-react";
import { TEAMS, SCHEDULE } from "../data";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { cn } from "../lib/utils";
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

export function Home() {
  const upcomingMatches = SCHEDULE.filter(m => m.status === 'upcoming').slice(0, 3);

  return (
    <div className="w-full bg-paper">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-surface">
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/90 to-transparent w-full md:w-3/4 z-10" />
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/hero-bg.png" 
            alt="Pink Cricket Ball" 
            className="absolute inset-0 w-full h-full object-cover object-center md:mix-blend-normal"
          />
          {/* Neon Glow behind the ball */}
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-pink-ball/20 blur-[120px] rounded-full pointer-events-none" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full mt-24 md:mt-0">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-pink-ball/30 bg-pink-ball/10 backdrop-blur-md mb-8">
                <TreePine className="w-4 h-4 text-cricket-green-light" />
                <span className="text-pink-ball uppercase tracking-widest font-bold text-xs">Season 1 • Planting Seeds</span>
              </div>
              
              <h1 className="text-4xl md:text-[60px] lg:text-[70px] font-serif font-black tracking-tight text-white leading-[0.85] mb-6 md:mb-8 drop-shadow-xl uppercase">
                Jai Baba Mohan Ram <br/>
                <span className="text-pink-ball italic" style={{ filter: 'drop-shadow(0 0 20px rgba(255,42,112,0.6))' }}>Green</span> Test Trophy
              </h1>
              
              <p className="text-lg md:text-2xl text-white font-sans font-bold mb-4 max-w-xl leading-relaxed uppercase tracking-wider">
                Long-Format Day-Night Pink Ball Cricket
              </p>
              
              <p className="text-base md:text-lg text-white/70 font-sans font-light mb-8 md:mb-12 max-w-xl leading-relaxed">
                A premier long-format tournament reviving the true spirit of Test cricket through discipline, strategy, and competitive multi-day matches.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/schedule"
                  className="inline-flex items-center justify-center bg-cricket-green text-white px-10 py-5 rounded-full text-base font-serif font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  View Fixtures
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full text-base font-serif font-bold tracking-widest uppercase transition-all hover:-translate-y-1 backdrop-blur-md"
                >
                  Register Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-widest text-white/70 font-bold font-sans">Discover</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-pink-ball to-transparent"
          />
        </motion.div>
      </section>

      {/* Breaking News Ticker */}
      <div className="bg-cricket-green/10 backdrop-blur-md text-cricket-green-light py-3 px-4 border-y border-cricket-green/30 relative z-20 overflow-hidden flex items-center">
        <div className="font-bold tracking-widest uppercase text-xs shrink-0 z-10 bg-surface/50 backdrop-blur-md px-4 py-1 rounded-full border border-pink-ball/50 flex items-center gap-2 mr-4">
           <div className="w-2 h-2 bg-pink-ball rounded-full animate-pulse" />
           Latest Updates
        </div>
        <div className="flex-1 overflow-hidden relative">
          <motion.div 
             className="flex gap-12 w-max px-4 text-sm font-medium hover:[animation-play-state:paused] cursor-pointer"
             animate={{ x: ["0%", "-50%"] }}
             transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
             {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-12">
                   <span>Welcome to the official JBMR Green Test Trophy portal.</span>
                   <span className="opacity-50">•</span>
                   <span>Our website is currently being updated with fresh content for the upcoming season.</span>
                   <span className="opacity-50">•</span>
                   <span>Stay tuned for team announcements and the full tournament schedule.</span>
                   <span className="opacity-50">•</span>
                </div>
             ))}
          </motion.div>
        </div>
      </div>

      {/* The Pink Ball Aspect */}
      <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
         <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-pink-ball/10 blur-[150px] rounded-full pointer-events-none" />
         <div className="absolute -right-40 bottom-0 w-96 h-96 bg-cricket-green/30 blur-[150px] rounded-full pointer-events-none" />
         
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden bg-paper shadow-2xl group"
             >
                <img 
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop" 
                  alt="Stadium Under Lights" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/40 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="bg-surface/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex items-center gap-6">
                     <Moon className="w-12 h-12 text-pink-ball" />
                     <div>
                       <div className="text-3xl font-serif text-white mb-1">Day/Night Drama</div>
                       <div className="text-xs font-sans font-bold tracking-widest uppercase text-white/70">Testing skills under conditions</div>
                     </div>
                   </div>
                </div>
             </motion.div>

             <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl font-serif font-black mb-8 leading-[0.9] uppercase text-white"
                >
                  Tournament <span className="text-pink-ball italic">Highlights</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-white/70 font-sans font-light mb-12 leading-relaxed"
                >
                  Experience the pinnacle of competitive cricket with our unique tournament format designed for the modern era.
                </motion.p>
                
                <div className="space-y-6">
                  {[
                    { icon: Trophy, title: "3-Day Pink Ball Matches", desc: "Strategic gameplay under lights with the swing and spice of the pink ball." },
                    { icon: Moon, title: "Elite Cricketing Experience", desc: "Professional match environment tailored for serious cricketers." },
                    { icon: TreePine, title: "Green Initiative & Tree Plantation", desc: "Every match contributes to a greener planet through our dedicated environmental efforts." }
                  ].map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (idx * 0.1) }}
                      className="flex items-start gap-6 p-6 rounded-3xl bg-paper/50 hover:bg-white/5 border border-white/10 transition-colors"
                    >
                      <feature.icon className="w-8 h-8 text-pink-ball shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-2xl uppercase mb-2 text-white font-bold">{feature.title}</h4>
                        <p className="text-white/70 font-sans text-sm font-light leading-relaxed">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
             </div>
          </div>
         </div>
      </section>

      {/* The Green Initiative Stats */}
      <section className="py-16 md:py-24 bg-paper relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center pointer-events-none mix-blend-screen" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <h6 className="text-[10px] font-bold tracking-widest font-sans uppercase text-pink-ball mb-6">Impact Beyond the Boundary</h6>
            <h2 className="text-5xl md:text-7xl font-serif font-black uppercase text-white leading-none mb-6">
              The <span className="italic font-light text-cricket-green-light">Green</span> Initiative
            </h2>
            <p className="text-white/70 uppercase tracking-widest text-sm font-bold font-sans">
              Growing the Game. Growing the Planet.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-surface rounded-[3rem] p-12 md:p-16 text-center border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-cricket-green/10 to-transparent opacity-50" />
              <div className="w-20 h-20 bg-paper border border-white/10 text-cricket-green-light rounded-full flex items-center justify-center mx-auto mb-8 relative z-10">
                <TreePine className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-serif text-white mb-4 relative z-10 uppercase tracking-tight">Our Vision</h3>
              <p className="text-white/60 font-light text-lg max-w-xl mx-auto relative z-10 mb-8">
                To preserve and promote the culture of long-format cricket by creating a competitive platform that values patience, discipline, and true cricketing character.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-cricket-green/30 bg-cricket-green/10 text-cricket-green-light font-bold text-[10px] uppercase tracking-widest relative z-10">
                <Sprout className="w-3 h-3" /> Growth Takes Time
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Link to="/about" className="inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-white hover:text-pink-ball transition-colors pb-1 border-b border-white/20 hover:border-pink-ball">
              Join the Plantation Drive <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Matches Preview */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h6 className="text-[10px] font-bold tracking-widest font-sans uppercase text-white/70 mb-4">Live Action</h6>
              <h2 className="text-5xl md:text-7xl font-serif font-black uppercase text-white leading-none">Upcoming Fixtures</h2>
            </motion.div>
            <Link to="/schedule" className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white bg-white/5 border border-white/10 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all group">
              Full Schedule <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingMatches.length > 0 ? upcomingMatches.map((match, i) => {
              const t1 = TEAMS.find(t => t.id === match.team1);
              const t2 = TEAMS.find(t => t.id === match.team2);
              if(!t1 || !t2) return null;
              
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={match.id} 
                  className="group block rounded-[3rem] bg-paper border border-white/5 p-10 hover:border-white/20 hover:-translate-y-2 transition-all duration-500 shadow-xl relative overflow-hidden focus:outline-none"
                >
                  <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/10 text-xs font-sans font-bold tracking-widest uppercase">
                    <span className="text-white/70 flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-ball rounded-full animate-pulse" />
                      {new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric'})}
                    </span>
                    {match.isDayNight && (
                      <span className="text-pink-ball border border-pink-ball/20 bg-pink-ball/5 px-3 py-1 rounded-full">Day/Night</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-6 mb-4">
                    <img src={t1.logo} alt={t1.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:scale-110 transition-transform" />
                    <span className="text-4xl font-serif font-medium text-white tracking-wide">{t1.short}</span>
                  </div>
                  
                  <div className="text-white/40 font-serif italic text-2xl px-10 mb-4 font-light">v.</div>
                  
                  <div className="flex items-center gap-6 mb-10">
                    <img src={t2.logo} alt={t2.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:scale-110 transition-transform" />
                    <span className="text-4xl font-serif font-medium text-white tracking-wide">{t2.short}</span>
                  </div>

                  <div className="text-[10px] tracking-widest uppercase text-white/70 font-sans font-bold flex items-center gap-2 bg-white/5 py-3 px-4 rounded-full w-fit">
                     <Landmark className="w-3 h-3 text-cricket-green-light" />
                     {match.venue}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-surface/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[3rem] flex items-center justify-center">
                    <Link to="/schedule" className="bg-cricket-green text-white px-8 py-3 rounded-full font-serif font-bold tracking-widest uppercase text-sm shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                      Match Center <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            }) : (
              <div className="col-span-full bg-paper/50 rounded-[3rem] p-16 text-center border border-white/5">
                <div className="w-20 h-20 bg-surface border border-white/10 text-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Calendar className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">Fixtures Coming Soon</h3>
                <p className="text-white/60 font-light text-lg max-w-xl mx-auto">We are preparing the schedule for the next season. Full fixtures will be announced soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 relative overflow-hidden bg-surface border-y border-white/5">
        <div className="text-center relative z-10 w-full overflow-hidden flex flex-col items-center">
          <h6 className="text-[10px] font-bold tracking-widest font-sans uppercase text-white/70 mb-8 md:mb-12">Proudly Supported By</h6>
          <div className="py-8">
            <h3 className="text-3xl font-serif text-white/30 italic uppercase tracking-[0.2em]">Sponsors Coming Soon</h3>
            <p className="text-white/20 text-xs font-bold uppercase tracking-widest mt-4">We are finalizing our partnership roster for the upcoming season.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

