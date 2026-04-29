import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const CRATER_IMG = "https://media.base44.com/images/public/69f251bcb5bf757c27eb842e/4bb9faae6_generated_fd6dec91.png";

export default function HeroSection() {
  const ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden grain-overlay cursor-crosshair"
      onMouseMove={handleMouseMove}
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale }}
      >
        <img
          src={CRATER_IMG}
          alt="Desolate explosion crater in scorched landscape"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.3) contrast(1.3) saturate(0.7)',
          }}
        />
        {/* Reveal effect — green life underneath */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle 200px at ${mousePos.x * 100}% ${mousePos.y * 100}%, hsla(var(--biolume), 0.15) 0%, transparent 70%)`,
          }}
        />
      </motion.div>

      {/* Scan line overlay */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sulfur/20 to-transparent"
          style={{ animation: 'scan-line 8s linear infinite' }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-[3] flex flex-col items-center justify-center h-full px-6"
        style={{ opacity, y: textY }}
      >
        {/* Chemical formula tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8"
        >
          <span className="font-mono text-xs tracking-[0.25em] text-sulfur/60 uppercase">
            C₇H₅N₃O₆ → CO₂ + H₂O + N₂
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <span className="block text-[clamp(3rem,10vw,10rem)] font-black leading-[0.85] tracking-tight text-bone glow-sulfur">
            BORN
          </span>
          <span className="block text-[clamp(2rem,6vw,6rem)] font-light leading-[0.9] tracking-[0.15em] text-sulfur mt-2">
            FROM
          </span>
          <span className="block text-[clamp(3rem,10vw,10rem)] font-black leading-[0.85] tracking-tight text-bone glow-sulfur">
            BLAST
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="mt-10 max-w-lg text-center text-sm md:text-base font-body text-bone/50 leading-relaxed"
        >
          Where explosives scar the earth, biology resurrects it.
          <br />
          <span className="text-biolume/70">The molecular war for planetary healing.</span>
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            Descend
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-sulfur/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
