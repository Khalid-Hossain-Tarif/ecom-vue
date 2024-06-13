import { reactive, computed, onMounted, onUnmounted } from "vue";  
import toast from "../../../utils/Toaster.js";

const { successToast, errorToast } = toast();

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

    // addItem(product) {
    //     if(this.items[product.id]) {
    //         this.items[product.id].quantity++
    //     } else {
    //         this.items[product.id] = {
    //             product,
    //             quantity: 1
    //         }
    //     }
    //     this.isCartUpdated = true;
    //     this.saveCartInLocalStorage()
    // },


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
    // removeItem(product) {
    //     if (this.items[product.id]) {
    //         this.items[product.id].quantity--;
    //         if (this.items[product.id].quantity < 0) {
    //             // delete this.items[product.id];
    //             this.items[product.id] = {
    //                 product,
    //                 quantity: 0
    //             }
    //         }
    //         this.isCartUpdated = true;
    //         this.saveCartInLocalStorage();
    //     }
    // },

    productCount(actionType, product) {
        if(actionType === 'increment') {
            if(this.items[product.id]) {
                this.items[product.id].quantity++
            } else {
                this.items[product.id] = {
                    product,
                    quantity: 1
                }
            }
        } else {
            if (this.items[product.id]) {
                this.items[product.id].quantity--;
                if (this.items[product.id].quantity < 0) {
                    // delete this.items[product.id];
                    this.items[product.id] = {
                        product,
                        quantity: 0
                    }
                }
            }
        }
        this.isCartUpdated = true;
        this.saveCartInLocalStorage()
    },
    emptyCart() {
        this.items = {};
        this.subtotalPrice = 0;
        this.totalPrice = 0;
        this.saveCartInLocalStorage();
    },    
    
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

    updatePrices() {
        let subtotal = 0;
        for (let id in this.items) {
            subtotal += this.items[id].product.selling_price * this.items[id].quantity;
        }
        this.subtotalPrice = parseFloat(subtotal.toFixed(2));
        this.totalPrice = parseFloat(subtotal.toFixed(2));
        this.isCartUpdated = false;
        console.log('composable')
    },
    addItem(product) {
        if(!this.items[product.id]) {
            this.items[product.id] = {
                product,
                quantity: 1
            }
            this.isCartUpdated = true
            this.updatePrices()
            this.saveCartInLocalStorage()
            successToast("This product added to the cart.")
        }
        else {
            errorToast("This item is already added in the cart!")
        }
    },
    deleteItem(product) {
        delete this.items[product.id]
        this.updatePrices()
        this.saveCartInLocalStorage()
    },
    saveCartInLocalStorage(){
        localStorage.setItem('cart', JSON.stringify(this.items))
    },
    getCartFromLocalStorage(){
        this.items = JSON.parse(localStorage.getItem("cart")) || {}
        this.updatePrices()
    }
})

cart.getCartFromLocalStorage()

export { cart }