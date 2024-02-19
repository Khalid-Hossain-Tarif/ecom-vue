<script setup>
import Checkbox from "@/components/common/Checkbox.vue";
import Dropdown from "@/components/common/Dropdown.vue";
import ProductCard from "@/components/common/ProductCard.vue";
import Pagination from "@/components/common/Pagination.vue";
import PopupSidebar from "@/views/shop/PopupSidebar.vue";
import { ref } from "vue";
import axios from 'axios'

import { VITE_APP_BASE_URL } from '@/views/composables/baseApiUrl'

// const VITE_APP_BASE_URL = import.meta.env.VITE_API_BASE_URL

const products = ref([
  { name: 'Sort by popularity', code: 'popularity' },
  { name: 'Sort by rating', code: 'rating' },
  { name: 'Sort by latest', code: 'latest' },
  { name: 'Sort by price: low to high', code: 'lowToHigh' },
  { name: 'Sort by price: high to low', code: 'highToLow' },
]);

const selectedOption = ref(null);

const apiProducts = ref([]);
// axios.get('http://127.0.0.1:8000/api/products')
axios.get(VITE_APP_BASE_URL+'/products')
  .then(function (response) {
    apiProducts.value = response?.data
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });
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
    <div v-for="product in apiProducts" :key="product?.id" class="my-10 bg-black/20">
      <img :src="product?.thumbnail" alt="">
      <h1>{{ product?.name }}</h1>
      <div v-html="product?.description"></div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
      <ProductCard v-for="(n, index) in 12" :key="index" />
    </div>
    <Pagination />
  </div>
</template>