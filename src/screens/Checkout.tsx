import { motion } from 'motion/react';
import { Perfume } from '../data/perfumes';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';

export const CartScreen = ({ 
  cart, 
  onUpdateQty, 
  onRemove, 
  onCheckout 
}: { 
  cart: { item: Perfume; qty: number }[]; 
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}) => {
  const subtotal = cart.reduce((acc, curr) => acc + (curr.item.price * curr.qty), 0);

  return (
    <div className="pt-24 pb-48 px-6 min-h-screen bg-dark-bg text-surface-nude">
      <h2 className="font-display text-4xl text-accent-gold mb-2">My Bag</h2>
      <p className="text-surface-nude/40 text-xs tracking-widest uppercase mb-10">Sensory Selection</p>

      <div className="space-y-6">
        {cart.length === 0 ? (
          <div className="py-20 text-center opacity-40 italic">
            Your bag is empty of essences.
          </div>
        ) : (
          cart.map(({ item, qty }) => (
            <motion.div 
              key={item.id}
              layout
              className="flex gap-6 p-4 bg-white/5 rounded-3xl border border-white/10 shadow-sm"
            >
              <div className="w-24 h-24 bg-dark-bg rounded-2xl overflow-hidden shrink-0 border border-gold/10">
                <img src={item.image} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display text-lg text-white">{item.name}</h4>
                    <p className="text-[10px] text-accent-gold font-bold uppercase">{item.subtitle}</p>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-white/20 hover:text-red-400 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-4 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    <button onClick={() => onUpdateQty(item.id, -1)} className="text-accent-gold"><Minus size={12} /></button>
                    <span className="text-sm font-bold w-4 text-center text-white">{qty}</span>
                    <button onClick={() => onUpdateQty(item.id, 1)} className="text-accent-gold"><Plus size={12} /></button>
                  </div>
                  <p className="font-bold text-accent-gold font-display text-lg">€{item.price * qty}</p>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-dark-bg border-t border-white/10 z-50">
          <div className="flex justify-between items-center mb-6">
            <span className="text-surface-nude/40 font-bold text-xs uppercase tracking-widest">Total</span>
            <span className="font-display text-3xl text-accent-gold font-bold">€{subtotal}</span>
          </div>
          <button 
            onClick={onCheckout}
            className="w-full h-14 bg-accent-gold text-dark-bg rounded-full font-bold tracking-[0.2em] shadow-xl flex items-center justify-center gap-3"
          >
            CHECKOUT <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export const CheckoutScreen = ({ total, onComplete }: { total: number; onComplete: () => void }) => {
  return (
    <div className="pt-24 px-6 min-h-screen bg-dark-bg text-surface-nude">
      <h2 className="font-display text-3xl text-accent-gold mb-10">Private Checkout</h2>
      
      <div className="space-y-12">
        <section>
          <h3 className="text-[10px] font-bold tracking-[0.2em] text-accent-gold/60 uppercase mb-6">1. Delivery Destination</h3>
          <div className="space-y-4">
            <input placeholder="Full Name" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent-gold/50" />
            <input placeholder="Shipping Address" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent-gold/50" />
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="City" className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent-gold/50" />
              <input placeholder="Postal Code" className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent-gold/50" />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-[10px] font-bold tracking-[0.2em] text-accent-gold/60 uppercase mb-6">2. Secure Payment</h3>
          <div className="bg-white/5 rounded-3xl p-6 border border-white/10 shadow-inner">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-accent-gold rounded flex items-center justify-center text-[10px] text-dark-bg font-bold">VISA</div>
                <span className="text-xs font-bold text-white">.... 4829</span>
              </div>
              <button className="text-[10px] font-bold text-accent-gold uppercase tracking-widest underline">Edit</button>
            </div>
            <div className="flex justify-between text-xs font-bold opacity-30 uppercase tracking-widest text-white">
              <span>Julian Thorne</span>
              <span>12/26</span>
            </div>
          </div>
        </section>

        <section className="bg-brand-burgundy p-8 rounded-[32px] text-white shadow-2xl shadow-black/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full" />
          <div className="flex justify-between items-center mb-8 relative z-10">
            <span className="text-xs opacity-60 uppercase tracking-widest">Total Amount</span>
            <span className="font-display text-3xl font-bold italic text-accent-gold">€{total}</span>
          </div>
          <button 
            onClick={onComplete}
            className="w-full h-16 bg-accent-gold text-dark-bg rounded-full font-bold tracking-[0.2em] uppercase shadow-lg relative z-10 hover:scale-[1.02] transition-transform"
          >
            PAY SECURELY
          </button>
        </section>
      </div>
    </div>
  );
};
