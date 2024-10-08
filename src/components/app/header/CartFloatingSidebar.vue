<script setup>
import { ref } from 'vue';
import router from "@/router/index.js";
import CartInputButton from '@/components/common/products/CartInputButton.vue';
import SideNav from "@/components/common/SideNav.vue";
import { cart } from "@/store/cart/index";
import { printPrice } from "@/utils/Helpers.js";

const { cartItems, totalCartItems, productCount, emptyCart, updatePrices, addItem, deleteItem } = cart();

const isCartPopup = ref(false);
const getBody = document.getElementsByTagName('body')[0];

const cartPopupToggler = () => {
    isCartPopup.value = !isCartPopup.value;
    if (isCartPopup.value) {
        getBody.style.overflow = 'hidden';
    }
    else {
        getBody.style.overflow = 'auto';
    }
};

const goToCart = () => {
    router.push({ name: 'cart' })
    isCartPopup.value = false
}
</script>

<template>
    <button @click="cartPopupToggler" class="relative">
        <font-awesome-icon :icon="['fas', 'cart-plus']" />
        <span class="count-number">{{ totalCartItems }}</span>
    </button>

    <SideNav :isSideNavOpen="isCartPopup" :toggleSideNav="cartPopupToggler" sideNavWidth="w-full sm:w-[400px]"
        sideNavContentPadding="p-5" toRight>
        <template #header>
            <div class="p-5 flex justify-between items-center border-b border-borderLight">
                <h4 class="small-heading uppercase">Cart({{ totalCartItems }})</h4>
                <div class="flex items-center gap-3">
                    <button @click="emptyCart" class="border-b uppercase text-xs font-medium hover:text-primary">Clear all</button>
                    <font-awesome-icon @click="cartPopupToggler" :icon="['far', 'circle-xmark']"
                        class="text-lg hover:text-primary cursor-pointer" />
                </div>
            </div>
        </template>

        <template #default>
            <div>
                <div v-if="Object.keys(cartItems.items).length">
                    <ul class="divide-y divide-borderLight space-y-5">
                        <li v-for="item in cartItems.items" :key="item.product.id" class="pt-5 first:pt-0 flex items-center gap-4">
                            <div class="shrink-0">
                                <router-link 
                                    v-if="item.product.id" 
                                    :to="{ name: 'singleProduct', params: { id: item.product.id } }"
                                >
                                    <img class="w-16 h-14 object-cover" :src="item.product.thumbnail" alt="Product img">
                                </router-link>
                            </div>
                            <div class="flex-grow">
                                <div class="flex justify-between gap-1">
                                    <h4 class="font-medium">
                                        <router-link 
                                            v-if="item.product.id" 
                                            :to="{ name: 'singleProduct', params: { id: item.product.id } }"
                                        >
                                            {{ item.product.name }}
                                        </router-link>
                                    </h4>
                                    <button @click="deleteItem(item.product)">
                                        <font-awesome-icon :icon="['fas', 'xmark']" class="text-base text-textGray/70 hover:text-primary" />
                                    </button>
                                </div>
                                <p class="my-2 font-semibold text-textGray">{{ printPrice(item.product.selling_price) }}</p>
                                <div class="flex justify-between items-center gap-1">
                                    <CartInputButton :item="item" :productCount="productCount" fieldPadding="!py-1" />
                                    <p class="font-semibold">{{ printPrice(item.product.selling_price * item.quantity) }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>   
                </div>

                <div v-else>
                    <p>Your cart is currently empty</p>
                    <div class="inline-block mt-4">
                        <router-link to="/shop" class="btn btn-primary btn-icon">
                            <span>Continue shopping</span>
                            <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
                        </router-link>
                    </div>
                </div>
            </div>
        </template>

        <template #footer>
            <div v-if="Object.keys(cartItems.items).length" class="p-5 bg-borderLight/50">
                <button 
                    @click="updatePrices" :disabled="!cartItems.isCartUpdated"
                    :class="!cartItems.isCartUpdated ? 'opacity-30 cursor-not-allowed' : ''"
                    class="btn btn-secondary shrink-0"
                >
                    Update cart
                </button>
                <div class="flex items-center mt-3">
                    <input autocomplete="off" type="text" id="coupon" placeholder="Enter coupon code" class="!rounded-r-none">
                    <button class="btn btn-secondary font-bold uppercase rounded-l-none shrink-0">Apply coupon</button>
                </div>
            </div>

            <div class="p-5 border-t border-borderLight">
                <div class="flex justify-between items-center gap-x-2">
                    <div>
                        <p class="font-bold uppercase">Subtotal:</p>
                        <p class="text-xs text-textGray">(Without shipping and tax)</p>
                    </div>
                    <p class="font-bold text-primary">{{ printPrice(cartItems.subtotalPrice) }}</p>
                </div>
                <div class="mt-5 flex gap-2 justify-between">
                    <button @click="goToCart" class="btn btn-bordered !px-1 flex-grow">View cart</button>
                    <router-link to="/checkout" class="btn btn-primary !px-1 flex-grow">Proceed to checkout</router-link>
                </div>
            </div>
        </template>
    </SideNav>
</template>