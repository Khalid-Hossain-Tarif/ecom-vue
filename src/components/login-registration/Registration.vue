<script setup>
import { ref, reactive } from "vue";
import { authStore } from "@/store/auth/store";
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

const isPasswordShow = ref(false);
// const isConfirmPasswordShow = ref(false);
const auth = authStore;

const state = reactive({
  email: '',
  username: '',
  password: '',
//   confirmPassword: ''
});

const rules = {
  email: { required, email },
  username: { required },
  password: { required, minLength: minLength(6) },
//   confirmPassword: {
//     required,
//     sameAsPassword(value) {
//       return value === state.password;
//     }
//   }
};

const v$ = useVuelidate(rules, state);

const passwordHandler = () => {
  isPasswordShow.value = !isPasswordShow.value;
};

// const confirmPasswordHandler = () => {
//   isConfirmPasswordShow.value = !isConfirmPasswordShow.value;
// };

const submitForm = () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    auth.registration(state.email, state.username, state.password);
  }
};
</script>

<template>
  <section class="page-spacing">
    <div class="custom-container">
      <div class="p-6 m-auto bg-grayLight rounded space-y-4 md:space-y-6 sm:p-8 sm:max-w-md">
        <h1 class="text-xl font-bold text-heading md:text-2xl">Create a new account</h1>
        <form @submit.prevent="submitForm" class="space-y-4 md:space-y-6">
          <div>
            <label for="email" class="block mb-2 font-medium">Your email</label>
            <input v-model="state.email" type="email" id="email" name="email" autocomplete="off" required>
            <p v-if="v$.email.$error" class="mt-1 text-xs text-danger">{{ v$.email.$errors[0]?.$message }}</p>
          </div>
          <div>
            <label for="username" class="block mb-2 font-medium">Your username</label>
            <input v-model="state.username" type="text" id="username" name="username" autocomplete="off" required>
            <p v-if="v$.username.$error" class="mt-1 text-xs text-danger">{{ v$.username.$errors[0]?.$message }}</p>
          </div>
          <div>
            <label for="password" class="block mb-2 font-medium">Password</label>
            <div class="relative">
              <input v-model="state.password" :type="isPasswordShow ? 'text' : 'password'" id="password" name="password" autocomplete="off" required>
              <font-awesome-icon @click="passwordHandler" :icon="isPasswordShow ? ['far', 'eye-slash'] : ['far', 'eye']" class="absolute right-2 top-1/2 -translate-y-1/2 opacity-90" />
            </div>
            <p v-if="v$.password.$error" class="mt-1 text-xs text-danger">{{ v$.password.$errors[0]?.$message }}</p>
          </div>
          <!-- <div>
            <label for="confirm-password" class="block mb-2 font-medium">Confirm password</label>
            <div class="relative">
              <input v-model="state.confirmPassword" :type="isConfirmPasswordShow ? 'text' : 'password'" id="confirm-password" name="confirm-password" autocomplete="off" required>
              <font-awesome-icon @click="confirmPasswordHandler" :icon="isConfirmPasswordShow ? ['far', 'eye-slash'] : ['far', 'eye']" class="absolute right-2 top-1/2 -translate-y-1/2 opacity-90" />
            </div>
            <p v-if="v$.confirmPassword.$error" class="mt-1 text-xs text-danger">{{ v$.confirmPassword.$errors[0]?.$message }}</p>
          </div> -->
          <button type="submit" @click="submitForm" class="btn btn-secondary w-full">Register</button>
          <p> Already have an account?
            <router-link to="/login" class="font-semibold text-secondary underline">Login here</router-link>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-danger {
  color: red;
}
</style>
