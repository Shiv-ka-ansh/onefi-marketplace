import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopHeader } from '../components/common/TopHeader';
import { BottomNav } from '../components/common/BottomNav';
import { TrendingUp, ShieldCheck, Zap, ArrowRight, Layers } from 'lucide-react';

export const LimitPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-24 flex flex-col bg-[#F8F9FD]">
      <TopHeader title="Credit Limit" />

      <main className="flex-1 p-4 space-y-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Mutual Fund Limit
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Credit sanctioned against your verified mutual funds.
          </p>
        </div>

        {/* Limit Overview Card */}
        <div className="bg-gradient-to-br from-[#270649] via-[#4C1D95] to-[#6D28D9] text-white rounded-3xl p-5 shadow-md space-y-3">
          <div className="flex items-center justify-between text-xs text-purple-200">
            <span>Available Shopping Limit</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
              Active
            </span>
          </div>

          <div className="text-3xl font-black text-white">
            ₹2,50,000
          </div>

          <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-purple-100">
            <span>Pledged Portfolio Value</span>
            <span className="font-bold text-white">₹5,00,000</span>
          </div>
        </div>

        {/* Pledged Funds Breakdown */}
        <div className="bg-white rounded-2xl p-4 border border-[#ECEFF6] shadow-card space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900">
            <span>Linked Mutual Funds</span>
            <span className="text-[#6D28D9]">CAMS / KFintech</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-800">Mirae Asset Large Cap Fund</div>
                <div className="text-[10px] text-slate-400">Direct Plan - Growth</div>
              </div>
              <span className="font-bold text-slate-900">₹3,00,000</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-800">Parag Parikh Flexi Cap Fund</div>
                <div className="text-[10px] text-slate-400">Direct Plan - Growth</div>
              </div>
              <span className="font-bold text-slate-900">₹2,00,000</span>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="pt-2">
          <button
            onClick={() => navigate('/shop/marketplace')}
            className="w-full py-3.5 rounded-full bg-[#6D28D9] text-white text-xs font-bold shadow-md hover:bg-[#5B1CB8] transition flex items-center justify-center space-x-2 active:scale-95"
          >
            <span>Shop Now with 1Fi Limit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};
