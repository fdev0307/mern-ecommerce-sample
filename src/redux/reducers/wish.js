import allProducts from "../../services/watches";

const initialState = {
  allProducts: allProducts,
  wish: [],
};

const ReduxWish = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_WISH":
     // const wishedPro = state.allProducts.filter((element) => element.isAddedToWishlist === false);
      const item = state.allProducts.find(
        (prod) => prod.id === action.payload.product.id
      );
      const inWish = state.wish.find((item) =>
        item.id === action.payload.product.id ? true : false
      );
      return {
        ...state,
        wish: inWish
          ? state.wish.map((item) =>
              item.id === action.payload.product.id
                ? ({...item, toCountWish: item.toCountWish},
                alert(
                    `${action.payload.product.name} is already in wish list`
                  )
                )
                : item
            )
          : (alert(
              `${action.payload.product.name} is added to wish successfuly`
            ),
            [
              ...state.wish,
              {
                ...item,
                isWished: {
                  dis: action.payload.button.setAttribute("disabled", "true"),
                  diss: action.payload.button.style.color = "red",
                },
                toCountWish: 1,
              },
            ]),
        //item is the same action.payload.product
      };
    case "DELETE_FROM_WISH":
      return {
        ...state,
        wish: state.wish.filter((element) => element.id !== action.payload),
      };
    default:
      return state;
  }
};

export default ReduxWish;
