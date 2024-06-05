<script setup>
import { cart } from "@/store/cart/index"

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
    <!-- {{cart.items}} -->
    <div :class="class">
        <!-- <input type="button" value="-"
            class="border border-grayLight rounded-l bg-grayLight px-3 text-base font-semibold transition duration-300 cursor-pointer hover:text-primary"
            :class="fieldPadding"> -->
        <button 
            @click="cart.productCount('decrement', item.product)"
            class="border border-grayLight rounded-l bg-grayLight px-3 text-base font-semibold transition duration-300 cursor-pointer hover:text-primary"
            :class="fieldPadding"
        >
            -
        </button>
        <!-- <input type="number" step="1" min="1" max="98" value="1" inputmode="numeric" autocomplete="off"
            class="!w-[59px] !inline !rounded-none border border-grayLight text-base font-bold text-heading text-center"
            :class="fieldPadding"> -->

        <input 
            type="number" step="1" min="1" 
            :value="item.quantity" 
            inputmode="numeric" autocomplete="off"
            class="!w-[59px] !inline !rounded-none border border-grayLight text-base font-bold text-heading text-center"
            :class="fieldPadding"
        >    

        <!-- <input type="button" value="+"
            class="border border-grayLight rounded-r bg-grayLight px-3 text-base font-semibold transition duration-300 cursor-pointer hover:text-success"
            :class="fieldPadding"> -->
        <button 
            @click="cart.productCount('increment', item.product)"
            class="border border-grayLight rounded-l bg-grayLight px-3 text-base font-semibold transition duration-300 cursor-pointer hover:text-primary"
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