import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { Leaf, TreePine, Calendar, Users, Trophy, Moon } from "lucide-react";
import { useTournamentData } from "../lib/useTournamentData";

export function Schedule() {
  const { teams, schedule } = useTournamentData();
  const [filterType, setFilterType] = useState<string>('all');

  const filteredMatches = filterType === 'all' 
    ? schedule 
    : schedule.filter(m => m.team1 === filterType || m.team2 === filterType);

  const matchesByMonth = filteredMatches.reduce((acc, match) => {
    const month = new Date(match.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    if (!acc[month]) acc[month] = [];
    acc[month].push(match);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="bg-paper min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background Leaves */}
      <Leaf className="absolute top-40 -left-10 w-64 h-64 text-cricket-green/5 -rotate-45 pointer-events-none" />
      <Leaf className="absolute bottom-40 -right-10 w-64 h-64 text-cricket-green/5 rotate-45 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="relative inline-flex items-center justify-center p-4 mb-6">
               <TreePine className="w-12 h-12 text-cricket-green relative z-10" />
               <div className="absolute inset-0 bg-cricket-green/10 blur-xl rounded-full" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-ink mb-4 md:mb-8 text-center">
               The Green Schedule
            </h1>
          </div>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-ink/10 pb-4 md:pb-6">
            <p className="text-ink/60 font-light text-base md:text-lg text-center sm:text-left">Follow the roots of the tournament. Every match plants a future.</p>
            <select 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-ink/10 rounded-full bg-transparent focus:ring-cricket-green focus:border-cricket-green text-sm px-6 py-2.5 w-full sm:w-auto font-medium text-ink outline-none"
            >
              <option value="all">All Teams</option>
              {teams.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          {/* Tournament Format Briefing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-surface p-6 rounded-3xl border border-cricket-green/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-12 h-12 text-cricket-green" />
              </div>
              <h3 className="text-cricket-green font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" /> 4 Elite Teams
              </h3>
              <p className="text-ink/70 text-sm font-light leading-relaxed">
                Four handpicked teams battle in a round-robin format to secure their spot in the ultimate showdown.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-3xl border border-pink-ball/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Moon className="w-12 h-12 text-pink-ball" />
              </div>
              <h3 className="text-pink-ball font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                <Moon className="w-4 h-4" /> 3-Day Pink Ball
              </h3>
              <p className="text-ink/70 text-sm font-light leading-relaxed">
                2 innings per team. Win grants <span className="text-pink-ball font-medium">6 points</span>, while Draws earn <span className="text-pink-ball font-medium">2 points</span> plus bonus for 1st Innings lead.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-3xl border border-cricket-green/20 shadow-sm relative overflow-hidden group ring-1 ring-cricket-green/5">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy className="w-12 h-12 text-cricket-green" />
              </div>
              <h3 className="text-cricket-green font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                <Trophy className="w-4 h-4" /> The Grand Final
              </h3>
              <p className="text-ink/70 text-sm font-light leading-relaxed">
                After the series matches, the top two teams on the points table advance to the 3-day Grand Final.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Matches - Tree/Root Layout */}
        <div className="relative pt-10 pb-20">
          {/* Main Tree Trunk / Root Vine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 md:w-3 bg-gradient-to-b from-cricket-green/30 via-cricket-green to-cricket-green-dark rounded-full -translate-x-1/2 z-0 hidden md:block" />
          
          {/* Bottom Root Connection */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-cricket-green z-0 hidden md:flex items-center justify-center bg-paper p-4 rounded-full border border-cricket-green/20">
             <TreePine className="w-8 h-8" />
          </div>

          <div className="space-y-20 md:space-y-32 relative z-10 hidden md:block">
            <AnimatePresence>
              {Object.entries(matchesByMonth).map(([month, monthMatches]: [string, any[]], monthIdx) => (
                <div key={month} className="relative">
                  {/* Month Header */}
                  <div className="sticky top-24 z-30 mb-12 flex justify-center">
                    <div className="bg-paper/80 backdrop-blur-md border border-cricket-green/20 px-8 py-3 rounded-full shadow-xl">
                      <h2 className="text-2xl font-serif font-bold text-cricket-green uppercase tracking-widest">{month}</h2>
                    </div>
                  </div>

                  <div className="space-y-12">
                    {monthMatches.map((match: any, i: number) => {
                      const team1 = teams.find(t => t.id === match.team1);
                      const team2 = teams.find(t => t.id === match.team2);
                      if(!team1 || !team2) return null;

                      return (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ delay: i * 0.05 }}
                          key={match.id} 
                          className="flex flex-row items-center justify-center w-full relative"
                        >
                           {/* Branch Left Connector */}
                           <div className="absolute left-1/4 right-1/2 h-[2px] bg-cricket-green/30 z-0 top-1/2 -translate-y-1/2" />
                           {/* Branch Right Connector */}
                           <div className="absolute right-1/4 left-1/2 h-[2px] bg-cricket-green/30 z-0 top-1/2 -translate-y-1/2" />
                           
                           <div className="w-full flex justify-between gap-8 h-full items-stretch">
                              <div className="flex-1 bg-surface rounded-2xl md:rounded-3xl border border-ink/5 overflow-hidden flex flex-row shadow-sm hover:shadow-md transition-all relative z-10">
                                 <div className="bg-ink text-paper p-4 md:p-8 flex flex-col justify-center items-center shrink-0 w-32 border-r border-ink/10 text-center">
                                    <span className="text-[10px] md:text-xs font-bold opacity-50 uppercase tracking-widest mb-1 md:mb-2">Dates</span>
                                    <span className="text-xl font-serif text-center mb-1">
                                      {new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric'})}
                                    </span>
                                 </div>
                                 <div className="p-4 flex-1 flex flex-row justify-between items-center gap-4">
                                   <span className="text-lg font-serif text-ink">{team1.name}</span>
                                   <div className={cn("w-3 h-8 rounded-full shrink-0", team1.color)} />
                                 </div>
                              </div>

                              {/* Trunk Node */}
                              <div className="w-24 shrink-0 flex items-center justify-center relative z-20">
                                 <div className="w-16 h-16 bg-cricket-green text-white font-serif italic text-2xl flex items-center justify-center rounded-t-[2rem] rounded-b-[2rem] border-4 border-paper shadow-lg relative z-20">
                                    <span className="relative z-10">vs</span>
                                    <Leaf className="absolute -left-2 top-0 w-4 h-4 text-cricket-green-light transform -rotate-45" />
                                    <Leaf className="absolute -right-2 bottom-0 w-4 h-4 text-cricket-green-dark transform rotate-135" />
                                 </div>
                              </div>

                              <div className="flex-1 bg-surface rounded-2xl md:rounded-3xl border border-ink/5 overflow-hidden flex flex-row shadow-sm hover:shadow-md transition-all relative z-10">
                                 <div className="p-4 flex-1 flex flex-row items-center gap-4">
                                   <div className={cn("w-3 h-8 rounded-full shrink-0", team2.color)} />
                                   <span className="text-lg font-serif text-ink text-left">{team2.name}</span>
                                 </div>
                                 <div className="bg-paper/50 p-4 w-32 flex flex-col justify-center items-center border-l border-ink/5 shrink-0">
                                    <span className="text-center font-medium text-ink text-xs">{match.venue}</span>
                                    <span className="mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full border border-ink/10 text-ink/80 uppercase tracking-widest">
                                      {match.status}
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </AnimatePresence>
          </div>

          <div className="space-y-12 relative z-10 block md:hidden">
            <AnimatePresence>
              {Object.entries(matchesByMonth).map(([month, monthMatches]: [string, any[]]) => (
                <div key={month} className="space-y-4">
                  <div className="sticky top-20 z-30 flex justify-start">
                    <div className="bg-cricket-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                      {month}
                    </div>
                  </div>
                  {monthMatches.map((match: any, i: number) => {
                    const team1 = teams.find(t => t.id === match.team1);
                    const team2 = teams.find(t => t.id === match.team2);
                    if(!team1 || !team2) return null;

                    return (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ delay: i * 0.05 }}
                        key={match.id} 
                        className="bg-surface rounded-2xl border border-ink/5 overflow-hidden flex flex-col shadow-sm relative pl-6"
                      >
                        {/* Mobile Vine */}
                        <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-cricket-green/30 to-cricket-green rounded-full z-0" />
                        <Leaf className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-cricket-green z-10" />

                        <div className="bg-ink text-paper p-4 flex flex-row justify-between items-center w-full">
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest mb-1">Match Dates</span>
                            <span className="text-lg font-serif">
                              {new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric'})} - {new Date(new Date(match.date).getTime() + 2*24*60*60*1000).toLocaleDateString('en-US', { day: 'numeric', year: 'numeric'})}
                            </span>
                          </div>
                          {match.isDayNight && (
                            <span className="border border-pink-ball/50 text-pink-ball text-[9px] bg-pink-ball/10 font-bold px-2 py-1 rounded-full uppercase tracking-widest">Day / Night</span>
                          )}
                        </div>
                        
                        <div className="p-4 flex-grow flex flex-col gap-4 relative z-10">
                          <div className="flex items-center gap-4 justify-between w-full">
                             <div className="flex items-center gap-3">
                                <div className={cn("w-2 h-8 rounded-full shrink-0", team1.color)} />
                                <span className="text-base font-serif text-ink">{team1.name}</span>
                             </div>
                             <div className="font-serif italic text-ink/40 text-lg">vs</div>
                             <div className="flex items-center gap-3">
                                <span className="text-base font-serif text-ink text-right">{team2.name}</span>
                                <div className={cn("w-2 h-8 rounded-full shrink-0", team2.color)} />
                             </div>
                          </div>
                        </div>

                        <div className="bg-paper/50 p-3 flex flex-row justify-between items-center border-t border-ink/5 w-full">
                          <span className="text-xs text-ink/70 font-bold uppercase tracking-widest">{match.venue}</span>
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full border border-ink/10 text-ink/80 uppercase tracking-widest">
                            {match.status}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredMatches.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center p-6 bg-surface rounded-[2rem] border border-cricket-green/10 shadow-sm mb-6">
                <Calendar className="w-12 h-12 text-cricket-green/30" />
              </div>
              <h2 className="text-3xl font-serif text-ink mb-2">Coming Soon</h2>
              <p className="text-ink/60 font-light text-lg">We are currently updating the tournament schedule. Please check back later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
