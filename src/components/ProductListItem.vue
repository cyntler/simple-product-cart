<script setup>
import { computed } from 'vue';

import { formatPrice } from '../utils/formatPrice';
import { ADD_PRODUCT_BUTTON_CLASS_NAME } from '../utils/consts';
import { useStore } from '../hooks/useStore';

const { price } = defineProps([
  'id',
  'name',
  'image',
  'price',
  'quantity',
  'added',
]);

const { addItemToCart } = useStore();
const formattedPrice = computed(() => formatPrice(price));
</script>

<template>
  <article class="product-list-item">
    <span class="product-list-item__quantity">{{
      quantity <= 0 ? 'Lack' : `x${quantity}`
    }}</span>
    <div
      class="product-list-item__image"
      :style="{ backgroundImage: `url(${image})` }"
    />
    <div class="product-list-item__details">
      <div>
        <h1>{{ name }}</h1>
        <p>{{ formattedPrice }}</p>
      </div>
      <button
        type="button"
        :class="ADD_PRODUCT_BUTTON_CLASS_NAME"
        :disabled="added"
        @click="addItemToCart(id)"
      >
        +
      </button>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.product-list-item {
  position: relative;
  width: 200px;
  margin: 28px 23px;

  &__quantity {
    position: absolute;
    top: 10px;
    right: 10px;
    color: var(--color-white);
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
  }

  &__image {
    width: 200px;
    height: 200px;
    background-color: var(--color-gray);
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
  }

  &__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;

    h1 {
      font-size: 18px;
      font-weight: 700;
      margin: 0;
      padding: 0;
    }

    p {
      margin: 0;
      font-size: 16px;
      color: var(--color-orange);
    }

    button {
      background-color: var(--color-orange);
      border-radius: 50%;
      width: 37px;
      height: 37px;
      border: 0;
      color: var(--color-white);
      font-size: 22px;
      transition: background-color 0.25s ease;
      position: relative;

      &:hover {
        background-color: var(--color-black);
      }

      &:disabled {
        background-color: var(--color-gray);
        cursor: default;
      }
    }
  }
}
</style>
