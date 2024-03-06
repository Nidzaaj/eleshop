import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalProducts: 0,
        totalPrice: 0
    },
    reducers: {
        saveInCartHandler: (state, action) => {
            let copyArray = [...state.cart];
            let findIndex = copyArray.findIndex(item => item.id === action.payload.id);

            if (findIndex === -1) {
                let count = action.payload.count || 1;
                copyArray.push({ ...action.payload, count, cartTotal: action.payload.price });
                state.totalPrice += action.payload.price;
                state.totalProducts++;
            } else {
                copyArray[findIndex].count++;
                copyArray[findIndex].cartTotal += action.payload.price;
                state.totalPrice += action.payload.price;
            }

            state.cart = copyArray;
        },
        setPriceHandler: (state, action) => {
            const { increment, index } = action.payload;
            let copyArray = [...state.cart];

            copyArray[index].cartTotal += copyArray[index].price * increment;
            copyArray[index].count += increment;
            state.totalPrice += copyArray[index].price * increment;

            if (copyArray[index].count === 0) {
                copyArray.splice(index, 1);
                state.totalProducts--;
            }

            state.cart = copyArray;
        },

        removeProductHandler: (state, action) => {
            let { index } = action.payload;
            let copyArray = [...state.cart];

            state.totalPrice -= copyArray[action.payload].price;
            copyArray.splice(index, 1);
            state.totalProducts--;

            state.cart = copyArray;
        }
    }
});

export const { saveInCartHandler, setPriceHandler, removeProductHandler } = cartSlice.actions;
export default cartSlice.reducer;