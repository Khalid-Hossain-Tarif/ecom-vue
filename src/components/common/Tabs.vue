<script setup>
import { ref } from 'vue';

const props = defineProps({
    tabs: {
        type: Array,
        required: true
    },
    defaultTab: {
        type: String,
        default: null
    },
    headerStyle: {
        type: [Array, Object, String],
        default: ''
    },
    headerPosition: {
        type: [Array, Object, String],
        default: ''
    },
    uppercase: {
        type: Boolean,
    }
});

const currentTab = ref(props.defaultTab || tabs[0].id);

const selectTab = (id) => {
    currentTab.value = id;
};
</script>

<template>
    <div class="c-tabs">
        <ul class="c-tabs-header" :class="[headerStyle, headerPosition, uppercase ? 'uppercase' : 'capitalize']">
            <li v-for="tab in tabs" :key="tab?.id" class="c-tabs-header-item"
                :class="{ 'c-tabs-header-item-active': currentTab === tab?.id }" @click="selectTab(tab?.id)">
                {{ tab?.label }}
            </li>
        </ul>
        <div class="tabs-content">
            <slot :name="currentTab"></slot>
        </div>
    </div>
</template>


<style scoped>
.c-tabs-header {
    @apply flex flex-wrap gap-2 sm:gap-3 mb-7
}

.c-tabs-header-item {
    @apply px-3 sm:px-5 py-2 border border-borderLight rounded-full font-medium cursor-pointer transition-all duration-300
}

.c-tabs-header-item-active {
    @apply bg-heading text-white border-heading
}
</style>