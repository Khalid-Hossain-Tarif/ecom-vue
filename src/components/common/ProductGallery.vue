<script setup>
import ProductLabel from './ProductLabel.vue';
</script>

<template>
    <div class="relative">
        <swiper-container style="--swiper-navigation-size: 30px;" class="mySwiper" thumbs-swiper=".mySwiper2" loop="true"
            space-between="10" navigation="true">
            <swiper-slide>
                <img src="@/assets/images/home/top-sales/demo-product-img.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/home/top-sales/demo-product-img.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/home/top-sales/demo-product-img.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/home/top-sales/demo-product-img.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/home/top-sales/demo-product-img.png" />
            </swiper-slide>
        </swiper-container>

        <swiper-container class="mySwiper2" loop="true" space-between="10" slides-per-view="4" free-mode="true"
            watch-slides-progress="true">
            <swiper-slide>
                <img src="@/assets/images/home/top-sales/demo-product-img.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/home/top-sales/demo-product-img.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/home/top-sales/demo-product-img.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/home/top-sales/demo-product-img.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/home/top-sales/demo-product-img.png" />
            </swiper-slide>
        </swiper-container>
        <ProductLabel position="left-0 right-auto" />
    </div>
</template>

<style scoped>
.mySwiper swiper-slide {
    @apply h-[400px] object-cover border border-borderLight grid place-content-center
}

.mySwiper2 {
    padding: 10px 0;
}

.mySwiper2 swiper-slide {
    @apply opacity-50 border border-borderLight px-2 py-4
}

.mySwiper2 .swiper-slide-thumb-active {
    @apply opacity-100 border-textGray
}
</style>