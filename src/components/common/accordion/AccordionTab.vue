<!-- <template>
    <div>
        <div>
            <button class="p-4 w-full bg-grayLight text-left flex justify-between items-center gap-4 text-base font-bold">
                <span>{{ header }}</span>
                <span class="rotate-90 text-xl"> 
                    > 
                </span>
            </button>
        </div>
        
        <div class="p-4">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const activeIndex = ref(0)

defineProps({
    header: {
        type: String,
        default: 'Header'
    }
})

</script> -->

<template>
  <div>
    <div>
      <button 
        @click="toggleAccordion" 
        :class="{ 'bg-grayLight': isActive, 'bg-slate-50': !isActive }"
        class="p-4 w-full border-b border-borderDark/10 text-left flex justify-between items-center gap-4 text-base font-bold"
      >
        <span>{{ header }}</span>
        <span :class="{ '-rotate-90': isActive, 'rotate-90': !isActive }" class="text-xl">
          > 
        </span>
      </button>
    </div>
    
    <div v-if="isActive" class="p-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const isActive = ref(false)

const toggleAccordion = () => {
  isActive.value = !isActive.value
}

defineProps({
  header: {
    type: String,
    default: 'Header'
  }
})
</script>
