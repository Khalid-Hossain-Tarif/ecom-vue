<script setup>
import ProductCard from '@/components/common/ProductCard.vue';
</script>

<template>
  <section>
    <div class="custom-container">
      <div class="section-margin custom-swiper-navs">
        <h3 class="primary-heading"><span class="mr-1">🔥</span> Flash Sale Today!</h3>

        <div class="mt-6">
          <swiper-container
              style="--swiper-navigation-size: 30px;"
              space-between="16"
              :navigation="true"
              :slides-per-view="2"
              :breakpoints="{
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 5,
                            },
                        }"
          >
            <swiper-slide v-for="n in 7">
              <ProductCard/>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
  </section>
</template>