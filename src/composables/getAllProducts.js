import { ref, inject } from "vue";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl";

export function manageProducts() {
  const loading = inject("loading");
  const allProducts = ref([]);

  const getAllProducts = async () => {
    loading(true);
    await axios
      .get(apiBaseUrl + "/products")
      .then((res) => {
        allProducts.value = res?.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        loading(false);
      });
  };

  const loadProducts = () => {
    Promise.all([getAllProducts()]);
  };
  loadProducts();

  return {
    allProducts,
    getAllProducts,
  };
}
