import { motion } from "motion/react";
import { ScrollText, Gavel, Timer, Target, Moon, Sun } from "lucide-react";

export function TournamentRules() {
  const rules = [
    {
      title: "Match Format",
      icon: Timer,
      details: [
        "League matches are played over 2 consecutive days.",
        "Knockout matches (Semi-Finals & Final) are played over 3 days.",
        "Day-Night Pink Ball format for all matches.",
        "Professional long-format competitive environment."
      ]
    },
    {
      title: "Result Conditions",
      icon: Target,
      details: [
        "WIN: Achieved if the opponent is all out and target is reached/defended.",
        "TIE: Scores are equal after full completion of both innings.",
        "ABANDONED: Match stopped due to rain, light, or ground issues.",
        "IMPORTANT: If not completed in 3 days, it is a DRAW."
      ]
    },
    {
      title: "Points System",
      icon: Target,
      details: [
        "WIN: 6 Points",
        "DRAW: 2 Points each team",
        "TIE: 3 Points each team",
        "NO RESULT / ABANDONED: 2 Points each team",
        "BONUS: +1 Point for 1st Innings Lead"
      ]
    }
  ];

  return (
    <div className="bg-paper min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-cricket-green/10 rounded-2xl text-cricket-green">
              <ScrollText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-ink">Tournament Rules</h1>
          </div>
          <p className="text-lg md:text-xl text-ink/60 font-light border-b border-ink/10 pb-6 md:pb-8">
             The official regulations and playing conditions for the JBMR Green Test Trophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((section, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={section.title}
              className="bg-surface p-8 rounded-[2rem] border border-ink/5 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-paper rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cricket-green group-hover:text-white transition-colors">
                <section.icon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-ink mb-6">{section.title}</h2>
              <ul className="space-y-4">
                {section.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-3 text-ink/70 font-light text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-cricket-green rounded-full mt-1.5 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 bg-cricket-green text-paper rounded-[2rem] flex flex-col md:flex-row items-center gap-8"
        >
          <div className="p-4 bg-paper/20 rounded-full">
            <Gavel className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Fair Play & Spirit of Cricket</h3>
            <p className="text-paper/80 font-light leading-relaxed">
              The JBMR Green Test Trophy upholds the highest standards of sportsmanship. Any breach of the ICC Code of Conduct will be dealt with strictly by the match referee. Remember, you play for the game and for the planet.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
