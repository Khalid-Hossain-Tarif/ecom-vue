import { ref } from "vue";

export const useLoading = () => {
  const isLoading = ref(false);
  const loading = (status) => {
    return (isLoading.value = status)
  };

  return {
    loading,
    isLoading
  }
};
