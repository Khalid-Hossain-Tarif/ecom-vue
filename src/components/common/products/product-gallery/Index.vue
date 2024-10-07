<script setup>
import ProductLabel from '@/components/common/products/ProductLabel.vue';

const props = defineProps({
    productImages: {
        type: [Array, String],
        required: true,
        default: ''
    },
});

const isValidJSON = str => {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};
</script>

<template>
    <div class="relative" v-if="isValidJSON(props?.productImages)">
        <swiper-container style="--swiper-navigation-size: 30px;" class="mySwiper" thumbs-swiper=".mySwiper2"
            loop="true" space-between="10" navigation="true">
            <swiper-slide v-for="(image, index) in JSON.parse(props?.productImages)" :key="index">
                <img v-if="image" :src="`/files/product/${image}`" alt="Product Image" />
                <img v-else src="@/assets/images/icons/no-image.png" alt="No image" class="m-auto" />
            </swiper-slide>
        </swiper-container>

        <swiper-container class="mySwiper2" loop="true" space-between="10" slides-per-view="4" free-mode="true"
            watch-slides-progress="true">
            <swiper-slide v-for="(image, index) in JSON.parse(props?.productImages)" :key="index">
                <img v-if="image" :src="`/files/product/${image}`" alt="Product image" />
                <img v-else src="@/assets/images/icons/no-image.png" alt="No image" class="w-10 sm:w-16 m-auto" />
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
    @apply opacity-50 border border-borderLight px-2 py-4 max-h-[124px] object-cover object-bottom
}

.mySwiper2 .swiper-slide-thumb-active {
    @apply opacity-100 border-textGray
}
</style>