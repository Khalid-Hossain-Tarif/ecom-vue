import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Index.vue";
import Registration from "../components/login-registration/Registration.vue";
import Login from "../components/login-registration/Login.vue";
import MyAccount from "../views/myaccount/Index.vue";
import Category from "../views/product/category/Index.vue";
import SingleProduct from "../views/product/single-product/Index.vue";
import Cart from "../views/product/cart-page/Index.vue";
import Wishlist from "../views/product/wishlist/Index.vue";
import Shop from "../views/shop/Index.vue";
import About from "../views/about/Index.vue";
import Contact from "../views/contact/Index.vue";
import PageNotFound from "../components/common/not-found/pageNotFound.vue";
import { authStore } from "../store/auth/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/myAccount",
    name: "myAccount",
    component: MyAccount,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/category",
    name: "category",
    component: Category,
  },
  {
    path: "/product/:slug",
    name: "singleProduct",
    component: SingleProduct,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: Wishlist,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "pageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// const isAuthenticated = () => {
//   return localStorage.getItem("token") == "1234";
// };

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !isAuthenticated()) {
//     next("/login");
//   } else {
//     next();
//   }
// });


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
