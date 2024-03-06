import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
    reducer: {
        productsStore: productsSlice,
        categoryStore: categorySlice,
        cartStore: cartSlice
    }
})



export default store;