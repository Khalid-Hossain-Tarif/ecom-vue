<script setup>
import Breadcrumbs from '@/components/ui/breadcrumbs/Index.vue';
import ProductSummary from '@/components/common/products/product-summary/Index.vue';
import ProductTabs from './ProductTabs.vue';
import RelatedProducts from '@/components/common/products/related-products/Index.vue';
</script>

<template>
    <div>
        <Breadcrumbs />

        <section class="page-spacing">
            <div class="custom-container">
                <ProductSummary />
                <ProductTabs />
                <RelatedProducts />
            </div>
        </section>
    </div>
</template>
