import React from 'react';
import { CheckCircle2, Circle, Sparkles, ShieldCheck } from 'lucide-react';

export const EmiPlanCard = ({ plan, isSelected, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(plan)}
      className={`relative p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer active:scale-[0.99] ${
        isSelected
          ? 'border-[#6D28D9] bg-[#FAF8FF] ring-2 ring-[#6D28D9]/20 shadow-sm'
          : 'border-[#ECEFF6] bg-white hover:border-slate-300 shadow-card'
      }`}
    >
      {/* Badge if available */}
      {plan.badge && (
        <span className={`absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tight shadow-xs ${
          plan.isNoCost 
            ? 'bg-[#10B981] text-white' 
            : 'bg-[#6D28D9] text-white'
        }`}>
          {plan.badge}
        </span>
      )}

      <div className="flex items-start justify-between">
        {/* Left: Radio + Tenure + EMI figures */}
        <div className="flex items-start space-x-3">
          <div className="mt-0.5">
            {isSelected ? (
              <CheckCircle2 className="w-5 h-5 text-[#6D28D9] fill-[#6D28D9]/15" />
            ) : (
              <Circle className="w-5 h-5 text-slate-300" />
            )}
          </div>

          <div>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-base font-extrabold text-slate-900">
                ₹{plan.monthlyAmount?.toLocaleString('en-IN')}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                / month
              </span>
            </div>

            <div className="flex items-center space-x-2 mt-1 text-xs">
              <span className="font-bold text-[#6D28D9]">
                {plan.tenureMonths} Months
              </span>
              <span className="text-slate-300">•</span>
              <span className={`font-semibold ${plan.isNoCost ? 'text-[#059669]' : 'text-slate-600'}`}>
                {plan.isNoCost ? '0% Interest (No Cost)' : `${plan.interestRate}% p.a. interest`}
              </span>
            </div>

            {/* Downpayment and Fee details */}
            <div className="flex items-center space-x-3 mt-2 text-[11px] text-slate-500">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>₹{plan.downPayment || 0} Down Payment</span>
              </span>
              <span>•</span>
              <span>
                {plan.processingFee ? `₹${plan.processingFee} Proc. Fee` : 'Zero Processing Fee'}
              </span>
            </div>
          </div>
        </div>

        {/* Right tag */}
        {plan.isNoCost && (
          <div className="hidden sm:flex items-center space-x-1 text-[11px] font-bold text-[#059669] bg-[#D1FAE5] px-2 py-1 rounded-md">
            <Sparkles className="w-3 h-3" />
            <span>0% Interest</span>
          </div>
        )}
      </div>
    </div>
  );
};
