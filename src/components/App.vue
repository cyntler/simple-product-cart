<template>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" class="route" />
    </transition>
  </router-view>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body,
main {
  margin: 0;
  padding: 0;
  height: 100vh;
}

.route {
  width: 100%;
  min-height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
