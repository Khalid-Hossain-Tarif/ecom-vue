<script setup>
import { onMounted } from 'vue';
import ProductCard from '@/components/common/products/product-card/Index.vue';
import DataNotFound from "@/components/common/not-found/dataNotFound.vue";
import { manageProducts } from "@/composables/getAllProducts";
import { useWishlist } from '@/store/wishlist';

const { getAllProducts, todayDealProducts } = manageProducts();
const { fetchWishList } = useWishlist();

onMounted(() => {
  fetchWishList()
  getAllProducts()
})
</script>

<template>
  <section>
    <div class="custom-container">
      <div class="section-margin custom-swiper-navs">
        <h3 class="primary-heading">
          <span class="mr-1">🔥</span> Flash Sale Today!
        </h3>

        <div class="mt-6">
          <swiper-container 
            v-if="todayDealProducts" 
            style="--swiper-navigation-size: 30px;" space-between="16" :navigation="true" :slides-per-view="2" 
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
            <swiper-slide 
              v-for="product in todayDealProducts" 
              :key="product?.id"
            >
              <ProductCard 
                :product="product"
              />
            </swiper-slide>
          </swiper-container>

          <DataNotFound v-else />
        </div>
      </div>
    </div>
  </section>
</template>