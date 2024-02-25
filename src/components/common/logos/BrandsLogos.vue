<script setup>
import brandImg1 from '@/assets/images/brands/brand-5.jpg';

const brandImages = [
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
    { brandImg: brandImg1, alt: 'Digital Brand logo' },
];


</script>

<template>
    <section class="pb-10 lg:pb-12">
        <div class="custom-container">
            <h4 class="primary-heading mb-7"><span class="mr-1">🤝</span> Our Best Clients</h4>

            <div>
                <swiper-container class="mySwiper" style="--swiper-navigation-size: 30px;" navigation="true"
                    :grid="{ rows: 2, fill: 'row' }" space-between="20" :slides-per-view="2" :breakpoints="{
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
                    <swiper-slide v-for="brandImage in brandImages" :key="brandImage?.brandImg">
                        <img :src="brandImage?.brandImg" :alt="brandImage?.alt" class="m-auto transition-opacity opacity-50 hover:opacity-100">
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    </section>
</template>