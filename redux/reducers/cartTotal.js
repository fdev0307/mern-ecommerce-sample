const initialState = {
  cartTotal: 0,
  subTotal: 0,
 // newSubTotal: 0,
  qty: 1,
};

const CartTotalPrice = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART_SUB_TOTAL":
      return { ...state, subTotal: state.subTotal + action.payload };
    case "ADD_TO_CART_TOTAL":
      return { ...state, cartTotal: state.subTotal };
      case "ADJUST_QUANTITY":
        return { 
          ...state,
          cart: state.cart.map((product) => 
           product.id === action.payload.id 
          ? {...product, qty: action.payload.qty }
          : product 
          ),
        }; 
   /* case "NEW_ADD_TO_CART_TOTAL":
    case "ADD_TO_CART_SUB_TOTAL":
      return { ...state, subTotal: state.subTotal + action.payload };
    case "NEW_ADD_TO_SUB_TOTAL":
        return { ...state, newSubTotal: state.newSubTotal + action.payload };
    case "ADD_TO_CART_TOTAL":
      return { ...state, cartTotal: state.subTotal };
    case "NEW_ADD_TO_CART_TOTAL":
        return { ...state, cartTotal: state.subTotal + state.newSubTotal };*/
    case "DELETE_FROM_CART_TOTAL":
      return { ...state, cartTotal: state.cartTotal - action.payload };
    default:
      return state;
  }
};
console.log(initialState.qty);
export default CartTotalPrice;
