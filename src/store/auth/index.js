import { reactive } from "vue";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl.js";
import router from "../../router/index.js";
import toast from "../../../utils/Toaster.js";
import { cart } from "@/store/cart/index"

const { infoToast, successToast, errorToast } = toast();
const authStore = reactive({
  // isAuthenticated: localStorage.getItem("auth") == 1,
  // user: JSON.parse(localStorage.getItem("user")),
  isAuthenticated: localStorage.getItem("user"),
  user: JSON.parse(localStorage.getItem("user")) || {},

  registration(user) {
    axios
      .post(
        apiBaseUrl + "/users",
        {
          email: user.email,
          name: user.name,
          password: user.password,
          // confirmPassword: confirmPassword
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        successToast("Registration successful.");
        router.push("/login");

        // console.log(res?.data)
        // if(res?.data?.email == '') {
        //   alert('email is empty')
        //   console.log('email is empty')
        // }
      })
      .catch((err) => {
        console.error("Registration Error:", err.response?.data || err);
        if(err.response?.data?.error == 1) {
          errorToast(err.response?.data?.message);
        } else {
          errorToast("Something went wrong!");
        }
      });
  },

  authenticate(user) {
    axios
      .post(
        apiBaseUrl + "/login",
        {
          email: user.email,
          password: user.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        // if (res?.data?.success == 0) {
        //   authStore.isAuthenticated = true;
        //   authStore.user = res?.data;
        //   localStorage.setItem("auth", 1);
        //   localStorage.setItem("user", JSON.stringify(authStore.user));
        //   successToast("You are logged in.");
        //   router.push("/");
        // }
        if (res?.data?.token) {
          const userData = {
            id: res.data.id,
            token: res.data.token,
            email: res.data.email,
            name: res.data.name
          };
          authStore.isAuthenticated = true;
          localStorage.setItem('user', JSON.stringify(userData));
          axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
          successToast("You are logged in.");
          router.push("/");
        } else {
          errorToast("Login failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Authentication Error:", err.response?.data || err);
        if (err.response?.data?.error == 1) {
          errorToast("Invalid credentials!");
        } else {
          errorToast("Something went wrong!");
        }
      });
  },
  // logout() {
  //   authStore.isAuthenticated = false;
  //   (authStore.user = ""), localStorage.setItem("auth", 0);
  //   localStorage.setItem("user", "{}");
  //   infoToast("You are logout.");
  //   router.push("/login");
  // },
  logout() {
    authStore.isAuthenticated = false;
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    cart.items = {};
    // cart.totalPrice = 0; //getting error - check console
    cart.saveCartInLocalStorage();
    infoToast("You are logout.");
    router.push("/login");
  },

  getUserToken() {
    return authStore.user.token
  }
});

export { authStore };
