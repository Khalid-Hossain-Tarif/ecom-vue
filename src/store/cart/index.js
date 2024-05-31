import { reactive, computed } from "vue";  
import { parse } from "vue/compiler-sfc";

const cart = reactive({
    items: {},
    totalCartItems: computed(() => {
        let total = 0;
        for (let id in cart.items) {
            total += cart.items[id].quantity
        }
        return total
    }),
    totalPrice: computed(() => {
        let total = 0;
        for (let id in cart.items) {
            total += cart.items[id].product.selling_price * cart.items[id].quantity
        }
        return parseFloat(total.toFixed(2))
    }),
    addItem(product){
        if(this.items[product.id]) {
            this.items[product.id].quantity++
        } else {
            this.items[product.id] = {
                product,
                quantity: 1
            }
        }
        this.saveCartInLocalStorage()
    },
    removeItem(product){},
    emptyCart(){},
    saveCartInLocalStorage(){
        localStorage.setItem('cart', JSON.stringify(this.items))
        // localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice))
    },
    getCartFromLocalStorage(){
        this.items = JSON.parse(localStorage.getItem("cart")) || {}
        // this.totalPrice = JSON.parse(localStorage.getItem("totalPrice")) || {}
    }
})

cart.getCartFromLocalStorage()

export { cart }