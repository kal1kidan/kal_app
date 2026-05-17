import { motion } from 'motion/react';
import { PERFUMES } from '../data/perfumes';
import { Star, ArrowRight } from 'lucide-react';

export const HomeScreen = ({ onDetails }: { onDetails: (id: string) => void }) => {
  const featured = PERFUMES[0];
  const collections = [
    { title: 'The Oud Series', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600' },
    { title: 'Floral Muse', image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <div className="pt-20 pb-32">
      {/* Hero Banner */}
      <section className="px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[480px] rounded-[32px] overflow-hidden group cursor-pointer border border-accent-gold/20"
          onClick={() => onDetails(featured.id)}
        >
          <img 
            src="https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt={featured.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent" />
          
          <div className="absolute bottom-10 left-8 right-8">
            <span className="text-accent-gold font-bold text-xs tracking-widest uppercase mb-2 block">New Collection</span>
            <h2 className="font-display text-4xl text-white mb-4 leading-tight">
              Noir de Kal <br />
              <span className="italic font-normal">Midnight Essence</span>
            </h2>
            <button className="bg-accent-gold text-dark-bg px-8 py-3 rounded-full text-xs font-bold tracking-widest flex items-center gap-2">
              EXPLORE <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="px-6 mb-12 overflow-hidden">
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {['All', 'Oud Series', 'Floral', 'Fresh', 'Spicy', 'Musk'].map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`px-8 py-3 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                i === 0 ? 'bg-accent-gold text-dark-bg border-accent-gold' : 'border-white/10 text-white/50'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* The Curations (Collections) */}
      <section className="px-6 mb-12">
        <h3 className="font-display text-2xl text-accent-gold mb-6">The Curations</h3>
        <div className="grid grid-cols-2 gap-4">
          {collections.map((col, i) => (
            <motion.div 
              key={col.title}
              whileHover={{ y: -5 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-white/5"
            >
              <img src={col.image} className="w-full h-full object-cover" alt={col.title} />
              <div className="absolute inset-0 bg-dark-bg/40" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white text-sm font-bold tracking-wide">{col.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="px-6 mb-12">
        <div className="flex justify-between items-end mb-6">
          <h3 className="font-display text-2xl text-accent-gold">Editorial Favourites</h3>
          <button className="text-xs font-bold text-accent-gold border-b border-accent-gold pb-1 tracking-widest">VIEW ALL</button>
        </div>
        
        <div className="flex gap-6 overflow-x-auto no-scrollbar -mx-6 px-6 py-4">
          {PERFUMES.map((perfume, i) => (
            <motion.div 
              key={perfume.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              onClick={() => onDetails(perfume.id)}
              className="min-w-[240px] group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-white/5 mb-4 border border-white/10">
                <img 
                  src={perfume.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={perfume.name}
                />
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center text-accent-gold shadow-xl">
                  <Star size={16} />
                </button>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-accent-gold font-bold mb-1">{perfume.subtitle}</p>
              <h4 className="font-display text-lg text-white">{perfume.name}</h4>
              <p className="text-xs text-surface-nude/40">{perfume.price} EUR</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-10 py-16 text-center italic bg-white/5 mx-6 rounded-[32px] mb-12 border border-white/5">
        <p className="font-display text-xl text-accent-gold leading-relaxed mb-6">
          "Perfume is the indispensable complement to the personality, the finishing touch on a dress."
        </p>
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/40">— CHRISTIAN DIOR</p>
      </section>
    </div>
  );
};
