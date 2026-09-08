import React from 'react';
import { Sparkles, Smartphone, Laptop, Tv, Headphones, Watch } from 'lucide-react';

const iconMap = {
  Sparkles,
  Smartphone,
  Laptop,
  Tv,
  Headphones,
  Watch
};

export const CategoryChip = ({ category, isSelected, onClick }) => {
  const IconComponent = iconMap[category.icon] || Sparkles;

  return (
    <button
      onClick={() => onClick(category.id)}
      className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 active:scale-95 ${
        isSelected
          ? 'bg-[#6D28D9] text-white shadow-md shadow-[#6D28D9]/25 border border-[#6D28D9]'
          : 'bg-white text-slate-600 border border-[#ECEFF6] hover:border-slate-300 hover:text-slate-900 shadow-xs'
      }`}
    >
      <IconComponent className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#6D28D9]'}`} />
      <span>{category.name}</span>
    </button>
  );
};
