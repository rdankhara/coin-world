import {Coin} from "../coin/coin";
import {getCoinTypes} from "../../service/coinService";
import {OrderSummary} from "../orders/orderSummary";
import {LiveOrders} from "../orders/liveOrders";
import {connect} from "react-redux";

export function CoinBoardView(props) {
    return (
        <div className={'coinBoardContainer'}>
            <Coin coinTypes={getCoinTypes()} />
            <OrderSummary/>
            <LiveOrders/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        coinTypes: getCoinTypes()
    })
}

export const CoinBoard = connect(mapStateToProps)(CoinBoardView);
