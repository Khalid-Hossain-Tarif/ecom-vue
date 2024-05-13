import { reactive } from "vue";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl.js";
import router from "../../router/index.js";

const authStore = reactive({
  isAuthenticated: localStorage.getItem('auth') == 1,
  user: JSON.parse(localStorage.getItem('user')),


  registration(email, username, password) {
    axios.post(apiBaseUrl + "/users", {
      email: email,
      name: username,
      password: password,
      // confirmPassword: confirmPassword
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log('clicked1')
      console.log(res)
      console.log('clicked2')
    })
    .catch(err => {
      console.error('Error:', err);
    });
  },

  authenticate(email, password) {
    axios.post(apiBaseUrl + "/login", {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res?.data?.success == 0) {
        authStore.isAuthenticated = true;
        authStore.user = res?.data;
        localStorage.setItem('auth', 1);
        localStorage.setItem('user', JSON.stringify(authStore.user));
        router.push("/");
      }
    })
    .catch(err => {
      console.error('Error:', err);
    });
  },
  logout() {
    authStore.isAuthenticated = false;
    authStore.user = '',
    localStorage.setItem('auth', 0);
    localStorage.setItem('user', '{}');
    router.push("/login");
  },
});

export { authStore };
