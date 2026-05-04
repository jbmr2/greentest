import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { useTournamentData } from "../lib/useTournamentData";

export function PointsTable() {
  const { teams } = useTournamentData();
  
  // Sort teams by points then NRR for the table display
  const sortedTeams = [...teams].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return parseFloat(b.nrr) - parseFloat(a.nrr);
  });

  return (
    <div className="bg-paper min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-ink mb-4 md:mb-6">Standings</h1>
          <p className="text-lg md:text-xl text-ink/60 font-light border-b border-ink/10 pb-6 md:pb-8">
             Current positions across the JBMR Green Test Trophy.
          </p>
        </div>

        {sortedTeams.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface rounded-[2rem] border border-ink/5 overflow-x-auto shadow-sm"
          >
            <table className="w-full text-left border-collapse min-w-[600px] md:min-w-[800px]">
              <thead>
                <tr className="bg-ink text-paper text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">
                  <th className="p-3 sm:p-4 md:p-6 rounded-tl-[1.5rem] md:rounded-tl-[2rem] opacity-50">Pos</th>
                  <th className="p-3 sm:p-4 md:p-6 opacity-50">Team</th>
                  <th className="p-3 sm:p-4 md:p-6 text-center opacity-50">Pld</th>
                  <th className="p-3 sm:p-4 md:p-6 text-center opacity-50">W</th>
                  <th className="p-3 sm:p-4 md:p-6 text-center opacity-50">L</th>
                  <th className="p-3 sm:p-4 md:p-6 text-center opacity-50">D</th>
                  <th className="p-3 sm:p-4 md:p-6 text-center opacity-50">NRR</th>
                  <th className="p-3 sm:p-4 md:p-6 text-center text-cricket-green-light rounded-tr-[1.5rem] md:rounded-tr-[2rem]">Pts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/5">
                {sortedTeams.map((team, index) => (
                  <tr key={team.id} className="hover:bg-paper/50 transition-colors group">
                    <td className="p-3 sm:p-4 md:p-6 font-serif text-lg md:text-xl text-ink/60 pl-4 md:pl-8">{index + 1}</td>
                    <td className="p-3 sm:p-4 md:p-6">
                      <div className="flex items-center gap-3 md:gap-4">
                        <img 
                          src={team.logo} 
                          alt={`${team.name} Logo`} 
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover shadow-sm transition-transform group-hover:scale-110" 
                        />
                        <span className="font-serif text-base sm:text-lg md:text-xl text-ink">{team.name}</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 md:p-6 text-center text-sm md:text-base text-ink/80">{team.played}</td>
                    <td className="p-3 sm:p-4 md:p-6 text-center text-sm md:text-base text-ink/80">{team.won}</td>
                    <td className="p-3 sm:p-4 md:p-6 text-center text-sm md:text-base text-ink/80">{team.lost}</td>
                    <td className="p-3 sm:p-4 md:p-6 text-center text-sm md:text-base text-ink/80">{team.drawn}</td>
                    <td className="p-3 sm:p-4 md:p-6 text-center text-sm md:text-base text-ink/80">{team.nrr}</td>
                    <td className="p-3 sm:p-4 md:p-6 text-center font-bold text-xl md:text-2xl text-cricket-green font-serif">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center p-6 bg-surface rounded-[2rem] border border-ink/5 shadow-sm mb-6">
              <span className="text-4xl md:text-5xl">🏆</span>
            </div>
            <h2 className="text-3xl font-serif text-ink mb-2">Coming Soon</h2>
            <p className="text-ink/60 font-light text-lg">The points table will be updated as soon as the tournament commences. Stay tuned!</p>
          </div>
        )}
      </div>
    </div>
  );
}
