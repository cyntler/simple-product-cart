<script setup>
import { computed } from 'vue';

import { formatPrice } from '../utils/formatPrice';
import removeIconSvg from '../assets/remove-icon.svg';

const { price } = defineProps([
  'id',
  'name',
  'image',
  'price',
  'quantity',
  'maxQuantity',
]);
defineEmits(['minusQuantity', 'plusQuantity', 'removeFromCart']);

const formattedPrice = computed(() => formatPrice(price));
</script>

<template>
  <div class="cart-summary-item">
    <img
      class="cart-summary-item__remove-icon"
      :src="removeIconSvg"
      alt="Remove"
      @click="$emit('removeFromCart')"
    />
    <div
      class="cart-summary-item__image"
      :style="{ backgroundImage: `url(${image})` }"
    />
    <div class="cart-summary-item__summary">
      <h2>{{ name }}</h2>
      <p>{{ formattedPrice }}</p>
    </div>
    <div class="cart-summary-item__quantity">
      <button :disabled="quantity <= 1" @click="$emit('minusQuantity')">
        -
      </button>
      <span>{{ quantity }}</span>
      <button
        :disabled="quantity >= maxQuantity"
        @click="$emit('plusQuantity')"
      >
        +
      </button>
    </div>
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
  position: relative;

  &__remove-icon {
    position: absolute;
    top: -4px;
    left: -4px;
    cursor: pointer;
  }

  &__image {
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background-size: cover;
  }

  &__summary {
    flex: 1;
    margin: 0 12px;

    h2 {
      margin: 0;
      padding: 0;
      font-size: 15px;
    }

    p {
      margin: 0;
      font-size: 16px;
      color: var(--color-orange);
    }
  }

  &__quantity {
    width: 90px;
    height: 30px;
    overflow: hidden;
    display: flex;
    border-radius: 5px;
    background-color: var(--color-white);

    button,
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      font-size: 15px;
    }

    button {
      cursor: pointer;
      background-color: var(--color-orange);
      font-size: 20px;
      color: var(--color-white);

      &:disabled {
        background-color: var(--color-gray);
        color: var(--color-black);
        cursor: default;
      }
    }
  }
}
</style>
