<script setup>
import { ref, onMounted, onBeforeUnmount, provide } from "vue";
import Loader from '@/components/common/loader/Index.vue';
import Header from '@/components/app/header/Header.vue';
import Footer from '@/components/app/footer/Footer.vue';
import MobileHeader from '@/components/app/header/MobileHeader.vue';
import { useLoading } from "@/components/common/loader/setLoader.js";

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
</script>

<template>
  <MobileHeader v-if="isMobile" />
  <Header v-else />

  <main class="min-h-screen">
    <slot></slot>

    <Loader />
    <router-view></router-view>
    <!-- <router-view :key="$route.fullPath"></router-view> -->
  </main>

  <Footer />
</template>