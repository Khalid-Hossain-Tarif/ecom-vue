import { ref, inject } from "vue";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl";

export function manageProducts() {
  const loading = inject("loading");
  const allProducts = ref([]);
  const productCardData = ref([]);

  const getAllProducts = async () => {
    loading(true);
    await axios
      .get(apiBaseUrl + "/products")
      .then((res) => {
        allProducts.value = res?.data;

        productCardData.value = allProducts.value.map((product) => ({
          id: product?.id,
          thumbnail: product?.thumbnail,
          trendy: product?.trendy,
          name: product?.name,
          selling_price: product?.selling_price,
          discount_price: product?.discount_price,
          trendy: product?.trendy
        }));
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
    productCardData,
    getAllProducts
  };
}
