import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './components/App.vue';
import ProductList from './components/ProductList.vue';

const vueRouter = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: ProductList }],
});

const vueApp = createApp(App);
vueApp.use(vueRouter);

vueApp.mount('#app');
