<script setup>
import { ref, onMounted, onBeforeUnmount, provide, computed } from "vue";
import { useRoute } from 'vue-router';
import Header from '@/components/app/header/Header.vue';
import Footer from '@/components/app/footer/Footer.vue';
import MobileHeader from '@/components/app/header/MobileHeader.vue';
import Loader from '@/components/ui/loader/Index.vue';
import { useLoading } from "@/components/ui/loader/useLoading.js";

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

const { loading, isLoading } = useLoading()
provide('loading', loading);
provide('isLoading', isLoading);

const route = useRoute();
const routesWithoutMinHScreen = ['/login', '/registration'];

const mainClass = computed(() => {
  return {
    'min-h-screen': !routesWithoutMinHScreen.includes(route.path)
  };
});
</script>

<template>
  <MobileHeader v-if="isMobile" />
  <Header v-else />

  <main :class="mainClass">
    <slot></slot>

    <Loader />
    <!-- <router-view></router-view> -->
    <router-view :key="$route.fullPath"></router-view>
    <!-- :key="$route.fullPath" using this we can make <router-view></router-view>unique. Then every time router will update when navigating -->
  </main>

  <Footer />
</template>