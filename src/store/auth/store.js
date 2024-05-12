import { reactive } from "vue";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl.js";
import router from "../../router/index.js";

const authStore = reactive({
  isAuthenticated: localStorage.getItem('auth') == 1,
  authenticate(email, password) {
    authStore.isAuthenticated = true;

    axios.post(apiBaseUrl + "/login", {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    router.push("/");
  },
  logout() {
    authStore.isAuthenticated = false;
    router.push("/login");
  },
});

export { authStore };
