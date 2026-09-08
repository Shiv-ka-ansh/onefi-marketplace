import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Bell, MapPin } from 'lucide-react';

export const TopHeader = ({ 
  title, 
  showBack = false, 
  showLocation = false, 
  locationText = "Jhansi",
  rightAction = null 
}) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#ECEFF6] px-4 py-3 flex items-center justify-between transition-all">
      <div className="flex items-center space-x-2.5">
        {showBack ? (
          <button 
            onClick={() => navigate(-1)} 
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition active:scale-95"
            aria-label="Go back"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        ) : (
          <Link to="/shop" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#5B1CB8] to-[#7C3AED] flex items-center justify-center text-white font-black text-xs shadow-sm">
              1Fi
            </div>
            <span className="font-black text-lg tracking-tight text-slate-900">1Fi</span>
          </Link>
        )}

        {title && (
          <h1 className="font-bold text-slate-900 text-sm sm:text-base tracking-tight truncate max-w-[180px]">
            {title}
          </h1>
        )}
      </div>

      <div className="flex items-center space-x-2">
        {showLocation && (
          <button className="flex items-center space-x-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F5F3FF] text-[#6D28D9] border border-[#DDD6FE] hover:bg-[#EDE9FE] transition">
            <MapPin className="w-3.5 h-3.5 text-[#6D28D9]" />
            <span>{locationText}</span>
            <span className="text-[10px]">▼</span>
          </button>
        )}

        {rightAction || (
          <button 
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
          </button>
        )}
      </div>
    </header>
  );
};
