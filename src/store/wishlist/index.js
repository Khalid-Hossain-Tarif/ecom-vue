// import { reactive, toRefs } from "vue";
// import axios from "axios";
// import toast from "../../../utils/Toaster.js";
// import { apiBaseUrl } from "@/composables/baseApiUrl.js";
// import { authStore } from "../auth/index.js";

// const { successToast, errorToast } = toast();

// const useWishlist = () => {
//   const state = reactive({
//     wishlistItems: [],
//     wishlistCount: 0,
//     loading: false,
//   });

//   const apiUrl = `${apiBaseUrl}/wishlist`;
//   const token = authStore.getUserToken();

//   const fetchWishlist = async () => {
//     state.loading = true;
//     try {
//       const response = await axios.get(apiUrl, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       state.wishlistItems = Array.isArray(response.data) ? response.data : [];
//       state.wishlistCount = state.wishlistItems.length;
//     } catch (error) {
//       errorToast("Failed to fetch wishlist items");
//     } finally {
//       state.loading = false;
//     }
//   };

//   const toggleWishlist = async (item) => {
//     const itemExists = state.wishlistItems.find(wishlistItem => wishlistItem.id === item.id);
//     try {
//       if (itemExists) {
//         await axios.delete(`${apiUrl}/${item.id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });
//         successToast("Item removed from wishlist");
//       } else {
//         await axios.post(apiUrl, item, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });
//         successToast("Item added to wishlist");
//       }
//       await fetchWishlist();
//     } catch (error) {
//       errorToast("Failed to update wishlist");
//     }
//   };

//   return {
//     ...toRefs(state),
//     fetchWishlist,
//     toggleWishlist,
//   };
// };

// export default useWishlist;

import { ref, reactive, onUnmounted, onMounted, onBeforeMount } from "vue";
import axios from "axios";
import { authStore } from "@/store/auth/index.js";
import { apiBaseUrl } from "@/composables/baseApiUrl.js";
import toast from "/utils/Toaster.js";

const { successToast, errorToast } = toast();

const wishlistItems = ref([]);

function emptyWishlist() {
  return wishlistItems.value = []
}


const useWishlist = () => {
  const token = authStore.getUserToken();

  function isWishListed(product) {
    return wishlistItems.value.includes(product.id);
  }

  async function toggleWishlist(product) {
    let apiUrl = apiBaseUrl + "/wishlist";
    let method = "POST";
    let payload = {
      product_id: product.id,
    };

    if (!token) {
      errorToast("Login first to add wishlist!");
      return;
    }

    if (!isWishListed(product)) {
      wishlistItems.value = [...wishlistItems.value, product.id];
    } else {
      wishlistItems.value = wishlistItems.value.filter(
        (id) => id !== product.id
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
        errorToast("Removed from wishlist!");
      }
    } catch (error) {
      console.log("Error toggling wishlist", error);
    }

    // finally {
    //   fetchWishList()
    // }
  }

  async function fetchWishList() {
    const apiUrl = apiBaseUrl + "/wishlist";

    if (!token) {
      return;
    }

    try {
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
    } catch (error) {
      console.log("Error fetching wishlist", error);
    }
  }

  fetchWishList();

  return {
    wishlistItems,
    emptyWishlist,
    toggleWishlist,
  };
};

export { wishlistItems, emptyWishlist, useWishlist };
