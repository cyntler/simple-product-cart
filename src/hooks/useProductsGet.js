import { useFetch } from './useFetch';

export const useProductsGet = () => {
  const { data: products, isLoading } = useFetch('/api/v1/products', {
    initialData: [],
    isInitialFetching: true,
    delay: 500,
  });

  return {
    products,
    isLoading,
  };
};
