<script setup>
import { ref, computed } from "vue";
import Checkbox from "@/components/ui/checkbox/Index.vue";
import Dropdown from "@/components/ui/dropdown/Index.vue";
import ProductCard from "@/components/common/products/product-card/Index.vue";
import Pagination from "@/components/ui/pagination/Index.vue";
import DataNotFound from "@/components/common/not-found/dataNotFound.vue";
import PopupSidebar from "@/views/shop/PopupSidebar.vue";

const sortProducts = ref([
  { name: 'Sort by popularity', code: 'popularity' },
  { name: 'Sort by rating', code: 'rating' },
  { name: 'Sort by latest', code: 'latest' },
  { name: 'Sort by price: low to high', code: 'lowToHigh' },
  { name: 'Sort by price: high to low', code: 'highToLow' },
]);


const selectedOption = ref('Sort by latest');
const isChecked = ref(false);
const isOnSaleProduct = ref();
const onSaleProduct = ref('Show only products on sale');

const props = defineProps({
  products: {
    type: Array
  },
});

// Function to sort products based on the selected option
const sortProductsFunction = (products, sortBy) => {
  if (!sortBy) return products;

  const sorted = [...products];

  if (sortBy === 'Sort by popularity') {
    sorted.sort((a, b) => b.trendy - a.trendy); 
  } else if (sortBy === 'Sort by rating') {
    sorted.sort((a, b) => b.product_views - a.product_views); 
  } else if (sortBy === 'Sort by latest') {
    sorted.sort((a, b) => new Date(b.date) - new Date(a.date)); 
  } else if (sortBy === 'Sort by price: low to high') {
    sorted.sort((a, b) => a.selling_price - b.selling_price); 
  } else if (sortBy === 'Sort by price: high to low') {
    sorted.sort((a, b) => b.selling_price - a.selling_price);
  }

  return sorted;
};

const sortedProducts = computed(() => {
  return sortProductsFunction(props.products, selectedOption.value);
});
</script>

<template>
  <div class="flex flex-col md:flex-row md:justify-between gap-4 md:gap-2">
    {{ onSaleProduct }}
    <Checkbox 
      v-model="isOnSaleProduct"
      :itemValue="onSaleProduct"
      :label-txt="onSaleProduct" 
      input-id="onsale" 
      label-color="text-secondary" 
      is-label 
      uppercase label-bold 
      :checked="isChecked" 
    />
    <div class="flex justify-between items-center gap-3">
      <PopupSidebar />
      <Dropdown v-model="selectedOption" showClear filter :options="sortProducts" optionLabel="name" optionValue="code"
        placeholder="Sort by latest" dropdownClass="w-[250px]" />
    </div>
  </div>

  <div class="pt-5 md:pt-7">
    <div v-if="sortedProducts.length">
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        <ProductCard 
          v-for="product in sortedProducts" 
          :key="product.id" 
          :product="product" 
        />
      </div>
      <Pagination />
    </div>
    <DataNotFound v-else />
  </div>
</template>