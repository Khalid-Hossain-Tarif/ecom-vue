<script setup>
import CartInputButton from '@/components/common/products/CartInputButton.vue';
</script>

<template>
    <div>
        <h1 class="primary-heading mb-7">My Cart</h1>
        <div class="grid lg:grid-cols-3 items-start gap-8 lg:gap-4 xl:gap-10">
            <div class="lg:col-span-2">
                <table class="cart-products-table">
                    <thead class="bg-[#F9F3F0] rounded hidden sm:table-header-group">
                        <tr>
                            <th scope="col" class="w-[35%] !pl-6 text-left">Product</th>
                            <th scope="col" class="w-[15%]">Price</th>
                            <th scope="col" class="w-[30%]">Quantity</th>
                            <th scope="col" class="w-[15%]">Subtotal</th>
                            <th scope="col" class="w-[5%]"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="n in 3" :key="index" class="relative">
                            <td data-title="Product" class="flex gap-3 items-center">
                                <router-link to="/single-product">
                                    <img class="w-16 h-14"
                                        src="@/assets/images/home/top-sales/demo-product-img.png"
                                        alt="Digital Product">
                                </router-link>
                                <h4>
                                    <router-link to="/single-product" class="font-semibold">
                                        Wireless PS Handler
                                    </router-link>
                                </h4>
                            </td>

                            <td data-title="Price" class="res-heading text-center font-semibold text-textGray">
                                $124.00
                            </td>

                            <td data-title="Qty" class="res-heading text-center">
                                <CartInputButton />
                            </td>

                            <td data-title="Subtotal" class="res-heading text-center font-semibold text-textGray">
                                $275.00
                            </td>

                            <td class="res-btn">
                                <button
                                    class="border border-borderLight hover:border-primary w-9 h-9 rounded-full text-[11px] text-primary">
                                    <font-awesome-icon :icon="['fas', 'x']" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="mt-5 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div class="flex items-center">
                        <input autocomplete="off" type="text" id="coupon" placeholder="Enter coupon code" class="!rounded-r-none">
                        <button class="btn btn-secondary font-bold uppercase rounded-l-none shrink-0">Apply coupon</button>
                    </div>

                    <div class="flex items-center gap-2 xl:gap-4">
                        <button class="btn btn-bordered grow">Empty cart</button>
                        <button class="btn btn-bordered grow">Update cart</button>
                    </div>
                </div>
            </div>

            <div class="bg-[#F9F3F0] p-6 xl:p-10 rounded">
                <h3 class="primary-heading mb-7">Order Summary</h3>
                <table class="order-table">
                    <tbody>
                        <tr>
                            <td class="min-w-[100px] xl:min-w-[120px]">Subtotal</td>
                            <td>$117.00</td>
                        </tr>
                        <tr>
                            <td class="min-w-[100px] xl:min-w-[120px]">Shipping</td>
                            <td>
                                <div class="input-group flex items-center gap-2">
                                    <input type="radio" id="shipping" name="shipping" checked>
                                    <label for="shipping" class="">Free Shippping</label>
                                </div>
                                <div class="input-group flex items-center gap-2 my-2">
                                    <input type="radio" id="local-pickup" name="pickup">
                                    <label for="local-pickup" class="">Local Pickup: $10.00</label>
                                </div>
                                <div class="input-group flex items-center gap-2">
                                    <input type="radio" id="flat-rate" name="flat rate">
                                    <label for="flat-rate" class="">Flat rate: $12.00</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="min-w-[100px] xl:min-w-[120px]">State Tax</td>
                            <td>$8.00</td>
                        </tr>
                        <tr>
                            <td class="min-w-[100px] xl:min-w-[120px]">Total</td>
                            <td class="!font-bold text-primary text-lg">$125.00</td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-secondary w-full mt-5">Proceed to checkout</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
table {
    @apply w-full
}

th {
    @apply uppercase
}

tr {
    @apply border-b border-b-borderLight
}

thead tr {
    @apply border-none
}

.order-table td {
    @apply py-4 font-medium
}

.order-table tr:first-child td {
    @apply pt-0
}

.cart-products-table th, 
.cart-products-table td {
    @apply p-4
}

@media (width <= 412px) {
    .cart-products-table tr {
        @apply block border-b-borderDark bg-[#f7f7f7]
    }
    .cart-products-table td {
        @apply flex justify-between items-center border-b border-borderLight last:border-b-0
    }
    .cart-products-table td:first-child {
        @apply justify-start
    }
    .res-heading::before {
        @apply content-[attr(data-title)_":"] text-body font-medium
    }
    .res-btn {
        @apply absolute top-3 right-0
    }
}
</style>