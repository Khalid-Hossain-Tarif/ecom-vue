<script setup>
import { ref, onUnmounted } from 'vue';
import Modal from '@/components/ui/modal/Index.vue';
import ProductLabel from '@/components/common/products/ProductLabel.vue';
import ProductPrice from '@/components/common/products/ProductPrice.vue';
import StarRating from '@/components/common/products/rating/StarRating.vue';
import ProductSummary from '@/components/common/products/product-summary/Index.vue';
import { useWishlist } from '@/store/wishlist';

const { toggleWishlist, getWishlistIcon } = useWishlist();

defineProps({
    product: {
        type: Object,
        default: () => ({})
    }
})

const isProductModal = ref(false);
const getBody = document.getElementsByTagName('body')[0];
const productModalToggler = () => {
    isProductModal.value = !isProductModal.value;
    if (isProductModal.value) {
        getBody.style.overflow = 'hidden';
    }
    else {
        getBody.style.overflow = 'auto';
    }
};

onUnmounted(() => {
    getBody.style.overflow = 'auto';
})
</script>

<template>
    <div class="relative border border-grayLight rounded group transition duration-300">
        <div class="product-card-img">
            <router-link v-if="product?.id" :to="{ name: 'singleProduct', params: { id: product?.id } }">
                <!-- <img src="@/assets/images/home/top-sales/demo-product-img.png" alt=""> -->
                <img :src="product?.thumbnail" alt="">
            </router-link>

            <div class="action-buttons">
                <div class="flex items-center justify-center">
                    <button @click="toggleWishlist(product)"
                        class="overflow-hidden bg-white px-4 py-2 transition duration-300 group/btn">
                        <font-awesome-icon :icon="getWishlistIcon(product)" class="group-hover/btn:animate-btnIconSlide" />
                    </button>
                    <button
                        class="overflow-hidden bg-primary text-white px-4 py-2 grow transition duration-300 group/btn">
                        <font-awesome-icon :icon="['fas', 'cart-plus']" class="group-hover/btn:animate-btnIconSlide" />
                    </button>
                    <button @click="productModalToggler"
                        class="overflow-hidden bg-white px-4 py-2 transition duration-300 group/btn">
                        <font-awesome-icon :icon="['far', 'eye']" class="group-hover/btn:animate-btnIconSlide" />
                    </button>
                </div>
            </div>
            <ProductLabel :label="product?.trendy" />
        </div>

        <div class="p-4">
            <h4 class="font-medium ellipsis-text">
                <router-link v-if="product?.id" :to="{ name: 'singleProduct', params: { id: product?.id } }">
                    {{ product?.name }}
                </router-link>
            </h4>
            <div class="mt-2 mb-3">
                <StarRating />
            </div>
            <ProductPrice :regularPrice="product?.selling_price" :discountPrice="product?.discount_price" />
        </div>
    </div>

    <Modal :isModalOpen="isProductModal" :toggleModal="productModalToggler" modalPadding="p-4 md:p-7">
        <ProductSummary />
    </Modal>
</template>

<style scoped>
.product-card-img {
    @apply h-[200px] sm:h-[250px] relative bg-grayLight border-b border-grayLight group-hover:bg-textGray p-4 flex items-center overflow-hidden transition duration-300
}

.action-buttons {
    @apply absolute -bottom-36 group-hover:bottom-0 left-0 sm:left-5 md:left-0 right-0 opacity-100 group-hover:opacity-100 transition-all duration-300
}
</style>