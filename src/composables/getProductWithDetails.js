import axios from "axios";
import { ref, inject } from "vue";
import { useRoute } from "vue-router";
import { apiBaseUrl } from "@/composables/baseApiUrl";

export function manageProductWithDetails() {
  const route = useRoute();
  const loading = inject("loading");
  const productWithDetails = ref({});
  const productDescription = ref("");

  const getProductWithDetails = async () => {
    loading(true);
    try {
      const res = await axios.get(apiBaseUrl + `/products/${route.params.id}`);
      productWithDetails.value = res?.data || [];
      productDescription.value = res?.data?.description;
    } catch (err) {
      console.error("Error fetching products with details:", err);
    } finally {
      loading(false);
    }
  };

  const loadProducts = () => {
    Promise.all([getProductWithDetails()]);
  };
  loadProducts();

  return {
    productWithDetails,
    productDescription,
    getProductWithDetails,
  };
}
