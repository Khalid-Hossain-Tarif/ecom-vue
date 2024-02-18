<script setup>
import SideNav from "@/components/common/SideNav.vue";
import Filter from "@/views/shop/Filter.vue";
import { ref } from 'vue';

const isPopupSidebarOpen = ref(false);

const popupSidebarToggle = () => {
  isPopupSidebarOpen.value = !isPopupSidebarOpen.value
};
</script>

<template>
  <div class="shrink-0">
    <button class="btn btn-primary btn-icon md:hidden" @click="popupSidebarToggle">
      <font-awesome-icon :icon="['fas', 'sliders']" />
      <!--<font-awesome-icon :icon="['fas', 'xmark']" />-->
      <span>Filter</span>
    </button>
  </div>

  <SideNav :isSideNavOpen="isPopupSidebarOpen" :toggleSideNav="popupSidebarToggle">
    <Filter />
  </SideNav>
</template>