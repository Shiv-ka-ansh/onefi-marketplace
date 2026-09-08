import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Zap, ChevronRight, ChevronLeft } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Use product.images array if available, fallback to single product.image
  const imageList = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  // Find lowest monthly EMI
  const lowestEmi = product.emiPlans && product.emiPlans.length > 0
    ? product.emiPlans.reduce((prev, curr) => prev.monthlyAmount < curr.monthlyAmount ? prev : curr)
    : null;

  const hasNoCostEmi = product.emiPlans?.some(p => p.isNoCost);

  const discountPercent = product.mrp 
    ? Math.round(((product.mrp - product.basePrice) / product.mrp) * 100) 
    : 0;

  // Handle horizontal scroll snap on mobile / touch
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    if (clientWidth > 0) {
      const newIndex = Math.round(scrollLeft / clientWidth);
      if (newIndex !== activeImgIndex && newIndex >= 0 && newIndex < imageList.length) {
        setActiveImgIndex(newIndex);
      }
    }
  };

  // Next / Previous slide buttons for desktop click
  const scrollToImage = (e, index) => {
    e.stopPropagation();
    if (!scrollContainerRef.current) return;
    const clientWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: index * clientWidth,
      behavior: 'smooth'
    });
    setActiveImgIndex(index);
  };

  return (
    <div 
      onClick={() => navigate(`/shop/marketplace/product/${product.slug || product.id}`)}
      className="group bg-white rounded-2xl border border-[#ECEFF6] p-3 flex flex-col justify-between shadow-card hover:shadow-md hover:border-[#DDD6FE] transition-all duration-200 cursor-pointer active:scale-[0.99] select-none"
    >
      <div>
        {/* Dedicated Blinkit-style Swipeable Multi-Image Frame */}
        <div className="relative w-full h-36 rounded-xl bg-slate-50 border border-slate-100 overflow-hidden mb-2.5 shadow-2xs">
          
          {/* Top Badges (z-20 so always on top) */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-20 pointer-events-none">
            {discountPercent > 0 ? (
              <span className="px-1.5 py-0.5 rounded-md bg-emerald-600 text-white text-[9px] font-black tracking-tight shadow-sm">
                {discountPercent}% OFF
              </span>
            ) : <span />}

            {hasNoCostEmi && (
              <span className="px-1.5 py-0.5 rounded-md bg-[#6D28D9] text-white text-[9px] font-extrabold tracking-tight shadow-sm">
                0% EMI
              </span>
            )}
          </div>

          {/* Swipeable / Scrollable Image Gallery (Blinkit style) */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="w-full h-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth relative z-0"
          >
            {imageList.map((imgUrl, idx) => (
              <div
                key={idx}
                className="w-full h-full flex-shrink-0 snap-center p-2.5 flex items-center justify-center"
              >
                <img
                  src={imgUrl}
                  alt={`${product.name} - view ${idx + 1}`}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/products/iphone-16.jpg';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Left Arrow for Desktop / Click navigation */}
          {imageList.length > 1 && activeImgIndex > 0 && (
            <button
              onClick={(e) => scrollToImage(e, activeImgIndex - 1)}
              className="absolute left-1.5 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white/90 text-slate-700 shadow-md flex items-center justify-center hover:bg-white transition opacity-0 group-hover:opacity-100 sm:opacity-80"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Right Arrow for Desktop / Click navigation */}
          {imageList.length > 1 && activeImgIndex < imageList.length - 1 && (
            <button
              onClick={(e) => scrollToImage(e, activeImgIndex + 1)}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white/90 text-slate-700 shadow-md flex items-center justify-center hover:bg-white transition opacity-0 group-hover:opacity-100 sm:opacity-80"
              aria-label="Next image"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Blinkit-style Pagination Indicator Dots */}
          {imageList.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 z-20 flex items-center justify-center space-x-1 pointer-events-none">
              {imageList.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-200 ${
                    activeImgIndex === idx 
                      ? 'w-3.5 bg-[#6D28D9]' 
                      : 'w-1 bg-slate-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Brand & Rating Row */}
        <div className="flex items-center justify-between text-[11px] mb-1">
          <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
            {product.brand}
          </span>
          <div className="flex items-center space-x-0.5 bg-amber-50 px-1.5 py-0.5 rounded-md text-amber-700 font-bold text-[10px]">
            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="font-bold text-slate-900 text-xs line-clamp-2 leading-snug mb-2 group-hover:text-[#6D28D9] transition-colors">
          {product.name}
        </h3>
      </div>

      {/* Pricing & 1Fi EMI Section */}
      <div className="pt-2 border-t border-slate-100 space-y-1.5">
        {/* Selling Price with MRP */}
        <div className="flex items-baseline space-x-1.5">
          <span className="text-sm font-black text-slate-900">
            ₹{product.basePrice.toLocaleString('en-IN')}
          </span>
          {product.mrp && product.mrp > product.basePrice && (
            <span className="text-[10px] text-slate-400 line-through">
              ₹{product.mrp.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* 1Fi Signature EMI Box */}
        {lowestEmi && (
          <div className="w-full p-2 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE] text-[#6D28D9] group-hover:border-[#6D28D9] transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Zap className="w-3 h-3 text-[#6D28D9] fill-[#6D28D9]" />
                <span className="text-[11px] font-extrabold text-[#6D28D9]">
                  ₹{lowestEmi.monthlyAmount.toLocaleString('en-IN')}<span className="text-[9px] font-normal text-slate-500">/mo</span>
                </span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-[#6D28D9] group-hover:translate-x-0.5 transition-transform" />
            </div>

            <div className="flex items-center space-x-1 mt-0.5 text-[9px] text-slate-500 font-medium">
              <span className="text-[#059669] font-bold">
                {lowestEmi.isNoCost ? '0% Interest' : `${lowestEmi.tenureMonths}m`}
              </span>
              <span>•</span>
              <span>₹0 Down</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
