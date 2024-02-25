<!-- <script setup>
import Accordion from '@/components/common/accordion/Accordion.vue';
import AccordionTab from '@/components/common/accordion/AccordionTab.vue';

const accordionItems = [
  { title: 'Accordion 1', content: 'Content for Accordion 1 Content for Accordion 1' },
  { title: 'Accordion 2', content: 'Content for Accordion 2 Content for Accordion 1' },
  { title: 'Accordion 3', content: 'Content for Accordion 3 Content for Accordion 1' }
]
</script>

<template>
    <section class="min-h-screen mt-10">
        <div class="custom-container">
            <h1 class="text-6xl text-info">This is About page. Will update soon!</h1>

            <div>
                <Accordion>
                    <AccordionTab v-for="(item, index) in accordionItems" :key="index" :header="item?.title">
                        <p>
                            {{ item?.content }}
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
            
        </div>
    </section>
</template> -->


<!-- <template>
  <section class="min-h-screen mt-10">
    <div class="custom-container">
      <div>
        <Accordion>
          <AccordionTab
            v-for="(item, index) in accordionItems" 
            :key="index" 
            :header="item.title"
            :isActive="index === activeIndex"
            @toggleAccordion="activeIndex = index"
          >
            <p>
              {{ item.content }}
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  </section>
</template>

<script setup>
import Accordion from '@/components/common/accordion/Accordion.vue';
import AccordionTab from '@/components/common/accordion/AccordionTab.vue';

const accordionItems = [
  { title: 'Accordion 1', content: 'Content for Accordion 1 Content for Accordion 1' },
  { title: 'Accordion 2', content: 'Content for Accordion 2 Content for Accordion 1' },
  { title: 'Accordion 3', content: 'Content for Accordion 3 Content for Accordion 1' }
]

import { ref } from 'vue';
const activeIndex = ref(0);
</script> -->


<script setup>

</script>

<template>
    <section class="min-h-screen grid place-content-center">
        <div class="custom-container">
            <h1 class="text-6xl text-secondary">This is About page. Will update soon!</h1>
        </div>
    </section>
</template>