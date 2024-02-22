import { ref } from "vue";

const isLoading = ref(false);

export const useLoading = () => {
  const loading = (status) => {
    return (isLoading.value = status)
  };

  return {
    loading,
    isLoading
  }
};
