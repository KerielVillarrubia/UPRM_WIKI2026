import { motion } from 'framer-motion';

export default function FooterSection() {
  return (
    <footer className="relative border-t border-border/30 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-biolume" />
              <span className="font-mono text-xs tracking-[0.2em] text-bone/80 uppercase">
                BioReclam
              </span>
            </div>
            <p className="text-sm text-bone/30 leading-relaxed max-w-xs">
              Pioneering the molecular resurrection of contaminated landscapes 
              through biological innovation.
            </p>
          </div>

          {/* Chemical note */}
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-bone/20 uppercase block mb-4">
              The Process
            </span>
            <div className="space-y-2">
              <p className="font-mono text-xs text-sulfur/40">
                C₇H₅N₃O₆ <span className="text-bone/20">→</span> <span className="text-biolume/60">CO₂ + H₂O + N₂</span>
              </p>
              <p className="font-mono text-xs text-bone/20">
                From toxic to teeming. From scar to sanctuary.
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-bone/20 uppercase block mb-4">
              Navigate
            </span>
            <div className="space-y-2">
              {["Impact", "Bioremediation", "Restoration", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const el = document.querySelector(`#${link.toLowerCase()}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block font-mono text-xs text-bone/30 hover:text-biolume transition-colors duration-300 tracking-wider"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-bone/15 tracking-wider">
            © {new Date().getFullYear()} BIORECLAM — MOLECULAR RESURRECTION PROJECT
          </p>
          <p className="font-mono text-[10px] text-bone/15 tracking-wider">
            DESIGNED FOR THE SCORCHED EARTH
          </p>
        </div>
      </div>
    </footer>
  );
}
