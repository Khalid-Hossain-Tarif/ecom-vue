<script setup>
</script>

<template>
    <div>
        <h1 class="primary-heading mb-7">My wishlist products</h1>
        <div>
            <table>
                <thead class="bg-grayLight rounded hidden sm:table-header-group">
                    <tr>
                        <th scope="col" class="w-[35%] !pl-6 text-left">Product</th>
                        <th scope="col" class="w-[15%]">Unit Price</th>
                        <th scope="col" class="w-[30%]">Stock Status</th>
                        <th scope="col" class="w-[15%]"></th>
                        <th scope="col" class="w-[5%]"></th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="n in 3" :key="index" class="relative">
                        <td data-title="Product" class="flex gap-3 items-center">
                            <router-link to="/single-product">
                                <img class="w-16 h-14" src="@/assets/images/home/top-sales/demo-product-img.png"
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

                        <td data-title="Qty" class="res-heading text-center font-semibold text-textGray capitalize">
                            In Stock
                        </td>

                        <td>
                            <router-link to="/cart" class="btn btn-secondary m-auto">Add to cart</router-link>
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

th, td {
    @apply p-4
}

@media (width <=412px) {
    tr {
        @apply block border-b-borderDark bg-[#f7f7f7]
    }

    td {
        @apply flex justify-between items-center border-b border-borderLight last:border-b-0
    }

    td:first-child {
        @apply justify-start
    }

    .res-heading::before {
        @apply content-[attr(data-title)_":"] text-body font-medium
    }

    .res-btn {
        @apply absolute top-3 right-0
    }
}</style>