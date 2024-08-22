import { ref, inject } from "vue";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl";

export function useCategoryProducts() {
  const loading = inject("loading");
  const categoryProducts = ref([]);

  const getProductsByCategory = async (categoryId) => {
    loading(true);
    try {
      const res = await axios.get(`${apiBaseUrl}/products`);
      const allProducts = res?.data || [];

      categoryProducts.value = allProducts
        .filter((product) => product?.category_id === categoryId)
        .map((product) => ({
          id: product?.id,
          category_id: product?.category_id,
          slug: product?.slug,
          thumbnail: product?.thumbnail,
          trendy: product?.trendy,
          name: product?.name,
          selling_price: product?.selling_price,
          discount_price: product?.discount_price,
          trendy: product?.trendy,
        }));
    } catch (err) {
      console.error("Error fetching category products:", err);
    } finally {
      loading(false);
    }
  };

  return {
    categoryProducts,
    getProductsByCategory
  };
}