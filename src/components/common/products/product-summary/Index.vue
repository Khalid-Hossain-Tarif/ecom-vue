<script setup>
import CartInputButton from '@/components/common/products/CartInputButton.vue';
import ProductGallery from '@/components/common/products/product-gallery/Index.vue';
import ProductPrice from '@/components/common/products/ProductPrice.vue';
import StarRating from '@/components/common/products/rating/StarRating.vue';

defineProps({
    product: {
        type: Object,
        default: 'product'
    }
})
</script>

<template>
    {{ product }}
    <section class="block md:grid md:grid-cols-2 gap-4 md:gap-10">
        <div>
            <ProductGallery />
        </div>

        <div class="space-y-4 mt-7 md:mt-0">
            <StarRating />
            <h1 class="primary-heading">4K UHD LED Smart TV with Chromecast Built-in</h1>
            <div>
                <p class="text-textGray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi
                    perferendis veritatis incidunt delectus quibusdam laborum a ratione modi ab.</p>
            </div>
            <ProductPrice smallFontSize="!text-base" largeFontSize="!text-2xl" />

            <div class="flex gap-2 lg:gap-4 items-center flex-wrap">
                <CartInputButton class="h-11" />
                <router-link to="/cart" class="btn btn-secondary h-11">Add to cart</router-link>
                <button
                    class="h-11 overflow-hidden border-2 border-grayLight rounded px-4 py-2.5 transition duration-300 hover:text-info group/btn">
                    <font-awesome-icon :icon="['far', 'heart']" class="group-hover/btn:animate-btnIconSlide" />
                </button>
            </div>

            <div class="space-y-2 pt-7 !mt-7 border-t border-borderLight">
                <p class="font-medium">
                    <span>Availability: </span>
                    <span class="text-success">69 in stock</span>
                </p>
                <p class="font-medium">
                    <span>SKU: </span>
                    <span class="text-textGray">0292</span>
                </p>
                <p class="font-medium">
                    <span>Category: </span>
                    <span class="text-textGray"><router-link to="/">Category 1, </router-link></span>
                    <span class="text-textGray"><router-link to="/">Category 2, </router-link></span>
                    <span class="text-textGray"><router-link to="/">Category 3</router-link></span>
                </p>
            </div>
        </div>
    </section>
</template>