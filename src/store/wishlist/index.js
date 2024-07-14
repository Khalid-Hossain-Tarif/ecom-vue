import { reactive, computed, inject } from "vue";
import toast from "../../../utils/Toaster.js";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl.js";
import { authStore } from "../auth/index.js";

const { successToast } = toast();

const wishlist = {
  //   const loading = inject("loading");

  items: reactive([]),
  isWishListed(product) {
    return this.items.includes(product.id)
  },

  async fetchWishList() {
    const apiUrl = apiBaseUrl + "/wishlist"
    const token = authStore.getUserToken()

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'Application/json'
        }
      })

      if(!response.ok) {
        throw new error("Network response wasn't ok")
      }

      const wishListData = response.json()
      this.items = wishListData.wishlist
    } 
    
    catch {
      console.log('Error fetching wishlist', error)
    }
  },

  async toggleWishlist(product) {
    let apiUrl = apiBaseUrl + "/wishlist"
    let method = 'POST'
    const payload = {
      "product_id": product.id
    }
    const token = authStore.getUserToken()

    if(!this.isWishListed(product)) {
      this.items.push(product.id)
    } else {
      this.items = this.items.filter(id => id != product.id)
    }
  },

  // function addItem() {
  //   axios
  //     .post(
  //       apiBaseUrl + "/wishlist",
  //       {
  //         email: user.email,
  //         name: user.name,
  //         password: user.password,
  //         // confirmPassword: confirmPassword
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       // successToast("Registration successful.");
  //       console.log(res?.data)
  //     })
  //     .catch((err) => {
  //       console.error("Wishlist Error:", err.response?.data || err);
  //       // if (err.response?.data?.error == 1) {
  //       //   errorToast(err.response?.data?.message);
  //       // } else {
  //       //   errorToast("Something went wrong!");
  //       // }
  //     });
  //   saveCartInLocalStorage();
  // }

  // function saveCartInLocalStorage() {
  //   localStorage.setItem("wishlist", JSON.stringify(wishlistItems.items));
  // }

  // function getCartFromLocalStorage() {
  //   wishlistItems.items = JSON.parse(localStorage.getItem("wishlist")) || {};
  //   updatePrices();
  // }

  // getCartFromLocalStorage();

  // return {
  //   wishlistItems,
  //   addItem,
  // };
};

export { wishlist };
