import { useState, useEffect } from 'react';
import { getProductById, calculateVariantEmiPlans } from '../services/marketplaceApi';

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedEmiPlan, setSelectedEmiPlan] = useState(null);

  const [calculatedEmiPlans, setCalculatedEmiPlans] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    getProductById(productId)
      .then((data) => {
        if (!isMounted) return;
        setProduct(data);

        const defaultColor = data.variants?.colors?.[0] || null;
        const defaultStorage = data.variants?.storage?.[0] || null;
        setSelectedColor(defaultColor);
        setSelectedStorage(defaultStorage);

        const finalPrice = data.basePrice + (defaultStorage?.priceDelta || 0);
        setCurrentPrice(finalPrice);

        const calculated = calculateVariantEmiPlans(
          data.basePrice,
          defaultStorage?.priceDelta || 0,
          data.emiPlans || []
        );
        setCalculatedEmiPlans(calculated);
        setSelectedEmiPlan(null);
        setLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err.message || 'Failed to load product details');
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [productId]);

  // When storage variant changes, recalculate price and EMI plans
  const handleStorageChange = (storage) => {
    setSelectedStorage(storage);
    if (!product) return;

    const newPrice = product.basePrice + (storage?.priceDelta || 0);
    setCurrentPrice(newPrice);

    const updatedPlans = calculateVariantEmiPlans(
      product.basePrice,
      storage?.priceDelta || 0,
      product.emiPlans || []
    );
    setCalculatedEmiPlans(updatedPlans);

    // If an EMI plan was already selected, update its figures
    if (selectedEmiPlan) {
      const matching = updatedPlans.find(p => p.id === selectedEmiPlan.id);
      setSelectedEmiPlan(matching || null);
    }
  };

  return {
    product,
    loading,
    error,
    currentPrice,
    selectedColor,
    setSelectedColor,
    selectedStorage,
    handleStorageChange,
    selectedEmiPlan,
    setSelectedEmiPlan,
    calculatedEmiPlans,
  };
};
