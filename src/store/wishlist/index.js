// import { reactive, computed, inject } from "vue";
// import toast from "../../../utils/Toaster.js";
// import axios from "axios";
// import { apiBaseUrl } from "@/composables/baseApiUrl.js";
// import { authStore } from "../auth/index.js";

// const { successToast } = toast();

// const wishlist = {
//   //   const loading = inject("loading");

//   items: reactive([]),
//   isWishListed(product) {
//     return this.items.includes(product.id)
//   }, 

//   async fetchWishList() {
//     const apiUrl = apiBaseUrl + "/wishlist"
//     const token = authStore.getUserToken()
//     if(!token) {
//       return
//     }
//     try {
//       const response = await fetch(apiUrl, {
//         method: "GET",
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'Application/json'
//         }
//       })

//       if(!response.ok) {
//         throw new Error("Network response wasn't ok")
//       }

//       const wishListData = response.json()
//       this.items = wishListData.wishlist
//     } 
    
//     catch(error) {
//       console.log('Error fetching wishlist', error)
//     }
//   },

//   async toggleWishlist(product) {
//     let apiUrl = apiBaseUrl + "/wishlist"
//     let method = 'POST'
//     let payload = {
//       product_id: product.id
//     }
//     const token = authStore.getUserToken()

//     if(!this.isWishListed(product)) {
//       this.items.push(product.id)
//     } else {
//       this.items = this.items.filter(id => id != product.id)
//       apiUrl = apiBaseUrl + `/wishlist/${product.id}`
//       method = 'DELETE'
//       payload = {}
//       console.log('removed from wishlist!')
//     }

//     try {
//       const response = await fetch(apiUrl, {
//         method: method,
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'Application/json'
//         },
//         body: JSON.stringify(payload)
//       })

//       if(!response.ok) {
//         throw new Error("Network response wasn't ok")
//       }
//     } 
    
//     catch(error) {
//       console.log('Error fetching wishlist', error)
//     }

//   },
// };

// export { wishlist }


import { reactive, computed, inject } from "vue";
import toast from "../../../utils/Toaster.js";
import { apiBaseUrl } from "@/composables/baseApiUrl.js";
import { authStore } from "../auth/index.js";

const { successToast, errorToast } = toast();

const wishlist = {
  items: reactive([]),
  
  isWishListed(product) {
    return this.items.includes(product?.id);
  }, 

  async fetchWishList() {
    const apiUrl = apiBaseUrl + "/wishlist";
    const token = authStore.getUserToken();
    if (!token) {
      return;
    }
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error("Network response wasn't ok");
      }

      const wishListData = await response.json();
      this.items = wishListData.wishlist || [];
    } catch (error) {
      console.log('Error fetching wishlist', error);
    }
  },

  async toggleWishlist(product) {
    let apiUrl = apiBaseUrl + "/wishlist";
    let method = 'POST';
    let payload = {
      product_id: product.id
    };
    const token = authStore.getUserToken();

    if (!this.isWishListed(product)) {
      this.items.push(product.id);
    } else {
      this.items = this.items.filter(id => id != product.id);
      apiUrl = apiBaseUrl + `/wishlist/${product.id}`;
      method = 'DELETE';
      payload = {};
    }

    try {
      const response = await fetch(apiUrl, {
        method: method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: method === 'POST' ? JSON.stringify(payload) : undefined
      });

      if (!response.ok) {
        throw new Error("Network response wasn't ok");
      }

      if (method === 'POST') {
        successToast("Added to wishlist!");
      } else {
        errorToast("Removed from wishlist!");
      }
    } catch (error) {
      console.log('Error toggling wishlist', error);
    }
  },
};

export { wishlist };
