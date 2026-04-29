import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContaminationStats from './ContaminationStats';

export default function ContaminationSection() {
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
          <span className="font-mono text-[10px] tracking-[0.3em] text-sulfur/60 uppercase">
            02 — The Contamination
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[clamp(2rem,5vw,5rem)] font-black leading-[0.9] tracking-tight text-bone mb-6"
        >
          THE INVISIBLE
          <br />
          <span className="text-sulfur glow-sulfur">SCARS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl text-bone/50 text-base md:text-lg leading-relaxed mb-16"
        >
          Every explosion leaves behind a chemical legacy. TNT, RDX, HMX — 
          these nitroaromatic compounds persist in soil and groundwater for decades, 
          poisoning ecosystems and communities long after the blast fades from memory.
        </motion.p>

        {/* Stats grid */}
        <ContaminationStats isInView={isInView} />

        {/* Chemical compounds */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-wrap gap-6 justify-center"
        >
          {[
            { name: "TNT", formula: "C₇H₅N₃O₆", danger: "Carcinogenic" },
            { name: "RDX", formula: "C₃H₆N₆O₆", danger: "Neurotoxic" },
            { name: "HMX", formula: "C₄H₈N₈O₈", danger: "Persistent" },
            { name: "DNT", formula: "C₇H₆N₂O₄", danger: "Mutagenic" },
          ].map((compound, i) => (
            <motion.div
              key={compound.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + i * 0.15 }}
              className="group relative border border-sulfur/20 bg-sulfur/5 px-6 py-4 hover:border-sulfur/50 transition-all duration-500"
            >
              <div className="font-mono text-2xl font-bold text-sulfur mb-1">{compound.name}</div>
              <div className="font-mono text-[11px] text-bone/40 tracking-wider">{compound.formula}</div>
              <div className="font-mono text-[10px] text-sulfur/50 mt-2 uppercase tracking-[0.2em]">
                {compound.danger}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
