import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopHeader } from '../components/common/TopHeader';
import { BottomNav } from '../components/common/BottomNav';
import { Sparkles, ArrowLeft, Store } from 'lucide-react';

export const PlaceholderPage = ({ title = "Top Brands" }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FD] pb-24">
      <TopHeader title={title} showBack={true} />

      <main className="max-w-md mx-auto p-6 flex flex-col items-center justify-center min-h-[70vh] text-center">
        <div className="w-16 h-16 rounded-3xl bg-[#F5F3FF] text-[#6D28D9] flex items-center justify-center mb-4 shadow-sm">
          <Store className="w-8 h-8" />
        </div>

        <span className="px-3 py-1 rounded-full bg-purple-50 text-[#6D28D9] text-[11px] font-bold mb-3">
          Coming Soon
        </span>

        <h2 className="text-xl font-bold text-slate-900 mb-2">{title}</h2>
        <p className="text-xs text-slate-500 max-w-xs leading-relaxed mb-6">
          We are currently onboarding top partner stores in your location. In the meantime, browse the active catalog on 1Fi Marketplace.
        </p>

        <button
          onClick={() => navigate('/shop/marketplace')}
          className="flex items-center space-x-2 px-6 py-3 rounded-full bg-[#6D28D9] hover:bg-[#5B1CB8] text-white text-xs font-semibold shadow-float active:scale-95 transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>Explore 1Fi Marketplace</span>
        </button>
      </main>

      <BottomNav />
    </div>
  );
};
