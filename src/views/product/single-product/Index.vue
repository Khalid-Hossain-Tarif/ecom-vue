<script setup>
import { ref, onMounted } from 'vue';
import { manageProducts } from "@/composables/getAllProducts";
import Breadcrumbs from '@/components/ui/breadcrumbs/Index.vue';
import ProductSummary from '@/components/common/products/product-summary/Index.vue';
import ProductTabs from './ProductTabs.vue';
import RelatedProducts from '@/components/common/products/related-products/Index.vue';

const { getAllProducts, allProducts } = manageProducts();

const loadLists = () => { 
    Promise.all([getAllProducts()])
      .then(() => {
        console.log(allProducts.value);
      })
      .finally(() => { 
        console.log('Success');
      });
  };
  loadLists();
</script>

<template>
    <div>
        <Breadcrumbs />

        <section class="page-spacing">
            <div class="custom-container">
                <ProductSummary :product="product" />
                <ProductTabs />
                <RelatedProducts />
            </div>
        </section>
    </div>
</template>
