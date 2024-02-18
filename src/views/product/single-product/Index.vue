<script setup>
import Breadcrumbs from '@/components/common/Breadcrumbs.vue';
import CartDetails from './CartDetails.vue';
import ProductTabs from './ProductTabs.vue';
import RelatedProducts from '@/components/common/RelatedProducts.vue';
</script>

<template>
    <div>
        <Breadcrumbs />

        <section class="page-spacing">
            <div class="custom-container">
                <CartDetails />
                <ProductTabs />
                <RelatedProducts />
            </div>
        </section>
    </div>
</template>
