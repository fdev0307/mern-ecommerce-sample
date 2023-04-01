import { createStore, combineReducers } from "redux";
import ReduxWish from "./reducers/wish";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cart-reducer";

const rootReducer = combineReducers({
  rw: ReduxWish,
  rCart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
