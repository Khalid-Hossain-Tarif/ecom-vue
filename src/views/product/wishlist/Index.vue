<script setup>
import Breadcrumbs from '@/components/common/Breadcrumbs.vue';
import ProductsList from './ProductsList.vue';
</script>

<template>
    <div>
        <Breadcrumbs />

        <section class="page-spacing">
            <div class="custom-container">
                <ProductsList />
            </div>
        </section>
    </div>
</template>
