<script setup>
import { ref } from "vue";
import { manageProducts } from "@/composables/getAllProducts"
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

const selectedOption = ref(null);
const { productCardProducts } = manageProducts();
</script>

<template>
  <div class="flex flex-col md:flex-row md:justify-between gap-4 md:gap-2">
    <Checkbox is-label label-txt="Show only products on sale" input-id="onsale" uppercase label-bold
      label-color="text-secondary" />
    <div class="flex justify-between items-center gap-3">
      <PopupSidebar />
      <Dropdown v-model="selectedOption" showClear filter :options="sortProducts" optionLabel="name" optionValue="code"
        placeholder="Sort by latest" dropdownClass="w-[250px]" />
    </div>
  </div>

  <div class="pt-5 md:pt-7">
    <div v-if="productCardProducts">
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        <ProductCard 
          v-for="product in productCardProducts" 
          :key="product?.id" 
          :product="product" 
        />
      </div>
      <Pagination />
    </div>
    <DataNotFound v-else />
  </div>
</template>