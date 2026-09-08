import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopHeader } from '../components/common/TopHeader';
import { BottomNav } from '../components/common/BottomNav';
import { 
  Sparkles, 
  ArrowRight, 
  Percent, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  Gift, 
  Layers, 
  Lock, 
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

export const HomePage = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What is 1Fi?",
      a: "1Fi is a modern fintech platform that lets you shop on 0% No-Cost EMI by pledging your mutual funds instead of using credit cards. Your investments continue earning returns in the market."
    },
    {
      q: "Is 1Fi safe and legit?",
      a: "Yes, 1Fi works with RBI-regulated NBFCs and banks. Your mutual fund units are safely lien-marked via official depository mechanisms (CAMS / KFintech)."
    },
    {
      q: "Who is the RBI approved lending partner?",
      a: "We partner with leading RBI-registered NBFCs including major financial institutions that specialize in credit against securities."
    },
    {
      q: "What documents are needed to take a loan?",
      a: "Zero physical paperwork. You only need your PAN and Aadhaar for 100% digital instant KYC verification."
    },
    {
      q: "Are there any hidden fees?",
      a: "No hidden charges. No pre-closure charges, zero annual maintenance charges, and clear upfront terms."
    },
    {
      q: "What if markets fall?",
      a: "We maintain safe loan-to-value (LTV) buffers. If markets experience major volatility, you receive timely alerts to top-up or manage your threshold with ample time."
    }
  ];

  return (
    <div className="min-h-screen pb-24 flex flex-col bg-[#F8F9FD]">
      <TopHeader showLocation={true} locationText="Jhansi" />

      <main className="flex-1 p-4 space-y-5">
        {/* Top Hero Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#2D0858] via-[#5B1CB8] to-[#7C3AED] text-white p-5 overflow-hidden shadow-md">
          {/* 0% Interest graphic */}
          <div className="absolute top-4 right-4 text-center">
            <div className="text-2xl font-black leading-none text-white">0%</div>
            <div className="text-[9px] font-extrabold tracking-wider uppercase text-purple-200">Interest</div>
          </div>

          <div className="relative z-10 max-w-[260px] space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-200">
              Get Started
            </span>
            <h1 className="text-xl font-black leading-tight text-white">
              Shop on no-cost EMI
            </h1>
            <p className="text-[11px] text-purple-100/85 leading-relaxed">
              Backed by your mutual funds, No credit pull, No charges, & quick approval.
            </p>

            <div className="pt-1">
              <button
                onClick={() => navigate('/shop/marketplace')}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-extrabold shadow-sm hover:bg-purple-50 transition active:scale-95"
              >
                <span>Check eligibility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Section: OFFERS */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6D28D9]">
            Offers
          </span>

          <div 
            onClick={() => navigate('/shop/marketplace')}
            className="rounded-2xl bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white p-4 shadow-sm relative overflow-hidden cursor-pointer active:scale-[0.99] transition-transform"
          >
            <span className="text-[9px] font-extrabold tracking-wider text-amber-300 uppercase">
              Furniture | Electronics | Home Decor
            </span>
            <h3 className="text-sm font-extrabold text-white mt-1">
              Dream homes to sweet dreams
            </h3>
            <div className="inline-flex items-center space-x-1 mt-2 text-[10px] font-semibold text-purple-200 bg-white/10 px-2 py-0.5 rounded-md border border-white/10">
              <Sparkles className="w-3 h-3 text-emerald-300" />
              <span>Comfort on 12m no-cost EMIs</span>
            </div>
          </div>
        </div>

        {/* Section: SHOP USING 1FI AT TOP BRANDS */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6D28D9]">
            Shop using 1Fi at top brands
          </span>

          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            {[
              { name: "Apple", tag: "APPL", bg: "bg-slate-900 text-white" },
              { name: "Wakefit", tag: "WF", bg: "bg-purple-900 text-white" },
              { name: "EaseMyTrip", tag: "EMT", bg: "bg-sky-600 text-white" },
              { name: "Taj", tag: "TAJ", bg: "bg-amber-800 text-white" }
            ].map((brand, idx) => (
              <div 
                key={idx} 
                onClick={() => navigate('/shop/marketplace')}
                className="bg-white rounded-2xl p-2.5 border border-[#ECEFF6] shadow-card flex flex-col items-center justify-center space-y-1.5 cursor-pointer hover:border-purple-200 transition"
              >
                <div className={`w-8 h-8 rounded-xl ${brand.bg} font-black text-[10px] flex items-center justify-center tracking-tight shadow-xs`}>
                  {brand.tag}
                </div>
                <span className="text-[10px] font-bold text-slate-700 truncate w-full">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: WHY PAY WITH 1FI */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6D28D9]">
            Why pay with 1Fi
          </span>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-white rounded-2xl p-3 border border-[#ECEFF6] shadow-card space-y-1">
              <div className="w-7 h-7 rounded-lg bg-purple-50 text-[#6D28D9] flex items-center justify-center font-bold text-xs">
                %
              </div>
              <h4 className="text-xs font-bold text-slate-900">0% interest</h4>
              <p className="text-[10px] text-slate-500">Repay only what you spend.</p>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-[#ECEFF6] shadow-card space-y-1">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#10B981] flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Keep returns</h4>
              <p className="text-[10px] text-slate-500">Funds stay invested in market.</p>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-[#ECEFF6] shadow-card space-y-1">
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Zero charges</h4>
              <p className="text-[10px] text-slate-500">No fees, nothing hidden.</p>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-[#ECEFF6] shadow-card space-y-1">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Quickest approval</h4>
              <p className="text-[10px] text-slate-500">Instant digital eligibility check.</p>
            </div>
          </div>
        </div>

        {/* Section: HOW 1FI WORKS */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6D28D9]">
            How 1Fi works
          </span>

          <div className="bg-white rounded-2xl p-4 border border-[#ECEFF6] shadow-card">
            <div className="grid grid-cols-3 gap-2 text-center relative">
              <div className="flex flex-col items-center space-y-1.5">
                <div className="w-10 h-10 rounded-full bg-[#6D28D9] text-white flex items-center justify-center shadow-md relative">
                  <Layers className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-slate-900 text-white text-[9px] font-bold flex items-center justify-center">1</span>
                </div>
                <span className="text-[10px] font-bold uppercase text-slate-700 leading-tight">Connect Portfolio</span>
              </div>

              <div className="flex flex-col items-center space-y-1.5">
                <div className="w-10 h-10 rounded-full bg-[#6D28D9] text-white flex items-center justify-center shadow-md relative">
                  <Lock className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-slate-900 text-white text-[9px] font-bold flex items-center justify-center">2</span>
                </div>
                <span className="text-[10px] font-bold uppercase text-slate-700 leading-tight">Unlock Limit</span>
              </div>

              <div className="flex flex-col items-center space-y-1.5">
                <div className="w-10 h-10 rounded-full bg-[#6D28D9] text-white flex items-center justify-center shadow-md relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-slate-900 text-white text-[9px] font-bold flex items-center justify-center">3</span>
                </div>
                <span className="text-[10px] font-bold uppercase text-slate-700 leading-tight">Shop & Pay Later</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section: REFER AND EARN */}
        <div className="rounded-2xl bg-gradient-to-r from-[#5B1CB8] to-[#7C3AED] text-white p-4 shadow-md flex items-center justify-between">
          <div className="space-y-1">
            <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-white/20 text-white text-[9px] font-bold uppercase">
              <Gift className="w-3 h-3 text-emerald-300" />
              <span>Invite</span>
            </span>
            <h3 className="text-sm font-black">
              Get upto ₹1000 for every friend.
            </h3>
            <p className="text-[10px] text-purple-100">
              Plus they'll also get rewards.
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center font-black text-xs text-center leading-tight">
            REFER<br/>& EARN
          </div>
        </div>

        {/* Section: FREQUENTLY ASKED QUESTIONS */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6D28D9]">
            Frequently Asked Questions
          </span>

          <div className="bg-white rounded-2xl border border-[#ECEFF6] shadow-card divide-y divide-slate-100 overflow-hidden">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="p-3.5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left text-xs font-bold text-slate-900"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};
