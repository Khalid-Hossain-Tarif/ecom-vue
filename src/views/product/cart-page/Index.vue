<script setup>
import Breadcrumbs from '@/components/ui/breadcrumbs/Index.vue';
import Orders from '@/views/product/cart-page/Orders.vue';
</script>

<template>
    <div>
        <Breadcrumbs />

        <section class="page-spacing">
            <div class="custom-container">
                <Orders />
            </div>
        </section>
    </div>
</template>
