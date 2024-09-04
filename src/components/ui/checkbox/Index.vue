<script setup>
import {computed} from "vue"
const props = defineProps({
  inputId: [String, Number],
  disabled: Boolean,
  required: Boolean,
  checked: Boolean,
  isLabel: Boolean,

  itemValue: [String, Number],
  itemName: String,
  labelTxt: String,
  labelColor: String,
  uppercase: Boolean,
  labelBold: Boolean,
  modelValue: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits();

// const isChecked = computed(() => {
//   return props.modelValue.includes(props.itemValue); // Determine if the checkbox should be checked
// });

const handleChange = (event) => {
  const isChecked = event.target.checked;
  const value = props.itemValue;

  if (isChecked) {
    emit('update:modelValue', [...props.modelValue, value]);
  } else {
    emit('update:modelValue', props.modelValue.filter(item => item !== value));
  }
}
</script>

<template>
  <div class="c-checkbox-item">
    <input type="checkbox" :id="inputId" :value="itemValue" :name="itemName" :disabled="disabled" :required="required" :checked="checked" @change="handleChange"
      class="c-checkbox-item-input" :class="disabled ? '!opacity-30' : ''">
    <label :for="inputId" class="c-checkbox-item-input-label"
      :class="[isLabel ? 'block' : 'hidden', uppercase ? 'uppercase' : 'capitalize', labelBold ? 'font-bold' : 'font-medium', labelColor ? '' : 'text-textGray'], disabled ? 'opacity-30' : ''">
      {{ labelTxt }}
    </label>
  </div>
</template>

<style scoped>
.c-checkbox-item {
  @apply flex items-center
}

.c-checkbox-item-input {
  @apply relative bg-transparent border-2 border-secondary rounded-sm w-4 h-4 appearance-none cursor-pointer opacity-50 transition-[border_background-color_opacity] hover:opacity-100 checked:opacity-100 checked:bg-secondary
}

.c-checkbox-item-input:before {
  @apply content-[''] w-[5px] h-2.5 -m-px ml-0 border-2 border-t-0 border-l-0 border-white absolute top-1/2 left-1/2 transform rotate-45 -translate-x-1/2 -translate-y-1/2 z-10
}

.c-checkbox-item-input-label {
  @apply pl-2 text-sm cursor-pointer
}
</style>