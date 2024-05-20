import axios from "axios";
import { ref, inject } from "vue";
import { useRoute } from 'vue-router';
import { apiBaseUrl } from "@/composables/baseApiUrl";

export function manageProductWithDetails() {
  const route = useRoute();
  const loading = inject("loading");
  const productWithDetails = ref({});
  const productDescription = ref("");
  const productId = ref(null);
  const productImages = ref(null);
  const productImagesArray = ref(null);

  const getProductWithDetails = async () => {
    loading(true);
    await axios
      .get(apiBaseUrl + `/products/${route.params.id}`)
      .then((res) => {
        productWithDetails.value = res?.data;
        productDescription.value = res?.data?.description;
        productId.value = res?.data?.id;
        productImages.value = res?.data?.images;
        productImagesArray.value  = JSON.parse(productImages.value);

        console.log(typeof(productImagesArray.value))
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        loading(false);
      });
  };

  const loadProducts = () => {
    Promise.all([getProductWithDetails()]);
  };
  loadProducts();

  return {
    productWithDetails,
    productDescription,
    productId,
    productImagesArray,
    getProductWithDetails,
  };
}
