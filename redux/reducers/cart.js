const initialState = {
    cart: [],
    qty: 1,
  };
  
  const ReduxCart = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, action.payload] }; 
      case "ADJUST_QUANTITY":
      return { 
        ...state,
        cart: state.cart.map((product) => 
         product.id === action.payload.id 
        ? {...product, qty: action.payload.qty }
        : product 
        ),
      }; 
      case "DELETE_FROM_CART":
        return { ...state, cart: state.cart.filter((product) => product.id !== action.payload)};
      default:
        return state;
    }
  };
  
  export default ReduxCart;
  