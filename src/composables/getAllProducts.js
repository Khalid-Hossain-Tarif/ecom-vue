import { ref } from "vue";
import axios from "axios";
import { apiBaseUrl } from "@/composables/baseApiUrl";

export const products = ref([]);
axios
  .get(apiBaseUrl + "/products")
  .then(function (res) {
    products.value = res?.data;
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});