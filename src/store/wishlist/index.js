import { ref, inject } from "vue";
import { authStore } from "@/store/auth/index.js";
import { apiBaseUrl } from "@/composables/baseApiUrl.js";
import toast from "/utils/Toaster.js";

const { successToast, warningToast, errorToast } = toast();

const wishlistItems = ref([]);

function emptyWishlist() {
  wishlistItems.value = [];
}

const useWishlist = () => {
  const loading = inject("loading");
  const token = authStore.user?.token;
  const isLogin = authStore.isAuthenticated;

  function isWishListed(product) {
    return wishlistItems.value.includes(product.id);
  }

  async function toggleWishlist(product) {
    if (!token || !isLogin) {
      errorToast("Login first to add wishlist!");
      return;
    }

    let apiUrl = apiBaseUrl + "/wishlist";
    let method = "POST";
    let payload = {
      product_id: product.id,
    };

    if (!isWishListed(product)) {
      wishlistItems.value = [...wishlistItems.value, product.id];
    } else {
      wishlistItems.value = wishlistItems.value.filter(id => id !== product.id);
      apiUrl = apiBaseUrl + `/wishlist/${product.id}`;
      method = "DELETE";
      payload = {};
    }

    try {
      const response = await fetch(apiUrl, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: method === "POST" ? JSON.stringify(payload) : undefined,
      });

      if (!response.ok) {
        throw new Error("Network response wasn't ok");
      }

      if (method === "POST") {
        successToast("Added to wishlist!");
      } else {
        warningToast("Removed from wishlist!");
      }
    } catch (error) {
      console.log("Error toggling wishlist", error);
    }
  }

  async function fetchWishList() {
    if (!token || !isLogin) {
      return;
    }

    const apiUrl = apiBaseUrl + "/wishlist";

    try {
      loading(true);
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response wasn't ok");
      }

      const wishListData = await response.json();
      wishlistItems.value = wishListData.wishlist || [];
    } 
    
    catch (error) {
      console.log("Error fetching wishlist", error);
    } 
    
    finally {
      loading(false);
    }
  }

  const getWishlistIcon = (product) => {
    return isWishListed(product) ? ['fas', 'heart'] : ['far', 'heart'];
  };

  return {
    wishlistItems,
    getWishlistIcon,
    toggleWishlist,
    fetchWishList,
    emptyWishlist,
  };
};

export { wishlistItems, emptyWishlist, useWishlist };
