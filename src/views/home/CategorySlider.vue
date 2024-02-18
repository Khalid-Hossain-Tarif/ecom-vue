<script setup>
import categoryImg1 from '@/assets/images/home/category-slider/logo1.png';
import categoryImg2 from '@/assets/images/home/category-slider/logo2.png';

const categories = [
    {
        name: 'Computers',
        categoryImg: categoryImg1
    },
    {
        name: 'Accessories',
        categoryImg: categoryImg2
    },
    {
        name: 'Computers',
        categoryImg: categoryImg1
    },
    {
        name: 'Accessories',
        categoryImg: categoryImg2
    },
    {
        name: 'Computers',
        categoryImg: categoryImg1
    },
    {
        name: 'Accessories',
        categoryImg: categoryImg2
    },
    {
        name: 'Computers',
        categoryImg: categoryImg1
    },
    {
        name: 'Accessories',
        categoryImg: categoryImg2
    },
    {
        name: 'Computers',
        categoryImg: categoryImg1
    },
    {
        name: 'Accessories',
        categoryImg: categoryImg2
    },
    {
        name: 'Computers',
        categoryImg: categoryImg1
    },
    {
        name: 'Accessories',
        categoryImg: categoryImg2
    },
    {
        name: 'Computers',
        categoryImg: categoryImg1
    },
    {
        name: 'Accessories',
        categoryImg: categoryImg2
    },
]
</script>

<template>
    <section>
        <div class="custom-container">
            <div class="custom-swiper-navs">
                <h3 class="primary-heading"><span class="mr-1">🏷️</span> Browse by Category {{ categoryLabels }}</h3>

                <div class="mt-6">
                    <swiper-container style="--swiper-navigation-size: 30px;" space-between="16" :navigation="true"
                        :slides-per-view="2" :breakpoints="{
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                            1280: {
                                slidesPerView: 7,
                            },
                        }">
                        <swiper-slide v-for="category in categories" :key="category.name">
                            <a>
                                <div
                                    class="px-2 py-6 border border-borderLight rounded text-center transition-all hover:border-borderDark">
                                    <img :src="category.categoryImg" alt="Logo" class="block mx-auto w-12" />
                                    <h5 class="mt-2 small-heading">{{ category.name }}</h5>
                                </div>
                            </a>
                        </swiper-slide>
                    </swiper-container>
                </div>
            </div>
        </div>
    </section>
</template>