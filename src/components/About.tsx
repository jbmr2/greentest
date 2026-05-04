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
             <h6 className="text-xs font-bold tracking-widest uppercase text-cricket-green mb-6">Our Story</h6>
             <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight text-ink">
               The return of the <br className="hidden md:block"/>
               <i className="text-cricket-green">true test.</i>
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
              <h2 className="text-3xl font-serif mb-6 text-ink">What is JBMR Green Test Trophy?</h2>
              <div className="prose prose-lg text-ink/70 font-light leading-relaxed">
                <p>
                  The JBMR Green Test Trophy is an elite pink-ball Test cricket tournament designed to bring back the traditional glory of the longer format. Spanning multiple day-night fixtures, it gives young and established cricketers the platform to test their technique, temperament, and stamina across three grueling days of competitive cricket.
                </p>
                <p>
                  However, its purpose goes beyond the boundary—it's intrinsically tied to environmental conservation.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-3xl font-serif text-ink mb-6">Why Test Cricket?</h3>
              <div className="prose prose-lg text-ink/70 font-light leading-relaxed border-l-2 border-cricket-green pl-6 py-2">
                <p>
                  In an era dominated by fast-paced T20s, the art of building an innings and executing long bowling spells is fading. We believe Test cricket is the ultimate format—the true test of character. It demands patience, resilience, and tactical depth. By reviving local day-night Test matches, we are ensuring the foundations of cricket remain strong.
                </p>
              </div>
            </motion.section>

            <motion.section
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="bg-cricket-green text-paper p-12 rounded-[2rem]"
            >
              <h3 className="text-3xl font-serif mb-6 text-white text-center">Why Tree Plantation?</h3>
              <p className="text-lg text-paper/80 font-light leading-relaxed text-center mb-0">
                Just like a solid Test innings, growing a tree requires time, patience, and nurturing. For every match, century, and 5-wicket haul, we plant saplings across the community. Our goal is not just to build better cricketers, but to leave behind a thriving, greener planet for future generations.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
