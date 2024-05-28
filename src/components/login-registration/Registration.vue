<script setup>
import { ref, reactive } from "vue";
import Error from "@/components/common/Error.vue";
import { authStore } from "@/store/auth/store";
import useVuelidate from '@vuelidate/core';
import { required, helpers, email, minLength } from '@vuelidate/validators';

const isPasswordShow = ref(false);
const isConfirmPasswordShow = ref(false);
const auth = authStore;

const user = reactive({
  email: '',
  name: '',
  password: '',
  confirmPassword: ''
});

const sameAsPassword = helpers.withMessage(
  'Passwords do not match',
  (value) => value === user.password
);

const rules = {
  email: { required: helpers.withMessage('Email cannot be empty', required), email },
  name: { required: helpers.withMessage('Name cannot be empty', required) },
  password: { required: helpers.withMessage('Password cannot be empty', required), minLength: minLength(6) },
  confirmPassword: {
    required: helpers.withMessage('Please enter same password.', required),
    minLength: minLength(6),
    sameAsPassword
  }
};

const v$ = useVuelidate(rules, user);

const passwordHandler = () => {
  isPasswordShow.value = !isPasswordShow.value;
};

const confirmPasswordHandler = () => {
  isConfirmPasswordShow.value = !isConfirmPasswordShow.value;
};

const submitForm = () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    auth.registration(user);
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
            <input v-model="user.email" type="email" id="email" name="email" autocomplete="off" required>
            <Error v-if="v$.email.$error" :message="v$.email.$errors[0]?.$message" />
          </div>
          <div>
            <label for="name" class="block mb-2 font-medium">Your name</label>
            <input v-model="user.name" type="text" id="name" name="name" autocomplete="off" required>
            <Error v-if="v$.name.$error" :message="v$.name.$errors[0]?.$message" />
          </div>
          <div>
            <label for="password" class="block mb-2 font-medium">Password</label>
            <div class="relative">
              <input v-model="user.password" :type="isPasswordShow ? 'text' : 'password'" id="password" name="password" autocomplete="off" required>
              <font-awesome-icon @click="passwordHandler" :icon="isPasswordShow ? ['far', 'eye-slash'] : ['far', 'eye']" class="absolute right-2 top-1/2 -translate-y-1/2 opacity-90" />
            </div>
            <Error v-if="v$.password.$error" :message=" v$.password.$errors[0]?.$message " />
          </div>
          <div>
            <label for="confirm-password" class="block mb-2 font-medium">Confirm password</label>
            <div class="relative">
              <input v-model="user.confirmPassword" :type="isConfirmPasswordShow ? 'text' : 'password'" id="confirm-password" name="confirm-password" autocomplete="off" required>
              <font-awesome-icon @click="confirmPasswordHandler" :icon="isConfirmPasswordShow ? ['far', 'eye-slash'] : ['far', 'eye']" class="absolute right-2 top-1/2 -translate-y-1/2 opacity-90" />
            </div>
            <Error v-if="v$.confirmPassword.$error" :message="v$.confirmPassword.$errors[0]?.$message" />
          </div>
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
