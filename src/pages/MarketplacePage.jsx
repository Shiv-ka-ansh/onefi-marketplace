import React, { useState, useEffect, useMemo } from 'react';
import { TopHeader } from '../components/common/TopHeader';
import { BottomNav } from '../components/common/BottomNav';
import { SearchBar } from '../components/marketplace/SearchBar';
import { CategoryChip } from '../components/marketplace/CategoryChip';
import { ProductCard } from '../components/marketplace/ProductCard';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';
import { EmptyState } from '../components/common/EmptyState';
import { useProducts } from '../hooks/useProducts';
import { getCategories } from '../services/marketplaceApi';
import { Sparkles, ArrowUpDown, Zap } from 'lucide-react';

export const MarketplacePage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyNoCostEmi, setOnlyNoCostEmi] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const { products, loading, error, retry } = useProducts({
    category: selectedCategory,
    search: searchQuery
  });

  const processedProducts = useMemo(() => {
    let result = [...products];

    if (onlyNoCostEmi) {
      result = result.filter(p => p.emiPlans?.some(plan => plan.isNoCost));
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.basePrice - b.basePrice);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.basePrice - a.basePrice);
    }

    return result;
  }, [products, onlyNoCostEmi, sortBy]);

  return (
    <div className="min-h-screen pb-32 flex flex-col bg-[#F8F9FD]">
      {/* 1Fi Top Branded Header */}
      <TopHeader title="1Fi Marketplace" showBack={true} />

      <main className="flex-1">
        {/* Promotional Fintech Strip */}
        <div className="px-4 pt-3">
          <div className="relative rounded-2xl bg-gradient-to-r from-[#2B0852] via-[#4C1D95] to-[#6D28D9] text-white p-3.5 shadow-sm overflow-hidden">
            <div className="relative z-10 flex items-center justify-between">
              <div className="space-y-0.5 max-w-[280px]">
                <div className="inline-flex items-center space-x-1 text-[9px] font-extrabold uppercase tracking-wider text-purple-200">
                  <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
                  <span>Mutual Funds Backed Credit</span>
                </div>
                <h2 className="text-xs sm:text-sm font-extrabold leading-snug text-white">
                  Shop Electronics on 0% No-Cost EMI
                </h2>
                <div className="flex items-center space-x-2 text-[10px] text-purple-100/80 pt-0.5">
                  <span>₹0 Down Payment</span>
                  <span>•</span>
                  <span>Instant Approval</span>
                </div>
              </div>

              <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Search & Categories Container */}
        <div className="px-4 pt-3 pb-2 space-y-2.5">
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
            placeholder="Search iPhones, MacBooks, Sony..."
          />

          {/* Category Chips */}
          <div className="relative">
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-0.5">
              {categories.map((cat) => (
                <CategoryChip
                  key={cat.id}
                  category={cat}
                  isSelected={selectedCategory === cat.id}
                  onClick={setSelectedCategory}
                />
              ))}
            </div>
          </div>

          {/* Quick Filters & Sorting */}
          <div className="flex items-center justify-between pt-1 text-xs">
            <button
              onClick={() => setOnlyNoCostEmi(!onlyNoCostEmi)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all active:scale-95 ${
                onlyNoCostEmi 
                  ? 'bg-[#EDE9FE] text-[#6D28D9] border-[#6D28D9]' 
                  : 'bg-white text-slate-600 border-[#ECEFF6] hover:border-slate-300'
              }`}
            >
              <Sparkles className={`w-3 h-3 ${onlyNoCostEmi ? 'text-[#6D28D9] fill-[#6D28D9]' : 'text-slate-400'}`} />
              <span>0% No-Cost EMI Only</span>
            </button>

            <button
              onClick={() => {
                if (sortBy === 'default') setSortBy('price-asc');
                else if (sortBy === 'price-asc') setSortBy('price-desc');
                else setSortBy('default');
              }}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full bg-white text-slate-600 border border-[#ECEFF6] hover:border-slate-300 text-[11px] font-medium"
            >
              <ArrowUpDown className="w-3 h-3 text-slate-400" />
              <span>
                {sortBy === 'price-asc' ? 'Price: Low to High' : sortBy === 'price-desc' ? 'Price: High to Low' : 'Sort by Price'}
              </span>
            </button>
          </div>
        </div>

        {/* Section Header & Item Count */}
        <div className="px-4 pt-2 pb-1 flex items-center justify-between">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
            {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name || selectedCategory}
          </span>
          
          {!loading && !error && (
            <span className="text-[11px] text-slate-500 font-semibold">
              Showing {processedProducts.length} {processedProducts.length === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>

        {/* Dynamic States */}
        {loading ? (
          <LoadingState count={4} />
        ) : error ? (
          <div className="p-4">
            <ErrorState 
              message={error} 
              onRetry={retry} 
            />
          </div>
        ) : processedProducts.length === 0 ? (
          <div className="p-4">
            <EmptyState 
              title="No products found"
              subtitle={
                searchQuery 
                  ? `No matches found for "${searchQuery}". Try another keyword or reset filters.`
                  : onlyNoCostEmi 
                  ? "No products with 0% No-Cost EMI found in this category." 
                  : "There are no products in this category at the moment."
              }
              onClear={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setOnlyNoCostEmi(false);
                setSortBy('default');
              }}
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 px-4 py-2">
            {processedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      {/* 1Fi Bottom Navigation */}
      <BottomNav />
    </div>
  );
};
