<script setup>
import router from '@/router';
import { authStore } from "@/store/auth/store";

// function logout() {
//     localStorage.setItem('token', 'weg');
//     router.push('/')
// }

function logout() {
    authStore.logout()
    router.push('/')
}
</script>

<template>
  <li class="menu-hover relative">
    <router-link to="/login" class="inline-block">
      <font-awesome-icon :icon="['fas', 'user']"/>
    </router-link>

    <nav class="menu-items">
      <ul class="bg-white rounded px-5 border border-borderLight shadow-2xl">
        <li class="menu-item">
          <router-link to="/myAccount">My account</router-link>
        </li>
        <li class="menu-item" v-if="authStore.isAuthenticated">
          <button @click="logout">Logout</button>
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