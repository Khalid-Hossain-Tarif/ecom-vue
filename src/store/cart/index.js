import { reactive, computed, inject } from "vue";
import toast from "../../../utils/Toaster.js";

const { successToast, errorToast } = toast();

const cart = () => {
  const loading = inject("loading");

  const cartItems = reactive({
    items: {},
    subtotalPrice: 0,
    totalPrice: 0,
    isCartUpdated: false,
  });

  const totalCartItems = computed(() => {
    let total = 0;
    for (let id in cartItems.items) {
      total += cartItems.items[id].quantity;
    }
    return total;
  });

  function productCount(actionType, product) {
    if (actionType === "increment") {
      if (cartItems.items[product.id]) {
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
          // delete cartItems.items[product.id];
          cartItems.items[product.id] = {
            product,
            quantity: 0,
          };
        }
      }
    }

    cartItems.isCartUpdated = true;
    saveCartInLocalStorage();
  }

  function emptyCart() {
    cartItems.items = {};
    cartItems.subtotalPrice = 0;
    cartItems.totalPrice = 0;
    saveCartInLocalStorage();
  }

  function updatePrices() {
    loading(true);
    let subtotal = 0;
    for (let id in cartItems.items) {
      subtotal +=
        cartItems.items[id].product.selling_price *
        cartItems.items[id].quantity;
    }
    cartItems.subtotalPrice = parseFloat(subtotal.toFixed(2));
    cartItems.totalPrice = parseFloat(subtotal.toFixed(2));
    cartItems.isCartUpdated = false;
    setTimeout(() => {
      loading(false);
    }, 500);
  }

  function productAddToCartHandler(actionType) {
    const itemCount = document.getElementById('item-count');
    if (actionType === "increment") {
      itemCount.innerText = parseInt(itemCount.innerText) + 1
    } else {
      itemCount.innerText < 1 ? itemCount.innerText = 0 : itemCount.innerText = parseInt(itemCount.innerText) - 1
    }
  }

  function addItem(product) {
    if (!cartItems.items[product.id]) {
      cartItems.items[product.id] = {
        product,
        quantity: 1,
      };
      successToast("This product added to the cart.");
    } else {
      errorToast("This product is already added in the cart!");
      // cartItems.items[product.id].quantity++;
    }
    cartItems.isCartUpdated = true;
    updatePrices();
    saveCartInLocalStorage();
  }

  function deleteItem(product) {
    if (cartItems.items[product.id]) {
      delete cartItems.items[product.id];
      updatePrices();
      saveCartInLocalStorage();
    }
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
    totalCartItems,
    productCount,
    emptyCart,
    updatePrices,
    addItem,
    deleteItem,
    productAddToCartHandler
  };
};

export { cart };
