import { motion } from "motion/react";
import { TrendingUp, Target, Zap, Award } from "lucide-react";
import { useTournamentData } from "../lib/useTournamentData";

export function PlayerStats() {
  const { stats } = useTournamentData();
  const { batsmen, bowlers } = stats;

  return (
    <div className="bg-paper min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-pink-ball/10 rounded-2xl text-pink-ball">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-ink">Leaderboards</h1>
          </div>
          <p className="text-lg md:text-xl text-ink/60 font-light border-b border-ink/10 pb-6 md:pb-8">
             Performances that are defining the JBMR Green Test Trophy.
          </p>
        </div>

        {batsmen.length > 0 || bowlers.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Batting Stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-serif font-bold text-ink flex items-center gap-3">
                  <Zap className="w-6 h-6 text-pink-ball" /> Top Run Scorers
                </h2>
                <div className="bg-surface rounded-[2rem] border border-ink/5 overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-ink text-paper text-[10px] font-bold tracking-widest uppercase">
                        <th className="p-6 opacity-50">Player</th>
                        <th className="p-6 text-center opacity-50">Mat</th>
                        <th className="p-6 text-center opacity-50 text-pink-ball">Runs</th>
                        <th className="p-6 text-center opacity-50">Avg</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink/5">
                      {batsmen.map((p: any, i: number) => (
                        <tr key={i} className="hover:bg-paper/50 transition-colors group">
                          <td className="p-6">
                            <div>
                              <div className="font-serif text-lg text-ink group-hover:text-pink-ball transition-colors">{p.name}</div>
                              <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">{p.team}</div>
                            </div>
                          </td>
                          <td className="p-6 text-center text-ink/70 font-medium">{p.matches}</td>
                          <td className="p-6 text-center text-2xl font-serif font-bold text-ink">{p.runs}</td>
                          <td className="p-6 text-center text-ink/70 font-medium">{p.avg.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Bowling Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-serif font-bold text-ink flex items-center gap-3">
                  <Target className="w-6 h-6 text-cricket-green" /> Top Wicket Takers
                </h2>
                <div className="bg-surface rounded-[2rem] border border-ink/5 overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-ink text-paper text-[10px] font-bold tracking-widest uppercase">
                        <th className="p-6 opacity-50">Player</th>
                        <th className="p-6 text-center opacity-50">Mat</th>
                        <th className="p-6 text-center opacity-50 text-cricket-green-light">Wkts</th>
                        <th className="p-6 text-center opacity-50">Eco</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink/5">
                      {bowlers.map((p: any, i: number) => (
                        <tr key={i} className="hover:bg-paper/50 transition-colors group">
                          <td className="p-6">
                            <div>
                              <div className="font-serif text-lg text-ink group-hover:text-cricket-green transition-colors">{p.name}</div>
                              <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">{p.team}</div>
                            </div>
                          </td>
                          <td className="p-6 text-center text-ink/70 font-medium">{p.matches}</td>
                          <td className="p-6 text-center text-2xl font-serif font-bold text-ink">{p.wickets}</td>
                          <td className="p-6 text-center text-ink/70 font-medium">{p.eco.toFixed(1)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            {/* Player of the Month Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-8 md:p-12 bg-surface rounded-[3rem] border border-ink/5 shadow-inner flex flex-col md:flex-row items-center gap-12"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden bg-ink shrink-0 border-4 border-pink-ball/20 shadow-2xl relative">
                 <div className="absolute inset-0 bg-pink-ball/10 mix-blend-multiply" />
                 <img src="https://ui-avatars.com/api/?name=Aarav+Sharma&background=0a1711&color=fff&size=200" alt="Aarav Sharma" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cricket-green/30 bg-cricket-green/10 text-cricket-green font-bold text-[10px] uppercase tracking-widest mb-6">
                  <Award className="w-3 h-3" /> Player of the Month • June
                </div>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-4">Aarav Sharma</h3>
                <p className="text-lg text-ink/60 font-light leading-relaxed mb-6">
                  With a record-breaking double century in the opening series against Oak Rangers, Aarav has set the tone for the Greenwood Strikers' campaign.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                   <div className="px-6 py-3 bg-paper rounded-2xl border border-ink/5">
                      <div className="text-2xl font-serif font-bold text-pink-ball">242</div>
                      <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Highest Score</div>
                   </div>
                   <div className="px-6 py-3 bg-paper rounded-2xl border border-ink/5">
                      <div className="text-2xl font-serif font-bold text-pink-ball">68.4</div>
                      <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Average</div>
                   </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center p-6 bg-surface rounded-[2rem] border border-ink/5 shadow-sm mb-6">
              <TrendingUp className="w-12 h-12 text-ink/20" />
            </div>
            <h2 className="text-3xl font-serif text-ink mb-2">Coming Soon</h2>
            <p className="text-ink/60 font-light text-lg">Player statistics and leaderboards will be available once the tournament begins.</p>
          </div>
        )}
      </div>
    </div>
  );
}
