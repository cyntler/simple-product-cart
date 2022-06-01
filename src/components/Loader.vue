<template>
  <div class="loader" />
</template>

<style lang="scss" scoped>
.loader {
  border: 8px solid var(--color-gray);
  border-top: 8px solid var(--color-orange);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1.25s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
