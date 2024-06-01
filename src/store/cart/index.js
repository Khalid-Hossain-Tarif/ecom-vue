import { reactive, computed } from "vue";  
import { parse } from "vue/compiler-sfc";

const cart = reactive({
    items: {},
    subtotalPrice: 0,
    totalPrice: 0,
    isCartUpdated: false,
    totalCartItems: computed(() => {
        let total = 0;
        for (let id in cart.items) {
            total += cart.items[id].quantity
        }
        return total
    }),
    // subtotalPrice: computed(() => {
    //     let subtotal = 0;
    //     for (let id in cart.items) {
    //         subtotal += cart.items[id].product.selling_price * cart.items[id].quantity
    //     }
    //     return parseFloat(total.toFixed(2))
    // }),
    // totalPrice: computed(() => {
    //     let total = 0;
    //     for (let id in cart.items) {
    //         total += cart.items[id].product.selling_price * cart.items[id].quantity
    //     }
    //     return parseFloat(total.toFixed(2))
    // }),

    addItem(product){
        if(this.items[product.id]) {
            this.items[product.id].quantity++
        } else {
            this.items[product.id] = {
                product,
                quantity: 1
            }
        }
        this.isCartUpdated = true;
        this.saveCartInLocalStorage()
    },
    // removeItem(product){
    //     if(this.items[product.id]) {
    //         this.items[product.id].quantity--
    //     } else {
    //         this.items[product.id] = {
    //             product,
    //             quantity: 1
    //         }
    //     }
    //     this.saveCartInLocalStorage()
    // },
    removeItem(product) {
        if (this.items[product.id]) {
            this.items[product.id].quantity--;
            if (this.items[product.id].quantity < 0) {
                // delete this.items[product.id];
                this.items[product.id] = {
                    product,
                    quantity: 0
                }
            }
            this.isCartUpdated = true;
            this.saveCartInLocalStorage();
        }
    },
    emptyCart() {
        this.items = {};
        this.subtotalPrice = 0;
        this.totalPrice = 0;
        this.saveCartInLocalStorage();
    },
    updatePrices: () => {
        let subtotal = 0;
        for (let id in cart.items) {
            subtotal += cart.items[id].product.selling_price * cart.items[id].quantity;
        }
        cart.subtotalPrice = parseFloat(subtotal.toFixed(2));
        cart.totalPrice = parseFloat(subtotal.toFixed(2));
        cart.isCartUpdated = false;
    },
    deleteItem(product) {
        delete this.items[product.id]
        this.updatePrices()
        this.saveCartInLocalStorage();
    },
    saveCartInLocalStorage(){
        localStorage.setItem('cart', JSON.stringify(this.items))
        // localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice))
    },
    getCartFromLocalStorage(){
        this.items = JSON.parse(localStorage.getItem("cart")) || {}
        this.updatePrices()
        // this.totalPrice = JSON.parse(localStorage.getItem("totalPrice")) || {}
    }
})

cart.getCartFromLocalStorage()

export { cart }