import { ref } from "vue";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl";

export function manageProducts() {
  const products = ref([]);

  const getAllProducts = async () => {
    await axios
      .get(apiBaseUrl + "/products")
      .then((res) => {
        products.value = res?.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  const loadLists = () => {
    Promise.all([getAllProducts()])
  };
  loadLists();

  return {
    products,
    getAllProducts
  };
}
