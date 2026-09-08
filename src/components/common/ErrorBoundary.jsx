import React from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("1Fi Application caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/shop/marketplace';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F8F9FD] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 mb-4 shadow-sm">
            <AlertTriangle className="w-8 h-8" />
          </div>
          
          <h2 className="text-lg font-black text-slate-900 mb-2">Something went wrong</h2>
          <p className="text-xs text-slate-500 max-w-xs mb-6 leading-relaxed">
            {this.state.error?.message || "An unexpected error occurred while loading this page."}
          </p>

          <div className="flex items-center space-x-3">
            <button
              onClick={this.handleReset}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#6D28D9] hover:bg-[#5B1CB8] text-white text-xs font-bold shadow-md active:scale-95 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reload Page</span>
            </button>

            <a
              href="/shop"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white border border-[#ECEFF6] hover:bg-slate-50 text-slate-700 text-xs font-bold shadow-sm active:scale-95 transition-all"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Go to Shop</span>
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
