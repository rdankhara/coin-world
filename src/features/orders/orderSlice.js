import {createSlice} from '@reduxjs/toolkit';

const createInitialState = () => ({
    orders: [],
    orderSummary: []
});

export const createOrderSummary = (orders) => {
    const map = orders?.reduce((prev, current) => {
        const key = `${current.symbol}-${current.price}-${current.orderType}`;
        if (prev.has(key)) {
            const existing = prev.get(key);
            existing.qty += current.qty;
        } else {
            const copy = {...current};
            delete ({...copy}).userId
            prev.set(key, copy);
        }
        return prev;
    }, new Map());

    return [...map.values()];
};

export const orderSlice = createSlice({
    name: 'liveOrders',
    initialState: createInitialState(),
    reducers: {
        addNewOrder: (state, action) => {
            state.orders.push(action.payload);
            state.orderSummary = createOrderSummary(state.orders);
        },
        cancelOrder: (state, action) => {
            const {orders} = state;
            const updatedDetails = [...orders.slice(0, action.payload), ...orders.slice(action.payload + 1)];
            const orderSummary = createOrderSummary(updatedDetails);
            state.orders = updatedDetails;
            state.orderSummary = orderSummary;
        }
    }
});

export const {addNewOrder, cancelOrder} = orderSlice.actions;
export const orders = orderSlice.reducer;