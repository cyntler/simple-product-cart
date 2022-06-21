<script setup>
import { computed, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

import CartSummaryDrawerItem from './CartSummaryDrawerItem.vue';
import { formatPrice } from '../utils/formatPrice';
import {
  ADD_PRODUCT_BUTTON_CLASS_NAME,
  CART_ICON_CLASS_NAME,
} from '../utils/consts';
import { useStore } from '../hooks/useStore';

const { items, open } = defineProps(['open', 'items']);

const { closeSummary } = useStore();
const containerElRef = ref(null);

onClickOutside(containerElRef, (e) => {
  if (
    !e.target?.closest(`.${ADD_PRODUCT_BUTTON_CLASS_NAME}`) &&
    !e.target.closest(`.${CART_ICON_CLASS_NAME}`)
  ) {
    closeSummary();
  }
});

const totalPrice = computed(() =>
  formatPrice(
    items.reduce((acc, item) => (acc += item.price * item.quantity), 0)
  )
);
</script>

<template>
  <aside ref="containerElRef" class="cart-summary-drawer" :class="{ open }">
    <div class="cart-summary-drawer__content">
      <p class="cart-summary-drawer__content__empty" v-if="!items.length">
        No items. Add something! :)
      </p>
      <CartSummaryDrawerItem
        v-else
        v-for="item in items"
        :key="item.id"
        v-bind="item"
        @plus-quantity="$emit('plusQuantity', item.id)"
        @minus-quantity="$emit('minusQuantity', item.id)"
        @remove-from-cart="$emit('removeFromCart', item)"
      />
    </div>
    <div class="cart-summary-drawer__summary">
      <div>
        <small>Total</small>
        <p>{{ totalPrice }}</p>
      </div>
      <button type="button" :disabled="!items.length">Proceed!</button>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.cart-summary-drawer {
  width: 360px;
  height: 100vh;
  position: fixed;
  background-color: var(--color-white);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.17);
  top: 0;
  right: -400px;
  z-index: 1;
  transition: right 0.3s ease;
  padding-top: 78px;
  display: flex;
  flex-direction: column;

  &.open {
    right: 0;
  }

  &__content {
    flex: 1;
    overflow-y: auto;
    padding: 30px;

    &__empty {
      text-align: center;
    }
  }

  &__summary {
    width: 100%;
    height: 77px;
    border-top: 1px solid var(--color-gray);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    div {
      display: flex;
      flex-direction: column;

      small {
        font-size: 13px;
      }

      p {
        margin: 0;
        color: var(--color-orange);
        font-size: 18px;
      }
    }

    button {
      width: 120px;
      height: 41px;
      background-color: var(--color-orange);
      border: 0;
      border-radius: 13px;
      color: var(--color-white);
      font-size: 15px;
      transition: background-color 0.25s ease;

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
