<script setup>
import CartInputButton from '@/components/common/products/CartInputButton.vue';
import { cart } from "@/store/cart/index";
import { printPrice } from "@/utils/Helpers.js";

const { cartItems, productCount, emptyCart, updatePrices, deleteItem } = cart();
</script>

<template>
    <div>
        <h1 class="primary-heading mb-7">My Cart</h1>
        <div class="grid lg:grid-cols-3 items-start gap-8 lg:gap-4 xl:gap-10">
            <div class="lg:col-span-2">
                <table class="cart-products-table">
                    <thead class="bg-[#F9F3F0] rounded hidden sm:table-header-group">
                        <tr>
                            <th scope="col" class="w-[35%] !pl-6 text-left">Product</th>
                            <th scope="col" class="w-[15%]">Price</th>
                            <th scope="col" class="w-[30%]">Quantity</th>
                            <th scope="col" class="w-[15%]">Subtotal</th>
                            <th scope="col" class="w-[5%]"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="item in cartItems.items" :key="item.product.id" class="relative">
                            <td data-title="Product" class="flex gap-3 items-center">
                                <router-link 
                                    v-if="item.product.id"
                                    :to="{ name: 'singleProduct', params: { id: item.product.id } }"
                                    class="shrink-0"
                                >
                                    <img class="w-16 h-14" :src="item.product.thumbnail" alt="Digital Product">
                                </router-link>
                                <h4>
                                    <router-link 
                                        v-if="item.product.id" 
                                        :to="{ name: 'singleProduct', params: { id: item.product.id } }"
                                        class="font-semibold">
                                        {{ item.product.name }}
                                    </router-link>
                                </h4>
                            </td>

                            <td data-title="Price" class="res-heading text-center font-semibold text-textGray">
                                {{ printPrice(item.product.selling_price) }}
                            </td>

                            <td data-title="Qty" class="res-heading text-center">
                                <CartInputButton 
                                    :item="item" 
                                    :productCount="productCount"
                                />
                            </td>
                            <td data-title="Subtotal" class="res-heading text-center font-semibold text-textGray">
                                {{ printPrice(item.product.selling_price * item.quantity) }}
                            </td>

                            <td class="res-btn">
                                <button
                                    @click="deleteItem(item.product)"
                                    class="border border-borderLight hover:border-primary w-9 h-9 rounded-full text-[11px] text-primary">
                                    <font-awesome-icon :icon="['fas', 'x']" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="mt-5 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div class="flex items-center">
                        <input autocomplete="off" type="text" id="coupon" placeholder="Enter coupon code"
                            class="!rounded-r-none">
                        <button class="btn btn-secondary font-bold uppercase rounded-l-none shrink-0">Apply
                            coupon</button>
                    </div>

                    <div class="flex items-center gap-2 xl:gap-4">
                        <button
                            :disabled="cartItems.totalCartItems === 0" 
                            @click="emptyCart" 
                            class="btn btn-bordered grow"
                            :class="cartItems.totalCartItems === 0 ? 'opacity-30' : ''"
                        >
                            Empty cart
                        </button>
                        <button 
                            @click="updatePrices" 
                            :disabled="!cartItems.isCartUpdated" 
                            :class="!cartItems.isCartUpdated ? 'opacity-30 cursor-not-allowed' : ''"
                            class="btn btn-bordered grow"
                        >
                            Update cart
                        </button>
                    </div>
                </div>
            </div>

            <div class="bg-[#F9F3F0] p-6 xl:p-10 rounded">
                <h3 class="primary-heading mb-7">Order Summary</h3>
                <table class="order-table">
                    <tbody>
                        <tr>
                            <td class="min-w-[100px] xl:min-w-[120px]">Subtotal</td>
                            <td>{{ printPrice(cartItems.subtotalPrice) }}</td>
                        </tr>
                        <tr>
                            <td class="min-w-[100px] xl:min-w-[120px]">Shipping</td>
                            <td>
                                <div class="input-group flex items-center">
                                    <input 
                                        v-model="cartItems.shippingMethods.selectedMethods" 
                                        type="radio" 
                                        id="free-shipping" 
                                        value="free-shipping"
                                    >
                                    <label for="free-shipping" class="pl-2">Free Shippping</label>
                                </div>
                                <div class="input-group flex items-center my-2">
                                    <input 
                                        v-model="cartItems.shippingMethods.selectedMethods" 
                                        type="radio" 
                                        id="local-pickup" 
                                        value="local-pickup"
                                    >
                                    <label for="local-pickup" class="pl-2">Local Pickup: {{ printPrice(cartItems.shippingMethods.localPickup) }}</label>
                                </div>
                                <!-- <div class="input-group flex items-center gap-2">
                                    <input type="radio" id="flat-rate" name="flat rate">
                                    <label for="flat-rate" class="">Flat rate: $12.00</label>
                                </div> -->
                            </td>
                        </tr>
                        <tr>
                            <td class="min-w-[100px] xl:min-w-[120px]">State Tax</td>
                            <td>{{ cartItems.stateTax }}%</td>
                        </tr>
                        <tr>
                            <td class="min-w-[100px] xl:min-w-[120px]">Total</td>
                            <td class="!font-bold text-primary text-lg">
                                {{ printPrice(cartItems.totalPrice) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-secondary w-full mt-5">Proceed to checkout</button>
            </div>
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

.order-table td {
    @apply py-4 font-medium
}

.order-table tr:first-child td {
    @apply pt-0
}

.cart-products-table th,
.cart-products-table td {
    @apply p-4
}

@media (width <=412px) {
    .cart-products-table tr {
        @apply block border-b-borderDark bg-[#f7f7f7]
    }

    .cart-products-table td {
        @apply flex justify-between items-center border-b border-borderLight last:border-b-0
    }

    .cart-products-table td:first-child {
        @apply justify-start
    }

    .res-heading::before {
        @apply content-[attr(data-title)_":"] text-body font-medium
    }

    .res-btn {
        @apply absolute top-3 right-0
    }
}
</style>