import { createStore, combineReducers } from "redux";
import ReduxWishCounter from "./reducers/wishCounter";
import ReduxWish from "./reducers/wish";
import ReduxCartCounter from "./reducers/cartCounter";
import ReduxCart from "./reducers/cart";
import CartTotalPrice from "./reducers/cartTotal";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    rw: ReduxWish,
    rc: ReduxWishCounter,
    cc: ReduxCartCounter,
    rt: ReduxCart,
    ct: CartTotalPrice,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;