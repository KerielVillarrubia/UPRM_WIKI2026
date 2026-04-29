import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionDivider({ color = "sulfur" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colorClass = color === "sulfur" ? "bg-sulfur/30" : "bg-biolume/30";
  const glowClass = color === "sulfur" ? "bg-sulfur" : "bg-biolume";

  return (
    <div ref={ref} className="flex justify-center py-16 md:py-24">
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative origin-top"
      >
        <div className={`w-[1px] h-24 md:h-40 ${colorClass}`} />
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${glowClass}`} />
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${glowClass}`} />
      </motion.div>
    </div>
  );
}
