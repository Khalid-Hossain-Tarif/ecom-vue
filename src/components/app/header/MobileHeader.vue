<script setup>
import MobileNav from "@/components/app/header/MobileNav.vue";
import CartFloatingSidebar from "@/components/app/header/CartFloatingSidebar.vue";

window.addEventListener("scroll", function () {
    let hiddenWhenSticky = document.querySelector(".hidden-when-sticky");
    hiddenWhenSticky.classList.toggle("scrolled", window.scrollY > 0);
});
</script>

<template>
    <header class="sticky top-0 z-[999]">
        <div class="bg-secondary py-4">
            <div class="custom-container">
                <div class="flex justify-between items-center gap-5">
                    <div class="shrink-0">
                        <MobileNav />
                    </div>

                    <div class="flex w-full h-10">
                        <input class="block rounded-l w-full p-2 pl-4 outline-none bg-grayLight"
                            placeholder="Search your products" autocomplete="off" value="">
                        <button class="bg-grayLight rounded-r border border-borderLight border-l-white px-4 py-2 text-base">
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                        </button>
                    </div>

                    <div class="text-white text-lg shrink-0">
                        <CartFloatingSidebar />
                    </div>
                </div>
            </div>
        </div>

        <div class="hidden-when-sticky bg-secondary border-t border-borderDark -translate-x-0 transition-all duration-300">
            <div class="custom-container">
                <div class="py-4 flex justify-between items-center gap-4">
                    <div>
                        <router-link to="/" class="text-white font-semibold text-2xl">
                            <span class="font-bold text-primary">E</span>com.
                        </router-link>
                    </div>

                    <div class="text-grayLight text-xs flex gap-2 items-center">
                        <font-awesome-icon :icon="['fas', 'mobile-screen-button']" />
                        <a href="#">(+84) 777 890 999</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full h-18 p-4 fixed left-0 bottom-0 z-50 bg-white shadow-[0_-3px_4px_rgba(0,0,0,0.1)]">
            <ul class="grid grid-cols-4 gap-2 text-center capitalize">
                <li>
                    <router-link to="/" class="group" active-class="active-menu">
                        <font-awesome-icon :icon="['fas', 'house']" class="mb-.5 text-gray/50 text-base" />
                        <p>home</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/shop" class="group" active-class="active-menu">
                        <font-awesome-icon :icon="['fas', 'store']" class="mb-.5 text-gray/50 text-base" />
                        <p>shop</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/login" class="group" active-class="active-menu">
                        <font-awesome-icon :icon="['fas', 'user']" class="mb-.5 text-gray/50 text-base" />
                        <p>Account</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/wishlist" class="group" active-class="active-menu">
                        <div class="relative">
                            <font-awesome-icon :icon="['fas', 'heart']" class="mb-.5 text-gray/50 text-base" />
                            <span class="count-number !right-5">7</span>
                        </div>
                        <p>wishlist</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
.hidden-when-sticky.scrolled {
    @apply -translate-x-[800px]
}
</style>