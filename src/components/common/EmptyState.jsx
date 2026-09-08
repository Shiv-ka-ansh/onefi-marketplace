import React from 'react';
import { PackageSearch, XCircle } from 'lucide-react';

export const EmptyState = ({ 
  title = "No products found", 
  subtitle = "We couldn't find any products matching your search or filters.",
  onClear
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 my-6 text-center bg-white rounded-2xl border border-[#ECEFF6] shadow-card max-w-sm mx-auto">
      <div className="w-14 h-14 rounded-full bg-[#F5F3FF] text-[#6D28D9] flex items-center justify-center mb-4">
        <PackageSearch className="w-7 h-7" />
      </div>

      <h3 className="text-base font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-xs text-slate-500 mb-5 leading-relaxed max-w-xs">
        {subtitle}
      </p>

      {onClear && (
        <button
          onClick={onClear}
          className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#F5F3FF] hover:bg-[#EDE9FE] text-[#6D28D9] text-xs font-semibold border border-[#DDD6FE] active:scale-95 transition-all"
        >
          <XCircle className="w-3.5 h-3.5" />
          <span>Clear Filters</span>
        </button>
      )}
    </div>
  );
};
