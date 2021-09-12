import {coinReducer, updateOrderType, updatePrice, updateQty, updateSymbol} from "../../../features/coin/coinSlice";

describe('coin order', () => {
    describe('when initialised', () => {
        let initialState;
        beforeEach( () => {
            initialState = coinReducer(undefined, {});
        });
        it('should have numeric userId', () => {
            const {userId} = initialState;
            expect(isNaN(userId)).toBe(false);
        });
        it('should be in invalid state', () => {
            const {isValid} = initialState;
            expect(isValid).toBe(false);
        });
        it('should not have values for symbol, qty, price and orderType', () => {
            const {price, qty, symbol, orderType} = initialState;
            expect(symbol).toBe('');
            expect(qty).toBe(0);
            expect(price).toBe(0);
            expect(orderType).toBe('');
        })
    });
    describe('Actions', () => {
        const previousState = coinReducer(undefined, {});

        it('updates symbol in coin order when dispatched updateSymbol', () => {
            const nextState = coinReducer(previousState, updateSymbol('ETH'));
            expect(nextState.symbol).toBe('ETH');
        })

        it('updates qty in coin order when dispatched updateQty', () => {
            const nextState = coinReducer(previousState, updateQty(10));
            expect(nextState.qty).toBe(10);
        })

        it('updates price in coin order when dispatched updatePrice', () => {
            const nextState = coinReducer(previousState, updatePrice(250));
            expect(nextState.price).toBe(250);
        })

        it('updates price in coin orderType when dispatched updateOrderType', () => {
            const nextState = coinReducer(previousState, updateOrderType('BUY'));
            expect(nextState.orderType).toBe('BUY');
        })
    })
});
