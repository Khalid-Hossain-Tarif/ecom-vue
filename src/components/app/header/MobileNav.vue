<script setup>
import SideNav from "@/components/common/SideNav.vue";
import MobileNavContent from "./MobileNavContent.vue";

import { ref } from 'vue';

const isSideNavOpen = ref(false);

const toggleMobileNav = () => {
    isSideNavOpen.value = !isSideNavOpen.value
};
</script>

<template>
    <div>
        <button class="text-lg text-white" @click="toggleMobileNav">
            <font-awesome-icon :icon="['fas', 'bars']" />
        </button>

        <SideNav :isSideNavOpen="isSideNavOpen" :toggleSideNav="toggleMobileNav" sideNavContentPadding="p-0">
            <div>
                <MobileNavContent />
            </div>
        </SideNav>

    </div>
</template>