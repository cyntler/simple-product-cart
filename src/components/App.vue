<script setup>
import { computed } from 'vue';

import ProductList from './ProductList.vue';
import Loader from './Loader.vue';
import CartIcon from './CartIcon.vue';
import CartSummaryDrawer from './CartSummaryDrawer.vue';

import { useProductsGet } from '../hooks/useProductsGet';
import { useStore } from '../hooks/useStore';

useProductsGet();
const { isProductsLoading, products, isSummaryOpen, cartItems } = useStore();
const cartItemsCount = computed(() => cartItems.value.length);
</script>

<template>
  <Loader v-if="isProductsLoading" />
  <ProductList v-else-if="products" :products="products" />
  <CartIcon :count="cartItemsCount" />
  <CartSummaryDrawer :open="isSummaryOpen" :items="cartItems" />
</template>

<style lang="scss">
:root {
  --color-white: #ffffff;
  --color-black: #000000;
  --color-orange: #eab25e;
  --color-gray: #f0f0f0;
}

* {
  box-sizing: border-box;
}

html,
body,
main {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  color: var(--color-black);
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

button {
  border: 0;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
}
</style>
