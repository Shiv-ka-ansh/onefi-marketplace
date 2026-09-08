import React from 'react';
import { Check } from 'lucide-react';

export const VariantSelector = ({ 
  variants, 
  selectedColor, 
  onSelectColor, 
  selectedStorage, 
  onSelectStorage 
}) => {
  if (!variants) return null;

  const { colors = [], storage = [] } = variants;

  return (
    <div className="space-y-4">
      {/* Color Selection */}
      {colors.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Color
            </span>
            <span className="text-xs font-bold text-slate-800">
              {selectedColor?.name || 'Select Color'}
            </span>
          </div>

          <div className="flex items-center space-x-2.5 flex-wrap gap-y-2">
            {colors.map((color) => {
              const isSelected = selectedColor?.id === color.id;
              return (
                <button
                  key={color.id}
                  onClick={() => onSelectColor(color)}
                  className={`relative flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all active:scale-95 ${
                    isSelected 
                      ? 'border-[#6D28D9] bg-[#F5F3FF] text-[#6D28D9] ring-1 ring-[#6D28D9]' 
                      : 'border-[#ECEFF6] bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span 
                    className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs inline-block"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span>{color.name}</span>
                  {isSelected && <Check className="w-3 h-3 text-[#6D28D9] stroke-[2.5]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Storage / Spec Selection */}
      {storage.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Storage / Configuration
            </span>
            <span className="text-xs font-bold text-slate-800">
              {selectedStorage?.name}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {storage.map((item) => {
              const isSelected = selectedStorage?.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectStorage(item)}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all active:scale-95 ${
                    isSelected
                      ? 'border-[#6D28D9] bg-[#F5F3FF] text-[#6D28D9] ring-2 ring-[#6D28D9]/20 shadow-xs'
                      : 'border-[#ECEFF6] bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold">{item.name}</span>
                  {item.priceDelta > 0 ? (
                    <span className="text-[10px] text-[#059669] font-semibold mt-0.5">
                      +₹{item.priceDelta.toLocaleString('en-IN')}
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-400 mt-0.5">
                      Base Model
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
