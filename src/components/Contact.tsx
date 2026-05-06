import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <div className="bg-paper min-h-screen pt-24 pb-16">
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
         >
            <h6 className="text-[10px] font-bold tracking-widest uppercase text-cricket-green mb-6">Inquiries</h6>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-ink mb-4 md:mb-6">Get in Touch</h1>
            <p className="text-base md:text-lg text-ink/60 font-light border-b border-ink/10 pb-6 md:pb-8 max-w-2xl mx-auto">
              Whether you want to register a team or sponsor our plantation drive, we are always open to discuss.
            </p>
         </motion.div>

         <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
            <div className="md:col-span-5 relative">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.1 }}
                 className="bg-ink text-paper p-8 md:p-12 rounded-[2rem] sticky top-24 md:top-32"
               >
                 <h2 className="text-3xl font-serif mb-12">Contact Details</h2>
                 <ul className="space-y-10">
                   <li className="flex gap-6">
                     <Mail className="w-6 h-6 text-pink-ball shrink-0" />
                     <div>
                       <h3 className="text-[10px] font-bold tracking-widest uppercase text-cricket-green-light mb-1">Email</h3>
                       <p className="text-lg font-light text-white">info@jbmrgreentesttrophy.in</p>
                     </div>
                   </li>
                   <li className="flex gap-6">
                     <MapPin className="w-6 h-6 text-pink-ball shrink-0" />
                     <div>
                       <h3 className="text-[10px] font-bold tracking-widest uppercase text-cricket-green-light mb-1">Website</h3>
                       <p className="text-lg font-light text-white leading-relaxed">
                         jbmrgreentesttrophy.in
                       </p>
                     </div>
                   </li>
                 </ul>
               </motion.div>
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="md:col-span-7"
            >
               <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-4">
                     <label htmlFor="inquiry-type" className="block text-[10px] font-bold tracking-widest uppercase text-ink/70">Inquiry Type</label>
                     <select className="w-full bg-transparent border-b-2 border-ink/10 focus:border-cricket-green pb-4 text-xl font-serif text-ink outline-none transition-colors">
                        <option>Team Registration</option>
                        <option>Sponsorship / CSR</option>
                        <option>General Support</option>
                     </select>
                  </div>

                  <div className="space-y-4">
                     <label htmlFor="full-name" className="block text-[10px] font-bold tracking-widest uppercase text-ink/70">Full Name</label>
                     <input id="full-name" type="text" className="w-full bg-transparent border-b-2 border-ink/10 focus:border-cricket-green pb-4 text-xl font-serif text-ink outline-none placeholder:text-ink/40 transition-colors focus:ring-0" placeholder="John Doe" />
                  </div>

                  <div className="space-y-4">
                     <label htmlFor="email" className="block text-[10px] font-bold tracking-widest uppercase text-ink/70">Email Address</label>
                     <input id="email" type="email" className="w-full bg-transparent border-b-2 border-ink/10 focus:border-cricket-green pb-4 text-xl font-serif text-ink outline-none placeholder:text-ink/40 transition-colors focus:ring-0" placeholder="you@example.com" />
                  </div>

                  <div className="space-y-4">
                     <label htmlFor="message" className="block text-[10px] font-bold tracking-widest uppercase text-ink/70">Message</label>
                     <textarea id="message" rows={4} className="w-full bg-transparent border-b-2 border-ink/10 focus:border-cricket-green pb-4 text-xl font-serif text-ink outline-none placeholder:text-ink/40 transition-colors resize-none focus:ring-0" placeholder="Tell us more about your inquiry..."></textarea>
                  </div>

                  <button className="bg-cricket-green text-white hover:bg-pink-ball px-8 py-5 rounded-full w-full uppercase tracking-widest font-bold text-xs transition-colors flex justify-center items-center gap-3">
                     Send Message <Send className="w-4 h-4" />
                  </button>
               </form>
            </motion.div>
         </div>
       </div>
    </div>
  );
}
