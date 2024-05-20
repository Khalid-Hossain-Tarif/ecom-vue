<script setup>
import { manageProductWithDetails } from "@/composables/getProductWithDetails";
import Breadcrumbs from '@/components/ui/breadcrumbs/Index.vue';
import ProductSummary from '@/components/common/products/product-summary/Index.vue';
import ProductTabs from './ProductTabs.vue';
import RelatedProducts from '@/components/common/products/related-products/Index.vue';

const { productWithDetails, productDescription, productId  } = manageProductWithDetails();
</script>

<template>
    <div>
    {{ description }}
        <Breadcrumbs />
        <section class="page-spacing">
            <div class="custom-container">
                <ProductSummary :product="productWithDetails" />
                <ProductTabs :description="productDescription" :id="productId" />
                <RelatedProducts />
            </div>
        </section>
    </div>
</template>
