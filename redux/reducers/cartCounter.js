const initialState = {
  CartCounter: 0,
};

const ReduxCartCounter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_CART_COUNTER":
      return { ...state, CartCounter: state.CartCounter + 1 };
    default:
      return state;
  }
};

export default ReduxCartCounter;
