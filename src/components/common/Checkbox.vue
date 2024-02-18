<script setup>
defineProps({
  inputId: [String, Number],
  name: String,
  disabled: Boolean,
  required: Boolean,

  isLabel: Boolean,
  labelTxt: String,
  labelColor: String,
  uppercase: Boolean,
  labelBold: Boolean
})
</script>

<template>
  <div class="c-checkbox-item">
    <input type="checkbox" :name="name" class="c-checkbox-item-input" :class="disabled ? '!opacity-30' : ''" :id="inputId"
      :disabled="disabled" :required="required">
    <label :for="inputId" class="c-checkbox-item-input-label"
      :class="[isLabel ? 'block' : 'hidden', uppercase ? 'uppercase' : 'capitalize', labelBold ? 'font-bold' : 'font-medium', labelColor ? '' : 'text-textGray'], disabled ? 'opacity-30' : ''">
      {{ labelTxt }}
    </label>
  </div>
</template>

<style scoped>
.c-checkbox-item {
  @apply flex items-center gap-2
}

.c-checkbox-item-input {
  @apply relative bg-transparent border-2 border-secondary rounded-sm w-4 h-4 appearance-none cursor-pointer opacity-50 transition-[border_background-color_opacity] hover:opacity-100 checked:opacity-100 checked:bg-secondary
}

.c-checkbox-item-input:before {
  @apply content-[''] w-[5px] h-2.5 -m-px ml-0 border-2 border-t-0 border-l-0 border-white absolute top-1/2 left-1/2 transform rotate-45 -translate-x-1/2 -translate-y-1/2 z-10
}

.c-checkbox-item-input-label {
  @apply text-sm cursor-pointer
}
</style>