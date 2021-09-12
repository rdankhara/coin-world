import {configureStore} from '@reduxjs/toolkit';
import {coinReducer} from '../features/coin/coinSlice';
import {orders} from "../features/orders/orderSlice";

export const appState = configureStore({
    reducer: {
        coin: coinReducer,
        orders,
    }
})