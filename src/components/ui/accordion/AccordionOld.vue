<!-- <template>
    <section class="custom-container lg:!pr-0 relative my-12 lg:my-[120px]">
        <div class="grid lg:grid-cols-2 gap-4 lg:gap-10 xl:gap-20">
            <div class="lg:py-16">
                <h3 class="text-dark text-[28px] lg:text-[32px] leading-9 lg:leading-10 font-medium">More profit in a few<br> simple steps</h3>
                <div class="lg:pt-5 divide-y space-y-4 lg:space-y-6">
                    <div class="accordion-box" v-for="(n, index) in 5" :key="index">
                        <input type="radio" name="radioBtnAccordion" value="1" id="accordion1" checked />
                        <label class="accordion-title" for="accordion1">
                            <span>Open app & select “Ride”</span>
                            <img src="@/assets/images/icons/down-arrow.svg" alt="Down arrow">
                        </label>
                        <div class="accordion-content">
                            <div class="accordion-content-img">
                                <img src="@/assets/images/icons/down-arrow.svg" alt="Phone image">
                            </div>
                            <p class="text-secondaryDark text-base lg:text-xl">Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                                Lorem ipsum dolor sit amet consectetur. Supendisse cras arcu est et dignissim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-secondary hidden lg:block"></div>
        </div>
    </section>
</template>

<style scoped>
    input[type="radio"] {
        @apply absolute opacity-0 transition-all
    }
    .accordion-title {
        @apply text-[#8D8D8F] flex justify-between items-center pt-4 lg:pt-6 z-10 text-xl lg:text-2xl font-medium cursor-pointer transition-all
    }
    input[type="radio"]:checked + .accordion-title {
        @apply text-dark
    }
    .accordion-title img {
        @apply transform rotate-0 transition-transform
    }
    input[type="radio"]:checked + .accordion-title img {
        @apply transform rotate-180
    }
    .accordion-content {
        @apply max-h-0 overflow-hidden transition-all
    }
    .accordion-content-img {
        @apply bg-secondary py-3 lg:py-0 mb-4 lg:mb-0 grid place-content-center
    }
    .accordion-content-img img {
        @apply lg:absolute lg:top-12 xl:top-10 lg:right-[8%] xl:right-[10%] 2xl:right-[11%] opacity-0 transition
    }
    input[type="radio"]:checked ~ .accordion-content {
        @apply pt-4 max-h-max overflow-auto
    }
    input[type="radio"]:checked ~ .accordion-content .accordion-content-img img {
        @apply opacity-100
    }
    @media (width > 1439px) and (width < 1536px) {
        .accordion-content-img img {
            @apply right-[10.5%]
        }
    }
</style> -->

<!-- 
<template>
    <div class="accordion">
      <div v-for="(item, index) in items" :key="index">
        <button @click="toggleAccordion(index)">
            <span :class="isOpen(index) ? 'font-bold' : ''">{{ item.title }}</span>
        </button>
        <div v-if="isOpen(index)" class="content" :class="{'show': isOpen(index) }">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const items = ref([
    { title: 'Accordion 1', content: 'Content for Accordion 1' },
    { title: 'Accordion 2', content: 'Content for Accordion 2' },
    { title: 'Accordion 3', content: 'Content for Accordion 3' }
  ])
  
  const openIndex = ref(null)
  
  const toggleAccordion = (index) => {
    if (openIndex.value === index) {
      openIndex.value = null
    } else {
      openIndex.value = index
    }
  }
  
  const isOpen = (index) => {
    return openIndex.value === index
  }
  </script>
  
  <style scoped>
    .accordion {
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  
    .accordion button {
      background-color: #f0f0f0;
      padding: 10px;
      border: none;
      width: 100%;
      text-align: left;
      cursor: pointer;
    }
  
    .accordion .content {
      padding: 10px;
      display: none;
    }
  
    .accordion .content.show {
      display: block;
    }
  </style> -->



  <script setup>
import { ref } from 'vue'
const accordionIndex = ref(null)

const toggleAccordion = (index) => {
    if (accordionIndex.value === index) {
      accordionIndex.value = null
    } else {
      accordionIndex.value = index
    }
  }
</script>

<template>
  <section class="container mx-auto flex items-center flex-col">

    <div class="p-10 bg-gradient-to-br from-indigo-100 to-indigo-300 grid place-items-center">
      <div class="w-6/12 mx-auto rounded border">
        <div class="bg-white p-10 shadow-sm">
          <h3 class="text-lg font-medium text-gray-800">Several Windows stacked on each other</h3>
          <p class="text-sm font-light text-gray-600 my-3">
            The accordion is a graphical control element comprising a vertically stacked list of items such as labels or thumbnails
          </p>

          <div class="h-1 w-full mx-auto border-b my-5"></div>

          <!-- What is term -->
          <div class="transition hover:bg-indigo-50">
            <!-- header -->
            <div @click="toggleAccordion(0)" class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i class="fas fa-plus"></i>
              <h3>What is term?</h3>
            </div>
            <!-- Content -->
            <div class="px-5 pt-0 text-left pb-5">
              <p class="leading-6 font-light pl-9 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolor dolorum odio, saepe quibusdam iusto possimus nesciunt dolores assumenda quae totam, doloremque odit. Itaque cum animi, labore debitis deserunt iusto!
              </p>
            </div>
          </div>

          <!-- When to use Accordion Components -->
          <div class="transition hover:bg-indigo-50">
            <!-- header -->
            <div @click="toggleAccordion(1)" class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i class="fas fa-plus"></i>
              <h3>When to use Accordion Components?</h3>
            </div>
            <!-- Content -->
            <div class="accordion-content px-5 pt-0 text-left pb-5">
              <p class="leading-6 font-light pl-9 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit itaque, sequi incidunt ab sit optio debitis dignissimos doloribus ratione nobis id mollitia maiores eveniet necessitatibus dolorum praesentium! Corrupti, at.
              </p>
            </div>
          </div>

          <!-- Accordion Wrapper -->
          <div class="transition hover:bg-indigo-50">
            <!-- header -->
            <div @click="toggleAccordion(2)" class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i class="fas fa-plus"></i>
              <h3>How can it be defined?</h3>
            </div>
            <!-- Content -->
            <div class="accordion-content px-5 pt-0 text-left pb-5">
              <p class="leading-6 font-light pl-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facilis labore voluptates provident nam, delectus suscipit nihil optio voluptate quae porro fugiat magni excepturi doloribus.
              </p>
            </div>
          </div>

          <!-- Accordion Wrapper -->
          <div class="transition hover:bg-indigo-50">
            <!-- header -->
            <div @click="toggleAccordion(3)" class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i class="fas fa-plus"></i>
              <h3>Chamber reached do he nothing be?</h3>
            </div>
            <!-- Content -->
            <div class="accordion-content px-5 pt-0 text-left pb-5">
              <p class="leading-6 font-light pl-9">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam minima maiores magni dolore qui architecto pariatur incidunt repellat quos hic? Eius, eveniet accusantium! Quisquam, quo. Vitae ipsum ad veritatis commodi quasi expedita!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>