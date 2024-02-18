<script setup>
import { ref } from "vue";

defineProps({
  menuItemClass: {
    type: String
  },
  hasIcon: {
    type: Boolean,
    default: false
  }
});

const primaryMenu = ref([
  {
    label: 'home',
    to: '/'
  },
  {
    label: 'Shop',
    to: '/shop'
  },
  {
    label: 'Categories',
    to: 'category'
  },
  {
    label: 'About',
    to: 'about'
  },
  {
    label: 'contact',
    to: 'contact'
  },
]);
</script>

<template>
  <router-link v-for="menu in primaryMenu" :key="menu?.label" :to="menu?.to" active-class="active-menu" class="group transition-all"
    :class="[hasIcon ? 'flex justify-between gap-2 items-center' : '', menuItemClass]">
    <span>{{ menu?.label }}</span>
    <font-awesome-icon v-if="hasIcon" :icon="['fas', 'angle-right']" class="text-textGray/30 transition-all group-hover:text-primary" />
  </router-link>
</template>