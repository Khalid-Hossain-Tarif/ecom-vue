<script setup>
import CartInputButton from '@/components/common/products/CartInputButton.vue';
import SideNav from "@/components/common/SideNav.vue";
import { cart } from "@/store/cart/index";
import { ref } from 'vue';

const { cartItems, productCount, emptyCart, updatePrices, addItem, deleteItem } = cart()

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
</script>

<template>
    <button @click="cartPopupToggler" class="relative">
        <font-awesome-icon :icon="['fas', 'cart-plus']" />
        <span class="count-number">{{ cartItems.totalCartItems }}</span>
    </button>

    <SideNav :isSideNavOpen="isCartPopup" :toggleSideNav="cartPopupToggler" sideNavWidth="w-full sm:w-[400px]"
        sideNavContentPadding="p-7 pr-5" toRight>
        <template #header>
            <div class="p-5 flex justify-between items-center border-b border-borderLight">
                <h4 class="small-heading uppercase">Cart({{ cartItems.totalCartItems }})</h4>
                <div class="flex items-center gap-3">
                    <button class="border-b uppercase text-xs font-medium hover:text-primary">Clear all</button>
                    <font-awesome-icon @click="cartPopupToggler" :icon="['far', 'circle-xmark']"
                        class="text-lg hover:text-primary cursor-pointer" />
                </div>
            </div>
        </template>

        <template #default>
            <div>
                <!-- <div>
                    <p>Your cart is currently empty</p>
                    <div class="inline-block mt-4">
                        <router-link to="/shop" class="btn btn-primary btn-icon">
                            <span>Continue shopping</span>
                            <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
                        </router-link>
                    </div>
                </div> -->

                <div>
                    <ul class="divide-y divide-borderLight space-y-5">
                        <li v-for="n in 10" class="pt-5 first:pt-0 flex items-center gap-4">
                            <div class="shrink-0">
                                <router-link to="/single-product">
                                    <img class="w-16 h-14" src="@/assets/images/home/top-sales/demo-product-img.png"
                                        alt="Digital Product">
                                </router-link>
                            </div>
                            <div class="flex-grow">
                                <div class="flex justify-between gap-1">
                                    <h4 class="font-medium">
                                        <router-link to="/single-product">
                                            Wireless PS Handler Wireless PS Handler Wireless PS Handler
                                        </router-link>
                                    </h4>
                                    <button><font-awesome-icon :icon="['fas', 'xmark']"
                                            class="text-base text-textGray/70 hover:text-primary" /></button>
                                </div>
                                <p class="my-2 font-semibold text-textGray">$24.00</p>
                                <div class="flex justify-between items-center gap-1">
                                    <CartInputButton fieldPadding="!py-1" />
                                    <p class="font-semibold">$24.00</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </template>

        <template #footer>
            <div class="p-5 border-t border-borderLight pt-5">
                <div class="flex justify-between items-center gap-x-2">
                    <p class="font-bold uppercase">Subtotal:</p>
                    <p class="font-bold text-primary">$24.00</p>
                </div>
                <div class="mt-5 flex gap-2 justify-between">
                    <router-link to="/cart" class="btn btn-bordered !px-1 flex-grow">View cart</router-link>
                    <router-link to="/checkout" class="btn btn-primary !px-1 flex-grow">Proceed to checkout</router-link>
                </div>
            </div>
        </template>
    </SideNav>
</template>