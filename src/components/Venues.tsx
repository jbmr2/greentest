import { MapPin } from "lucide-react";
import { motion } from "motion/react";

export function Venues() {
  const venues = [];

  return (
    <div className="bg-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="mb-12 md:mb-16 md:flex items-end justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-paper mb-4 md:mb-6">Locations</h1>
            <p className="text-base md:text-xl text-paper/60 font-light">
              The hallowed turf where the Test Trophy will be contested.
            </p>
          </div>
          <div className="mt-8 md:mt-0 text-paper/40 font-serif italic text-2xl">
            {venues.length > 0 ? `${venues.length} Historic Grounds` : "Venue Announcements Coming Soon"}
          </div>
        </div>

        {venues.length > 0 ? (
          <div className="space-y-16 md:space-y-32">
            {venues.map((venue, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                key={i} 
                className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-24 items-center`}
              >
                 <div className="flex-1 w-full relative">
                   <div className="aspect-[4/3] rounded-[2rem] overflow-hidden">
                     <img src={venue.image} alt={venue.name} className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" />
                   </div>
                 </div>
                 
                 <div className="flex-1 space-y-8 w-full">
                   <div className="flex items-center gap-2 text-cricket-green-light mb-4 text-sm font-bold tracking-widest uppercase">
                     <MapPin className="w-4 h-4" />
                     <span>{venue.location}</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl font-serif text-paper leading-tight">{venue.name}</h2>
                   
                   <div className="pt-8 border-t border-paper/10">
                     <dl className="space-y-6 text-paper/60 font-light text-lg">
                       <div>
                         <dt className="text-[10px] font-bold text-cricket-green tracking-widest uppercase mb-2">Conditions Overview</dt>
                         <dd>{venue.pitch}</dd>
                       </div>
                       <div>
                         <dt className="text-[10px] font-bold text-cricket-green tracking-widest uppercase mb-2">Heritage</dt>
                         <dd>{venue.history}</dd>
                       </div>
                     </dl>
                   </div>
                 </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center p-8 bg-paper/5 rounded-[3rem] border border-paper/10 shadow-sm mb-6">
               <MapPin className="w-12 h-12 text-paper/20" />
            </div>
            <h2 className="text-3xl font-serif text-paper mb-2">Coming Soon</h2>
            <p className="text-paper/60 font-light text-lg">We are finalizing the list of venues for the upcoming tournament. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}
