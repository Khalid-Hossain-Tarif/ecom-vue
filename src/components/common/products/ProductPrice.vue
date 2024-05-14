<script setup>
defineProps({
    smallFontSize: String,
    largeFontSize: String,
    regularPrice: String,
    discountPrice: String
});
</script>

<template>
    <div class="flex items-center gap-4">
        <span 
            v-if="discountPrice && regularPrice"
            :class="smallFontSize" 
            class="text-textGray text-sm"
        >
            <del>${{ discountPrice }}</del>
        </span>
        <span 
            v-if="regularPrice" 
            :class="largeFontSize" 
            class="text-primary font-semibold text-base"
        >
            $ {{ regularPrice }}
        </span>
    </div>
</template>