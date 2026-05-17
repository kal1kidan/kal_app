import { motion } from 'motion/react';
import { useEffect } from 'react';

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] burgundy-gradient flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="w-24 h-24 mb-6 relative">
          <motion.div 
            animate={{ 
              rotate: 360,
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-accent-gold/30 rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-[1px] bg-accent-gold" />
            <div className="h-12 w-[1px] bg-accent-gold" />
          </div>
        </div>

        <motion.h1 
          initial={{ letterSpacing: "0.5em", opacity: 0 }}
          animate={{ letterSpacing: "0.2em", opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display text-4xl text-accent-gold font-bold mb-2"
        >
          KAL PERFUMES
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-white text-[10px] tracking-[0.4em] uppercase"
        >
          Paris • London • New York
        </motion.p>
      </motion.div>

      <div className="absolute bottom-12 flex flex-col items-center space-y-4">
        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/3 bg-accent-gold gold-shimmer"
          />
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover blur-2xl grayscale"
          alt=""
        />
      </motion.div>
    </div>
  );
};
