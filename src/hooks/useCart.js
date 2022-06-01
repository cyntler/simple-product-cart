import { ref } from 'vue';

export const useCart = (products) => {
  const cartItems = ref([]);
  const isSummaryOpen = ref(false);

  const toggleSummary = () => {
    isSummaryOpen.value = !isSummaryOpen.value;
  };

  const addItem = (item) => {
    cartItems.value.push({ ...item, quantity: 1, maxQuantity: item.quantity });
    item.quantity -= 1;
    item.added = true;
    isSummaryOpen.value = true;
  };

  const removeItem = (item) => {
    cartItems.value.splice(
      cartItems.value.findIndex((i) => i.id === item.id),
      1
    );
    products.value[
      products.value.findIndex((p) => p.id === item.id)
    ].quantity += 1;
    products.value[
      products.value.findIndex((p) => p.id === item.id)
    ].added = false;
    isSummaryOpen.value = true;
  };

  const plusQuantity = (id) => {
    products.value[products.value.findIndex((p) => p.id === id)].quantity -= 1;
    cartItems.value[
      cartItems.value.findIndex((p) => p.id === id)
    ].quantity += 1;
  };

  const minusQuantity = (id) => {
    products.value[products.value.findIndex((p) => p.id === id)].quantity += 1;
    cartItems.value[
      cartItems.value.findIndex((p) => p.id === id)
    ].quantity -= 1;
  };

  return {
    cartItems,
    isSummaryOpen,
    toggleSummary,
    addItem,
    removeItem,
    plusQuantity,
    minusQuantity,
  };
};
