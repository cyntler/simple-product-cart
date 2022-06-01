import { ref } from 'vue';

export const useCart = () => {
  const cartItems = ref([]);
  const isSummaryOpen = ref(false);

  const toggleSummary = () => {
    isSummaryOpen.value = !isSummaryOpen.value;
  };

  const closeSummary = () => {
    isSummaryOpen.value = false;
  };

  const addItem = (item) => {
    item.quantity -= 1;
    item.added = true;
    cartItems.value.push({ ...item, quantity: 1 });
    isSummaryOpen.value = true;
  };

  const removeItem = (item) => {
    item.quantity += 1;
    item.added = false;
    cartItems.value.splice(
      cartItems.value.findIndex((i) => i.id === item.id),
      1
    );
    isSummaryOpen.value = true;
  };

  return {
    cartItems,
    isSummaryOpen,
    toggleSummary,
    closeSummary,
    addItem,
    removeItem,
  };
};
