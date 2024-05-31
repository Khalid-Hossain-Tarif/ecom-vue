<script setup>
import { ref, reactive } from "vue";
import { authStore } from "@/store/auth/index";
import useVuelidate from '@vuelidate/core';
import { required, helpers, email, minLength } from '@vuelidate/validators';

const auth = authStore;
const user = reactive({
  email: '',
  password: '',
});

const rules = {
  email: { required: helpers.withMessage('Email cannot be empty', required), email },
  password: { required: helpers.withMessage('Password cannot be empty', required), minLength: minLength(6) },
};

const v$ = useVuelidate(rules, user);

const isPasswordShow = ref(false);
const passwordHandler = () => {
    isPasswordShow.value = !isPasswordShow.value;
}

const submitForm = () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    auth.authenticate(user);
  }
};
</script>

<template>
    <section class="page-spacing">
        <div class="custom-container">
            <div class="p-6 m-auto bg-grayLight rounded space-y-4 md:space-y-6 sm:p-8 sm:max-w-md">
                <h1 class="text-xl font-bold text-heading md:text-2xl">
                    Sign in to account
                </h1>
                <form @submit.prevent="submitForm" class="space-y-4 md:space-y-6">
                    <div>
                        <label for="email" class="block mb-2 font-medium">Email</label>
                        <input v-model="user.email" autocomplete="off" type="email" name="email" id="email" required>
                        <p v-if="v$.email.$error" class="mt-1 text-xs text-danger">{{ v$.email.$errors[0]?.$message }}</p>
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
                        <p v-if="v$.password.$error" class="mt-1 text-xs text-danger">{{ v$.password.$errors[0]?.$message }}</p>
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
                        @click="submitForm"
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