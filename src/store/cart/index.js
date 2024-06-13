import { reactive, computed, onMounted, onUnmounted } from "vue";
import toast from "../../../utils/Toaster.js";

const { successToast, errorToast } = toast();

export const cart = () => {
  const cartItems = reactive({
    items: {},
    subtotalPrice: 0,
    totalPrice: 0,
    isCartUpdated: false,
    // quantity: 0,
    totalCartItems: computed(() => {
        let total = 0;
        for (let id in cartItems.items) {
            total += cartItems.items[id].quantity
        }
        return total
    }),
  });

//   const totalCartItems = computed(() => {
//     let total = 0;
//     for (let id in cartItems.items) {
//       total += cartItems.items[id].quantity;
//     }
//     return total;
//   });

  const productCount = (actionType, product) => {
    if (actionType === "increment") {
      
      if (cartItems.items[product.id]) {
        console.log(cartItems.items[product.id].quantity);
        cartItems.items[product.id].quantity++;
      } else {
        cartItems.items[product.id] = {
          product,
          quantity: 1,
        };
      }
    } else {
      if (cartItems.items[product.id]) {
        cartItems.items[product.id].quantity--;
        if (cartItems.items[product.id].quantity < 0) {
          cartItems.items[product.id] = {
            product,
            quantity: 0,
          };
        }
      }
    }
    cartItems.isCartUpdated = true;
    saveCartInLocalStorage();
  };

  function emptyCart() {
    cartItems.items = {};
    cartItems.subtotalPrice = 0;
    cartItems.totalPrice = 0;
    saveCartInLocalStorage();
  }

  function updatePrices() {
    let subtotal = 0;
    for (let id in cartItems.items) {
      subtotal +=
        cartItems.items[id].product.selling_price *
        cartItems.items[id].quantity;
    }
    cartItems.subtotalPrice = parseFloat(subtotal.toFixed(2));
    cartItems.totalPrice = parseFloat(subtotal.toFixed(2));
    cartItems.isCartUpdated = false;
  }

  function addItem(product) {
    if (!cartItems.items[product.id]) {
      cartItems.items[product.id] = {
        product,
        quantity: 1,
      };
      cartItems.isCartUpdated = true;
      updatePrices();
      saveCartInLocalStorage();
      successToast("This product added to the cart.");
    } else {
      errorToast("This item is already added in the cart!");
    }
  }

  function deleteItem(product) {
    delete cartItems.items[product.id];
    updatePrices();
    saveCartInLocalStorage();
  }

  function saveCartInLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cartItems.items));
  }

  function getCartFromLocalStorage() {
    cartItems.items = JSON.parse(localStorage.getItem("cart")) || {};
    updatePrices();
  }

  getCartFromLocalStorage();

  return {
    cartItems,
    productCount,
    emptyCart,
    updatePrices,
    addItem,
    deleteItem,
  };
};

// cart.getCartFromLocalStorage()

// export { cart }
