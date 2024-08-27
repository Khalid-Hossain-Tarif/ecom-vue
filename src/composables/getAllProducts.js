import { ref, inject } from "vue";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl";

export function manageProducts() {
  const loading = inject("loading");
  const allProducts = ref([]);
  const productCardProducts = ref([]);
  const todayDealProducts = ref([]);

  const getAllProducts = async () => {
    loading(true);
    try {
      const res = await axios.get(apiBaseUrl + "/products");
      allProducts.value = res?.data || [];

      productCardProducts.value = allProducts.value.map((product) => ({
        id: product?.id,
        slug: product?.slug,
        thumbnail: product?.thumbnail,
        trendy: product?.trendy,
        name: product?.name,
        selling_price: product?.selling_price,
        discount_price: product?.discount_price,
        trendy: product?.trendy,
        date: product?.date
      }));

      todayDealProducts.value = allProducts.value
        .filter((product) => product?.today_deal === 1)
        .map((product) => ({
          id: product?.id,
          slug: product?.slug,
          thumbnail: product?.thumbnail,
          trendy: product?.trendy,
          name: product?.name,
          selling_price: product?.selling_price,
          discount_price: product?.discount_price,
          trendy: product?.trendy,
        }));
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      loading(false);
    }
  };

  return {
    allProducts,
    productCardProducts,
    todayDealProducts,
    getAllProducts,
  };
}
