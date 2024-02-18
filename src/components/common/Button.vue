<script setup>
defineProps({
    type: String,
    class: String
});
</script>

<template>
    <button :type="type" class="btn" :class="class">
        <slot />
    </button>
</template>

<style scoped>
.btn {
    @apply border rounded px-7 py-3 text-center uppercase font-medium tracking-widest text-xs
}
.btn-primary {
    @apply bg-primary text-white border-primary hover:bg-secondary hover:border-secondary
}
.btn-secondary {
    @apply bg-secondary text-white border-secondary hover:bg-primary hover:border-primary
}
.btn-bordered {
    @apply bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-white
}
</style>