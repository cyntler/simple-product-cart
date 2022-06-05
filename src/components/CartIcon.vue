<script setup>
import cartIconSvg from '../assets/cart-icon.svg';
import { CART_ICON_CLASS_NAME } from '../utils/consts';

defineProps(['count']);
defineEmits(['click']);
</script>

<template>
  <div :class="CART_ICON_CLASS_NAME" @click="$emit('click')">
    <span>{{ count }}</span>
    <img :src="cartIconSvg" alt="cart icon" />
  </div>
</template>

<style lang="scss" scoped>
.cart-icon {
  position: fixed;
  top: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 2;

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: var(--color-black);
    top: 6px;
    right: -3px;
    color: var(--color-white);
    font-size: 11px;
    line-height: 0;
    letter-spacing: 0;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
  }
}
</style>
