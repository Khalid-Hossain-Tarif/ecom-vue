<script setup>
import { ref, onMounted } from 'vue';
import Tabs from '@/components/ui/tabs/Index.vue';
import ProductCard from '@/components/common/products/product-card/Index.vue';
import { manageProducts } from "@/composables/getAllProducts";

const { loadProducts, electronicsProducts } = manageProducts();

const myTabs = [
    { id: 'tab1', label: 'New products' },
    { id: 'tab2', label: 'Best seller' },
    { id: 'tab3', label: 'Top rated' }
];

onMounted(() => {
    loadProducts()
})
</script>

<template>
    {{ allProductsValue }}
    <section class="section-padding">
        <div class="custom-container">
            <h4 class="primary-heading mb-6"><span class="mr-1">📲</span> Electronics</h4>

            <Tabs :tabs="myTabs" defaultTab="tab1" headerPosition="md:justify-end md:-mt-[60px]">
                <template #tab1>
                    <div>
                        <swiper-container class="mySwiper" style="--swiper-navigation-size: 30px;" navigation="true"
                            :grid="{ rows: 2, fill: 'row' }" space-between="16" :slides-per-view="2" :breakpoints="{
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 5,
        },
    }">
                            <swiper-slide v-for="product in electronicsProducts" :key="product.id">
                                <ProductCard :product="product" />
                            </swiper-slide>
                        </swiper-container>
                    </div>
                </template>
                <template #tab2>
                    <p>Best seller products will be here!</p>
                </template>
                <template #tab3>
                    <p>Top rated products will be here!</p>
                </template>
            </Tabs>
        </div>
    </section>
</template>