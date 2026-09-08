import { useState, useEffect, useCallback } from 'react';
import { getProducts } from '../services/marketplaceApi';

export const useProducts = ({ category = 'all', search = '' } = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryTrigger, setRetryTrigger] = useState(0);

  const retry = useCallback(() => {
    setRetryTrigger(prev => prev + 1);
  }, []);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    getProducts({ category, search })
      .then((data) => {
        if (isMounted) {
          setProducts(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Failed to load products');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [category, search, retryTrigger]);

  return {
    products,
    loading,
    error,
    retry,
  };
};
