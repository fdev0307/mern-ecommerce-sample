const initialState = {
    wish: [],
  };
  
  const ReduxWish = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_WISH":
        return { ...state, wish: [...state.wish, action.payload] }; 
      case "DELETE_FROM_WISH":
        return { ...state, wish: state.wish.filter((element) => element.id !== action.payload)};
      default:
        return state;
    }
  };
  
  export default ReduxWish;
  