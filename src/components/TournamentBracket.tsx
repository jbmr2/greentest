import { motion } from "motion/react";
import { Trophy, Leaf, Calendar, Award, MapPin, Users, LayoutGrid } from "lucide-react";

export function TournamentBracket() {
  const pools = [
    { id: "A", teams: ["A1", "A2", "A3"] },
    { id: "B", teams: ["B1", "B2", "B3"] },
    { id: "C", teams: ["C1", "C2", "C3"] },
    { id: "D", teams: ["D1", "D2", "D3"] },
  ];

  return (
    <div className="bg-[#050c09] min-h-screen pt-24 pb-20 relative overflow-hidden font-sans">
      {/* Subtle Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-pink-ball/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-cricket-green/5 blur-[80px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif font-black text-white uppercase tracking-tighter mb-4"
          >
            Tournament <span className="text-cricket-green italic">Bracket</span>
          </motion.h1>
          <div className="flex justify-center gap-6 text-[10px] uppercase tracking-widest font-bold text-white/30">
            <span className="flex items-center gap-1.5"><Users className="w-3 h-3" /> 12 Teams</span>
            <span className="flex items-center gap-1.5"><LayoutGrid className="w-3 h-3" /> 4 Pools</span>
          </div>
        </div>

        {/* BRACKET STRUCTURE */}
        <div className="flex flex-col gap-12">
          
          {/* THE PEAK: GRAND FINAL */}
          <section className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-2xl"
            >
              <div className="relative bg-surface border-2 border-pink-ball/30 rounded-3xl p-6 md:p-10 shadow-2xl text-center overflow-hidden group">
                <div className="absolute top-0 inset-x-0 h-1 bg-pink-ball/50" />
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-pink-ball rounded-full flex items-center justify-center mb-6 shadow-lg border-2 border-paper">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-serif font-black text-white uppercase mb-2 tracking-tight">Grand Final</h2>
                  <div className="text-[10px] font-black text-pink-ball uppercase tracking-widest mb-8 border border-pink-ball/20 px-3 py-1 rounded-full">3-Day Day-Night</div>
                  
                  <div className="flex items-center justify-center gap-4 md:gap-12 w-full">
                    <div className="flex-1 text-right">
                      <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">SF 1 Winner</div>
                      <div className="text-base md:text-xl font-serif text-white uppercase tracking-tight">TBD</div>
                    </div>
                    <div className="text-pink-ball font-serif italic text-2xl md:text-3xl opacity-30">VS</div>
                    <div className="flex-1 text-left">
                      <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">SF 2 Winner</div>
                      <div className="text-base md:text-xl font-serif text-white uppercase tracking-tight">TBD</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex gap-6 text-[9px] font-bold text-white/30 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Noida</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> Finals</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* THE BRANCHES: SEMI FINALS */}
          <section className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {[1, 2].map((sf) => (
              <motion.div
                key={sf}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface border border-white/5 rounded-2xl p-6 shadow-xl relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-[10px] font-black text-cricket-green-light uppercase tracking-widest mb-6">Semi Final {sf}</div>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="text-lg md:text-xl font-serif text-white uppercase tracking-tight">Pool {sf === 1 ? 'A/B' : 'C/D'} Winner</div>
                  <div className="text-pink-ball/30 font-serif italic text-sm">VS</div>
                  <div className="text-lg md:text-xl font-serif text-white uppercase tracking-tight">Pool {sf === 1 ? 'B/A' : 'D/C'} Winner</div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex justify-center">
                  <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">3-Day Match</span>
                </div>
              </motion.div>
            ))}
          </section>

          {/* THE ROOTS: POOLS */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {pools.map((pool, idx) => (
              <motion.div
                key={pool.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-surface/50 border-b-2 border-cricket-green rounded-2xl p-5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xl font-serif font-black text-cricket-green-light">POOL {pool.id}</div>
                  <Leaf className="w-3 h-3 text-white/10" />
                </div>
                <div className="space-y-3">
                  {pool.teams.map(team => (
                    <div key={team} className="flex items-center gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-cricket-green-light/40" />
                      <span className="text-sm md:text-base font-serif text-white/70 uppercase tracking-tight">{team}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">League Stage</div>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Footer Quote */}
          <div className="text-center mt-8">
            <p className="text-[10px] md:text-xs font-bold text-white/20 uppercase tracking-[0.4em]">Growth Takes Time • Discipline Wins Games</p>
          </div>
        </div>
      </div>
    </div>
  );
}
