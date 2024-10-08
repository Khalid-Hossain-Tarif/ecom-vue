<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';
import { wishlistItems, useWishlist } from '@/store/wishlist';
import { manageProducts } from "@/composables/getAllProducts";
import { cart } from "@/store/cart/index"

const { fetchWishList, toggleWishlist } = useWishlist();
const { allProducts, getAllProducts } = manageProducts();
const { addItem } = cart()

const wishlistProductWithDetails = ref([]);

onBeforeMount(() => {
    getAllProducts()
})

onMounted(async () => {
    await fetchWishList();
    fetchWishlistProductWithDetails();
});

function fetchWishlistProductWithDetails() {
    wishlistProductWithDetails.value = allProducts.value.filter(product =>
        wishlistItems.value.includes(product.id)
    );
}

function handleToggleWishlist(product) {
    toggleWishlist(product)
    fetchWishlistProductWithDetails()
}
</script>

<template>
    <div>
        <h1 class="primary-heading mb-7">My Wishlist Products</h1>

        <div v-if="wishlistProductWithDetails.length">
            <table>
                <thead class="bg-grayLight rounded hidden sm:table-header-group">
                    <tr>
                        <th scope="col" class="w-[35%] !pl-6 text-left">Product</th>
                        <th scope="col" class="w-[15%]">Unit Price</th>
                        <th scope="col" class="w-[30%]">Stock Status</th>
                        <th scope="col" class="w-[15%]"></th>
                        <th scope="col" class="w-[5%]"></th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="product in wishlistProductWithDetails" :key="product.id" class="relative">
                        <td data-title="Product">
                            <div class="flex gap-3 items-center w-[85%]">
                                <router-link :to="{ name: 'singleProduct', params: { id: product?.id } }">
                                    <img class="w-16 h-14" :src="product.thumbnail" :alt="product.name">
                                </router-link>
                                <h4>
                                    <router-link :to="{ name: 'singleProduct', params: { id: product?.id } }"
                                        class="font-semibold">
                                        {{ product.name }}
                                    </router-link>
                                </h4>
                            </div>
                        </td>

                        <td data-title="Price" class="res-heading text-center font-semibold text-textGray">
                            {{ product.selling_price }}
                        </td>

                        <td data-title="Qty" class="res-heading text-center font-semibold text-textGray capitalize">
                            {{ product.stock_quantity > 1 ? 'In Stock' : 'Out of Stock' }}
                        </td>

                        <td>
                            <button @click="addItem(product)" class="btn btn-secondary md:m-auto">Add to cart</button>
                        </td>

                        <td class="res-btn">
                            <button
                                class="border border-borderLight hover:border-primary w-9 h-9 rounded-full text-[11px] text-primary"
                                @click="handleToggleWishlist(product)">
                                <font-awesome-icon :icon="['fas', 'x']" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-else>
            <p>Your wishlist is empty. To add please explore <router-link to="/"
                    class="underline text-primary">products.</router-link></p>
        </div>
    </div>
</template>


<style scoped>
table {
    @apply w-full
}

th {
    @apply uppercase
}

tr {
    @apply border-b border-b-borderLight
}

thead tr {
    @apply border-none
}

th, td {
    @apply p-4
}

@media (width <=412px) {
    tr {
        @apply block border-b-borderDark bg-[#f7f7f7]
    }

    td {
        @apply flex justify-between items-center border-b border-borderLight last:border-b-0
    }

    td:first-child {
        @apply justify-start
    }

    .res-heading::before {
        @apply content-[attr(data-title)_":"] text-body font-medium
    }

    .res-btn {
        @apply absolute top-auto bottom-1 right-0
    }
}
</style>