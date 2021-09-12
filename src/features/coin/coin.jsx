import React, {useEffect} from 'react';
import {useSelector, useDispatch, connect} from 'react-redux';
import './coin.css';
import {clearOrder, updateOrderType, updatePrice, updateQty, updateSymbol} from "./coinSlice";
import {addNewOrder} from "../orders/orderSlice";

export const CoinView = (props) => {
    const {coin = {}, coinTypes = []} = props;
    const {symbol, qty, price} = coin;

    useEffect(() => {
        if (coin.isValid) {
            props.addNewOrder(coin);
            props.clearOrder();
        }
    },[coin, props.addNewOrder, props.clearOrder])

    return (
        <div className={'coinFormContainer'}>
            <div className={'label'}>Coin</div>
            <select role={'select-coin-symbol'} value={symbol} onChange={(e) => props.updateSymbol(e.target.value)}>
                <option>Select</option>
                {coinTypes.map((coin, i) => {
                    return (
                        <option key={`coin-type-${i}`} value={coin.symbol}>{coin.symbol}</option>
                    )
                })}
            </select>
            <div>Order Qty</div>
            <input value={qty} placeholder={'Order Qty'} onChange={(e) => e.target.value && props.updateQty(parseFloat(e.target.value))}/>
            <div>Price / Coin</div>
            <input value={price} placeholder={'Price'} onChange={(e) => e.target.value && props.updatePrice(parseFloat(e.target.value))}/>
            <button className={'buy'} onClick={() => props.updateOrderType('BUY')}>BUY</button>
            <button className={'sell'} onClick={() => props.updateOrderType('SELL')}>SELL</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        coin: state.coin, // should be using selector here
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePrice: (value) => dispatch(updatePrice(value)),
        updateOrderType: (value) => dispatch(updateOrderType(value)),
        updateQty: value => dispatch(updateQty(value)),
        updateSymbol: value => dispatch(updateSymbol(value)),
        addNewOrder: order => dispatch(addNewOrder(order)),
        clearOrder: () => dispatch(clearOrder())
    }
}

// should be using compose here
const Coin = connect(mapStateToProps, mapDispatchToProps)(CoinView);
export {Coin};
