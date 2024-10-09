import { ref } from "vue";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl";
import { authStore } from "@/store/auth/index.js";
import toast from "@/utils/Toaster.js";

const { successToast, errorToast } = toast();
export function manageCoupon() {
  const coupon = ref({});
  const couponValue = ref();

  const getCoupon = async (couponCode) => {
    const token = authStore.user?.token;
    if (!token) {
      errorToast("Login first to use coupon!");
      return;
    }
    try {
      if (token) {
        const res = await axios.post(
          `${apiBaseUrl}/coupon?coupon=${couponCode}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        coupon.value = res?.data;
        couponValue.value = coupon.value.value
        if (coupon.value?.error) {
          errorToast("Enter valid coupon!");
        } else {
          successToast(`'${couponCode}' Coupon added successfully.`);
        }
      }
    } catch (err) {
      console.error("Error fetching coupon:", err);
    } finally {
        
    }
  };

  return {
    coupon,
    couponValue,
    getCoupon,
  };
}
