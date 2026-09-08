import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

const API_LATENCY = 350;

export const getCategories = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...categoriesData]);
    }, 100);
  });
};

export const getProducts = async ({ category = 'all', search = '' } = {}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let list = [...productsData];

      if (category && category !== 'all') {
        list = list.filter(p => p.category.toLowerCase() === category.toLowerCase());
      }

      if (search && search.trim()) {
        const q = search.toLowerCase().trim();
        list = list.filter(p => 
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q)
        );
      }

      resolve(list);
    }, API_LATENCY);
  });
};

export const getProductById = async (slugOrId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = productsData.find(p => p.slug === slugOrId || p.id === slugOrId);
      if (!item) {
        reject(new Error("Product not found"));
        return;
      }

      resolve({ ...item });
    }, API_LATENCY);
  });
};

export const calculateVariantEmiPlans = (basePrice, priceDelta, basePlans = []) => {
  const finalPrice = basePrice + (priceDelta || 0);

  return basePlans.map(plan => {
    let monthlyAmount;
    if (plan.isNoCost) {
      monthlyAmount = Math.round(finalPrice / plan.tenureMonths);
    } else {
      const r = (plan.interestRate / 12) / 100;
      const n = plan.tenureMonths;
      const emi = (finalPrice * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      monthlyAmount = Math.round(emi);
    }

    return {
      ...plan,
      monthlyAmount,
      totalAmount: (monthlyAmount * plan.tenureMonths) + (plan.processingFee || 0)
    };
  });
};

export const getRelatedProducts = async (currentId, category, limit = 4) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pool = productsData.filter(p => p.id !== currentId && p.slug !== currentId);
      let related = pool.filter(p => p.category === category);
      if (related.length < limit) {
        const others = pool.filter(p => p.category !== category);
        related = [...related, ...others];
      }
      resolve(related.slice(0, limit));
    }, 150);
  });
};

