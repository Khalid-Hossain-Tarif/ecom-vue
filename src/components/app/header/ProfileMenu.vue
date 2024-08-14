<script setup>
import { authStore } from "@/store/auth/index";
import router from "@/router/index.js";

const auth = authStore;
function handleLoginClick(e) {
  if (auth.isAuthenticated) {
    e.preventDefault();
  } else {
    router.push({ name: 'login' })
  }
}
</script>

<template>
  <li class="menu-hover relative">
    <div class="inline-block cursor-pointer" @click.prevent="handleLoginClick">
      <font-awesome-icon :icon="['fas', 'user']" />
    </div>

    <nav class="menu-items">
      <ul class="bg-white rounded px-5 border border-borderLight shadow-2xl">
        <li class="menu-item">
          <router-link to="/myAccount">My account</router-link>
        </li>
        <li class="menu-item" v-if="auth.isAuthenticated">
          <button @click="auth.logout">Logout</button>
        </li>
      </ul>
    </nav>
  </li>
</template>

<style scoped>
.menu-items {
  @apply hidden md:block w-[180px] pt-3 absolute top-full left-0 -translate-x-1/2 scale-0 transition-all
}

.menu-hover:hover .menu-items {
  @apply scale-100
}

.menu-item {
  @apply py-4 flex justify-between items-center text-xs text-gray uppercase font-medium border-b last:border-b-0 border-b-borderLight transition-all
}
</style>