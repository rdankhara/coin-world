import {createSlice} from '@reduxjs/toolkit'

const createInitialState = () => ({
    userId: Math.floor(Math.random() * 100),
    symbol: '',
    qty: 0,
    price: 0,
    orderType: '',
    isValid: false
});

export const coinSlice = createSlice({
    name: 'coin',
    initialState: createInitialState(),
    reducers: {
        updateSymbol: (state, action) => {
            state.symbol = action.payload;
        },
        updateQty: (state, action) => {
            state.qty = action.payload;
        },
        updatePrice: (state, action) => {
            state.price = action.payload;
        },
        updateOrderType: (state, action) => {
            state.orderType = action.payload;
            updateValidity(state);
        },
        clearOrder: (state) => {
            console.log('clearOrder');
            Object.assign(state, createInitialState());
        }
    }
});
const updateValidity = (state) => {
    if (state.userId && state.qty && state.price && state.orderType) {
        state.isValid = true;
    } else {
        state.isValid = false;
    }
}
export const {updateSymbol, updateQty, updatePrice, updateOrderType, clearOrder} = coinSlice.actions;
export const coinReducer = coinSlice.reducer;