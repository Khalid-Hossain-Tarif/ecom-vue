<script setup>
import { ref } from "vue";

const categoriesMenu = ref([
    {
        label: 'Hot Deals!',
        to: 'category',
        menuIconName: 'fire-flame-curved',
        isArrowIcon: false,
    },
    {
        label: 'Top 100 Offers',
        to: 'category',
        menuIconName: 'star',
        isArrowIcon: false,
    },
    {
        label: 'smartphone & tablet',
        to: 'category',
        menuIconName: 'mobile-screen-button',
        isArrowIcon: true,
    },
    {
        label: 'computer & laptop',
        to: 'category',
        menuIconName: 'laptop',
        isArrowIcon: true,
    },
    {
        label: 'smartphone & tablet',
        to: 'category',
        menuIconName: 'mobile-screen-button',
        isArrowIcon: true,
    },
    {
        label: 'computer & laptop',
        to: 'category',
        menuIconName: 'laptop',
        isArrowIcon: true,
    },
    {
        label: 'smartphone & tablet',
        to: 'category',
        menuIconName: 'mobile-screen-button',
        isArrowIcon: true,
    },
    {
        label: 'computer & laptop',
        to: 'category',
        menuIconName: 'laptop',
        isArrowIcon: true,
    },
    {
        label: 'smartphone & tablet',
        to: 'category',
        menuIconName: 'mobile-screen-button',
        isArrowIcon: true,
    },
]);
</script>

<template>
    <ul class="divide-y divide-borderLight">
        <li v-for="menu in categoriesMenu" :key="menu?.label">
            <router-link :to="menu?.to" active-class="active-menu" class="menu-item group">
                <div class="has-icon">
                    <font-awesome-icon :icon="['fas', menu?.menuIconName]" />
                    <span class="transition-all group-hover:text-primary">{{ menu?.label }}</span>
                </div>
                <font-awesome-icon v-if="menu?.isArrowIcon" :icon="['fas', 'angle-right']"
                    class="text-textGray/30 transition-all group-hover:text-primary" />
            </router-link>
        </li>
    </ul>
</template>

<style scoped>
.menu-item {
    @apply flex justify-between text-xs items-center uppercase font-medium py-4 transition-all
}

.has-icon {
    @apply flex items-center gap-2
}

.has-icon svg {
    @apply w-4 text-textGray opacity-30 group-hover:opacity-100 transition-all
}
</style>