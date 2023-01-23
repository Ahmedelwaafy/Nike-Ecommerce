import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: true,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    setToggleCart: (state, action) => {
      state.cartState = action.payload;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.img === action.payload.img
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQTY += 1;
        toast.success(`Item Quantity Increased`);
      } else {
        const temp = { ...action.payload, cartQTY: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to Cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setRemoveItemFromCart: (state, action) => {
      const FilteredItems = state.cartItems.filter(
        (item) => item.img !== action.payload.img
      );

      state.cartItems = FilteredItems;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      toast.success(`${action.payload.title} Removed From Cart`);
    },

    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.img === action.payload.img
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQTY += 1;

        toast.success(`Item Quantity Increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.img === action.payload.img
      );

      if (state.cartItems[itemIndex].cartQTY > 1) {
        state.cartItems[itemIndex].cartQTY -= 1;

        toast.success(`Item Quantity Decreased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setClearCartItems: (state, action) => {
      state.cartItems = [];
      toast.success(`Cart Cleared`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQTY } = cartItem;
          const totalPrice = price * cartQTY;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQTY;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQTY;
    },
  },
});
export default CartSlice.reducer;
export const {
  setToggleCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals,
} = CartSlice.actions;
