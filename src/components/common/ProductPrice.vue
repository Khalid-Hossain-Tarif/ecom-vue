<script setup>
defineProps({
    smallFontSize: String,
    largeFontSize: String
});
</script>

<template>
    <div class="flex items-center gap-4">
        <span :class="smallFontSize" class="text-textGray text-sm"><del>$150.00</del></span>
        <span :class="largeFontSize" class="text-primary font-semibold text-base">$129.00</span>
    </div>
</template>