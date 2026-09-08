# 1Fi Marketplace

Standalone front-end implementation of the 1Fi Marketplace and EMI selection flow for the 1Fi SDE Intern evaluation.

The application reproduces the 1Fi mobile user journey as a responsive mobile-first web app, matching the brand visual design, color tokens, and EMI calculations.

## Overview

The application covers the complete customer journey from shop exploration to EMI plan confirmation:

1. **Shop Page (`/shop`)**
   - Top Brands (placeholder)
   - Nearby Stores (placeholder)
   - 1Fi Marketplace (active flow)

2. **Marketplace Catalog (`/shop/marketplace`)**
   - Category filtering (All, Mobiles, Laptops, TVs, Audio, Wearables)
   - Real-time text search across products and brands
   - 0% No-Cost EMI filter toggle and price sorting
   - Blinkit-style swipeable multi-image preview cards with pagination indicators
   - Shimmer skeleton loaders and retry handling for network errors

3. **Product Details (`/shop/marketplace/product/:productSlug`)**
   - High-resolution multi-angle image gallery with thumbnail switcher
   - Color and storage variant selection with dynamic price updates
   - Interactive EMI plan selector with live recalculation across tenures (3, 6, 9, 12, 18 months)
   - Technical specifications table and product feature breakdown
   - Similar products recommendations

4. **Plan Review & Confirmation (`/shop/marketplace/product/:productSlug/review`)**
   - Order and variant summary
   - Monthly installment schedule and auto-debit details
   - Instant approval confirmation dialog

5. **Additional Navigation Tabs**
   - Home, EMI Dues, Portfolio Limit, and User Profile

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router v6
- Lucide React

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone <repository-url>
cd onefi-marketplace
npm install
```

### Development

```bash
npm run dev
```

The app will run locally at `http://localhost:3000` (or `http://localhost:3001` if port 3000 is occupied).

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/         # TopHeader, BottomNav, ErrorState, EmptyState
│   └── marketplace/    # ProductCard, CategoryChip, SearchBar, VariantSelector, EmiPlanCard
├── data/               # products.json, categories.json
├── hooks/              # useProducts, useProduct
├── pages/              # ShopPage, MarketplacePage, ProductDetailsPage, PlanSummaryPage, etc.
├── routes/             # AppRoutes
├── services/           # marketplaceApi (mock service layer with realistic latency)
├── App.jsx             # Root layout container (centered max-w-[480px] mobile viewport)
├── main.jsx            # Application bootstrap
└── index.css           # Global typography and base styles
```
