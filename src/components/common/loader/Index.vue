<script setup>
import { inject } from "vue";
const isLoading = inject('isLoading')
</script>

<template>
    <div v-if="isLoading" class="fixed inset-0 z-[99999] bg-white/90 w-full h-full">
        <span class="loader"></span>
    </div>
</template>

<style scoped>
.loader {
    width: 6px;
    height: 48px;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    color: #ee2c31;
    box-sizing: border-box;
    animation: animloader 0.6s linear infinite;
}

@keyframes animloader {
    0% {
        box-shadow: 20px -10px, 40px 10px, 60px 0px;
    }

    25% {
        box-shadow: 20px 0px, 40px 0px, 60px 10px;
    }

    50% {
        box-shadow: 20px 10px, 40px -10px, 60px 0px;
    }

    75% {
        box-shadow: 20px 0px, 40px 0px, 60px -10px;
    }

    100% {
        box-shadow: 20px -10px, 40px 10px, 60px 0px;
    }
}</style>