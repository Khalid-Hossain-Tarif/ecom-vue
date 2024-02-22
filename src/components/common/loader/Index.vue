
<script setup>
import { inject } from "vue";

const loading = inject('loading');
</script>

<template>
  <div v-if="loading" class="fixed inset-0 z-50 bg-white/90 text-red-600 w-full h-full">
    rghiu gerihgiurg rehngiuh
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader {
  display: inline-block;
  width: 64px;
  height: 64px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.loader:after {
  content: " ";
  display: block;
  width: 40px;
  height: 40px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: red transparent red transparent;
  animation: loader 0.7s linear infinite;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>