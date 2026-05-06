import { motion } from "motion/react";

export function About() {
  return (
    <div className="bg-paper min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 border-b border-ink/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <h6 className="text-xs font-bold tracking-widest uppercase text-cricket-green mb-6">Tournament Objective</h6>
             <h1 className="text-4xl md:text-7xl font-serif font-medium mb-8 leading-tight text-ink uppercase">
               Jai Baba Mohan Ram <br className="hidden md:block"/>
               <span className="text-cricket-green">Green</span> Test Trophy
             </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 lg:gap-24">
          <div className="md:col-span-5 relative">
             <div className="sticky top-32">
               <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-ink relative">
                 <div className="absolute inset-0 bg-pink-ball/10 mix-blend-multiply z-10"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80" 
                   alt="Cricket Ground" 
                   className="w-full h-full object-cover opacity-80"
                 />
               </div>
               <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-paper p-4 md:p-8 rounded-full border border-pink-ball/20 shadow-2xl flex items-center justify-center aspect-square flex-col w-32 h-32 md:w-48 md:h-48">
                 <span className="font-serif text-3xl md:text-5xl italic text-pink-ball">3</span>
                 <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-ink mt-1 md:mt-2">Days of Play</span>
               </div>
             </div>
          </div>
          
          <div className="md:col-span-7 space-y-24">
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-serif mb-6 text-ink">The Vision</h2>
              <div className="prose prose-lg text-ink/70 font-light leading-relaxed">
                <p>
                  The Jai Baba Mohan Ram Green Test Trophy is a premier long-format cricket tournament created to revive the true spirit of Test cricket through discipline, patience, strategy, temperament, and competitive multi-day matches.
                </p>
                <p>
                  Designed around the traditional values of cricket, the tournament brings together competitive teams in a professional day-night pink ball format that challenges skill, consistency, and character over multiple days.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-3xl font-serif text-ink mb-6">Values We Promote</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {["Discipline", "Patience", "Character", "Match Awareness", "Temperament", "Strategy"].map(value => (
                  <div key={value} className="bg-surface p-4 rounded-xl border border-ink/5 text-center font-serif text-lg text-cricket-green uppercase tracking-wide">
                    {value}
                  </div>
                ))}
              </div>
              <div className="prose prose-lg text-ink/70 font-light leading-relaxed border-l-2 border-cricket-green pl-6 py-2">
                <p>
                  The format encourages players to value time, partnerships, planning, and mental strength — qualities that define the traditional game.
                </p>
              </div>
            </motion.section>

            <motion.section
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="bg-cricket-green text-paper p-12 rounded-[2rem]"
            >
              <h3 className="text-3xl font-serif mb-6 text-white text-center">Green Initiative</h3>
              <p className="text-lg text-paper/80 font-light leading-relaxed text-center mb-0">
                The Green Test Trophy is more than a cricket tournament. It also supports environmental awareness through green initiatives and tree plantation activities connected with the event. <br/><br/>
                <span className="font-bold text-white uppercase tracking-widest">Grow the Game. Grow the Planet.</span>
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
