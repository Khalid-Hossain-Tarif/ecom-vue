<script setup>
import FooterBottom from './FooterBottom.vue';

const menu1 = [
    { label: 'Terms of use', url: null },
    { label: 'Privacy & policies', url: null },
    { label: 'Return & exchange policy', url: null },
    { label: 'Payment terms', url: null },
    { label: 'Delivery terms', url: null }
];

const menu2 = [
    { label: 'My account', url: null },
    { label: 'Login / register', url: null },
    { label: 'Shop', url: null },
    { label: 'About us', url: null },
    { label: 'Contact us', url: null },
];
</script>

<template>
    <footer class="bg-secondary text-grayLight/70">
        <div class="custom-container">
            <div class="section-padding flex flex-wrap gap-8 sm:gap-10">
                <div class="flex-grow">
                    <h4 class="footer-heading">CONTACT INFO</h4>
                    <ul class="space-y-2.5">
                        <li class="flex items-center gap-2">
                            <font-awesome-icon :icon="['fas', 'phone']" />
                            <p><a href="tel:(+01) 111-000-111">(+01) 111-000-111</a></p>
                        </li>
                        <li class="flex items-center gap-2">
                            <font-awesome-icon :icon="['fas', 'envelope']" />
                            <p><a href="mailto:ecom2423@gmail.com">ecom2423@gmail.com</a></p>
                        </li>
                        <li class="flex items-center gap-2">
                            <font-awesome-icon :icon="['fas', 'location-dot']" />
                            <p>Gulshan, Dhaka, Bangladesh</p>
                        </li>
                        <li class="flex items-center gap-2">
                            <font-awesome-icon :icon="['fas', 'clock']" />
                            <p>Monday - Saturday 10:00pm – 6:00pm <br>Friday : Closed</p>
                        </li>
                    </ul>
                </div>

                <div class="flex-grow">
                    <h4 class="footer-heading">POLICIES</h4>
                    <ul class="space-y-2.5 capitalize">
                        <li v-for="menu of menu1" :key="menu?.label">
                            <a :href="menu?.url">{{ menu?.label }}</a>
                        </li>
                    </ul>
                </div>

                <div class="flex-grow">
                    <h4 class="footer-heading">Quick links</h4>
                    <ul class="space-y-2.5 capitalize">
                        <li v-for="menu of menu2" :key="menu?.label">
                            <a :href="menu?.url">{{ menu?.label }}</a>
                        </li>
                    </ul>
                </div>

                <div class="flex-grow w-1/4 sm:w-1/2 md:w-1/4">
                    <h4 class="footer-heading">Subscribe NEWSLETTER</h4>
                    <div>
                        <p>*Subscribe to our newsletter to receive early discount offers, updates and new products info for
                            Membership discount.</p>
                        <div class="flex h-10 mt-5">
                            <input class="block rounded-l w-full p-2 pl-4 outline-none bg-white text-secondary"
                                placeholder="Search your products" autocomplete="off" value="">
                            <button
                                class="bg-grayLight rounded-r border border-borderLight border-l-white px-4 py-2 text-base text-secondary">
                                <font-awesome-icon :icon="['fas', 'paper-plane']" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterBottom />
    </footer>
</template>

<style scoped>
.footer-heading {
    @apply mb-5 font-bold text-base text-white uppercase
}
</style>