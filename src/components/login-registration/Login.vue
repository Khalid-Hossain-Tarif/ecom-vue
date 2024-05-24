<script setup>
import { ref, reactive } from "vue";
import { authStore } from "@/store/auth/store";

const auth = authStore;
const user = reactive({
  email: '',
  password: '',
});

const isPasswordShow = ref(false);
const passwordHandler = () => {
    isPasswordShow.value = !isPasswordShow.value;
}
</script>

<template>
    <section class="page-spacing">
        <div class="custom-container">
            <div class="p-6 m-auto bg-grayLight rounded space-y-4 md:space-y-6 sm:p-8 sm:max-w-md">
                <h1 class="text-xl font-bold text-heading md:text-2xl">
                    Sign in to account
                </h1>
                <form class="space-y-4 md:space-y-6">
                    <div>
                        <label for="email" class="block mb-2 font-medium">Email</label>
                        <input v-model="user.email" autocomplete="off" type="email" name="email" id="email" required>
                    </div>

                    <div>
                        <label for="password" class="block mb-2 font-medium">Password</label>
                        <div class="relative">
                            <input v-model="user.password" autocomplete="off" :type="isPasswordShow ? 'text' : 'password'" name="password"
                                id="password" required>
                            <font-awesome-icon @click="passwordHandler"
                                :icon="isPasswordShow ? ['far', 'eye-slash'] : ['far', 'eye']"
                                class="absolute right-2 top-1/2 -translate-y-1/2 opacity-90" />
                        </div>
                    </div>

                    <div class="flex justify-between items-center">
                        <div class="flex items-center gap-x-3">
                            <input id="remember" aria-describedby="remember" name="remember" type="checkbox"
                                class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                required>
                            <label for="remember" class="font-medium">Remember this device</label>
                        </div>
                        <a href="#" class="font-medium text-blue-600 hover:underline">Lost Password?</a>
                    </div>

                    <button 
                        @click="auth.authenticate(user)"
                        class="btn btn-secondary w-full"
                    >
                        Login to your account
                    </button>

                    <p> Not registered yet?
                        <router-link to="/registration" class="font-semibold text-secondary underline">
                            Create an account
                        </router-link>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>