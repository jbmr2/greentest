import { useState, useEffect } from "react";
import { TEAMS, SCHEDULE, TOP_BATSMEN, TOP_BOWLERS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { 
  Settings, Users, Calendar, TrendingUp, Plus, Edit2, Trash2, 
  Save, X, LayoutDashboard, ChevronRight, Download, Database, RefreshCw
} from "lucide-react";
import { cn } from "../lib/utils";
import { dbService } from "../lib/db-service";

type Tab = 'dashboard' | 'teams' | 'matches' | 'stats';

export function Admin() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [teams, setTeams] = useState<any[]>([]);
  const [matches, setMatches] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({ batsmen: [], bowlers: [] });
  const [loading, setLoading] = useState(true);
  
  // Edit States
  const [editingTeam, setEditingTeam] = useState<any>(null);
  const [editingMatch, setEditingMatch] = useState<any>(null);
  const [editingStats, setEditingStats] = useState(false);

  useEffect(() => {
    const unsubTeams = dbService.subscribeTeams(setTeams);
    const unsubSchedule = dbService.subscribeSchedule(setMatches);
    const unsubStats = dbService.subscribeStats((data) => {
      if (data) setStats(data);
    });

    setLoading(false);
    return () => {
      unsubTeams();
      unsubSchedule();
      unsubStats();
    };
  }, []);

  const handleSeed = async () => {
    if (confirm("This will seed the database with initial data. Continue?")) {
      await dbService.seedDatabase();
      alert("Database seeded successfully!");
    }
  };

  const exportData = () => {
    const data = { teams, matches, stats };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tournament-data.json';
    a.click();
  };

  return (
    <div className="bg-paper min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-pink-ball/10 rounded-lg text-pink-ball">
                <Settings className="w-5 h-5" />
              </div>
              <h1 className="text-3xl font-serif font-bold text-ink uppercase tracking-tight">Admin Console</h1>
            </div>
            <p className="text-ink/60 font-light">Manage tournament data, schedules, and standings.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={handleSeed}
              className="flex items-center gap-2 px-6 py-3 bg-surface border border-ink/10 rounded-2xl text-xs font-bold uppercase tracking-widest text-ink hover:border-cricket-green transition-all group"
            >
              <Database className="w-4 h-4 group-hover:scale-110 transition-transform text-cricket-green" /> Seed DB
            </button>
            <button 
              onClick={exportData}
              className="flex items-center gap-2 px-6 py-3 bg-surface border border-ink/10 rounded-2xl text-xs font-bold uppercase tracking-widest text-ink hover:border-pink-ball transition-all group"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /> Export Config
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'teams', label: 'Teams', icon: Users },
              { id: 'matches', label: 'Schedule', icon: Calendar },
              { id: 'stats', label: 'Player Stats', icon: TrendingUp },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={cn(
                  "w-full flex items-center justify-between p-4 rounded-2xl transition-all group",
                  activeTab === tab.id 
                    ? "bg-cricket-green text-white shadow-lg" 
                    : "bg-surface text-ink/60 hover:bg-white/5 border border-ink/5"
                )}
              >
                <div className="flex items-center gap-3">
                  <tab.icon className="w-5 h-5" />
                  <span className="font-serif font-bold uppercase tracking-widest text-sm">{tab.label}</span>
                </div>
                <ChevronRight className={cn("w-4 h-4 transition-transform", activeTab === tab.id ? "translate-x-1" : "opacity-0")} />
              </button>
            ))}
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9">
            <AnimatePresence mode="wait">
              {activeTab === 'dashboard' && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="bg-surface p-8 rounded-[2rem] border border-ink/5">
                    <h3 className="text-xs font-bold text-pink-ball uppercase tracking-widest mb-6">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-4xl font-serif font-bold text-ink">{teams.length}</div>
                        <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Active Teams</div>
                      </div>
                      <div>
                        <div className="text-4xl font-serif font-bold text-ink">{matches.length}</div>
                        <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Matches Set</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-cricket-green p-8 rounded-[2rem] text-paper">
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-60">System Status</h3>
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-3 h-3 bg-pink-ball rounded-full animate-pulse" />
                       <span className="font-serif text-2xl font-bold">Live Updates Active</span>
                    </div>
                    <p className="text-sm font-light opacity-80">Tournament configuration is synced with the frontend data layer.</p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'teams' && (
                <motion.div
                  key="teams"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-serif font-bold text-ink">Manage Teams</h2>
                    <button 
                      onClick={() => setEditingTeam({ name: '', short: '', captain: '', color: 'bg-emerald-600', logo: '' })}
                      className="flex items-center gap-2 px-4 py-2 bg-cricket-green text-white rounded-xl text-[10px] font-bold uppercase tracking-widest"
                    >
                      <Plus className="w-4 h-4" /> Add Team
                    </button>
                  </div>

                  {editingTeam && (
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-surface p-6 rounded-2xl border border-pink-ball/30 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <input 
                          placeholder="Team Name" 
                          className="bg-paper border border-ink/10 rounded-xl p-3 text-sm text-ink outline-none" 
                          value={editingTeam.name}
                          onChange={e => setEditingTeam({...editingTeam, name: e.target.value})}
                        />
                        <input 
                          placeholder="Short Name (GWS)" 
                          className="bg-paper border border-ink/10 rounded-xl p-3 text-sm text-ink outline-none" 
                          value={editingTeam.short}
                          onChange={e => setEditingTeam({...editingTeam, short: e.target.value})}
                        />
                        <input 
                          placeholder="Captain Name" 
                          className="bg-paper border border-ink/10 rounded-xl p-3 text-sm text-ink outline-none" 
                          value={editingTeam.captain}
                          onChange={e => setEditingTeam({...editingTeam, captain: e.target.value})}
                        />
                        <input 
                          placeholder="Logo URL" 
                          className="bg-paper border border-ink/10 rounded-xl p-3 text-sm text-ink outline-none" 
                          value={editingTeam.logo}
                          onChange={e => setEditingTeam({...editingTeam, logo: e.target.value})}
                        />
                      </div>
                      <div className="flex justify-end gap-3">
                        <button onClick={() => setEditingTeam(null)} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink/40">Cancel</button>
                        <button 
                          onClick={async () => {
                            if (editingTeam.id) await dbService.updateTeam(editingTeam.id, editingTeam);
                            else await dbService.addTeam(editingTeam);
                            setEditingTeam(null);
                          }}
                          className="px-6 py-2 bg-cricket-green text-white rounded-xl text-[10px] font-bold uppercase tracking-widest"
                        >
                          <Save className="w-3 h-3 inline mr-2" /> Save Team
                        </button>
                      </div>
                    </motion.div>
                  )}

                  <div className="bg-surface rounded-[2rem] border border-ink/5 overflow-hidden">
                    <table className="w-full text-left">
                      <thead className="bg-ink/5 text-[10px] font-bold text-ink/40 uppercase tracking-widest">
                        <tr>
                          <th className="p-6">Team Name</th>
                          <th className="p-6">Captain</th>
                          <th className="p-6 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-ink/5">
                        {teams.map((team) => (
                          <tr key={team.id} className="group hover:bg-white/5 transition-colors">
                            <td className="p-6">
                              <div className="flex items-center gap-3">
                                <img src={team.logo} className="w-8 h-8 rounded-full" alt="" />
                                <span className="font-serif font-bold text-ink">{team.name} ({team.short})</span>
                              </div>
                            </td>
                            <td className="p-6 text-ink/70 text-sm">{team.captain}</td>
                            <td className="p-6 text-right">
                              <div className="flex justify-end gap-2">
                                <button onClick={() => setEditingTeam(team)} className="p-2 hover:text-pink-ball transition-colors"><Edit2 className="w-4 h-4" /></button>
                                <button onClick={() => dbService.deleteTeam(team.id)} className="p-2 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {activeTab === 'matches' && (
                <motion.div
                  key="matches"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-serif font-bold text-ink">Match Schedule</h2>
                    <button 
                      onClick={() => setEditingMatch({ date: new Date().toISOString(), team1: teams[0]?.id, team2: teams[1]?.id, venue: 'Eden Green Stadium', isDayNight: true, status: 'upcoming' })}
                      className="flex items-center gap-2 px-4 py-2 bg-pink-ball text-white rounded-xl text-[10px] font-bold uppercase tracking-widest"
                    >
                      <Plus className="w-4 h-4" /> New Fixture
                    </button>
                  </div>

                  {editingMatch && (
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-surface p-6 rounded-2xl border border-pink-ball/30 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex flex-col gap-2">
                           <label className="text-[10px] font-bold text-ink/40 uppercase ml-2">Team 1</label>
                           <select 
                             className="bg-paper border border-ink/10 rounded-xl p-3 text-sm text-ink outline-none"
                             value={editingMatch.team1}
                             onChange={e => setEditingMatch({...editingMatch, team1: e.target.value})}
                           >
                              {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                           </select>
                        </div>
                        <div className="flex flex-col gap-2">
                           <label className="text-[10px] font-bold text-ink/40 uppercase ml-2">Team 2</label>
                           <select 
                             className="bg-paper border border-ink/10 rounded-xl p-3 text-sm text-ink outline-none"
                             value={editingMatch.team2}
                             onChange={e => setEditingMatch({...editingMatch, team2: e.target.value})}
                           >
                              {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                           </select>
                        </div>
                        <div className="flex flex-col gap-2">
                           <label className="text-[10px] font-bold text-ink/40 uppercase ml-2">Date & Time</label>
                           <input 
                             type="datetime-local"
                             className="bg-paper border border-ink/10 rounded-xl p-3 text-sm text-ink outline-none"
                             value={editingMatch.date.split('Z')[0]}
                             onChange={e => setEditingMatch({...editingMatch, date: new Date(e.target.value).toISOString()})}
                           />
                        </div>
                        <div className="flex flex-col gap-2">
                           <label className="text-[10px] font-bold text-ink/40 uppercase ml-2">Venue</label>
                           <input 
                             placeholder="Venue Name"
                             className="bg-paper border border-ink/10 rounded-xl p-3 text-sm text-ink outline-none"
                             value={editingMatch.venue}
                             onChange={e => setEditingMatch({...editingMatch, venue: e.target.value})}
                           />
                        </div>
                        <div className="flex flex-col gap-2">
                           <label className="text-[10px] font-bold text-ink/40 uppercase ml-2">Status</label>
                           <select 
                             className="bg-paper border border-ink/10 rounded-xl p-3 text-sm text-ink outline-none"
                             value={editingMatch.status}
                             onChange={e => setEditingMatch({...editingMatch, status: e.target.value})}
                           >
                              <option value="upcoming">Upcoming</option>
                              <option value="live">Live</option>
                              <option value="finished">Finished</option>
                              <option value="draw">Draw</option>
                           </select>
                        </div>
                      </div>
                      <div className="flex justify-end gap-3">
                        <button onClick={() => setEditingMatch(null)} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink/40">Cancel</button>
                        <button 
                          onClick={async () => {
                            if (editingMatch.id) await dbService.updateMatch(editingMatch.id, editingMatch);
                            else await dbService.addMatch(editingMatch);
                            setEditingMatch(null);
                          }}
                          className="px-6 py-2 bg-pink-ball text-white rounded-xl text-[10px] font-bold uppercase tracking-widest"
                        >
                          <Save className="w-3 h-3 inline mr-2" /> Save Match
                        </button>
                      </div>
                    </motion.div>
                  )}

                  <div className="grid gap-4">
                    {matches.map((match) => {
                      const t1 = teams.find(t => t.id === match.team1);
                      const t2 = teams.find(t => t.id === match.team2);
                      return (
                        <div key={match.id} className="bg-surface p-6 rounded-2xl border border-ink/5 flex items-center justify-between group hover:border-pink-ball/30 transition-all">
                          <div className="flex items-center gap-6">
                             <div className="text-center bg-paper px-4 py-2 rounded-xl">
                                <div className="text-lg font-serif font-bold text-ink">
                                  {new Date(match.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                                </div>
                             </div>
                             <div className="flex items-center gap-4">
                                <span className="font-serif font-bold text-ink uppercase tracking-tight">{t1?.short || match.team1}</span>
                                <span className="text-ink/20 font-serif italic">vs</span>
                                <span className="font-serif font-bold text-ink uppercase tracking-tight">{t2?.short || match.team2}</span>
                             </div>
                          </div>
                          <div className="flex items-center gap-4">
                             <span className={cn(
                               "text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border",
                               match.status === 'upcoming' ? "border-cricket-green text-cricket-green" : "border-pink-ball text-pink-ball"
                             )}>
                               {match.status}
                             </span>
                             <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                               <button onClick={() => setEditingMatch(match)} className="p-2 hover:text-pink-ball transition-colors"><Edit2 className="w-4 h-4 text-ink/40" /></button>
                               <button onClick={() => dbService.deleteMatch(match.id)} className="p-2 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4 text-ink/40" /></button>
                             </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {activeTab === 'stats' && (
                <motion.div
                  key="stats"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-serif font-bold text-ink text-center w-full md:text-left">Leaderboards</h2>
                    {!editingStats ? (
                      <button 
                        onClick={() => setEditingStats(true)}
                        className="flex items-center gap-2 px-6 py-2 bg-cricket-green text-white rounded-xl text-[10px] font-bold uppercase tracking-widest"
                      >
                        <Edit2 className="w-3 h-3" /> Edit Stats
                      </button>
                    ) : (
                      <div className="flex gap-3">
                        <button onClick={() => setEditingStats(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink/40">Cancel</button>
                        <button 
                          onClick={async () => {
                            await dbService.updateStats(stats);
                            setEditingStats(false);
                          }}
                          className="flex items-center gap-2 px-6 py-2 bg-pink-ball text-white rounded-xl text-[10px] font-bold uppercase tracking-widest"
                        >
                          <Save className="w-3 h-3" /> Save Changes
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-serif font-bold text-ink">Batting Leaders</h3>
                      <div className="bg-surface rounded-2xl border border-ink/5 divide-y divide-ink/5">
                        {stats.batsmen.map((b: any, i: number) => (
                          <div key={i} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                             {editingStats ? (
                               <div className="grid grid-cols-2 gap-2 w-full">
                                  <input className="bg-paper border border-ink/10 rounded p-2 text-xs text-ink col-span-2" value={b.name} onChange={e => {
                                    const newBatsmen = [...stats.batsmen];
                                    newBatsmen[i].name = e.target.value;
                                    setStats({...stats, batsmen: newBatsmen});
                                  }} />
                                  <input type="number" className="bg-paper border border-ink/10 rounded p-2 text-xs text-ink" value={b.runs} onChange={e => {
                                    const newBatsmen = [...stats.batsmen];
                                    newBatsmen[i].runs = parseInt(e.target.value);
                                    setStats({...stats, batsmen: newBatsmen});
                                  }} />
                                  <input type="number" step="0.01" className="bg-paper border border-ink/10 rounded p-2 text-xs text-ink" value={b.avg} onChange={e => {
                                    const newBatsmen = [...stats.batsmen];
                                    newBatsmen[i].avg = parseFloat(e.target.value);
                                    setStats({...stats, batsmen: newBatsmen});
                                  }} />
                               </div>
                             ) : (
                               <>
                                 <span className="font-serif font-bold text-ink">{b.name}</span>
                                 <span className="text-xl font-serif font-bold text-pink-ball">{b.runs} runs</span>
                               </>
                             )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-xl font-serif font-bold text-ink">Bowling Leaders</h3>
                      <div className="bg-surface rounded-2xl border border-ink/5 divide-y divide-ink/5">
                        {stats.bowlers.map((b: any, i: number) => (
                          <div key={i} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                             {editingStats ? (
                               <div className="grid grid-cols-2 gap-2 w-full">
                                  <input className="bg-paper border border-ink/10 rounded p-2 text-xs text-ink col-span-2" value={b.name} onChange={e => {
                                    const newBowlers = [...stats.bowlers];
                                    newBowlers[i].name = e.target.value;
                                    setStats({...stats, bowlers: newBowlers});
                                  }} />
                                  <input type="number" className="bg-paper border border-ink/10 rounded p-2 text-xs text-ink" value={b.wickets} onChange={e => {
                                    const newBowlers = [...stats.bowlers];
                                    newBowlers[i].wickets = parseInt(e.target.value);
                                    setStats({...stats, bowlers: newBowlers});
                                  }} />
                                  <input type="number" step="0.1" className="bg-paper border border-ink/10 rounded p-2 text-xs text-ink" value={b.eco} onChange={e => {
                                    const newBowlers = [...stats.bowlers];
                                    newBowlers[i].eco = parseFloat(e.target.value);
                                    setStats({...stats, bowlers: newBowlers});
                                  }} />
                               </div>
                             ) : (
                               <>
                                 <span className="font-serif font-bold text-ink">{b.name}</span>
                                 <span className="text-xl font-serif font-bold text-cricket-green-light">{b.wickets} wickets</span>
                               </>
                             )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
