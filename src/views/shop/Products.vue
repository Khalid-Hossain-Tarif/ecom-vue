<script setup>
import { ref, computed } from "vue";
import Checkbox from "@/components/ui/checkbox/Index.vue";
import Dropdown from "@/components/ui/dropdown/Index.vue";
import ProductCard from "@/components/common/products/product-card/Index.vue";
import Pagination from "@/components/ui/pagination/Index.vue";
import DataNotFound from "@/components/common/not-found/dataNotFound.vue";
import PopupSidebar from "@/views/shop/PopupSidebar.vue";

const props = defineProps({
  products: {
    type: Array
  },
});

const selectedOption = ref('Sort by latest');
// const isChecked = ref(false);
const selectedOnsaleProduct = ref(null);
const sortProducts = ref([
  { name: 'Sort by popularity', code: 'popularity' },
  { name: 'Sort by rating', code: 'rating' },
  { name: 'Sort by latest', code: 'latest' },
  { name: 'Sort by price: low to high', code: 'lowToHigh' },
  { name: 'Sort by price: high to low', code: 'highToLow' },
]);

// Function to sort products based on the selected option
const sortProductsFunction = (products, sortBy, onSaleOnly) => {
  let sorted = [...products];

  if(onSaleOnly) {
    sorted = sorted.filter(product => product?.discount_price !== null)
  }

  if (sortBy === 'Sort by popularity') {
    sorted.sort((a, b) => b.trendy - a.trendy); 
  } else if (sortBy === 'Sort by rating') {
    sorted.sort((a, b) => b.product_views - a.product_views); 
  } else if (sortBy === 'Sort by latest') {
    sorted.sort((a, b) => {
      console.log(b.date)
      new Date(b.date) - new Date(a.date)
      console.log(new Date(b.date))
    }); 
  } else if (sortBy === 'Sort by price: low to high') {
    sorted.sort((a, b) => a.selling_price - b.selling_price); 
  } else if (sortBy === 'Sort by price: high to low') {
    sorted.sort((a, b) => b.selling_price - a.selling_price);
  } 

  return sorted;
};

const sortedProducts = computed(() => {
  return sortProductsFunction(props.products, selectedOption.value, selectedOnsaleProduct.value);
});
</script>

<template>
  <div class="flex flex-col md:flex-row md:justify-between gap-4 md:gap-2">
    <Checkbox 
      v-model="selectedOnsaleProduct" 
      itemValue="Show only products on sale"
      itemName="onsale" 
      inputId="onsale"
      isLabel  
      labelTxt="Show only products on sale" 
      labelColor="text-secondary" 
      uppercase
      labelBold 
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