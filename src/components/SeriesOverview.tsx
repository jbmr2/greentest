import { motion } from "motion/react";
import { Layers, Calendar, MapPin, ArrowRight, Trophy } from "lucide-react";
import { useTournamentData } from "../lib/useTournamentData";

export function TournamentFormat() {
  const { teams, schedule } = useTournamentData();

  // Dynamically group matches into pools based on team pairs
  const poolGroups = schedule.reduce((acc, match) => {
    if (match.id === 'final') return acc;
    
    const key = match.pool || 'A'; // Default to A if not specified
    
    if (!acc[key]) {
      acc[key] = {
        id: key,
        matches: []
      };
    }
    acc[key].matches.push(match);
    return acc;
  }, {} as Record<string, { id: string, matches: any[] }>);

  const poolsList = Object.values(poolGroups);
  const finalMatch = schedule.find(m => m.id === 'final');

  return (
    <div className="bg-paper min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-cricket-green/10 rounded-2xl text-cricket-green">
              <Layers className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-ink uppercase">Tournament Format</h1>
          </div>
          <p className="text-lg md:text-xl text-ink/60 font-light border-b border-ink/10 pb-6 md:pb-8">
             12 Teams • 4 Pools • League Matches & Knockouts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-surface p-8 rounded-[2.5rem] border border-ink/5">
             <h3 className="text-2xl font-serif text-ink mb-6 uppercase tracking-tight">Match Structure</h3>
             <ul className="space-y-4">
                {[
                  { label: "League Stage", value: "2-Day Matches" },
                  { label: "Semi Finals", value: "2 Matches — 3 Days Each" },
                  { label: "Grand Final", value: "3-Day Pink Ball Match" },
                ].map((item) => (
                  <li key={item.label} className="flex justify-between items-center border-b border-ink/5 pb-2">
                    <span className="text-ink/60 text-sm font-medium">{item.label}</span>
                    <span className="text-cricket-green font-serif text-lg">{item.value}</span>
                  </li>
                ))}
             </ul>
          </div>

          <div className="bg-surface p-8 rounded-[2.5rem] border border-ink/5">
             <h3 className="text-2xl font-serif text-ink mb-6 uppercase tracking-tight">Match Timings</h3>
             <ul className="space-y-4">
                {[
                  { label: "Monday to Friday", value: "5:00 PM Onwards" },
                  { label: "Saturday & Sunday", value: "2:00 PM Onwards" },
                  { label: "Format", value: "Day-Night Pink Ball" },
                ].map((item) => (
                  <li key={item.label} className="flex justify-between items-center border-b border-ink/5 pb-2">
                    <span className="text-ink/60 text-sm font-medium">{item.label}</span>
                    <span className="text-pink-ball font-serif text-lg">{item.value}</span>
                  </li>
                ))}
             </ul>
          </div>
        </div>

        {poolsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poolsList.map((pool: any, i: number) => {
              return (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={pool.id}
                  className="bg-surface rounded-[2.5rem] border border-ink/5 overflow-hidden flex flex-col group hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  <div className="p-8 border-b border-ink/5 bg-ink/5 flex justify-between items-center">
                     <span className="text-xs font-bold text-cricket-green uppercase tracking-[0.2em]">Pool {pool.id} Stage</span>
                     <div className="bg-pink-ball/10 px-3 py-1 rounded-full">
                        <span className="text-[10px] font-bold text-pink-ball uppercase tracking-widest">Ongoing</span>
                     </div>
                  </div>
                  
                  <div className="p-8 flex-grow">
                     <div className="space-y-4">
                        <div className="text-[10px] font-bold text-ink/30 uppercase tracking-[0.2em] mb-2">Match Schedule</div>
                        {pool.matches.map((m: any, idx: number) => (
                          <div key={idx} className="flex items-center gap-4 text-xs">
                             <div className="w-8 h-8 rounded-full bg-paper border border-ink/5 flex items-center justify-center shrink-0 font-serif font-bold text-ink/40">
                                {idx + 1}
                             </div>
                             <div className="flex-1">
                                <div className="flex items-center gap-2 text-ink/80">
                                   <Calendar className="w-3 h-3 text-pink-ball" />
                                   {m.team1} vs {m.team2}
                                </div>
                                <div className="flex items-center gap-2 text-ink/40 font-medium">
                                   <MapPin className="w-3 h-3" />
                                   {m.venue}
                                </div>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>

                  <div className="p-6 bg-paper/30 border-t border-ink/5 mt-auto">
                     <button className="w-full py-3 bg-surface border border-ink/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-ink/60 hover:text-cricket-green hover:border-cricket-green transition-all flex items-center justify-center gap-2">
                        Pool Details <ArrowRight className="w-3 h-3" />
                     </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center p-8 bg-surface rounded-[3rem] border border-ink/5 shadow-sm mb-6">
               <Layers className="w-12 h-12 text-ink/20" />
            </div>
            <h2 className="text-3xl font-serif text-ink mb-2">Coming Soon</h2>
            <p className="text-ink/60 font-light text-lg">We are organizing the league matches. Details will be available shortly.</p>
          </div>
        )}

        {/* Grand Final Feature */}
        {finalMatch && poolsList.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 relative rounded-[3rem] overflow-hidden bg-ink p-1 md:p-1.5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cricket-green via-ink to-pink-ball opacity-30" />
            <div className="relative bg-surface rounded-[2.8rem] p-8 md:p-16 flex flex-col items-center text-center overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-cricket-green/5 to-transparent pointer-events-none" />
               
               <Trophy className="w-20 h-20 text-cricket-green mb-8 relative z-10" />
               <h6 className="text-xs font-bold tracking-[0.4em] uppercase text-cricket-green-light mb-4 relative z-10">The Ultimate Showdown</h6>
               <h2 className="text-5xl md:text-7xl font-serif font-black text-ink mb-8 relative z-10">GRAND FINAL</h2>
               
               <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-12 relative z-10">
                  <div className="flex flex-col items-center">
                     <div className="w-24 h-24 rounded-full bg-paper border-4 border-ink/5 mb-4 shadow-2xl flex items-center justify-center text-ink/20 font-serif text-4xl">T1</div>
                     <span className="font-serif text-2xl text-ink">Top Qualifier</span>
                  </div>
                  <div className="text-4xl font-serif italic text-pink-ball">vs</div>
                  <div className="flex flex-col items-center">
                     <div className="w-24 h-24 rounded-full bg-paper border-4 border-ink/5 mb-4 shadow-2xl flex items-center justify-center text-ink/20 font-serif text-4xl">T2</div>
                     <span className="font-serif text-2xl text-ink">Second Qualifier</span>
                  </div>
               </div>

               <div className="bg-paper/50 backdrop-blur-md border border-ink/5 px-8 py-4 rounded-full flex flex-wrap justify-center gap-8 text-sm relative z-10">
                  <div className="flex items-center gap-2 text-ink/70">
                     <Calendar className="w-4 h-4 text-pink-ball" />
                     {new Date(finalMatch.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})}
                  </div>
                  <div className="flex items-center gap-2 text-ink/70">
                     <MapPin className="w-4 h-4 text-cricket-green" />
                     {finalMatch.venue}
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
