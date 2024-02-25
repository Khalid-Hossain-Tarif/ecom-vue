import { ref, inject } from "vue";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl";

export function manageCategories() {
  const loading = inject("loading");
  const allCategories = ref([]);
//   const categorySliderData = ref([]);

  const getAllCategories = async () => {
    loading(true);
    await axios
      .get(apiBaseUrl + "/category")
      .then((res) => {
        allCategories.value = res?.data?.data;

        // categorySliderData.value = allCategories.value.map((category) => ({
        //     id: category?.id,
        //     icon: category?.icon,
        //     category_name: category?.category_name,
        // }));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        loading(false);
      });
  };

  const loadCategories = () => {
    Promise.all([getAllCategories()]);
  };
  loadCategories();

  return {
    allCategories,
    // categorySliderData,
    getAllCategories
  };
}
