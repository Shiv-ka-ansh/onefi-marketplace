import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, ReceiptText, TrendingUp, User } from 'lucide-react';

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { 
      id: 'home', 
      label: 'Home', 
      icon: Home, 
      path: '/home', 
      active: location.pathname === '/home' 
    },
    { 
      id: 'shop', 
      label: 'Shop', 
      icon: ShoppingBag, 
      path: '/shop', 
      active: location.pathname.startsWith('/shop') || location.pathname === '/' 
    },
    { 
      id: 'emi', 
      label: 'EMI Dues', 
      icon: ReceiptText, 
      path: '/emi-dues', 
      active: location.pathname === '/emi-dues' 
    },
    { 
      id: 'limit', 
      label: 'Limit', 
      icon: TrendingUp, 
      path: '/limit', 
      active: location.pathname === '/limit' 
    },
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: User, 
      path: '/profile', 
      active: location.pathname === '/profile' 
    },
  ];

  return (
    <nav className="fixed bottom-0 w-full max-w-[480px] z-40 bg-white border-t border-[#ECEFF6] shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-around py-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.active;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="relative flex-1 flex flex-col items-center py-2 px-1 transition-colors active:scale-95 cursor-pointer"
            >
              {/* Active top bar indicator */}
              {active && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#6D28D9] rounded-b-full" />
              )}
              
              <Icon 
                className={`w-5 h-5 transition-colors ${
                  active ? 'text-[#6D28D9] stroke-[2.2]' : 'text-slate-400 stroke-[1.6]'
                }`} 
              />
              
              <span 
                className={`text-[11px] mt-1 font-medium transition-colors ${
                  active ? 'text-[#6D28D9] font-bold' : 'text-slate-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
