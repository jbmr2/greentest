import { motion } from "motion/react";

export function Gallery() {
  const images = [];

  return (
    <div className="bg-paper min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h6 className="text-[10px] font-bold tracking-widest uppercase text-cricket-green mb-4 md:mb-6">Moments</h6>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-ink mb-4 md:mb-6">Gallery</h1>
          <p className="text-base md:text-xl text-ink/60 font-light max-w-2xl mx-auto">
             Moments frozen in time from the field and our environmental initiatives.
          </p>
        </div>

        {images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {images.map((img, i) => (
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ delay: i * 0.1, duration: 0.6 }}
                 key={i} 
                 className={`overflow-hidden rounded-[2rem] bg-ink/5 ${img.size.includes('md:') ? '' : 'md:' + img.size}`}
               >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" loading="lazy" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center p-8 bg-surface rounded-[3rem] border border-ink/5 shadow-sm mb-6">
               <span className="text-5xl opacity-20">📸</span>
            </div>
            <h2 className="text-3xl font-serif text-ink mb-2">Coming Soon</h2>
            <p className="text-ink/60 font-light text-lg">We are capturing the best moments. Check back soon for the tournament gallery.</p>
          </div>
        )}
      </div>
    </div>
  );
}
