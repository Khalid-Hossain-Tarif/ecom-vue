<script setup>
const socialIcons = [
    {
        icon: ['fab', 'facebook-f'],
        url: 'https://www.facebook.com/',
        color: 'bg-[#37538E]'
    },
    {
        icon: ['fab', 'instagram'],
        url: 'https://www.instagram.com/',
        color: 'bg-[#B92762]'
    },
    {
        icon: ['fab', 'twitter'],
        url: 'https://www.twitter.com/',
        color: 'bg-[#1C94DF]'
    },
    {
        icon: ['fab', 'youtube'],
        url: 'https://www.youtube.com/',
        color: 'bg-[#BB2021]'
    },
];
</script>

<template>
    <div class="mb-[70px] lg:mb-0">
        <div class="custom-container">
            <div
                class="py-4 border-t border-borderDark grid lg:grid-cols-3 justify-center lg:justify-between items-center gap-4 text-xs text-center ">
                <ul>
                    <li class="flex justify-center lg:justify-start items-center gap-2">
                        <a target="_blank" :href="socialIcon?.url" v-for="socialIcon of socialIcons" :key="socialIcon?.url"
                            class="w-6 h-6 rounded-full grid place-content-center text-white hover:text-grayLight"
                            :class="socialIcon?.color">
                            <font-awesome-icon :icon="socialIcon?.icon" />
                        </a>
                    </li>
                </ul>

                <p>@ copyright 2024 <router-link to="/">Ecom</router-link>. All Rights Reserved</p>

                <div class="lg:text-right">
                    <img src="@/assets/images/footer/payments-methods.png" alt="Supported payment methods image"
                        class="w-56 inline-block" />
                </div>
            </div>
        </div>
    </div>
</template>