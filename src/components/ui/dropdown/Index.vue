<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

onMounted(() => {
  window.addEventListener('click', handleOutsideClick);
});

onUnmounted(() => {
  window.removeEventListener('click', handleOutsideClick);
});

const handleOutsideClick = (event) => {
  const dropdown = document.querySelector('.c-dropdown');
  if (dropdown && !dropdown.contains(event.target)) {
    isDropdownOpen.value = false;
  }
}

let props = defineProps({
  placeholder: {
    type: String,
    default: 'Select'
  },
  options: {
    type: Array,
    default: null
  },
  optionLabel: {
    type: String,
    default: null
  },
  optionValue: {
    type: String,
    default: null
  },
  showClear: {
    type: Boolean,
    default: false
  },
  filter: {
    type: Boolean,
    default: false
  },
  dropdownClass: {
    type: [String, Object],
    default: 'w-full'
  },
  panelClass: {
    type: [String, Object],
    default: 'min-w-[250px] max-w-[330px] sm:max-w-[600px]'
  }
});

const isDropdownOpen = ref(false);
const selectedOption = ref(null);
let showClearValue = props.showClear;
showClearValue = false;
const options = props.options;
const optionLabel = props.optionLabel;
const filterMessage = ref('');
const emit = defineEmits();

const dropdownToggler = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
}

const selectedOptionHandler = (option) => {
  selectedOption.value = option;
  isDropdownOpen.value = false;
  emit('update:modelValue', option);
  showClearValue = true;
}

const clearOptionHandler = () => {
  selectedOption.value = null;
  showClearValue = false;
  emit('update:modelValue', null);
  filterMessage.value = '';
}

const filteredOptions = computed(() => {
  const searchTerm = filterMessage.value.toLowerCase();
  return options.filter((option) => {
    return option[optionLabel].toLowerCase().includes(searchTerm);
  });
});
</script>

<template>
  <div class="c-dropdown" :class="dropdownClass">
    <div class="c-dropdown-input" @click="dropdownToggler"
      :class="isDropdownOpen ? 'border-secondary/30' : 'border-borderLight'">
      <div class="c-dropdown-label">
        <span v-if="selectedOption" class="c-dropdown-text-overflow">{{ selectedOption }}</span>
        <span v-else class="c-dropdown-text-overflow">{{ placeholder }}</span>
        <svg v-if="showClearValue" width="14" height="14" viewBox="0 0 14 14" fill="none"
          xmlns="http://www.w3.org/2000/svg" class="c-dropdown-clear" @click="clearOptionHandler" aria-hidden="true">
          <path
            d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
            fill="#676769"></path>
        </svg>
      </div>
      <div class="c-dropdown-trigger" :class="isDropdownOpen ? 'rotate-180' : ''">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
            fill="#676769"></path>
        </svg>
      </div>
    </div>

    <!-- Dropdown panel -->
    <div v-if="isDropdownOpen" class="c-dropdown-panel" :class="panelClass">
      <div v-if="filter" class="c-dropdown-header">
        <div class="c-dropdown-search-container">
          <input v-model="filterMessage" type="text" class="c-dropdown-search" role="searchbox" autocomplete="off" />
          <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="none"
            class="c-dropdown-search-icon">
            <path
              d="M20 20L15.8033 15.8033C15.8033 15.8033 14 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 11.0137 17.9484 11.5153 17.85 12"
              stroke="#4D4D4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      <div class="c-dropdown-items-wrapper">
        <ul class="c-dropdown-items" role="listbox">
          <li @click="selectedOptionHandler(option[optionLabel])" v-for="option in filteredOptions"
            :key="option[optionValue]" class="c-dropdown-item-wrapper"
            :class="option[optionLabel] === selectedOption ? 'bg-grayLight text-success' : 'bg-transparent text-heading'"
            role="option">
            <p class="c-dropdown-item c-dropdown-text-overflow">{{ option[optionLabel] }}</p>
          </li>

          <!-- <li class="c-dropdown-item-wrapper" role="option">
            <div class="c-dropdown-item c-dropdown-multiple-item c-dropdown-text-overflow">
              <input type="checkbox" name="" class="c-dropdown-item-checkbox" id="checked-item1">
              <label for="checked-item1"
                class="c-dropdown-item-checkbox-label c-dropdown-text-overflow">Bangladesh</label>
            </div>
          </li>

          <li @click="dropdownToggler" class="c-dropdown-item-wrapper" role="option">
            <div class="c-dropdown-item c-dropdown-multiple-item c-dropdown-text-overflow">
              <input type="checkbox" name="" class="c-dropdown-item-checkbox" id="checked-item2">
              <label for="checked-item2"
                class="c-dropdown-item-checkbox-label c-dropdown-text-overflow">Bangladesh</label>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-dropdown {
  @apply relative z-[99];
}

