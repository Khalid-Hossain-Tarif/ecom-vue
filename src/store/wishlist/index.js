import { reactive, toRefs } from "vue";
import axios from "axios";
import toast from "../../../utils/Toaster.js";
import { apiBaseUrl } from "@/composables/baseApiUrl.js";
import { authStore } from "../auth/index.js";

const { successToast, errorToast } = toast();

const useWishlist = () => {
  const state = reactive({
    wishlistItems: [],
    wishlistCount: 0,
    loading: false,
  });

  const apiUrl = `${apiBaseUrl}/wishlist`;
  const token = authStore.getUserToken();

  const fetchWishlist = async () => {
    state.loading = true;
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      state.wishlistItems = Array.isArray(response.data) ? response.data : [];
      state.wishlistCount = state.wishlistItems.length;
    } catch (error) {
      errorToast("Failed to fetch wishlist items");
    } finally {
      state.loading = false;
    }
  };

  const toggleWishlist = async (item) => {
    const itemExists = state.wishlistItems.find(wishlistItem => wishlistItem.id === item.id);
    try {
      if (itemExists) {
        await axios.delete(`${apiUrl}/${item.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        successToast("Item removed from wishlist");
      } else {
        await axios.post(apiUrl, item, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        successToast("Item added to wishlist");
      }
      await fetchWishlist();
    } catch (error) {
      errorToast("Failed to update wishlist");
    }
  };

  return {
    ...toRefs(state),
    fetchWishlist,
    toggleWishlist,
  };
};

export default useWishlist;
