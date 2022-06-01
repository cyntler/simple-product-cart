<script setup>
defineProps(['id', 'name', 'image', 'price', 'quantity']);
</script>

<template>
  <div class="cart-summary-item">
    <div
      class="cart-summary-item__image"
      :style="{ backgroundImage: `url(${image})` }"
    />
  </div>
</template>

<style lang="scss" scoped>
.cart-summary-item {
  width: 100%;
  height: 73px;
  background-color: var(--color-gray);
  margin-bottom: 15px;
  border-radius: 13px;
  padding: 12px;
  display: flex;
  align-items: center;

  &__image {
    width: 49px;
    height: 49px;
    border-radius: 50%;
  }
}
</style>
