<script setup>
import { useStore } from '../hooks/useStore';
import ProductListItem from './ProductListItem.vue';

defineProps(['products']);
</script>

<template>
  <section class="product-list">
    <ProductListItem
      v-for="product in products"
      :key="product.id"
      v-bind="product"
    />
  </section>
</template>

<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}
</style>
