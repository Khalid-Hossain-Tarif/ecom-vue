<script setup>
import Tabs from '@/components/common/Tabs.vue';

const myTabs = [
    { id: 'tab1', label: 'Description' },
    { id: 'tab2', label: 'Specification' },
    { id: 'tab3', label: 'Reviews (0)' }
];
</script>

<template>
    <section class="section-margin">
        <div class="relative max-w-4xl m-auto">
            <Tabs :tabs="myTabs" defaultTab="tab1" headerPosition="md:justify-center">
                <template #tab1>
                    <div>
                        <p>
                            A groundbreaking Retina display. Powerful dual-core and quad-core Intel processors. Fast flash
                            storage. High-performance graphics. Great built-in apps. And now in the 13-inch model, a
                            revolutionary new Force Touch trackpad and even longer battery life.1 Whatever you can imagine,
                            MacBook Pro with Retina display gives you the power to create.
                        </p>
                    </div>
                </template>
                <template #tab2>
                    <div>
                        <p>
                            A groundbreaking Retina display. Powerful dual-core and quad-core Intel processors. Fast flash
                            storage. High-performance graphics. Great built-in apps.
                        </p>
                    </div>
                </template>
                <template #tab3>
                    <div>
                        <p>
                            Great built-in apps. And now in the 13-inch model, a
                            revolutionary new Force Touch trackpad and even longer battery life.1 Whatever you can imagine,
                            MacBook Pro with Retina display gives you the power to create.
                        </p>
                    </div>
                </template>
            </Tabs>
        </div>
    </section>
</template>