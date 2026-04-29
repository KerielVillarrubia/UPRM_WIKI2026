import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import OrganismCard from './OrganismCard';

const MYCELIUM_IMG = "https://media.base44.com/images/public/69f251bcb5bf757c27eb842e/d7ca50b3d_generated_d019b3c3.png";
const BACTERIA_IMG = "https://media.base44.com/images/public/69f251bcb5bf757c27eb842e/c7414f2a3_generated_5d7c7df3.png";

const organisms = [
  {
    name: "Pleurotus ostreatus",
    common: "Oyster Mushroom",
    image: MYCELIUM_IMG,
    mechanism: "Enzymatic degradation via lignin peroxidase. Mycelial networks penetrate contaminated soil, breaking down TNT into non-toxic amino derivatives through oxidative decomposition.",
    compound: "TNT → Amino-dinitrotoluenes → CO₂",
    efficiency: "94%",
  },
  {
    name: "Pseudomonas putida",
    common: "Soil Bacterium",
    image: BACTERIA_IMG,
    mechanism: "Aerobic biodegradation through nitroreductase pathways. These bacteria metabolize explosive compounds as carbon and nitrogen sources, converting them to harmless byproducts.",
    compound: "RDX → NDAB → N₂O + HCHO",
    efficiency: "87%",
  },
];

export default function BioremediationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-6 grain-overlay">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-biolume/60 uppercase">
            03 — The Bioremediation Engine
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[clamp(2rem,5vw,5rem)] font-black leading-[0.9] tracking-tight text-bone mb-6"
        >
          LIFE
          <br />
          <span className="text-biolume glow-biolume">DEVOURS</span>
          <br />
          DEATH
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl text-bone/50 text-base md:text-lg leading-relaxed mb-16"
        >
          Nature has engineered its own cleanup crew. Fungi and bacteria have evolved 
          to metabolize the most toxic compounds on Earth — transforming weapons of 
          destruction into the building blocks of new life.
        </motion.p>

        {/* Organism cards */}
        <div className="space-y-12 md:space-y-20">
          {organisms.map((org, i) => (
            <OrganismCard key={org.name} organism={org} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
