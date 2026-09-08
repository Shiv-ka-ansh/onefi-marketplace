import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({ 
  value, 
  onChange, 
  onClear, 
  placeholder = "Search iPhone, MacBook, Sony..." 
}) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
        <Search className="w-4 h-4 text-[#6D28D9]" />
      </div>
      
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-9 py-2.5 bg-[#F8F9FD] focus:bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm rounded-2xl border border-[#ECEFF6] focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all"
      />

      {value && (
        <button
          onClick={onClear}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-700"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
