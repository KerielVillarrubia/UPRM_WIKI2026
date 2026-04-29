import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function ContactForm({ isInView }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message received. We'll be in touch.");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 1 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
    >
      {/* Left: CTA text */}
      <div>
        <h3 className="text-3xl md:text-4xl font-black text-bone leading-tight mb-6">
          JOIN THE
          <br />
          <span className="text-biolume">MOLECULAR</span>
          <br />
          REVOLUTION
        </h3>
        <p className="text-bone/40 text-sm md:text-base leading-relaxed mb-8">
          Whether you're a researcher, government body, military institution, or 
          environmental organization — the molecular resurrection of contaminated 
          land begins with a conversation.
        </p>
        <div className="space-y-3">
          {["Research Partnerships", "Site Assessment", "Technology Licensing", "Consultation"].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-biolume" />
              <span className="font-mono text-xs tracking-wider text-bone/50 uppercase">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Form */}
      <div>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-full text-center py-16"
          >
            <div className="w-16 h-16 rounded-full border-2 border-biolume flex items-center justify-center mb-6 box-glow-biolume">
              <Check className="w-8 h-8 text-biolume" />
            </div>
            <p className="text-xl font-bold text-bone mb-2">Signal Received</p>
            <p className="text-sm text-bone/40">The remediation begins now.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-mono text-[10px] tracking-[0.2em] text-bone/30 uppercase block mb-2">
                Name
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-transparent border-border/50 text-bone placeholder:text-bone/20 focus:border-biolume/50 rounded-none h-12"
                placeholder="Dr. Elena Vasquez"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-[0.2em] text-bone/30 uppercase block mb-2">
                Email
              </label>
              <Input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-transparent border-border/50 text-bone placeholder:text-bone/20 focus:border-biolume/50 rounded-none h-12"
                placeholder="elena@biolab.org"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-[0.2em] text-bone/30 uppercase block mb-2">
                Mission Brief
              </label>
              <Textarea
                required
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="bg-transparent border-border/50 text-bone placeholder:text-bone/20 focus:border-biolume/50 rounded-none min-h-[120px] resize-none"
                placeholder="Describe your contamination challenge or research interest..."
              />
            </div>
            <button
              type="submit"
              className="group relative w-full h-14 bg-biolume/10 border border-biolume/30 text-biolume font-mono text-sm tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 hover:bg-biolume/20 hover:border-biolume/60 pulse-organic rounded-[28px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Initiate Contact
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}
