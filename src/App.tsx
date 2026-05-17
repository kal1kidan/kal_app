import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SplashScreen } from './screens/Splash';
import { OnboardingScreen } from './screens/Onboarding';
import { HomeScreen } from './screens/Home';
import { DetailScreen } from './screens/Detail';
import { CartScreen, CheckoutScreen } from './screens/Checkout';
import { ProfileScreen } from './screens/Profile';
import { Header, BottomNav } from './components/Navigation';
import { PERFUMES, Perfume } from './data/perfumes';

type Screen = 'splash' | 'onboarding' | 'home' | 'listing' | 'detail' | 'cart' | 'checkout' | 'wishlist' | 'profile' | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [prevScreen, setPrevScreen] = useState<Screen | null>(null);
  const [selectedPerfumeId, setSelectedPerfumeId] = useState<string | null>(null);
  const [cart, setCart] = useState<{ item: Perfume; qty: number }[]>([]);
  
  const navigateTo = (screen: Screen) => {
    setPrevScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const handleDetails = (id: string) => {
    setSelectedPerfumeId(id);
    navigateTo('detail');
  };

  const handleAddToCart = (item: Perfume, qty: number) => {
    setCart(prev => {
      const existing = prev.find(p => p.item.id === item.id);
      if (existing) {
        return prev.map(p => p.item.id === item.id ? { ...p, qty: p.qty + qty } : p);
      }
      return [...prev, { item, qty }];
    });
    navigateTo('cart');
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart(prev => prev.map(p => p.item.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(p => p.item.id !== id));
  };

  const selectedPerfume = PERFUMES.find(p => p.id === selectedPerfumeId) || PERFUMES[0];

  const pageTransition = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="relative max-w-md mx-auto min-h-screen shadow-2xl overflow-x-hidden bg-dark-bg text-surface-nude">
      <AnimatePresence mode="wait">
        {currentScreen === 'splash' && (
          <motion.div key="splash" {...pageTransition}>
            <SplashScreen onComplete={() => navigateTo('onboarding')} />
          </motion.div>
        )}
        
        {currentScreen === 'onboarding' && (
          <motion.div key="onboarding" {...pageTransition}>
            <OnboardingScreen onComplete={() => navigateTo('home')} />
          </motion.div>
        )}

        <motion.div 
          key="app-shell"
          className="min-h-screen"
          {...pageTransition}
        >
          {/* Main App Navigation Shell */}
          {!['splash', 'onboarding', 'detail', 'checkout'].includes(currentScreen) && (
            <Header 
              onMenuClick={() => {}} 
              onCartClick={() => navigateTo('cart')} 
            />
          )}

          {/* Screen Switcher */}
          <main>
            {currentScreen === 'home' && (
              <HomeScreen onDetails={handleDetails} />
            )}
            
            {currentScreen === 'detail' && (
              <DetailScreen 
                perfume={selectedPerfume} 
                onBack={() => navigateTo('home')} 
                onAddToCart={handleAddToCart}
              />
            )}

            {currentScreen === 'cart' && (
              <CartScreen 
                cart={cart}
                onUpdateQty={updateCartQty}
                onRemove={removeFromCart}
                onCheckout={() => navigateTo('checkout')}
              />
            )}

            {currentScreen === 'checkout' && (
              <CheckoutScreen 
                total={cart.reduce((acc, curr) => acc + (curr.item.price * curr.qty), 0)}
                onComplete={() => {
                  setCart([]);
                  navigateTo('home');
                }}
              />
            )}

            {currentScreen === 'profile' && (
              <ProfileScreen user={{ name: 'Julian Thorne', email: 'julian.thorne@couture.com', points: 4250 }} />
            )}
          </main>

          {/* Global Tabs */}
          {!['splash', 'onboarding', 'detail', 'checkout'].includes(currentScreen) && (
            <BottomNav 
              activeScreen={currentScreen} 
              onNavigate={(s) => navigateTo(s as Screen)} 
              cartCount={cart.reduce((acc, curr) => acc + curr.qty, 0)}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

