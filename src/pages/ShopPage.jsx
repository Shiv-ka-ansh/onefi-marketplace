import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopHeader } from '../components/common/TopHeader';
import { BottomNav } from '../components/common/BottomNav';
import { Sparkles, ShoppingBag, Store, Tag, ChevronRight, Zap, ShieldCheck } from 'lucide-react';

export const ShopPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-24 flex flex-col">
      <TopHeader showLocation={true} locationText="Jhansi" />

      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-br from-[#270649] via-[#4C1D95] to-[#6D28D9] text-white p-5 pt-6 pb-12 overflow-hidden shadow-sm">
          {/* Decorative Glow */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#8B5CF6]/30 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-[260px]">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wide uppercase mb-3">
              <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
              <span>No-Cost EMIs</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl font-black leading-tight tracking-tight text-white mb-2">
              Shop today, <br />
              Pay later using <br />
              Mutual funds.
            </h1>

            {/* Subtitle */}
            <p className="text-[11px] text-purple-100/90 leading-relaxed">
              No credit score required. No interest. <br />
              Backed by your investments.
            </p>
          </div>

          {/* 3D Gadgets & Shopping Bag Graphic Accent */}
          <div className="absolute -right-3 bottom-3 w-36 h-36 flex items-center justify-center pointer-events-none">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-amber-400 rotate-12 flex items-center justify-center shadow-lg transform translate-y-2">
                <ShoppingBag className="w-12 h-12 text-amber-950" />
              </div>
              <div className="absolute -top-2 -left-2 w-10 h-10 rounded-xl bg-purple-900/90 -rotate-6 flex items-center justify-center text-white text-xs font-black border border-white/25 shadow-md">
                0%
              </div>
            </div>
          </div>
        </div>

        {/* 3 Shop Options Segmented Navigation (Floating over Hero bottom) */}
        <div className="px-4 -mt-6 relative z-20">
          <div className="bg-white rounded-2xl p-1.5 shadow-md border border-[#ECEFF6] flex items-center justify-between">
            <button
              onClick={() => navigate('/shop/top-brands')}
              className="flex-1 py-2.5 px-1.5 text-center text-xs font-semibold text-slate-500 hover:text-slate-900 rounded-xl transition-colors"
            >
              Top Brands
            </button>

            <button
              onClick={() => navigate('/shop/nearby-stores')}
              className="flex-1 py-2.5 px-1.5 text-center text-xs font-semibold text-slate-500 hover:text-slate-900 rounded-xl transition-colors"
            >
              Nearby Stores
            </button>

            {/* Active Highlighted 1Fi Marketplace Option */}
            <button
              onClick={() => navigate('/shop/marketplace')}
              className="flex-1 py-2.5 px-1.5 text-center text-xs font-bold bg-[#F5F3FF] text-[#6D28D9] rounded-xl border border-[#DDD6FE] shadow-xs relative transition-all"
            >
              <span>1Fi Marketplace</span>
              <span className="absolute -top-2 right-0.5 px-1.5 py-0.2 rounded-full bg-[#10B981] text-white text-[8px] font-extrabold uppercase">
                New
              </span>
            </button>
          </div>
        </div>

        {/* Section Cards for the 3 Options */}
        <div className="p-4 space-y-3 mt-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Shopping Options
            </h2>
          </div>

          {/* Option 1: 1Fi Marketplace */}
          <div 
            onClick={() => navigate('/shop/marketplace')}
            className="group relative bg-gradient-to-r from-purple-50 via-white to-purple-50/40 rounded-2xl p-4 border-2 border-[#6D28D9]/40 shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.99]"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5B1CB8] to-[#7C3AED] text-white flex items-center justify-center shadow-md shadow-[#6D28D9]/25 flex-shrink-0">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-extrabold text-slate-900 text-sm">
                      1Fi Marketplace
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#6D28D9] text-white text-[9px] font-bold tracking-wide uppercase">
                      Featured
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Browse smartphones, laptops, audio & gadgets on flexible 0% No-Cost EMI plans.
                  </p>
                  <div className="flex items-center space-x-3 mt-2 text-[11px] font-semibold text-[#6D28D9]">
                    <span className="flex items-center space-x-1">
                      <Zap className="w-3 h-3 text-[#6D28D9] fill-[#6D28D9]" />
                      <span>Zero Down Payment</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <ShieldCheck className="w-3 h-3 text-[#10B981]" />
                      <span>Instant Approval</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center group-hover:translate-x-1 transition-transform flex-shrink-0">
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Option 2: Top Brands */}
          <div 
            onClick={() => navigate('/shop/top-brands')}
            className="group bg-white rounded-2xl p-4 border border-[#ECEFF6] shadow-card hover:border-slate-300 transition-all cursor-pointer active:scale-[0.99]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-slate-900 text-sm">
                      Top Brands
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-purple-50 text-[#6D28D9] text-[9px] font-semibold">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Shop directly from verified brand flagship stores.
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Option 3: Nearby Stores */}
          <div 
            onClick={() => navigate('/shop/nearby-stores')}
            className="group bg-white rounded-2xl p-4 border border-[#ECEFF6] shadow-card hover:border-slate-300 transition-all cursor-pointer active:scale-[0.99]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-slate-900 text-sm">
                      Nearby Stores
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-purple-50 text-[#6D28D9] text-[9px] font-semibold">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Find 1Fi partner retail merchant outlets near you.
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
};
