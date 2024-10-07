<script setup>
defineProps({
    position: String,
    label: [String, Number]
});
</script>

<template>
    <div 
        v-if="label" 
        :class="position" class="absolute right-0 top-0 z-50 grid gap-1 text-center"
    >
            <!-- <span class="inline-block px-3 py-1 bg-danger text-white text-xs uppercase">HOT</span> -->
            <span class="inline-block px-3 py-1 bg-success text-white text-xs uppercase">
                {{ label ? 'Trendy' : null }}
            </span>
    </div>
</template>