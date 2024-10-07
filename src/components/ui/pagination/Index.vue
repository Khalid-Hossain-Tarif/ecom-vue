<script setup>
import { computed } from "vue";

const props = defineProps({
  paginationInfo: {
    type: Object
  }
});

const emit = defineEmits(["changePage"]);

const showStartingDataPosition = computed(() => {
  return (props.paginationInfo.currentPage - 1) * props.paginationInfo.limit + 1;
});

const showEndingDataPosition = computed(() => {
  return Math.min(props.paginationInfo.currentPage * props.paginationInfo.limit, props.paginationInfo.totalData);
});

const changePaginatePage = (page) => {
  if (page === "next" && props.paginationInfo.currentPage < props.paginationInfo.totalPages) {
    emit("changePage", props.paginationInfo.currentPage + 1);
  } else if (page === "prev" && props.paginationInfo.currentPage > 1) {
    emit("changePage", props.paginationInfo.currentPage - 1);
  } else if (typeof page === "number") {
    emit("changePage", page);
  }
};
</script>

<template>
  <div v-if="paginationInfo?.totalPages > 1" class="mt-6 md:mt-8 relative flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4">
    <p class="text-corporateSecondaryBlack text-xs md:text-sm text-center">
      Showing results {{ showStartingDataPosition }} to
      {{ showEndingDataPosition }} of {{ paginationInfo.totalData }} ({{ paginationInfo.totalPages }} Pages)
    </p>

    <div class="flex items-center justify-center xl:justify-end">
      <button 
        type="button" 
        @click="changePaginatePage('prev')" 
        :disabled="paginationInfo.currentPage === 1"
        :class="paginationInfo.currentPage === 1 ? 'opacity-30 cursor-not-allowed' : ''"
        class="pagination-btn pagination-prev-next-btn mr-2" 
      >
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.828 7.00072L7.778 11.9507L6.364 13.3647L0 7.00072L6.364 0.636719L7.778 2.05072L2.828 7.00072Z"
            fill="#fff" />
        </svg>
        <span class="hidden md:block">Prev</span>
      </button>

      <div v-for="pageNumber in paginationInfo.totalPages" :key="pageNumber">
        <button
          v-if="
            Math.abs(pageNumber - paginationInfo.currentPage) < 3 ||
            pageNumber === paginationInfo.totalPages ||
            pageNumber === 1
          "
          class="pagination-btn"
          :class="{
            'pagination-active-btn': pageNumber === paginationInfo.currentPage
          }"
          @click="changePaginatePage(pageNumber)" 
          type="button"
        >
          {{ pageNumber }}
        </button>
      </div>

      <button 
        type="button" 
        @click="changePaginatePage('next')" 
        :disabled="paginationInfo.currentPage === paginationInfo.totalPages"
        :class="paginationInfo.currentPage === paginationInfo.totalPages ? 'opacity-30 cursor-not-allowed' : ''"
        class="pagination-btn pagination-prev-next-btn ml-2" 
      >
        <span class="hidden md:block">Next</span>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.17266 7.00072L0.222656 2.05072L1.63666 0.636719L8.00066 7.00072L1.63666 13.3647L0.222656 11.9507L5.17266 7.00072Z"
            fill="#fff" />
        </svg>
      </button>
    </div>
  </div>
</template>


<style scoped>
.pagination-btn {
  @apply px-4 py-2 text-sm font-medium bg-transparent border border-transparent rounded
}

.pagination-active-btn {
  @apply bg-white border-borderLight font-bold
}

.pagination-prev-next-btn {
  @apply flex items-center gap-x-2 bg-primary border-primary text-white
}
</style>