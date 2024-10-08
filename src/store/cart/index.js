import { reactive, ref, computed, inject, watch } from "vue";
import toast from "@/utils/Toaster.js";

const { successToast } = toast();
const itemTotal = ref(0);

const cart = () => {
  const loading = inject("loading");

  const cartItems = reactive({
    items: {},
    subtotalPrice: 0,
    shippingMethods: {
      selectedMethods: "free-shipping",
      freeShipping: 0,
      localPickup: 30,
      // flatRate: 10,
    },
    stateTax: 10,
    totalPrice: 0,
    isCartUpdated: false,
    itemCount: 1,
    totalItem: 0,
  });

  const totalCartItems = computed(() => {
    let total = itemTotal.value;
    for (let id in cartItems.items) {
      const itemsTotal = cartItems.items[id].quantity;
      // console.log(itemsTotal)
      total += itemsTotal;
    }
    return total;
  });

  watch(
    totalCartItems,
    (newValue, oldValue) => {
      // console.log(`Count changed from ${oldValue} to ${newValue}`);
    },
    { immediate: true, deep: true }
  );

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

    // Adjust totalPrice based on selected shipping method
    if (cartItems.shippingMethods.selectedMethods === "free-shipping") {
      cartItems.totalPrice = cartItems.subtotalPrice;
    } else if (cartItems.shippingMethods.selectedMethods === "local-pickup") {
      cartItems.totalPrice = cartItems.subtotalPrice + cartItems.shippingMethods.localPickup;
    }
    const subtotalWithTax = cartItems.subtotalPrice * cartItems.stateTax / 100;
    cartItems.totalPrice = parseFloat(cartItems.totalPrice + subtotalWithTax).toFixed(2);

    cartItems.isCartUpdated = false;

    setTimeout(() => {
      loading(false);
      cartItems.itemCount = 1;
    }, 200);
  }

  watch(() => cartItems.shippingMethods.selectedMethods, updatePrices);

  function productAddToCartHandler(actionType) {
    if (actionType === "increment") {
      cartItems.itemCount = cartItems.itemCount + 1;
    } else {
      cartItems.itemCount > 1
        ? (cartItems.itemCount = cartItems.itemCount - 1)
        : (cartItems.itemCount = 1);
    }
  }

  function addItem(product) {
    if (!cartItems.items[product.id]) {
      cartItems.items[product.id] = {
        product,
        quantity: cartItems.itemCount,
      };
      successToast("This product added to the cart.");
    } else {
      // errorToast("This product is already added in the cart!");
      cartItems.items[product.id].quantity += cartItems.itemCount;
      successToast(
        `${cartItems.items[product.id].quantity} product added to the cart.`
      );
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
    productAddToCartHandler,
  };
};

export { cart };
