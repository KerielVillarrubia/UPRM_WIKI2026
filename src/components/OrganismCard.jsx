import { motion } from 'framer-motion';

export default function OrganismCard({ organism, index, isInView }) {
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.3 + index * 0.3 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
    >
      {/* Image */}
      <div className={`relative group overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
        <div className="relative overflow-hidden">
          <img
            src={organism.image}
            alt={`${organism.common} — ${organism.name}`}
            className="w-full aspect-[4/3] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            style={{ filter: 'contrast(1.1) brightness(0.9)' }}
          />
          {/* Overlay scan effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.2em] text-biolume/60 uppercase">
            Magnification: 400×
          </div>
        </div>
      </div>

      {/* Info */}
      <div className={`${isReversed ? 'lg:order-1 lg:text-right' : ''}`} style={{ direction: 'ltr' }}>
        {/* Name */}
        <div className="mb-6">
          <h3 className="font-mono text-xs tracking-[0.2em] text-biolume/60 uppercase mb-2">
            {organism.common}
          </h3>
          <p className="text-3xl md:text-4xl font-black text-bone italic leading-tight">
            {organism.name}
          </p>
        </div>

        {/* Mechanism */}
        <p className="text-bone/50 text-sm md:text-base leading-relaxed mb-8">
          {organism.mechanism}
        </p>

        {/* Chemical pathway */}
        <div className="border border-biolume/20 bg-biolume/5 p-5 mb-6 inline-block">
          <div className="font-mono text-[10px] tracking-[0.2em] text-biolume/50 uppercase mb-2">
            Degradation Pathway
          </div>
          <div className="font-mono text-lg text-biolume font-semibold">
            {organism.compound}
          </div>
        </div>

        {/* Efficiency */}
        <div className="flex items-end gap-3">
          <span className="font-mono text-5xl md:text-6xl font-bold text-biolume">
            {organism.efficiency}
          </span>
          <span className="font-mono text-xs text-bone/30 tracking-wider pb-2">
            Degradation<br />Efficiency
          </span>
        </div>
      </div>
    </motion.div>
  );
}
