<script setup>
import { ref, computed } from "vue";
import Checkbox from "@/components/ui/checkbox/Index.vue";
import Dropdown from "@/components/ui/dropdown/Index.vue";
import ProductCard from "@/components/common/products/product-card/Index.vue";
import Pagination from "@/components/ui/pagination/Index.vue";
import DataNotFound from "@/components/common/not-found/dataNotFound.vue";
import PopupSidebar from "@/views/shop/PopupSidebar.vue";
import { usePagination } from '@/composables/usePagination.js';

const props = defineProps({
  products: {
    type: Array,
    default: () => []
  },
  sortDropdownOptions: {
    type: Array,
    default: () => []
  },
});

const selectedOnsaleProduct = defineModel('selectedOnsaleProduct');
const selectedOption = defineModel('selectedOption');
const { paginationInfo, paginatedItems, changePage } = usePagination(props.products);
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
      <Dropdown v-model="selectedOption" showClear filter :options="sortDropdownOptions" optionLabel="name" optionValue="code"
        placeholder="Sort by latest" dropdownClass="w-[250px]" />
    </div>
  </div>
{{ paginatedItems }}
  <div class="pt-5 md:pt-7">
    <div v-if="paginatedItems.length">
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        <ProductCard 
          v-for="product in paginatedItems" 
          :key="product.id" 
          :product="product" 
        />
      </div>
      <Pagination :paginationInfo="paginationInfo" @changePage="changePage" />
    </div>
    <DataNotFound v-else />
  </div>
</template>