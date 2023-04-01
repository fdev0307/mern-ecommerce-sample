import { atom, selector } from "recoil";

export const wishState = atom({
    key: "wishState",
    default: 0,
});

export const wishList = atom({
    key: "wishList",
    default: [],
});

export const wishSelector = selector({
   key: "wishSelector",
   get: ({ get }) => {
const wish = get(wishList);
   
switch (wishList) {
    case 'Add_To_Wish':
      return [...wish];
    default:
      return wishList;
  }

},
});