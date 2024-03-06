import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        getAllProducts: (state, action) => {
            // console.log(action.payload)
            state.products = action.payload
        }
    }
})


export const { getAllProducts } = productsSlice.actions;
export default productsSlice.reducer;