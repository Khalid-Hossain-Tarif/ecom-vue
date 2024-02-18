<script setup>
import Checkbox from "@/components/common/Checkbox.vue";
import Dropdown from "@/components/common/Dropdown.vue";
import ProductCard from "@/components/common/ProductCard.vue";
import Pagination from "@/components/common/Pagination.vue";
import PopupSidebar from "@/views/shop/PopupSidebar.vue";
import { ref } from "vue";

const products = ref([
  { name: 'Sort by popularity', code: 'popularity' },
  { name: 'Sort by rating', code: 'rating' },
  { name: 'Sort by latest', code: 'latest' },
  { name: 'Sort by price: low to high', code: 'lowToHigh' },
  { name: 'Sort by price: high to low', code: 'highToLow' },
]);

const selectedOption = ref(null);
</script>

<template>
  <div class="flex flex-col md:flex-row md:justify-between gap-4 md:gap-2">
    <Checkbox is-label label-txt="Show only products on sale" input-id="onsale" uppercase label-bold
      label-color="text-secondary" />
    <div class="flex justify-between items-center gap-3">
      <PopupSidebar />
      <Dropdown v-model="selectedOption" showClear filter :options="products" optionLabel="name" optionValue="code"
        placeholder="Sort by latest" dropdownClass="w-[250px]" />
    </div>
  </div>

  <div class="pt-5 md:pt-7">
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
      <ProductCard v-for="(n, index) in 12" :key="index" />
    </div>
    <Pagination />
  </div>
</template>