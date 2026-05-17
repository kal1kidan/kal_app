import { Home, Search, Heart, User, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

interface BottomNavProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
  cartCount: number;
}

export const BottomNav = ({ activeScreen, onNavigate, cartCount }: BottomNavProps) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'listing', icon: Search, label: 'Explore' },
    { id: 'wishlist', icon: Heart, label: 'Saved' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <motion.nav 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md h-16 glass-card rounded-full flex items-center justify-around px-2 z-50 shadow-2xl shadow-black/40"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onNavigate(tab.id)}
          className={`flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
            activeScreen === tab.id ? 'text-accent-gold bg-accent-gold/5' : 'text-surface-nude/60'
          }`}
        >
          <tab.icon size={20} strokeWidth={activeScreen === tab.id ? 2.5 : 2} />
          {activeScreen === tab.id && (
            <motion.div 
              layoutId="nav-dot"
              className="w-1 h-1 bg-accent-gold rounded-full mt-1"
            />
          )}
        </button>
      ))}
      
      <button
        onClick={() => onNavigate('cart')}
        className="relative flex items-center justify-center w-12 h-12 rounded-full text-brand-burgundy bg-accent-gold text-dark-bg shadow-lg shadow-accent-gold/20"
      >
        <ShoppingBag size={20} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-brand-burgundy text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-accent-gold/20">
            {cartCount}
          </span>
        )}
      </button>
    </motion.nav>
  );
};

export const Header = ({ onMenuClick, onCartClick }: { onMenuClick: () => void; onCartClick: () => void }) => {
  return (
    <header className="fixed top-0 w-full h-16 flex items-center justify-between px-6 z-50 backdrop-blur-md border-b border-white/5 bg-dark-bg/80">
      <button onClick={onMenuClick} className="text-accent-gold">
        <motion.div whileTap={{ scale: 0.9 }}>
          <span className="font-display tracking-widest text-lg font-bold">KAL</span>
        </motion.div>
      </button>
      
      <h1 className="font-display tracking-[0.2em] text-surface-nude font-bold text-sm">
        PERFUMES
      </h1>
      
      <button onClick={onCartClick} className="text-accent-gold">
        <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center">
          <ShoppingBag size={18} />
        </div>
      </button>
    </header>
  );
};
