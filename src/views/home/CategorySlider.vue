<script setup>
import { onMounted } from "vue";
import { manageCategories } from "@/composables/getAllCategories"
const { allCategories, getAllCategories } = manageCategories();

onMounted(() => {
    getAllCategories()
})
</script>

<template>
    <section>
        <div class="custom-container">
            <div class="custom-swiper-navs">
                <h3 class="primary-heading">
                    <span class="mr-1">🏷️</span>
                    Browse by Category
                </h3>

                <div class="mt-6">
                    <swiper-container style="--swiper-navigation-size: 30px;" space-between="16" :navigation="true"
                        :slides-per-view="2" :breakpoints="{
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 5,
                            },
                        }">
                        <swiper-slide 
                            v-for="category in allCategories" 
                            :key="category?.id"
                        >
                            <a>
                                <div class="px-2 py-6 border border-borderLight rounded text-center transition-all hover:border-borderDark">
                                    <img 
                                        :src="category?.icon" 
                                        alt="logo" 
                                        class="block mx-auto h-20 object-cover" 
                                    />
                                    <h5 class="mt-4 small-heading">
                                        {{ category?.category_name }}
                                    </h5>
                                </div>
                            </a>
                        </swiper-slide>
                    </swiper-container>
                </div>
            </div>
        </div>
    </section>
</template>