import { reactive, toRefs } from 'vue';

const store = reactive({
  isProductsLoading: true,
  isSummaryOpen: false,
  products: [],
  cartItems: [],
});

export const useStore = () => {
  const initProducts = (products) => {
    store.products = products;
  };

  const toggleSummary = () => {
    store.isSummaryOpen = !store.isSummaryOpen;
  };

  const addItemToCart = (itemId) => {
    const productIndex = store.products.findIndex((p) => p.id === itemId);
    if (productIndex > -1) {
      store.cartItems.push({
        ...store.products[productIndex],
        quantity: 1,
        maxQuantity: store.products[productIndex].quantity,
      });
      store.products[productIndex].quantity -= 1;
      store.products[productIndex].added = true;
      store.isSummaryOpen = true;
    }
  };

  const removeItemFromCart = (itemId) => {
    const cartItemIndex = store.cartItems.findIndex((i) => i.id === itemId);
    if (cartItemIndex > -1) {
      store.products[
        store.products.findIndex((p) => p.id === itemId)
      ].quantity = store.cartItems[cartItemIndex].maxQuantity;
      store.products[
        store.products.findIndex((p) => p.id === itemId)
      ].added = false;
      store.cartItems.splice(cartItemIndex, 1);
      store.isSummaryOpen = true;
    }
  };

  const plusQuantity = (itemId) => {
    store.products[
      store.products.findIndex((p) => p.id === itemId)
    ].quantity -= 1;
    store.cartItems[
      store.cartItems.findIndex((p) => p.id === itemId)
    ].quantity += 1;
  };

  const minusQuantity = (itemId) => {
    store.products[
      store.products.findIndex((p) => p.id === itemId)
    ].quantity += 1;
    store.cartItems[
      store.cartItems.findIndex((p) => p.id === itemId)
    ].quantity -= 1;
  };

  const closeSummary = () => {
    store.isSummaryOpen = false;
  };

  return {
    ...toRefs(store),
    initProducts,
    toggleSummary,
    addItemToCart,
    removeItemFromCart,
    plusQuantity,
    minusQuantity,
    closeSummary,
  };
};
