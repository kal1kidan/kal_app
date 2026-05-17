import { motion } from 'motion/react';
import { User, Settings, Package, Heart, Star, LogOut, ChevronRight } from 'lucide-react';

export const ProfileScreen = ({ user }: { user: { name: string; email: string; points: number } }) => {
  return (
    <div className="pt-24 pb-48 px-6 min-h-screen bg-dark-bg text-surface-nude">
      {/* Profile Header */}
      <section className="flex flex-col items-center text-center mb-12">
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full p-1 border-2 border-accent-gold overflow-hidden shadow-2xl shadow-accent-gold/20">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" className="w-full h-full rounded-full object-cover" alt="" />
          </div>
          <div className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-accent-gold border border-dark-bg flex items-center justify-center text-dark-bg">
            <Star size={14} fill="currentColor" />
          </div>
        </div>
        
        <p className="text-accent-gold font-bold text-[10px] tracking-[0.3em] uppercase mb-1">Exclusive Member</p>
        <h2 className="font-display text-4xl text-white mb-1">{user.name}</h2>
        <p className="text-surface-nude/40 text-sm italic">{user.email}</p>
        
        <div className="mt-8 flex gap-3">
          <div className="bg-brand-burgundy text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 border border-accent-gold/20">
            NOIR TIER
          </div>
          <div className="bg-white/5 px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-accent-gold border border-white/10">
            {user.points} ESSENCE POINTS
          </div>
        </div>
      </section>

      {/* Stats/Dashboard Bento */}
      <div className="grid grid-cols-2 gap-4 mb-12">
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex flex-col items-center text-center">
          <Package className="text-accent-gold mb-2" size={24} />
          <span className="text-xl font-bold text-white">12</span>
          <span className="text-[10px] font-bold opacity-40 uppercase tracking-wider text-surface-nude">Orders</span>
        </div>
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex flex-col items-center text-center">
          <Heart className="text-accent-gold mb-2" size={24} />
          <span className="text-xl font-bold text-white">34</span>
          <span className="text-[10px] font-bold opacity-40 uppercase tracking-wider text-surface-nude">Saved</span>
        </div>
      </div>

      {/* Menu Actions */}
      <div className="space-y-4">
        {[
          { icon: Settings, label: 'Preferences' },
          { icon: Package, label: 'Order History' },
          { icon: Star, label: 'Rewards Lounge' },
          { icon: LogOut, label: 'Sign Out', danger: true },
        ].map((item) => (
          <button 
            key={item.label}
            className={`w-full flex items-center justify-between p-6 rounded-[24px] group transition-all border ${
              item.danger ? 'bg-red-500/5 text-red-400 border-red-500/10' : 'bg-white/5 border-white/10 text-white'
            }`}
          >
            <div className="flex items-center gap-4">
              <item.icon size={20} className={item.danger ? '' : 'text-accent-gold opacity-60'} />
              <span className="font-bold text-sm tracking-wide">{item.label}</span>
            </div>
            <ChevronRight size={16} className="opacity-20 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>
    </div>
  );
};
