import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { TopHeader } from '../components/common/TopHeader';
import { 
  CheckCircle, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  CreditCard, 
  Zap, 
  ArrowLeft, 
  Home, 
  ShoppingBag,
  Clock
} from 'lucide-react';

export const PlanSummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const state = location.state;

  if (!state || !state.product || !state.selectedEmiPlan) {
    return (
      <div className="min-h-screen bg-[#F8F9FD] p-4 flex flex-col items-center justify-center text-center">
        <h2 className="text-base font-bold text-slate-900 mb-2">No active plan selected</h2>
        <p className="text-xs text-slate-500 mb-4">
          Please select a product and EMI plan to view the review summary.
        </p>
        <button
          onClick={() => navigate('/shop/marketplace')}
          className="px-5 py-2.5 rounded-full bg-[#6D28D9] text-white text-xs font-semibold shadow-sm"
        >
          Return to Marketplace
        </button>
      </div>
    );
  }

  const { product, selectedColor, selectedStorage, currentPrice, selectedEmiPlan } = state;

  const handleProceed = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div className="min-h-screen pb-32 flex flex-col">
      <TopHeader title="Review Your Plan" showBack={true} />

      <main className="flex-1 p-4 space-y-4">
        {/* Step Indicator Header */}
        <div className="bg-white rounded-2xl border border-[#ECEFF6] p-4 shadow-card">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-bold text-[#6D28D9]">Step 2 of 2: Final Review</span>
            <span className="text-slate-400 font-medium">Mutual Funds Credit</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-full h-full bg-[#6D28D9] rounded-full" />
          </div>
        </div>

        {/* Selected Product & Variant Card */}
        <div className="bg-white rounded-2xl border border-[#ECEFF6] p-4 shadow-card">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
            Product Summary
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-16 h-16 rounded-xl bg-slate-50 p-1.5 flex items-center justify-center border border-slate-100 flex-shrink-0">
              <img 
                src={product.image} 
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6D28D9]">
                {product.brand}
              </span>
              <h3 className="font-bold text-slate-900 text-sm truncate">
                {product.name}
              </h3>
              
              {/* Selected Variant Badges */}
              <div className="flex items-center space-x-2 mt-1">
                {selectedColor && (
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">
                    <span 
                      className="w-2 h-2 rounded-full border border-black/10 inline-block"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <span>{selectedColor.name}</span>
                  </span>
                )}

                {selectedStorage && (
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">
                    {selectedStorage.name}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Financial & EMI Breakdown Card */}
        <div className="bg-white rounded-2xl border border-[#ECEFF6] p-4 shadow-card">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Selected EMI Plan Details
            </span>
            {selectedEmiPlan.isNoCost && (
              <span className="px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#059669] text-[10px] font-bold">
                0% No-Cost EMI
              </span>
            )}
          </div>

          {/* Monthly EMI Highlight Banner */}
          <div className="bg-gradient-to-r from-[#F5F3FF] to-purple-50/40 rounded-xl p-3.5 border border-[#DDD6FE] mb-4">
            <div className="text-xs text-slate-500 font-medium">Monthly Installment</div>
            <div className="flex items-baseline space-x-1.5 mt-0.5">
              <span className="text-2xl font-black text-[#6D28D9]">
                ₹{selectedEmiPlan.monthlyAmount?.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-600 font-bold">
                / month for {selectedEmiPlan.tenureMonths} months
              </span>
            </div>
          </div>

          {/* Detailed Itemized Line Items */}
          <div className="space-y-2.5 text-xs">
            <div className="flex items-center justify-between text-slate-600">
              <span>Total Product Value</span>
              <span className="font-bold text-slate-900">
                ₹{currentPrice.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex items-center justify-between text-slate-600">
              <span>Upfront Down Payment</span>
              <span className="font-bold text-[#059669]">
                ₹{selectedEmiPlan.downPayment || 0} (Zero)
              </span>
            </div>

            <div className="flex items-center justify-between text-slate-600">
              <span>EMI Duration</span>
              <span className="font-bold text-slate-900">
                {selectedEmiPlan.tenureMonths} Months
              </span>
            </div>

            <div className="flex items-center justify-between text-slate-600">
              <span>Interest Rate</span>
              <span className="font-bold text-[#059669]">
                {selectedEmiPlan.isNoCost ? '0% (No-Cost EMI)' : `${selectedEmiPlan.interestRate}% p.a.`}
              </span>
            </div>

            <div className="flex items-center justify-between text-slate-600">
              <span>Processing Fee</span>
              <span className="font-bold text-slate-900">
                {selectedEmiPlan.processingFee ? `₹${selectedEmiPlan.processingFee}` : '₹0 (Waived)'}
              </span>
            </div>

            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Due Today</span>
              <span className="font-extrabold text-[#6D28D9] text-sm">
                ₹0.00
              </span>
            </div>
          </div>
        </div>

        {/* 1Fi Auto-Debit & Pledge Schedule */}
        <div className="bg-white rounded-2xl border border-[#ECEFF6] p-4 shadow-card space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
            <Calendar className="w-4 h-4 text-[#6D28D9]" />
            <span>Repayment Schedule Information</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            First installment will be auto-debited on the 5th of next month. Your pledged mutual fund units will continue compounding in the market.
          </p>
        </div>
      </main>

      {/* Sticky Bottom CTA pinned inside 480px width */}
      <div className="fixed bottom-0 w-full max-w-[480px] z-40 bg-white border-t border-[#ECEFF6] p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between space-x-3">
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Total payable</div>
            <div className="text-base font-black text-slate-900">
              ₹{(selectedEmiPlan.monthlyAmount * selectedEmiPlan.tenureMonths).toLocaleString('en-IN')}
            </div>
          </div>

          <button
            onClick={handleProceed}
            disabled={isProcessing}
            className="flex-1 py-3.5 px-6 rounded-full bg-[#6D28D9] hover:bg-[#5B1CB8] text-white text-xs font-bold shadow-float active:scale-95 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
          >
            {isProcessing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Submitting to 1Fi...</span>
              </>
            ) : (
              <>
                <span>Proceed with 1Fi Plan</span>
                <Sparkles className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Success Confirmation Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 stroke-[2.5]" />
            </div>

            <span className="px-3 py-1 rounded-full bg-[#D1FAE5] text-[#059669] text-[10px] font-bold uppercase tracking-wide">
              Application Approved
            </span>

            <h3 className="text-lg font-black text-slate-900 mt-2 mb-1">
              EMI Plan Confirmed!
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Your order for <strong>{product.name} ({selectedStorage?.name})</strong> has been successfully booked on <strong>{selectedEmiPlan.tenureMonths} Months EMI</strong> at <strong>₹{selectedEmiPlan.monthlyAmount?.toLocaleString('en-IN')}/month</strong>.
            </p>

            <div className="bg-[#F8F9FD] rounded-xl p-3 text-left space-y-1 text-[11px] text-slate-600 mb-5 border border-[#ECEFF6]">
              <div className="flex justify-between">
                <span className="text-slate-400">Order Reference:</span>
                <span className="font-mono font-bold text-slate-800">1FI-MKT-9428</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Pledge Security:</span>
                <span className="font-bold text-[#059669]">Mutual Funds Verified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">First Due Date:</span>
                <span className="font-bold text-slate-800">5th Next Month</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => navigate('/shop/marketplace')}
                className="w-full py-3 rounded-full bg-[#6D28D9] text-white text-xs font-bold shadow-md hover:bg-[#5B1CB8] transition active:scale-95"
              >
                Continue Shopping on 1Fi
              </button>
              
              <button
                onClick={() => navigate('/shop')}
                className="w-full py-2.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition"
              >
                Back to Shop Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
