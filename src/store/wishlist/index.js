import { reactive } from "vue";
import toast from "../../../utils/Toaster.js";
import { apiBaseUrl } from "@/composables/baseApiUrl.js";
import { authStore } from "../auth/index.js";

const { successToast, errorToast } = toast();

const state = reactive({
  wishlistItems: [],
});

const wishlist = () => {
  
  function clearWishlist() {
    state.wishlistItems = [];
  }

  function isWishListed(product) {
    return state.wishlistItems.includes(product?.id);
  }

  async function toggleWishlist(product) {
    const token = authStore.getUserToken();
    if (!token) {
      errorToast("Login first to add wishlist!");
      return;
    }
    let apiUrl = apiBaseUrl + "/wishlist";
    let method = "POST";
    let payload = {
      product_id: product.id,
    };

    if (!isWishListed(product)) {
      state.wishlistItems.push(product.id);
    } else {
      state.wishlistItems = state.wishlistItems.filter(
        (id) => id != product.id
      );
      apiUrl = apiBaseUrl + `/wishlist/${product.id}`;
      method = "DELETE";
      payload = {};
    }

    try {
      const response = await fetch(apiUrl, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: method === "POST" ? JSON.stringify(payload) : undefined,
      });

      if (!response.ok) {
        throw new Error("Network response wasn't ok");
      }

      if (method === "POST") {
        successToast("Added to wishlist!");
      } else {
        errorToast("Removed from wishlist!");
      }
    } catch (error) {
      console.log("Error toggling wishlist", error);
    }
  }

  async function fetchWishlist() {
    const apiUrl = apiBaseUrl + "/wishlist";
    const token = authStore.getUserToken();
    if (!token) {
      clearWishlist();
      return;
    }
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response wasn't ok");
      }

      const wishListData = await response.json();
      state.wishlistItems = wishListData.wishlist;
      console.log(state.wishlistItems)
    } catch (error) {
      console.log("Error fetching wishlist", error);
    }
  }

  return {
    clearWishlist,
    isWishListed,
    toggleWishlist,
    fetchWishlist,
  };
};

export { state, wishlist };
