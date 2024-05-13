<script setup>
import { ref } from "vue";
import { authStore } from "@/store/auth/store";

const isPasswordShow = ref(false);
const isConfirmPasswordShow = ref(false);
const auth = authStore;
const email = ref('');
const password = ref('');
const username = ref('');
const confirmPassword = ref('');

const passwordHandler = () => {
    isPasswordShow.value = !isPasswordShow.value;
}

const confirmPasswordHandler = () => {
    isConfirmPasswordShow.value = !isConfirmPasswordShow.value;
}
</script>

<template>
    <section class="page-spacing">
        <div class="custom-container">
            <div class="p-6 m-auto bg-grayLight rounded space-y-4 md:space-y-6 sm:p-8 sm:max-w-md">
                <h1 class="text-xl font-bold text-heading md:text-2xl">
                    Create a new account
                </h1>
                <form @submit.prevent="auth.registration" class="space-y-4 md:space-y-6">
                    <div>
                        <label for="email" class="block mb-2 font-medium">Your email</label>
                        <input v-model="email" autocomplete="off" type="email" name="email" id="email" required>
                    </div>
                    <div>
                        <label for="username" class="block mb-2 font-medium">Your username</label>
                        <input v-model="username" autocomplete="off" type="text" name="username" id="username" required>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 font-medium">Password</label>
                        <div class="relative">
                            <input v-model="password" autocomplete="off" :type="isPasswordShow ? 'text' : 'password'" name="password"
                                id="password" required>
                            <font-awesome-icon @click="passwordHandler"
                                :icon="isPasswordShow ? ['far', 'eye-slash'] : ['far', 'eye']"
                                class="absolute right-2 top-1/2 -translate-y-1/2 opacity-90" />
                        </div>
                    </div>
                    <!-- <div>
                        <label for="confirm-password" class="block mb-2 font-medium">Confirm password</label>
                        <div class="relative">
                            <input v-model="confirmPassword" autocomplete="off" :type="isConfirmPasswordShow ? 'text' : 'password'" name="confirm-password"
                                id="confirm-password" required>
                            <font-awesome-icon @click="confirmPasswordHandler"
                                :icon="isConfirmPasswordShow ? ['far', 'eye-slash'] : ['far', 'eye']"
                                class="absolute right-2 top-1/2 -translate-y-1/2 opacity-90" />
                        </div>
                    </div> -->
                    <button 
                        @click="auth.registration(email, username, password)"
                        class="btn btn-secondary w-full"
                    >
                        Register
                    </button>
                    <p> Already have an account?
                        <router-link to="/login" class="font-semibold text-secondary underline">
                            Login here
                        </router-link>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>