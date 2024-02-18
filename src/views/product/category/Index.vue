<script setup>
import Breadcrumbs from '@/components/common/Breadcrumbs.vue';
import Products from "@/views/shop/Products.vue";
import Filter from "@/views/shop/Filter.vue";
</script>

<template>
  <div>
    <Breadcrumbs />

    <section class="page-spacing">
      <div class="custom-container">
        <div class="flex flex-col md:flex-row items-start md:gap-5 xl:gap-10">
          <aside class="w-[220px] shrink-0 hidden md:block">
            <Filter />
          </aside>
          <div class="w-full">
            <Products />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>