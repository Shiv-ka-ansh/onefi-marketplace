import React from 'react';

export const LoadingSkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-[#ECEFF6] p-3 flex flex-col justify-between shadow-card space-y-3 overflow-hidden">
      <div>
        {/* Product image shimmer */}
        <div className="w-full h-36 rounded-xl animate-shimmer mb-2" />

        {/* Brand & rating skeleton */}
        <div className="flex items-center justify-between mb-1.5">
          <div className="w-14 h-3 rounded animate-shimmer" />
          <div className="w-8 h-3 rounded animate-shimmer" />
        </div>

        {/* Title skeleton */}
        <div className="w-full h-3.5 rounded animate-shimmer mb-1" />
        <div className="w-3/4 h-3.5 rounded animate-shimmer" />
      </div>

      {/* Price & EMI skeleton */}
      <div className="pt-2 border-t border-slate-100 space-y-2">
        <div className="w-20 h-4 rounded animate-shimmer" />
        <div className="w-full h-11 rounded-xl animate-shimmer" />
      </div>
    </div>
  );
};

export const LoadingState = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-2 gap-3 px-4 py-2">
      {Array.from({ length: count }).map((_, index) => (
        <LoadingSkeletonCard key={index} />
      ))}
    </div>
  );
};
