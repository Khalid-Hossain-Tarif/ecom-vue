<script setup>
import Checkbox from "@/components/ui/checkbox/Index.vue";
import StarRating from "@/components/common/products/rating/StarRating.vue";
</script>

<template>
  <div>
    <div>
      <h4 class="sidebar-title !mt-0">shop by categories</h4>
      <div class="max-h-[250px] overflow-y-auto custom-scrollbar">
        <div v-for="(n, index) in 20" :key="index" class="mb-2.5 last:mb-0">
          <Checkbox is-label label-txt="accessories" :input-id="index" />
      </div>
      </div>
    </div>

    <div>
      <h4 class="sidebar-title">price</h4>
      <div>
        <div class="slider">
          <div class="progress"></div>
        </div>
        <div class="range-input">
          <input type="range" class="range-min" min="0" max="90" value="0" step="10">
          <input type="range" class="range-max" min="10" max="100" value="100" step="10">
        </div>
      </div>
      <div class="flex justify-between items-center mt-4 text-xs">
        <p class="text-textGray font-medium">Price: $10 — $1,0000</p>
        <p class="uppercase font-bold underline cursor-pointer">Filter</p>
      </div>
    </div>

    <div>
      <h4 class="sidebar-title">AVERAGE RATING</h4>
      <div class="grid gap-2.5">
        <StarRating v-for="(n, index) in 4" :key="index" />
      </div>
    </div>

  </div>
</template>

<style scoped>
.sidebar-title {
  @apply text-base font-bold uppercase mt-10 mb-5
}

.slider {
  @apply h-1 relative rounded bg-grayLight
}
.slider .progress {
  @apply h-full rounded absolute inset-x-[30%] bg-secondary
}
.range-input {
  @apply relative;
}
.range-input input {
  @apply  w-full h-1 absolute -top-1 bg-transparent appearance-none pointer-events-none
}
input[type="range"]::-webkit-slider-thumb {
  @apply h-[14px] w-[14px] pointer-events-auto shadow-[0_0_6px_rgba(0,0,0,0.05)] rounded-full border-none bg-secondary appearance-none
}
input[type="range"]::-moz-range-thumb {
  @apply h-[14px] w-[14px] pointer-events-auto shadow-[0_0_6px_rgba(0,0,0,0.05)] rounded-full border-none bg-secondary appearance-none
}
</style>