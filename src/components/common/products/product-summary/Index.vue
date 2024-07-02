<script setup>
import { ref, watch } from "vue";
import CartInputButton from '@/components/common/products/CartInputButton.vue';
import ProductGallery from '@/components/common/products/product-gallery/Index.vue';
import ProductPrice from '@/components/common/products/ProductPrice.vue';
import StarRating from '@/components/common/products/rating/StarRating.vue';
import { manageCategories } from "@/composables/getAllCategories";
import { cart } from "@/store/cart/index"

const { cartItems, productCount, emptyCart, updatePrices, addItem, deleteItem, productAddToCartHandler } = cart()

const { filteredCategories } = manageCategories();

const props = defineProps({
    product: {
        type: Object,
        default: () => ({})
    },
});

const categoryName = ref('');

function getCategoryNameById(categoryId, categories) {
    const category = categories.find(category => category?.id === categoryId);
    return category ? category?.category_name : 'Uncategorized';
}

watch(() => filteredCategories.value, (newVal) => {
    if (newVal.length > 0) {
        categoryName.value = getCategoryNameById(props?.product?.category_id, newVal);
    }
}, { immediate: true });
</script>

<template>
    <section class="block md:grid md:grid-cols-2 gap-4 md:gap-10">
        <div>
            <ProductGallery :productImages="product?.images" />
        </div>

        <div class="space-y-4 mt-7 md:mt-0">
            {{ product }}
            <StarRating />
            <h1 class="primary-heading">{{ product?.name }}</h1>
            <ProductPrice :regularPrice="product?.selling_price" :discountPrice="product?.discount_price" />
            <div>
                <p class="text-textGray" v-html="product?.description"></p>
            </div>
            <ProductPrice smallFontSize="!text-base" largeFontSize="!text-2xl" />

            <div class="flex gap-2 lg:gap-4 items-center flex-wrap">
                <div class="flex gap-x-3.5 items-center">
                    <button 
                        @click="productCount('decrement')"
                        id="item-increment"
                        class="border border-grayLight rounded-l bg-grayLight h-11 px-4 text-base font-semibold transition duration-300 cursor-pointer hover:text-primary"   
                    >
                        -
                    </button>
                       <span class="font-bold" id="item-count">{{ product.quantity }}</span>
                    <button 
                        @click="productCount('increment', product)"
                        id="item-decrement"
                        class="border border-grayLight rounded-r bg-grayLight h-11 px-4 text-base font-semibold transition duration-300 cursor-pointer hover:text-primary"
                    >
                        +
                    </button>
                </div>

                <CartInputButton :item="product" :productCount="productCount" />

                <button @click="addItem(product)" class="btn btn-secondary h-11">Add to cart</button>
                <button
                    class="h-11 overflow-hidden border-2 border-grayLight rounded px-4 py-2.5 transition duration-300 hover:text-info group/btn">
                    <font-awesome-icon :icon="['far', 'heart']" class="group-hover/btn:animate-btnIconSlide" />
                </button>
            </div>

            <div class="space-y-2 pt-7 !mt-7 border-t border-borderLight">
                <p class="font-medium">
                    <span>Availability: </span>
                    <span class="text-success">{{ product?.stock_quantity }} {{ product?.unit }} in stock</span>
                </p>
                <p class="font-medium">
                    <span>SKU: </span>
                    <span class="text-textGray">{{ product?.code }}</span>
                </p>
                <p class="font-medium">
                    <span>Category: </span>
                    <span class="text-textGray">
                        <router-link to="/">{{ categoryName }}</router-link>
                    </span>
                </p>
            </div>
        </div>
    </section>
</template>