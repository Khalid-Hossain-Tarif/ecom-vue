<script setup>
import { ref, computed, onMounted } from "vue";
import Breadcrumbs from '@/components/ui/breadcrumbs/Index.vue';
import Products from "@/views/shop/Products.vue";
import Filter from "@/views/shop/Filter.vue";
import { manageProducts } from "@/composables/getAllProducts";
import { manageCategories } from "@/composables/getAllCategories";
import { formatDate } from "@/utils/Helpers.js";

const { productCardProducts, getAllProducts } = manageProducts();
const { filteredCategories, getAllCategories } = manageCategories();

onMounted(() => {
  getAllProducts()
  getAllCategories()
})

const selectedCategoriesValue = ref([]);
const selectedOptionValue = ref('Sort by latest');
const selectedOnsaleProductValue = ref([]);
const sortDropdownOptions = ref([
  { name: 'Sort by popularity', code: 'popularity' },
  { name: 'Sort by rating', code: 'rating' },
  { name: 'Sort by latest', code: 'latest' },
  { name: 'Sort by price: low to high', code: 'lowToHigh' },
  { name: 'Sort by price: high to low', code: 'highToLow' },
]);

// Function to sort products based on the selected option
const sortProductsFunction = (products, sortBy, onSaleOnly, sortByCategories) => {
  let sorted = [...products];

  if (sortBy === 'Sort by popularity') {
    sorted.sort((a, b) => b.trendy - a.trendy); 
  } else if (sortBy === 'Sort by rating') {
    sorted.sort((a, b) => b.product_views - a.product_views); 
  } else if (sortBy === 'Sort by latest') {
    sorted.sort((a, b) => {
      return formatDate(b.date) - formatDate(a.date);
    })
  } else if (sortBy === 'Sort by price: low to high') {
    sorted.sort((a, b) => a.selling_price - b.selling_price); 
  } else if (sortBy === 'Sort by price: high to low') {
    sorted.sort((a, b) => b.selling_price - a.selling_price);
  } 

  // onSaleOnly
  if(onSaleOnly && onSaleOnly.length > 0) {
    sorted = sorted.filter(product => product?.discount_price !== null)
  }

  //sortByCategories
  if (sortByCategories && sortByCategories.length > 0) {
    sorted = sorted.filter(product => sortByCategories.includes(product?.category_id));
  }

  return sorted;
};

const sortedProducts = computed(() => {
  return sortProductsFunction(productCardProducts.value, selectedOptionValue.value, selectedOnsaleProductValue.value, selectedCategoriesValue.value);
});
</script>

<template>
  <div>
    <Breadcrumbs />
    <section class="page-spacing">
      <div class="custom-container">
        <div class="flex flex-col md:flex-row items-start md:gap-5 xl:gap-10">
          <aside class="w-[220px] shrink-0 hidden md:block">
            <Filter 
              :categories="filteredCategories"
              v-model:selectedCategories="selectedCategoriesValue"
            />
          </aside>
          <div class="w-full">
            <Products 
              :products="sortedProducts" 
              :sortDropdownOptions="sortDropdownOptions" 
              v-model:selectedOnsaleProduct="selectedOnsaleProductValue"
              v-model:selectedOption="selectedOptionValue"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>