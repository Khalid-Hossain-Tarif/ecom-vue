<script setup>
defineProps({
    message: {
        type: String,
        default: 'Error'
    },
})
</script>

<template>
    <p class="mt-1 text-xs text-danger">{{ message }}</p>
</template>