<script setup>
defineProps({
    isSideNavOpen: {
        type: Boolean,
        default: false
    },
    toggleSideNav: {
        type: Function
    },
    sideNavWidth: {
        type: String,
        default: 'w-[300px]'
    },
    sideNavBgColor: {
        type: String,
        default: 'bg-white'
    },
    sideNavContentPadding: {
        type: String,
        default: 'p-4'
    },
    toRight: {
        type: Boolean,
        default: false
    },
});
</script>

<template>
    <Teleport to="body">
        <Transition>
            <div v-if="isSideNavOpen" class="w-full h-full z-[9999] fixed top-0" :class="toRight ? 'right-0' : 'left-0'">
                <div @click="toggleSideNav" class="w-full h-full bg-secondary/70 fixed inset-0 -z-10"></div>

                <div class="h-full absolute top-0" :class="[sideNavWidth, sideNavBgColor, toRight ? 'right-0' : 'left-0']">
                    <div class="flex flex-col h-full">
                        <slot name="header"></slot>
                        <div class="overflow-y-auto flex-grow" :class="sideNavContentPadding">
                            <slot></slot>
                        </div>
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    @apply -translate-x-full
}
</style>