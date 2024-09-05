<script setup>
import { computed } from "vue";

const props = defineProps({
  // totalPages: {
  //   type: Number,
  // },
  // totalData: {
  //   type: Number,
  // },
  // currentPage: {
  //   type: Number,
  // },
  // limit: {
  //   type: Number,
  // }
  paginationInfo: {
    type: Object
  }
})

const emit = defineEmits(["changePage"]);
const showStatingDataPosition = computed(() => props.paginationInfo.currentPage * props.paginationInfo.limit - props.paginationInfo.limit + 1);
const showEndingDataPosition = computed(() => props.paginationInfo.currentPage * props.paginationInfo.limit);
const changePaginatePage = (page) => {
  if (page === "next") {
    emit("changePage", props.paginationInfo.currentPage + 1);
  } else if (page === "prev") {
    emit("changePage", props.paginationInfo.currentPage - 1);
  } else {
    emit("changePage", page);
  }
};
</script>


<template>
  <div class="mt-6 md:mt-8 relative flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4">
    <p class="text-corporateSecondaryBlack text-xs md:text-sm text-center">
      Showing results {{ showStatingDataPosition }} to
      {{ paginationInfo.totalPages === paginationInfo.currentPage ? paginationInfo.totalData : showEndingDataPosition }} of 
      {{ paginationInfo.totalData }} ({{ paginationInfo.totalPages }} Pages)
    </p>

    <div class="flex items-center justify-center xl:justify-end">
      <button @click="changePaginatePage('prev')" type="button" class="pagination-btn pagination-prev-next-btn mr-2">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.828 7.00072L7.778 11.9507L6.364 13.3647L0 7.00072L6.364 0.636719L7.778 2.05072L2.828 7.00072Z"
            fill="#fff" />
        </svg>
        <span class="hidden md:block">Prev</span>
      </button>

      <!-- <div>
        <button class="pagination-btn">1</button>
        <button class="pagination-btn">2</button>
        <button class="pagination-btn pagination-active-btn">3</button>
        <button class="pagination-btn">4</button>
        <button class="pagination-btn">5</button>
      </div> -->

      <div v-for="(pageNumber, index) in paginationInfo.totalPages" :key="index">
        <button
          v-if="
            Math.abs(pageNumber - paginationInfo.currentPage) < 3 ||
            pageNumber === paginationInfo.totalPages ||
            pageNumber == 1
          "
          :class="{
            'pagination-active-btn': pageNumber === paginationInfo.currentPage,
            'pagination-btn': pageNumber != paginationInfo.currentPage,
            first:
              pageNumber == 1 &&
              Math.abs(pageNumber - paginationInfo.currentPage) > 3,
            last:
              pageNumber == paginationInfo.totalPages &&
              Math.abs(pageNumber - paginationInfo.currentPage) > 3,
          }"
          @click="changePaginatePage(pageNumber)" 
          type="button"
        >
          {{ pageNumber }}
        </button>
      </div>

      <button @click="changePaginatePage('next')" type="button" class="pagination-btn pagination-prev-next-btn ml-2">
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