import { watchEffect } from 'vue';

import { useFetch } from '../utils/useFetch';
import { useStore } from './useStore';

export const useProductsGet = () => {
  const { isProductsLoading, products } = useStore();
  const { data, isLoading } = useFetch('/api/v1/products', {
    initialData: [],
    isInitialFetching: true,
    delay: 500,
  });

  watchEffect(() => {
    isProductsLoading.value = isLoading;
    products.value = data;
  });

  return {
    data,
    isLoading,
  };
};
