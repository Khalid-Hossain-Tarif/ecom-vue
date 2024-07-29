// import { reactive, ref, computed, inject } from "vue";
// import toast from "../../../utils/Toaster.js";
// import { apiBaseUrl } from "@/composables/baseApiUrl.js";
// import { authStore } from "../auth/index.js";

// const { successToast, errorToast } = toast();

// const wishlist = {
//   items: reactive([]),

//   isWishListed(product) {
//     return this.items.includes(product.id);
//   },

//   async fetchWishList() {
//     const apiUrl = apiBaseUrl + "/wishlist";
//     const token = authStore.getUserToken();
//     if (!token) {
//       return;
//     }
//     try {
//       const response = await fetch(apiUrl, {
//         method: "GET",
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error("Network response wasn't ok");
//       }

//       const wishListData = await response.json();
//       this.items = wishListData.wishlist || [];
//     } catch (error) {
//       console.log('Error fetching wishlist', error);
//     }
//   },

//   async toggleWishlist(product) {
//     let apiUrl = apiBaseUrl + "/wishlist";
//     let method = 'POST';
//     let payload = {
//       product_id: product.id
//     };
//     const token = authStore.getUserToken();

//     if (!this.isWishListed(product)) {
//       this.items.push(product.id);
//     } else {
//       this.items = this.items.filter(id => id != product.id);
//       apiUrl = apiBaseUrl + `/wishlist/${product.id}`;
//       method = 'DELETE';
//       payload = {};
//     }

//     try {
//       const response = await fetch(apiUrl, {
//         method: method,
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         },
//         body: method === 'POST' ? JSON.stringify(payload) : undefined
//       });

//       if (!response.ok) {
//         throw new Error("Network response wasn't ok");
//       }

//       if (method === 'POST') {
//         successToast("Added to wishlist!");
//       } else {
//         errorToast("Removed from wishlist!");
//       }
//     } catch (error) {
//       console.log('Error toggling wishlist', error);
//     }
//   },
// };

// export { wishlist };

import { reactive } from "vue";
import toast from "../../../utils/Toaster.js";
import { apiBaseUrl } from "@/composables/baseApiUrl.js";
import { authStore } from "../auth/index.js";

const { successToast, errorToast } = toast();

const state = reactive({
  wishlistItems: [],
});

const wishlist = () => {
  function loadWishlist() {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      state.wishlistItems = JSON.parse(savedWishlist);
    }
  }

  function saveWishlist() {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
  }

  function isWishListed(product) {
    return state.wishlistItems.includes(product?.id);
  }

  async function toggleWishlist(product) {
    let apiUrl = apiBaseUrl + "/wishlist";
    let method = "POST";
    let payload = {
      product_id: product.id,
    };
    const token = authStore.getUserToken();

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

      saveWishlist();

      if (method === "POST") {
        successToast("Added to wishlist!");
      } else {
        errorToast("Removed from wishlist!");
      }
    } catch (error) {
      console.log("Error toggling wishlist", error);
    }
  }

  // async function fetchWishList() {
  //   const apiUrl = apiBaseUrl + "/wishlist";
  //   const token = authStore.getUserToken();
  //   if (!token) {
  //     return;
  //   }
  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: "GET",
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //         'Content-Type': 'application/json'
  //       }
  //     });
  
  //     if (!response.ok) {
  //       throw new Error("Network response wasn't ok");
  //     }
  
  //     const wishListData = await response.json();
  //     state.items = wishListData.wishlist;
  //     saveWishlist();
  //   } catch (error) {
  //     console.log('Error fetching wishlist', error);
  //   }
  // }

  return {
    loadWishlist,
    isWishListed,
    toggleWishlist,
    // fetchWishList
  };
};

export { state, wishlist };
