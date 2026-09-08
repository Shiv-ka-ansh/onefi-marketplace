import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export const ErrorState = ({ 
  message = "Couldn't load products. Please check your connection and try again.", 
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 my-8 text-center bg-white rounded-2xl border border-red-100 shadow-card max-w-sm mx-auto">
      <div className="w-14 h-14 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4">
        <AlertTriangle className="w-7 h-7" />
      </div>
      
      <h3 className="text-lg font-bold text-slate-900 mb-1">Couldn't load products</h3>
      <p className="text-xs text-slate-500 mb-6 leading-relaxed">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#6D28D9] hover:bg-[#5B1CB8] text-white text-xs font-semibold shadow-md active:scale-95 transition-all"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
};
