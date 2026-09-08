import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopHeader } from '../components/common/TopHeader';
import { BottomNav } from '../components/common/BottomNav';
import { ReceiptText, Calendar, CheckCircle2, ChevronRight, ShoppingBag } from 'lucide-react';

export const EmiDuesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-24 flex flex-col bg-[#F8F9FD]">
      <TopHeader title="EMI Dues" />

      <main className="flex-1 p-4 space-y-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            EMI Dues
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Track your ongoing repayments and scheduled auto-debits.
          </p>
        </div>

        {/* Due Summary Card */}
        <div className="bg-white rounded-3xl p-5 border border-[#ECEFF6] shadow-card space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
            <span>Upcoming Installment</span>
            <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">
              Active Autopay
            </span>
          </div>

          <div className="flex items-baseline space-x-1.5">
            <span className="text-3xl font-black text-[#6D28D9]">₹0.00</span>
            <span className="text-xs text-slate-400 font-medium">due today</span>
          </div>

          <p className="text-xs text-slate-500">
            Next billing cycle auto-debit scheduled on <strong>5th of next month</strong>.
          </p>
        </div>

        {/* Active Loans / Purchases */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-1">
            Active Purchases on 1Fi
          </span>

          <div className="bg-white rounded-2xl p-4 border border-[#ECEFF6] shadow-card text-center py-8 space-y-3">
            <div className="w-12 h-12 rounded-full bg-purple-50 text-[#6D28D9] flex items-center justify-center mx-auto">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">No active EMI loans yet</h4>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              Browse the 1Fi Marketplace to buy smartphones, laptops, and gadgets on 0% No-Cost EMI.
            </p>
            <button
              onClick={() => navigate('/shop/marketplace')}
              className="px-5 py-2.5 rounded-full bg-[#6D28D9] text-white text-xs font-bold shadow-sm hover:bg-[#5B1CB8] transition active:scale-95"
            >
              Explore 1Fi Marketplace
            </button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};
