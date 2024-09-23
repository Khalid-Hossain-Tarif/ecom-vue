import { ref, computed, watch } from 'vue';

export function usePagination(items, itemsPerPage = 8) {
  const currentPage = ref(1);
  const paginatedItems = ref([]);

  const paginationInfo = computed(() => {
    return {
      limit: itemsPerPage,
      currentPage: currentPage.value,
      totalData: items.length,
      totalPages: Math.ceil(items.length / itemsPerPage),
    };
  });

  const changePage = (page) => {
    currentPage.value = page;
  };

//   watch(items, (newItems) => {
//     if (newItems.length > 0) {
//       const start = (currentPage.value - 1) * paginationInfo.value.limit;
//       const end = start + paginationInfo.value.limit;
//       paginatedItems.value = newItems.slice(start, end);
//     }
//   }, { immediate: true });

paginatedItems.value = computed(() => {
    const start = (currentPage.value - 1) * paginationInfo.value.limit;
    const end = start + paginationInfo.value.limit;
    return items.slice(start, end);
  });

  return {
    currentPage,
    paginationInfo,
    paginatedItems,
    changePage,
  };
}
