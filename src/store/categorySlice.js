import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        category: ''
    },
    reducers: {
        getAllCategories: (state, action) => {
            // console.log(action.payload);
            state.category = action.payload
        }
    }
})

export const { getAllCategories } = categorySlice.actions;
export default categorySlice.reducer;