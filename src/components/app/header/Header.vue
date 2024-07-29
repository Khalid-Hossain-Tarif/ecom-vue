<script setup>
import ShopByCategoriesMenu from "@/components/app/header/ShopByCategoriesMenu.vue";
import ProfileMenu from "@/components/app/header/ProfileMenu.vue";
import PrimaryMenu from "@/components/app/header/PrimaryMenu.vue";
import CartFloatingSidebar from "@/components/app/header/CartFloatingSidebar.vue";
import { state } from '@/store/wishlist';
</script>

<template>
  <header class="sticky top-0 z-[9999]">
    <div class="bg-secondary py-4">
      <div class="custom-container">
        <div class="flex justify-between items-center">
          <div>
            <router-link to="/" class="text-white font-semibold text-2xl"><span
                class="font-bold text-primary">E</span>com.
            </router-link>
          </div>

          <div class="flex w-[600px] h-10">
            <input class="block rounded-l w-full p-2 pl-4 outline-none bg-grayLight" placeholder="Search your products"
              autocomplete="off" value="">
            <button class="bg-grayLight rounded-r border border-borderLight border-l-white px-4 py-2 text-base">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </button>
          </div>

          <ul class="flex items-center gap-7 text-white text-base">
            <ProfileMenu />
            <li>
              <router-link to="/wishlist" class="relative">
                <font-awesome-icon :icon="['far', 'heart']" />
                <span class="count-number">{{ state.wishlistItems.length }}</span>
              </router-link>
            </li>
            <li>
              <CartFloatingSidebar />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-secondary border-t border-borderDark">
      <div class="custom-container">
        <div class="flex justify-between items-center gap-4">

          <ShopByCategoriesMenu />

          <nav class="flex items-center gap-4 lg:gap-7 font-semibold text-white uppercase">
            <PrimaryMenu />
          </nav>
          <div class="text-grayLight text-xs flex gap-2 items-center">
            <font-awesome-icon :icon="['fas', 'mobile-screen-button']" />
            <a href="#">(+84) 777 890 999</a>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>