<script setup>
const commitments = [
    {
        id: 1,
        heading: 'DELIVERY IN 24H',
        content: 'Free shipping over $50',
        icon: ['fas', 'truck']
    },
    {
        id: 2,
        heading: '24 HOURS RETURN',
        content: 'Products free return',
        icon: ['fas', 'right-left']
    },
    {
        id: 3,
        heading: 'QUALITY GUARANTEE',
        content: 'Quality checked by our team',
        icon: ['fas', 'thumbs-up']
    },
    {
        id: 4,
        heading: 'SUPPORT 24/7',
        content: 'Customer support available',
        icon: ['fas', 'headset']
    },
];
</script>

<template>
    <section class="section-margin">
        <div class="custom-container">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
                <div class="lg:flex lg:items-center lg:gap-4 text-center lg:text-left group"
                    v-for="commitment in commitments" :key="commitment?.id">
                    <font-awesome-icon
                        class="mb-3 lg:mb-0 text-[28px] text-gray transition-opacity opacity-50 group-hover:opacity-100"
                        :icon="commitment?.icon" />
                    <div>
                        <h4 class="text-sm sm:text-base font-bold uppercase">{{ commitment?.heading }}</h4>
                        <p class="mt-.5 sm:mt-1 text-textGray">{{ commitment?.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>