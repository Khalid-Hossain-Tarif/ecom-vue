<script setup>
import Header from './components/app/header/Header.vue';
import Footer from './components/app/footer/Footer.vue';
import MobileHeader from './components/app/header/MobileHeader.vue';

import { ref, onMounted, onBeforeUnmount } from "vue";
const isMobile = ref(window.innerWidth <= 768);
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};
onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <MobileHeader v-if="isMobile" />
  <Header v-else />

  <main>
    <slot></slot>
    <router-view></router-view>
  </main>

  <Footer />
</template>