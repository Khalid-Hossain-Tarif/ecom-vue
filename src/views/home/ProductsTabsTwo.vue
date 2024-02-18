<script setup>
import Tabs from '@/components/common/Tabs.vue';
import ProductCard from '@/components/common/ProductCard.vue';

const myTabs = [
    { id: 'tab1', label: 'New products' },
    { id: 'tab2', label: 'Best seller' },
    { id: 'tab3', label: 'Top rated' }
];
</script>

<template>
    <section class="section-padding">
        <div class="custom-container">
            <h4 class="primary-heading mb-6"><span class="mr-1">🖥️</span> Computer & Laptop</h4>

            <Tabs :tabs="myTabs" defaultTab="tab1" headerPosition="md:justify-end md:-mt-[60px]">
                <template #tab1>
                    <div>
                        <swiper-container class="mySwiper" style="--swiper-navigation-size: 30px;" navigation="true"
                            :grid="{ rows: 2, fill: 'row' }" space-between="16" :slides-per-view="2" :breakpoints="{
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
                            <swiper-slide v-for="n in 18">
                                <ProductCard />
                            </swiper-slide>
                        </swiper-container>
                    </div>
                </template>
                <template #tab2>
                    <p>Best seller products will be here!</p>
                </template>
                <template #tab3>
                    <p>Top rated products will be here!</p>
                </template>
            </Tabs>
        </div>
    </section>
</template>