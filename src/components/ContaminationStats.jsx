import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = "", isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span className="font-mono text-4xl md:text-6xl font-bold tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 40, suffix: "M+", label: "Hectares contaminated globally by explosive residues", color: "text-sulfur" },
  { value: 75, suffix: "+", label: "Countries with military testing site contamination", color: "text-sulfur" },
  { value: 100, suffix: "+", label: "Years some compounds persist in untreated soil", color: "text-sulfur" },
  { value: 2.6, suffix: "B", label: "People living near contaminated former conflict zones", color: "text-sulfur" },
];

export default function ContaminationStats({ isInView }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
          className="relative border border-border/50 p-6 group hover:border-sulfur/30 transition-colors duration-500"
        >
          <div className="absolute top-3 right-3 font-mono text-[10px] text-muted-foreground">
            {String(i + 1).padStart(2, '0')}
          </div>
          <div className={stat.color}>
            <AnimatedCounter
              target={stat.value}
              suffix={stat.suffix}
              isInView={isInView}
            />
          </div>
          <p className="mt-3 text-sm text-bone/40 leading-relaxed font-body">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
