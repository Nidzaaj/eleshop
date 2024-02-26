import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalProducts: 0,
        totalPrice: 0
    },
    reducers: {
        saveInCartHandler: (state, action) => {
            console.log(action.payload);
            let copyArray = [...state.cart];
            let findIndex = null;

            copyArray.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index;
                    return;
                }
            })

            if (findIndex === null) {
                copyArray.push({ ...action.payload, count: 1, cartTotal: action.payload.price })  //*fix ako postoji count uzmi njega a ako ne neka bude 1
                state.totalPrice += action.payload.price;
                state.totalProducts++;
            } else {
                copyArray[findIndex].count++;
            }
            state.cart = copyArray;
        },
        setPriceHandler: (state, action) => {
            const { increment, index } = action.payload;
            let copyArray = [...state.cart];

            copyArray[index].cartTotal += copyArray[index].price * increment;
            state.totalPrice = subTotal(copyArray);
            if (copyArray[index].count === 1 && increment === -1) {
                copyArray.splice(index, 1);
                state.totalProducts--;
            } else {
                copyArray[index].count += increment;
            }
            state.cart = copyArray;
        },

        removeProductHandler: (state, action) => {
            let { index } = action.payload;
            let copyArray = [...state.cart];

            copyArray.splice(index, 1);
            state.totalProducts--;
            state.totalPrice = subTotal(copyArray);
            state.cart = copyArray;
        }
    }
})

function subTotal(arrayCart) {
    return arrayCart.reduce((acc, current) => {
        return acc + current.cartTotal;
    }, 0)
}



export const { saveInCartHandler, setPriceHandler, removeProductHandler } = cartSlice.actions;
export default cartSlice.reducer;