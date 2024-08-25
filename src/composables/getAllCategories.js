import { ref, inject } from "vue";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl";

export function manageCategories() {
  const loading = inject("loading");
  const allCategories = ref([]);
  const filteredCategories = ref([]);

  const getAllCategories = async () => {
    loading(true);
    try {
      const res = await axios.get(apiBaseUrl + "/category");
      allCategories.value = res?.data?.data || [];

      filteredCategories.value = allCategories.value.map((category) => ({
        id: category?.id,
        icon: category?.icon,
        category_name: category?.category_name,
      }));
    } catch (err) {
      console.error("Error fetching category products:", err);
    } finally {
      loading(false);
    }
  };

  return {
    allCategories,
    filteredCategories,
    getAllCategories,
  };
}
