import { motion } from 'motion/react';

const steps = [
  {
    title: "The Art of Scent",
    desc: "Discover olfactory masterpieces crafted from rare essences found in the untouched corners of the globe.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cinematic Luxury",
    desc: "Each bottle is a storyteller, a physical manifestation of a private memory or a cinematic dream.",
    image: "https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Your Signature",
    desc: "Join high-fragrance connoisseurs and find the aura that defines your presence.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800"
  }
];

export const OnboardingScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className="fixed inset-0 bg-brand-burgundy z-[90] overflow-hidden">
      <div className="h-full flex flex-col">
        <div className="flex-1 relative overflow-x-auto snap-x snap-mandatory flex no-scrollbar">
          {steps.map((step, i) => (
            <div key={i} className="min-w-full h-full snap-center relative flex flex-col items-center justify-end">
              <img src={step.image} className="absolute inset-0 w-full h-full object-cover" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy via-brand-burgundy/20 to-transparent" />
              
              <div className="relative z-10 px-10 pb-40 text-center">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="font-display text-4xl text-white mb-6"
                >
                  {step.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-white/60 text-sm leading-relaxed"
                >
                  {step.desc}
                </motion.p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-12 left-0 right-0 px-10 flex flex-col items-center gap-8">
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-accent-gold w-4' : 'bg-white/20'}`} />
            ))}
          </div>
          
          <button 
            onClick={onComplete}
            className="w-full h-14 bg-accent-gold text-brand-burgundy font-bold tracking-[0.2em] rounded-full shadow-2xl shadow-black/40"
          >
            START JOURNEY
          </button>
          
          <button onClick={onComplete} className="text-white/40 text-xs font-bold tracking-widest uppercase">Skip</button>
        </div>
      </div>
    </div>
  );
};
