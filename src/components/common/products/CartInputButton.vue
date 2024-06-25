<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => ({}),
        required: true
    },
    productCount: {
        type: Function,
        required: true
    },
    class: {
        type: String
    },
    fieldPadding: {
        type: String,
        default: 'py-2.5'
    },
});

const emit = defineEmits(['decrement', 'increment']);

const handleDecrement = () => {
    props.productCount('decrement', props.item.product);
    emit('decrement', props.item.product);
};

const handleIncrement = () => {
    props.productCount('increment', props.item.product);
    emit('increment', props.item.product);
};
</script>

<template>
    <div :class="class">
        <button 
            @click="handleDecrement"
            class="border border-grayLight rounded-l bg-grayLight px-3 text-base font-semibold transition duration-300 cursor-pointer hover:text-primary"
            :class="fieldPadding"
        >
            -
        </button>
        {{ item.quantity }}
        <button 
            @click="handleIncrement"
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