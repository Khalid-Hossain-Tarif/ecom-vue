import { reactive } from "vue";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl.js";
import router from "../../router/index.js";
import toast from "../../../utils/Toaster.js";

const { infoToast, successToast, errorToast } = toast();
const authStore = reactive({
  isAuthenticated: localStorage.getItem("auth") == 1,
  user: JSON.parse(localStorage.getItem("user")),

  registration(email, username, password) {
    axios
      .post(
        apiBaseUrl + "/users",
        {
          email: email,
          name: username,
          password: password,
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
        console.error("Error:", err);
        errorToast("User already registered!");
      });
  },

  authenticate(email, password) {
    axios
      .post(
        apiBaseUrl + "/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res?.data?.success == 0) {
          authStore.isAuthenticated = true;
          authStore.user = res?.data;
          localStorage.setItem("auth", 1);
          localStorage.setItem("user", JSON.stringify(authStore.user));
          successToast("You are logged in.");
          router.push("/");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        errorToast("Username or password in incorrect!");
      });
  },
  logout() {
    authStore.isAuthenticated = false;
    (authStore.user = ""), localStorage.setItem("auth", 0);
    localStorage.setItem("user", "{}");
    infoToast("You are logout.");
    router.push("/login");
  },
});

export { authStore };
