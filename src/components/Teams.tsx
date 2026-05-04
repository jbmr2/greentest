import { User, Anchor, Users } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { useTournamentData } from "../lib/useTournamentData";

export function Teams() {
  const { teams } = useTournamentData();

  return (
    <div className="bg-paper min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-ink mb-4 md:mb-6">Teams</h1>
          <p className="text-lg md:text-xl text-ink/60 font-light border-b border-ink/10 pb-6 md:pb-8">
             The finest talent gathered to battle for the JBMR Green Test Trophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {teams.length > 0 ? teams.map((team, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={team.id} 
              className="bg-surface rounded-2xl md:rounded-[2rem] border border-ink/5 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              {/* Header */}
              <div className="p-6 md:p-8 flex items-center gap-4 md:gap-6 relative z-10 border-b border-ink/5">
                <img src={team.logo} alt={`${team.name} Logo`} className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-inner shrink-0 object-cover" />
                <div>
                  <h2 className="text-xl md:text-2xl font-serif font-medium text-ink leading-tight">{team.name}</h2>
                  <div className="flex items-center gap-1.5 mt-1 md:mt-2 text-ink/70">
                    <Anchor className="w-3.5 h-3.5" />
                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold">Capt: {team.captain}</span>
                  </div>
                </div>
              </div>

              {/* Roster Area */}
              <div className="p-6 md:p-8 flex-grow flex flex-col relative z-10">
                <h3 className="text-[9px] md:text-[10px] font-bold text-ink/60 uppercase tracking-widest mb-4 md:mb-6 flex items-center gap-2">
                  <User className="w-3 h-3" /> Squad
                </h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  <span className="bg-paper border border-ink/10 text-ink/70 text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full">Player One</span>
                  <span className="bg-paper border border-ink/10 text-ink/70 text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full">Player Two</span>
                  <span className="bg-paper border border-ink/10 text-ink/70 text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full">Player Three</span>
                  <span className="bg-paper border border-ink/10 text-ink/70 text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full">Player Four</span>
                  <span className="bg-paper border border-ink/10 text-ink/70 text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full">Player Five</span>
                  <span className="bg-paper border border-ink/10 text-ink/70 text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full">
                     +10 More
                  </span>
                </div>
              </div>
            </motion.div>
          )) : (
            <div className="col-span-full text-center py-20">
              <div className="inline-flex items-center justify-center p-6 bg-surface rounded-[2rem] border border-ink/5 shadow-sm mb-6">
                <Users className="w-12 h-12 text-ink/20" />
              </div>
              <h2 className="text-3xl font-serif text-ink mb-2">Coming Soon</h2>
              <p className="text-ink/60 font-light text-lg">We are currently finalising the team rosters. Please check back later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
