import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TopHeader } from '../components/common/TopHeader';
import { VariantSelector } from '../components/marketplace/VariantSelector';
import { EmiPlanCard } from '../components/marketplace/EmiPlanCard';
import { ProductCard } from '../components/marketplace/ProductCard';
import { ErrorState } from '../components/common/ErrorState';
import { useProduct } from '../hooks/useProduct';
import { getRelatedProducts } from '../services/marketplaceApi';
import { 
  Star, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  CheckCircle, 
  Truck, 
  RotateCcw, 
  Award, 
  Box, 
  FileText,
  ChevronRight
} from 'lucide-react';

export const ProductDetailsPage = () => {
  const { productId, productSlug } = useParams();
  const slugOrId = productSlug || productId;
  const navigate = useNavigate();

  const {
    product,
    loading,
    error,
    currentPrice,
    selectedColor,
    setSelectedColor,
    selectedStorage,
    handleStorageChange,
    selectedEmiPlan,
    setSelectedEmiPlan,
    calculatedEmiPlans,
  } = useProduct(slugOrId);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Fetch suggested / related products and scroll to top on product change
  useEffect(() => {
    if (product) {
      getRelatedProducts(product.id, product.category, 4).then(setRelatedProducts);
      setActiveImageIndex(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [product?.id]);

  const imageList = product?.images && product.images.length > 0 
    ? product.images 
    : (product?.image ? [product.image] : []);

  const handleContinue = () => {
    if (!selectedEmiPlan) return;

    navigate(`/shop/marketplace/product/${product?.slug || slugOrId}/review`, {
      state: {
        product,
        selectedColor,
        selectedStorage,
        currentPrice,
        selectedEmiPlan,
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FD]">
        <TopHeader title="Product Details" showBack={true} />
        <div className="p-4 space-y-4">
          <div className="w-full h-64 rounded-3xl animate-shimmer" />
          <div className="w-2/3 h-6 rounded-md animate-shimmer" />
          <div className="w-1/3 h-8 rounded-md animate-shimmer" />
          <div className="w-full h-24 rounded-2xl animate-shimmer" />
          <div className="w-full h-32 rounded-2xl animate-shimmer" />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-[#F8F9FD]">
        <TopHeader title="Product Details" showBack={true} />
        <div className="p-4">
          <ErrorState message={error || "Product not found"} onRetry={() => window.location.reload()} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-32 flex flex-col bg-[#F8F9FD]">
      <TopHeader title={product.name} showBack={true} />

      <main className="flex-1 p-4 space-y-4">
        {/* Product Image Stage */}
        <div className="relative bg-white rounded-3xl border border-[#ECEFF6] p-5 flex flex-col items-center justify-center shadow-card overflow-hidden">
          <div className="w-full h-60 flex items-center justify-center">
            <img 
              src={imageList[activeImageIndex] || product.image} 
              alt={product.name}
              className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.target.src = '/products/iphone-16.jpg';
              }}
            />
          </div>

          {/* Multiple Angle Thumbnails */}
          {imageList.length > 1 && (
            <div className="flex items-center space-x-2 mt-3 mb-1">
              {imageList.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-11 h-11 rounded-xl border p-1 bg-slate-50 transition-all cursor-pointer ${
                    activeImageIndex === idx 
                      ? 'border-[#6D28D9] ring-2 ring-[#6D28D9]/20 shadow-xs' 
                      : 'border-slate-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt="" 
                    className="w-full h-full object-contain" 
                    onError={(e) => {
                      e.target.src = '/products/iphone-16.jpg';
                    }}
                  />
                </button>
              ))}
            </div>
          )}

          {/* 1Fi Pre-approved limit badge */}
          <div className="mt-2 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#EDE9FE] text-[#6D28D9] text-[11px] font-bold">
            <Zap className="w-3.5 h-3.5 fill-[#6D28D9]" />
            <span>Pre-approved with 1Fi Mutual Funds Limit</span>
          </div>
        </div>

        {/* Product Header & Pricing */}
        <div className="bg-white rounded-2xl border border-[#ECEFF6] p-4 shadow-card">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-bold uppercase tracking-wider text-slate-500">
              {product.brand}
            </span>
            <div className="flex items-center space-x-1 text-amber-500 font-semibold bg-amber-50 px-2 py-0.5 rounded-md">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 text-[10px]">({product.reviewCount})</span>
            </div>
          </div>

          <h1 className="text-lg font-extrabold text-slate-900 leading-snug">
            {product.name}
          </h1>

          <div className="flex items-baseline space-x-2 mt-2">
            <span className="text-2xl font-black text-slate-900">
              ₹{currentPrice.toLocaleString('en-IN')}
            </span>
            {product.mrp && product.mrp > currentPrice && (
              <span className="text-xs text-slate-400 line-through">
                ₹{product.mrp.toLocaleString('en-IN')}
              </span>
            )}
            {selectedStorage?.priceDelta > 0 && (
              <span className="text-[11px] text-[#059669] font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                +{selectedStorage.name} upgrade
              </span>
            )}
          </div>

          {/* Quick Assurance Tags */}
          <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-100 text-[10px] font-semibold text-slate-600">
            <div className="flex items-center space-x-1">
              <Truck className="w-3.5 h-3.5 text-[#6D28D9]" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="w-3.5 h-3.5 text-[#6D28D9]" />
              <span>100% Genuine</span>
            </div>
            <div className="flex items-center space-x-1">
              <RotateCcw className="w-3.5 h-3.5 text-[#6D28D9]" />
              <span>7 Days Return</span>
            </div>
          </div>
        </div>

        {/* Selectable Variants Section */}
        <div className="bg-white rounded-2xl border border-[#ECEFF6] p-4 shadow-card">
          <h2 className="text-sm font-bold text-slate-900 mb-3 flex items-center space-x-1.5">
            <Sparkles className="w-4 h-4 text-[#6D28D9]" />
            <span>Select Product Variant</span>
          </h2>

          <VariantSelector
            variants={product.variants}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
            selectedStorage={selectedStorage}
            onSelectStorage={handleStorageChange}
          />
        </div>

        {/* Selectable EMI Plans Section */}
        <div className="bg-white rounded-2xl border border-[#ECEFF6] p-4 shadow-card">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Choose Your EMI Plan
              </h2>
              <p className="text-[11px] text-slate-500">
                Backed by 1Fi Mutual Fund Credit • Select any plan to continue
              </p>
            </div>
          </div>

          <div className="space-y-2.5">
            {calculatedEmiPlans.map((plan) => (
              <EmiPlanCard
                key={plan.id}
                plan={plan}
                isSelected={selectedEmiPlan?.id === plan.id}
                onSelect={setSelectedEmiPlan}
              />
            ))}
          </div>
        </div>

        {/* Rich Product Description & Detailed Specifications Card */}
        <div className="bg-white rounded-2xl border border-[#ECEFF6] p-4 shadow-card space-y-4">
          <div className="flex items-center space-x-2 text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
            <FileText className="w-4 h-4 text-[#6D28D9]" />
            <span>Product Description & Specifications</span>
          </div>

          {/* Detailed Narrative Description */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Overview
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Feature Highlights */}
          {product.highlights && product.highlights.length > 0 && (
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Key Highlights
              </span>
              <div className="grid grid-cols-1 gap-2">
                {product.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-2 text-xs text-slate-700 bg-[#F8F9FD] p-2 rounded-xl">
                    <CheckCircle className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Itemized Technical Specifications Table */}
          <div className="pt-2 border-t border-slate-100 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Technical Specifications
              </span>
              <span className="text-[10px] font-bold text-[#6D28D9] bg-purple-50 px-2 py-0.5 rounded-full">
                Verified Specs
              </span>
            </div>

            <div className="bg-[#F8F9FD] rounded-xl p-3 divide-y divide-slate-200/60 text-xs">
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Brand</span>
                <span className="font-bold text-slate-900">{product.brand}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Category</span>
                <span className="font-bold text-slate-900 capitalize">{product.category}</span>
              </div>

              {/* Dynamic Product Specs from JSON */}
              {product.specs && Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 gap-4">
                  <span className="text-slate-500 font-medium shrink-0">{key}</span>
                  <span className="font-semibold text-slate-800 text-right">{value}</span>
                </div>
              ))}

              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Selected Color</span>
                <span className="font-bold text-slate-900">{selectedColor?.name || 'Default'}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Storage / Edition</span>
                <span className="font-bold text-slate-900">{selectedStorage?.name || 'Standard'}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Replacement Policy</span>
                <span className="font-bold text-[#059669]">7 Days Assured Replacement</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1Fi Mutual Funds Advantage Banner */}
        <div className="p-3.5 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-start space-x-3 text-xs text-slate-700">
          <ShieldCheck className="w-5 h-5 text-[#6D28D9] flex-shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-[#6D28D9] block mb-0.5">1Fi Credit Advantage:</strong>
            <p className="text-[11px] leading-relaxed text-purple-950 font-medium">
              Your pledged mutual fund portfolio continues earning market compounding returns while you comfortably pay monthly EMIs at 0% interest.
            </p>
          </div>
        </div>

        {/* Suggestions / Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-[#6D28D9]" />
                  <span>Similar Products You May Like</span>
                </h3>
                <p className="text-[11px] text-slate-500">
                  Popular electronics on 0% No-Cost EMI
                </p>
              </div>
              <span className="text-xs font-bold text-[#6D28D9] flex items-center">
                <span>{relatedProducts.length} items</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Sticky Bottom Bar with Proceed CTA */}
      <div className="fixed bottom-0 w-full max-w-[480px] z-40 bg-white border-t border-[#ECEFF6] p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between space-x-3">
          <div>
            {selectedEmiPlan ? (
              <div>
                <div className="text-[10px] uppercase font-bold text-[#059669]">
                  {selectedEmiPlan.isNoCost ? 'No-Cost EMI Selected' : `${selectedEmiPlan.interestRate}% Interest Plan`}
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-lg font-extrabold text-[#6D28D9]">
                    ₹{selectedEmiPlan.monthlyAmount?.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-slate-500">/ mo</span>
                  <span className="text-xs font-semibold text-slate-700">
                    ({selectedEmiPlan.tenureMonths}m)
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold text-slate-400">
                  No EMI Plan Selected
                </span>
                <p className="text-[11px] text-slate-400">
                  Select a plan above to continue
                </p>
              </div>
            )}
          </div>

          <button
            onClick={handleContinue}
            disabled={!selectedEmiPlan}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold transition-all duration-200 active:scale-95 ${
              selectedEmiPlan 
                ? 'bg-[#6D28D9] hover:bg-[#5B1CB8] text-white shadow-float cursor-pointer' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
