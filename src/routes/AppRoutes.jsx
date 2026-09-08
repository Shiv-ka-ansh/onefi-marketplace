import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ShopPage } from '../pages/ShopPage';
import { PlaceholderPage } from '../pages/PlaceholderPage';
import { MarketplacePage } from '../pages/MarketplacePage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { PlanSummaryPage } from '../pages/PlanSummaryPage';
import { EmiDuesPage } from '../pages/EmiDuesPage';
import { LimitPage } from '../pages/LimitPage';
import { ProfilePage } from '../pages/ProfilePage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/shop" replace />} />
      
      {/* Home */}
      <Route path="/home" element={<HomePage />} />
      
      {/* Shop & Marketplace */}
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/top-brands" element={<PlaceholderPage title="Top Brands" />} />
      <Route path="/shop/nearby-stores" element={<PlaceholderPage title="Nearby Stores" />} />
      <Route path="/shop/marketplace" element={<MarketplacePage />} />
      <Route path="/shop/marketplace/product/:productSlug" element={<ProductDetailsPage />} />
      <Route path="/shop/marketplace/product/:productSlug/review" element={<PlanSummaryPage />} />
      
      {/* EMI & Limits */}
      <Route path="/emi-dues" element={<EmiDuesPage />} />
      <Route path="/limit" element={<LimitPage />} />
      
      {/* Profile */}
      <Route path="/profile" element={<ProfilePage />} />
      
      <Route path="*" element={<Navigate to="/shop" replace />} />
    </Routes>
  );
};
