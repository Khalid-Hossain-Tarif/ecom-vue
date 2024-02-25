<script setup>
defineProps({
    isModalOpen: {
        type: Boolean,
        default: false
    },
    toggleModal: {
        type: Function
    },
    modalWidth: {
        type: String,
        default: 'lg:w-[900px]'
    },
    modalBgColor: {
        type: String,
        default: 'bg-white'
    },
    modalPadding: {
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
            <div v-if="isModalOpen" class="w-full h-full flex justify-center items-center z-[9999] fixed left-0 top-0">
                <div @click="toggleModal" class="w-full h-full bg-secondary/70 fixed inset-0 -z-10"></div>

                <div class="w-[90%] h-fit max-h-[90%] bg-white rounded" :class="[modalWidth, modalBgColor]">
                    <div class="flex flex-col h-full relative">
                        <button @click="toggleModal" class="absolute right-5 top-3">
                            <font-awesome-icon :icon="['far', 'circle-xmark']"
                                class="text-base hover:text-primary cursor-pointer" />
                        </button>
                        <slot name="header"></slot>
                        <div class="overflow-y-auto flex-grow" :class="modalPadding">
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
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>