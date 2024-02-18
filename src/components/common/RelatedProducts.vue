<script setup>
import ProductCard from '@/components/common/ProductCard.vue';
</script>

<template>
    <section>
        <h3 class="primary-heading text-center">You may also like…</h3>

        <div class="mt-6">
            <swiper-container style="--swiper-navigation-size: 30px;" space-between="16" :navigation="true"
                :slides-per-view="2" :breakpoints="{
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
                <swiper-slide v-for="n in 7">
                    <ProductCard />
                </swiper-slide>
            </swiper-container>
        </div>
    </section>
</template>