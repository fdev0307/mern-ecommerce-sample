const initialState = {
    WishCounter : 0,
};

const ReduxWishCounter = (state = initialState, action) => {
switch (action.type) {
    case "INCREMENT_WISH_COUNTER":
        return { ...state, WishCounter: state.WishCounter + 1 };
    default:
        return state;
}
};

export default ReduxWishCounter;