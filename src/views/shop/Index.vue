<script setup>
import { onMounted } from "vue";
import Breadcrumbs from '@/components/ui/breadcrumbs/Index.vue';
import Products from "@/views/shop/Products.vue";
import Filter from "@/views/shop/Filter.vue";
import { manageProducts } from "@/composables/getAllProducts";
import { manageCategories } from "@/composables/getAllCategories";

const { productCardProducts, getAllProducts } = manageProducts();
const { filteredCategories, getAllCategories } = manageCategories();

onMounted(() => {
  getAllProducts()
  getAllCategories()
})
</script>

<template>
  <div>
    <Breadcrumbs />
    <section class="page-spacing">
      <div class="custom-container">
        <div class="flex flex-col md:flex-row items-start md:gap-5 xl:gap-10">
          <aside class="w-[220px] shrink-0 hidden md:block">
            <Filter :categories="filteredCategories" />
          </aside>
          <div class="w-full">
            <Products :products="productCardProducts" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>