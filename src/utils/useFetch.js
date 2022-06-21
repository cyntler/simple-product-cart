import { onMounted, ref } from 'vue';

export const useFetch = (
  url,
  { isInitialFetching = false, delay = 0, initialData = null }
) => {
  const data = ref(initialData);
  const isLoading = ref(isInitialFetching);
  const error = ref(null);

  const fetchData = () => {
    isLoading.value = true;

    setTimeout(async () => {
      try {
        const res = await fetch(url);
        data.value = await res.json();
      } catch (err) {
        error.value = err;
      } finally {
        isLoading.value = false;
      }
    }, delay);
  };

  onMounted(() => {
    if (isInitialFetching) {
      fetchData();
    }
  });

  return {
    data,
    isLoading,
    error,
    fetchData,
  };
};
