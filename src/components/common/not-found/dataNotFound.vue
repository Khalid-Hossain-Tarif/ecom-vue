<script setup>
defineProps({
    message: {
        type: String,
        default: 'No data found!'
    }
})
</script>

<template>
    <div class="p-8 lg:p-10 bg-primary/5 rounded text-xl md:text-2xl font-medium text-primary">
        {{ message }}
    </div>
</template>