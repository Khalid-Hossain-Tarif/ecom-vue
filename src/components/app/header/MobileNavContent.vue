<script setup>
import PrimaryMenu from "@/components/app/header/PrimaryMenu.vue";
import ShopByCategoriesMenuItems from "@/components/app/header/ShopByCategoriesMenuItems.vue";
</script>

<template>
    <div class="relative">
        <input type="radio" name="tabs" value="1" id="tab-one" class="peer/tab-one" checked />
        <input type="radio" name="tabs" value="2" id="tab-two" class="peer/tab-two" />

        <div class="tabs-buttons flex">
            <label for="tab-one">main menu</label>
            <label for="tab-two">shop by categories</label>
        </div>

        <div class="p-4 hidden peer-checked/tab-one:block">
            <nav class="font-medium text-xs uppercase flex flex-col divide-y divide-borderLight">
                <PrimaryMenu hasIcon menuItemClass="py-3" />
            </nav>
        </div>

        <div class="p-4 hidden peer-checked/tab-two:block">
            <ShopByCategoriesMenuItems />
        </div>
    </div>
</template>

<style scoped>
input[type="radio"] {
    @apply absolute opacity-0 transition-all
}

label {
    @apply grow p-3 border border-borderLight bg-grayLight text-heading text-xs font-semibold text-center uppercase cursor-pointer transition-all duration-300
}

#tab-one:checked~.tabs-buttons label:first-child,
#tab-two:checked~.tabs-buttons label:last-child {
    @apply bg-heading text-white border-heading
}
</style>