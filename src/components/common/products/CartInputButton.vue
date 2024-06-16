<script setup>
import { cart } from "@/store/cart/index";

const { cartItems, productCount } = cart();

defineProps({
    item: {
        type: Object,
        default: 'item'
    },
    class: {
        type: String
    },
    fieldPadding: {
        type: String,
        default: 'py-2.5'
    },
});
</script>

<template>
    <div :class="class">
        <button 
            @click="productCount('decrement', item.product)"
            class="border border-grayLight rounded-l bg-grayLight px-3 text-base font-semibold transition duration-300 cursor-pointer hover:text-primary"
            :class="fieldPadding"
        >
            -
        </button>
        {{ item.quantity }}
        <button 
            @click="productCount('increment', item.product)"
            class="border border-grayLight rounded-r bg-grayLight px-3 text-base font-semibold transition duration-300 cursor-pointer hover:text-primary"
            :class="fieldPadding"
        >
            +
        </button>
    </div>
</template>


<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>