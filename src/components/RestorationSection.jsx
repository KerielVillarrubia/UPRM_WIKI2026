import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactForm from './ContactForm';

const BEFORE_AFTER_IMG = "https://media.base44.com/images/public/69f251bcb5bf757c27eb842e/ecfb9413a_generated_2ada8b02.png";
const RESTORED_IMG = "https://media.base44.com/images/public/69f251bcb5bf757c27eb842e/f4bd36156_generated_49ea5691.png";

const metrics = [
  { label: "Soil Toxicity Reduction", before: "100%", after: "< 3%", unit: "toxic load" },
  { label: "Groundwater Purity", before: "0.8 mg/L", after: "< 0.002 mg/L", unit: "TNT concentration" },
  { label: "Biodiversity Index", before: "0.12", after: "0.87", unit: "Shannon index" },
  { label: "Treatment Duration", before: "∞", after: "18-36", unit: "months" },
];

export default function RestorationSection() {
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
            04 — The Restoration Ledger
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[clamp(2rem,5vw,5rem)] font-black leading-[0.9] tracking-tight text-bone mb-6"
        >
          FROM SCAR
          <br />
          <span className="text-biolume glow-biolume">TO SANCTUARY</span>
        </motion.h2>

        {/* Before/After image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="my-16 relative overflow-hidden"
        >
          <img
            src={BEFORE_AFTER_IMG}
            alt="Before and after bioremediation — contaminated landscape transformed to thriving ecosystem"
            className="w-full aspect-[21/9] object-cover"
            style={{ filter: 'contrast(1.1) brightness(0.85)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
          <div className="absolute bottom-6 left-6 font-mono text-xs text-bone/60">
            <span className="text-sulfur">◄ BEFORE</span>
          </div>
          <div className="absolute bottom-6 right-6 font-mono text-xs text-bone/60">
            <span className="text-biolume">AFTER ►</span>
          </div>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.8 }}
              className="border border-border/50 p-6 hover:border-biolume/30 transition-colors duration-500"
            >
              <div className="font-mono text-[10px] tracking-[0.2em] text-bone/30 uppercase mb-4">
                {metric.label}
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-lg text-sulfur/60 line-through">{metric.before}</span>
                <span className="text-bone/20">→</span>
                <span className="font-mono text-2xl font-bold text-biolume">{metric.after}</span>
              </div>
              <div className="font-mono text-[10px] text-bone/20">{metric.unit}</div>
            </motion.div>
          ))}
        </div>

        {/* Restored landscape */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="relative overflow-hidden mb-20"
        >
          <img
            src={RESTORED_IMG}
            alt="Former military testing site reclaimed by vibrant forest"
            className="w-full aspect-[16/7] object-cover"
            style={{ filter: 'contrast(1.05) brightness(0.8) saturate(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Contact / CTA */}
        <ContactForm isInView={isInView} />
      </div>
    </section>
  );
}
