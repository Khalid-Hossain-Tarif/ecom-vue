<script setup>
import sliderImage1 from '@/assets/images/home/banner/home-banner-slide1.png';
import sliderImage2 from '@/assets/images/home/banner/home-banner-slide2.png';
import sliderImage3 from '@/assets/images/home/banner/home-banner-slide3.png';

const sliderItems = [
    {
        id: 1,
        subHeading: 'New year deal!',
        heading: `Up to <span class="font-black">60%</span> off Sale`,
        sliderImg: sliderImage1
    },

    {
        id: 2,
        subHeading: 'Mega sale!',
        heading: `Up to <span class="font-black">70%</span> off Voucher`,
        sliderImg: sliderImage2
    },

    {
        id: 3,
        subHeading: 'Hot deal!',
        heading: `Up to <span class="font-black">50%</span> off Sale`,
        sliderImg: sliderImage3
    },
];
</script>

<template>
    <section class="bg-grayLight h-[300px] sm:h-[350px] lg:h-[500px]">
        <div class="custom-container">
            <swiper-container class="w-full h-full" pagination="true" direction="vertical" loop="true" space-between="30"
                autoplay-delay="3000" autoplay-disable-on-interaction="false" style="--swiper-pagination-color: #EE2C31;">
                <swiper-slide v-for="item in sliderItems" :key="item?.id"
                    class="lg:pl-80 flex justify-between items-center">
                    <div>
                        <p class="uppercase text-primary font-medium">{{ item?.subHeading }}</p>
                        <h3 class="mt-2.5 mb-8 text-5xl sm:text-6xl xl:text-7xl" v-html="item?.heading"></h3>
                        <router-link to="/shop" class="btn btn-secondary group">
                            <span class="mr-2 group-hover:mr-2.5 transition-all">Shop now</span>
                            <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
                        </router-link>
                    </div>

                    <div class="w-[55%]">
                        <img v-if="item?.sliderImg" :src="item?.sliderImg" alt="Banner Slider Image" />
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </section>
</template>