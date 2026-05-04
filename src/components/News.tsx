import { Newspaper, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function News() {
  const news = [];

  return (
    <div className="bg-paper min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
          <Newspaper className="w-10 h-10 text-cricket-green mb-6 md:mb-8" />
          <h6 className="text-[10px] font-bold tracking-widest uppercase text-ink/70 mb-4 md:mb-6">Press Room</h6>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-ink mb-4 md:mb-6">Latest Updates</h1>
          <p className="text-base md:text-lg text-ink/60 font-light border-b border-ink/10 pb-6 md:pb-8 px-4 md:px-12">
            Announcements, match reports, and environmental milestones.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {news.length > 0 ? news.map((item, i) => (
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               key={item.id} 
               className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-surface border border-ink/5 hover:border-cricket-green/30 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="sm:w-32 shrink-0 pt-1">
                 <span className="text-xs font-bold text-cricket-green tracking-widest uppercase">{item.date}</span>
              </div>
              <div className="flex-1">
                <span className="inline-block text-[10px] font-bold text-pink-ball border border-pink-ball/20 bg-pink-ball/5 px-2 py-1 rounded-full uppercase tracking-widest mb-4">{item.category}</span>
                <h2 className="text-2xl font-serif text-ink leading-tight mb-4 group-hover:text-cricket-green transition-colors">{item.title}</h2>
                <p className="text-ink/80 font-light leading-relaxed mb-6">{item.summary}</p>
                <span className="text-xs font-bold text-ink uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Read Article <ArrowRight className="w-3 h-3 text-cricket-green" />
                </span>
              </div>
            </motion.div>
          )) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center p-6 bg-surface rounded-[2rem] border border-ink/5 shadow-sm mb-6">
                <Newspaper className="w-12 h-12 text-ink/20" />
              </div>
              <h2 className="text-3xl font-serif text-ink mb-2">Coming Soon</h2>
              <p className="text-ink/60 font-light text-lg">We are currently updating our press room with fresh content. Please check back later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
