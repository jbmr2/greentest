import { Link, Outlet, useLocation } from "react-router-dom";
import { TreePine, Menu, X, Settings, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Format", path: "/format" },
    { name: "Bracket", path: "/bracket" },
    { name: "Schedule", path: "/schedule" },
    { name: "Points", path: "/points" },
    { name: "Stats", path: "/stats" },
    { name: "Rules", path: "/rules" },
    { name: "Teams", path: "/teams" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-paper/80 backdrop-blur-md border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-ball rounded-lg" aria-label="JBMR Green Home">
              <span className="text-3xl font-serif font-bold tracking-tight text-white group-hover:text-pink-ball transition-colors uppercase leading-none">
                 Jai Baba Mohan Ram <br/>
                 <span className="font-sans font-light italic text-cricket-green-light">Green</span> Test Trophy
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center bg-surface/50 backdrop-blur-md rounded-full px-2 py-1 border border-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-4 xl:px-5 py-2.5 rounded-full text-[10px] xl:text-sm font-serif font-bold tracking-widest uppercase transition-all whitespace-nowrap",
                  location.pathname === link.path
                    ? "bg-white text-black shadow-md"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden xl:block">
            <Link
              to="/contact"
              className="px-8 py-2.5 rounded-full text-base font-serif font-bold tracking-widest uppercase transition-all flex items-center gap-2 bg-cricket-green text-white hover:bg-pink-ball hover:text-white hover:scale-105"
            >
              Watch Now
            </Link>
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-white bg-white/10 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-ball"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-white/10 shadow-xl overflow-hidden p-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-4 py-3 rounded-xl text-lg font-serif font-bold uppercase tracking-wider transition-colors",
                  location.pathname === link.path
                    ? "bg-cricket-green/20 text-cricket-green-light"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10">
               <Link
                to="/contact"
                className="flex justify-center px-4 py-3 rounded-xl text-lg font-serif font-bold uppercase tracking-wider bg-cricket-green text-white"
                onClick={() => setIsOpen(false)}
              >
                Watch Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface text-white/60 py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop')] bg-cover" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          <div className="md:col-span-4">
             <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-serif font-bold text-white uppercase tracking-tight leading-tight">
                Jai Baba Mohan Ram <br/>
                <span className="text-cricket-green-light italic">Green</span> Test Trophy
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-sm font-light text-white/40">
              Reviving the true spirit of Test cricket through discipline, patience, and competitive day-night matches.
            </p>
            <div className="space-y-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
              <p>Organised By <span className="text-white">JBMR Sports</span></p>
              <p>Managed By <span className="text-white">GoodLength Sports</span></p>
              <p>Supported By <span className="text-white">Haryana Cricket Academy</span></p>
              <p className="pt-2 flex items-center gap-2 text-white/40"><MapPin className="w-3 h-3 text-pink-ball" /> Noida, India</p>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Tournament</h3>
            <ul className="space-y-4">
              <li><Link to="/format" className="hover:text-white transition-colors">Tournament Format</Link></li>
              <li><Link to="/bracket" className="hover:text-white transition-colors">Tournament Bracket</Link></li>
              <li><Link to="/schedule" className="hover:text-white transition-colors">Fixtures & Timing</Link></li>
              <li><Link to="/points" className="hover:text-white transition-colors">Points Table</Link></li>
              <li><Link to="/stats" className="hover:text-white transition-colors">Player Stats</Link></li>
              <li><Link to="/rules" className="hover:text-white transition-colors">Playing Conditions</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
             <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Initiative</h3>
            <ul className="space-y-4">
              <li><Link to="/teams" className="hover:text-white transition-colors">Participating Squads</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/green-initiative" className="text-cricket-green-light hover:text-white transition-colors">Why We Plant Trees</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">News & Updates</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} JBMR Sports.</p>
          <div className="flex gap-6 items-center">
            <span>Play</span>
            <span className="text-pink-ball">&bull;</span>
            <span>Watch</span>
            <span className="text-pink-ball">&bull;</span>
            <span>Grow</span>
            <Link to="/admin" className="ml-4 opacity-0 hover:opacity-100 transition-opacity">
               <Settings className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-paper selection:bg-pink-ball selection:text-white">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
