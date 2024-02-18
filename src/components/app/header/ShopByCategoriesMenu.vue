<script setup>
import ShopByCategoriesMenuItems from '@/components/app/header/ShopByCategoriesMenuItems.vue';

window.addEventListener("scroll", function () {
    let whenScroll = document.querySelector(".when-scroll");
    whenScroll.classList.toggle("scrolled", window.scrollY > 150);
});
</script>

<template>
  <div class="menu-hover py-4">
    <div class="text-white flex gap-3 items-center cursor-pointer">
      <font-awesome-icon :icon="['fas', 'bars']" />
      <p class="font-bold uppercase">Shop By Categories</p>
    </div>

    <nav class="menu-items" :class="$route.path === '/' ? 'when-scroll' : 'scale-0'">
      <ShopByCategoriesMenuItems />
    </nav>
  </div>
</template>

<style scoped>
.menu-items {
  @apply hidden md:block w-[265px] absolute top-full transition-all bg-white rounded-b px-5 border border-borderLight shadow-2xl
}

.menu-hover:hover .menu-items {
  @apply scale-100 opacity-100 visible
}

.when-scroll.scrolled {
    @apply opacity-0 invisible transition-all
}
</style>