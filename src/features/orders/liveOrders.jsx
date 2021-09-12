import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import  './liveOrders.css';
import {cancelOrder} from "./orderSlice";

const LiveOrders = (props) => {
    const liveOrderState = useSelector((state) => state.orders);
    const {orders} = liveOrderState;

    return (
        <div className={'liveOrderDetailsContainer'}>
            <div className={'header'}>Live Order Detail</div>
            <span>BUY/SELL</span>
            <span>QTY</span>
            <span>SYMBOL</span>
            <span>PRICE</span>
            <span>USER</span>
            <span></span>
            <span></span>
            {orders && orders.map((o, i) => {
                return (
                    <OrderRow key={`order-detail-row-${i}`} order={o} index={i}></OrderRow>
                )
            })}
        </div>
    )
}

const OrderRow = (props) => {
    const {order = {}, index} = props;
    const dispatch = useDispatch();
    return (
        <>
            <span>{order.orderType}</span>
            <span>{order.qty}</span>
            <span>{order.symbol}</span>
            <span>{order.price}</span>
            <span>{order.userId}</span>
            <span>{<button>AMEND</button>}</span>
            <span>{<button onClick={() => dispatch(cancelOrder(index))}>CANCEL</button>}</span>
        </>
    )
}

export {LiveOrders};