import { motion } from 'motion/react';
import { Perfume } from '../data/perfumes';
import { Share2, Heart, Plus, Minus, ShieldCheck, Feather, Timer, Star } from 'lucide-react';
import { useState } from 'react';

export const DetailScreen = ({ perfume, onBack, onAddToCart }: { perfume: Perfume; onBack: () => void; onAddToCart: (item: Perfume, qty: number) => void }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="bg-dark-bg min-h-screen text-surface-nude">
      {/* Immersive Hero */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src={perfume.image} className="w-full h-full object-cover" alt={perfume.name} />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/40 via-transparent to-dark-bg" />
        </motion.div>

        {/* Buttons Header */}
        <div className="absolute top-12 left-6 right-6 flex justify-between z-10">
          <button onClick={onBack} className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-accent-gold">
            <motion.span whileTap={{ x: -5 }} className="material-symbols-outlined font-bold text-lg">arrow_back</motion.span>
          </button>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-accent-gold">
              <Share2 size={18} />
            </button>
            <button className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-accent-gold">
              <Heart size={18} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 right-6">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-accent-gold font-bold text-xs tracking-widest uppercase mb-2"
          >
            {perfume.subtitle}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl text-white font-bold leading-tight"
          >
            {perfume.name}
          </motion.h2>
        </div>
      </section>

      {/* Content Canvas */}
      <main className="px-6 pb-40 -mt-8 relative z-20">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-dark-bg rounded-t-[40px] pt-10"
        >
          <div className="flex justify-between items-baseline mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={i < Math.floor(perfume.rating) ? 'fill-accent-gold text-accent-gold' : 'text-white/10'} />
              ))}
              <span className="text-xs text-surface-nude/40 font-bold ml-2">({perfume.reviews} reviews)</span>
            </div>
            <p className="font-display text-4xl text-accent-gold font-bold">€{perfume.price}</p>
          </div>

          <section className="mb-12">
            <h3 className="font-display text-xl text-accent-gold/40 italic mb-4 tracking-wider">The Narrative</h3>
            <p className="text-surface-nude/80 text-base leading-relaxed italic">
              "{perfume.details}"
            </p>
          </section>

          {/* Olfactory Pyramid */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] font-bold text-accent-gold uppercase mb-8 text-center">Olfactory Pyramid</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: 'TOP', note: perfume.notes.top, icon: 'flare' },
                { title: 'HEART', note: perfume.notes.heart, icon: 'local_florist' },
                { title: 'BASE', note: perfume.notes.base, icon: 'forest' }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mb-4 group-hover:bg-accent-gold transition-colors duration-500">
                    <span className="material-symbols-outlined text-2xl text-accent-gold group-hover:text-dark-bg">{item.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-accent-gold/40 mb-1">{item.title}</span>
                  <p className="text-xs font-bold leading-tight text-white">{item.note}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Craftsmanship Stats */}
          <section className="grid grid-cols-3 gap-4 p-8 border-y border-white/10 mb-12">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck size={20} className="text-accent-gold" />
              <span className="text-[10px] font-bold text-surface-nude/60">Traceable</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Feather size={20} className="text-accent-gold" />
              <span className="text-[10px] font-bold text-surface-nude/60">Sustainable</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Timer size={20} className="text-accent-gold" />
              <span className="text-[10px] font-bold text-surface-nude/60">24h Wear</span>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="font-display text-xl text-accent-gold mb-4">Artisan Origin</h3>
            <p className="text-sm text-surface-nude/60 leading-relaxed">
              Hand-poured in small batches within our Grasse workshops. Each crystal flacon is manually polished and sigil-sealed.
            </p>
          </section>
        </motion.div>
      </main>

      {/* Floating CTA */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-bg via-dark-bg to-transparent z-50">
        <div className="flex gap-4">
          <div className="flex items-center gap-6 bg-white/5 border border-white/10 px-6 rounded-full">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-accent-gold"><Minus size={16} /></button>
            <span className="font-bold text-lg w-4 text-center text-white">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="text-accent-gold"><Plus size={16} /></button>
          </div>
          
          <button 
            onClick={() => onAddToCart(perfume, qty)}
            className="flex-1 h-14 bg-accent-gold text-dark-bg rounded-full font-bold tracking-[0.2em] shadow-xl shadow-accent-gold/20 transition-transform active:scale-95"
          >
            ADD TO BAG
          </button>
        </div>
      </footer>
    </div>
  );
};