.c-dropdown-text-overflow {
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
}

.c-dropdown-input {
  @apply flex justify-between bg-white border rounded cursor-pointer transition-all;
}

.c-dropdown-label {
  @apply flex-grow relative bg-transparent text-sm text-heading p-3;
}

.c-dropdown-clear {
  @apply absolute right-1 top-1/2 -translate-y-1/2
}

.c-dropdown-trigger {
  @apply flex justify-center items-center bg-transparent text-body w-10 px-2 py-2.5 transition-transform;
}

.c-dropdown-panel {
  @apply bg-white rounded shadow-[0_40px_70px_#32323247] absolute z-[9] right-0 transition-all duration-1000;
}

.c-dropdown-header {
  @apply bg-grayLight rounded-t text-heading px-4 py-3 border-b border-borderLight;
}

.c-dropdown-search-container {
  @apply relative;
}

.c-dropdown-search {
  @apply w-full text-sm bg-white rounded pl-3 pr-10 py-3 text-heading border border-solid border-borderLight focus:border-borderDark transition-[border-color] duration-[0.2s];
}

.c-dropdown-search-icon {
  @apply w-6 absolute right-0 top-2/4 -translate-x-1/2 -translate-y-1/2;
}

.c-dropdown-items-wrapper {
  @apply max-h-[230px] overflow-hidden overflow-y-auto;
}

.c-dropdown-item-wrapper {
  @apply transition-[background-color] duration-[0.2s] px-4 py-3 first:pt-4 hover:bg-grayLight border-t border-borderLight first:border-t-0 cursor-pointer flex items-center gap-1.5;
}

.c-dropdown-item {
  @apply relative;
}

.c-dropdown-multiple-item {
  @apply flex items-center;
}

.c-dropdown-item-checkbox {
  @apply relative bg-transparent h-5 min-w-[20px] cursor-pointer transition-all duration-[0.3s] rounded-sm border-2 border-borderDark opacity-50 hover:opacity-100 checked:bg-borderDark checked:opacity-100 checked:border-borderDark appearance-none;
}

.c-dropdown-item-checkbox:before {
  @apply content-[''] absolute w-[5px] h-[11px] -translate-x-2/4 -translate-y-2/4 z-[2] -my-px mb-0 border-transparent checked:border-white rotate-45 top-1/2 left-1/2;
}

.c-dropdown-item-checkbox:before {
  border-width: 0 2px 2px 0;
}

.c-dropdown-item-checkbox-label {
  @apply relative cursor-pointer pl-3;
}

.c-dropdown-items-wrapper::-webkit-scrollbar {
  @apply w-3 h-[61px];
}

.c-dropdown-items-wrapper::-webkit-scrollbar-track {
  @apply border border-[#EDEDED] rounded-[10px];
}

.c-dropdown-items-wrapper::-webkit-scrollbar-thumb {
  @apply bg-[#cecece] rounded-[10px];
}

.c-dropdown-items-wrapper::-webkit-scrollbar-thumb:hover {
  @apply bg-[#bbbbbb];
}
</style>