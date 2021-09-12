import React from 'react';
import {connect, useSelector} from "react-redux";
import './orderSummary.css';

const OrderSummaryView = (props) => {
    const {orders} = props;
    console.log('orderSummary', orders);
    return (
        <div className={'orderSummaryContainer'}>
            <div className={'summaryHeader'}>Live Board</div>
            <span>BUY/SELL</span>
            <span>QTY</span>
            <span>SYMBOL</span>
            <span>PRICE</span>
            {orders && orders.map((order, i)=> <OrderLine key={`order-line-${i}`} order={order} />) }
        </div>
    );
}

const OrderLine = (props) => {
    const {orderType, qty, symbol, price} = props.order;
    return (
        <>
            <span>{orderType}</span>
            <span>{qty}</span>
            <span>{symbol}</span>
            <span>{price}</span>
        </>
    );
};

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return ({
        orders: state.orders.orderSummary
    })
};
const mapDispatchToProps = (dispatch) => {
    return ({

    });
}
const OrderSummary = connect(mapStateToProps, mapDispatchToProps)(OrderSummaryView);
// exporting order Summary just for testing purpose
export {OrderSummary, OrderSummaryView};