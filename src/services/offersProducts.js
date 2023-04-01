import pizza1 from "../images/pizza.jpg";
import pizza2 from "../images/pizza.jpg";
import pizza3 from "../images/pizza.jpg";
import pizza4 from "../images/pizza.jpg";
import pizza5 from "../images/pizza.jpg";

//import { apiKey } from "../config";
//const url = `https://watchmode.p.rapidapi.com/sources/?apiKey=${apiKey}&limit=${limit}`;
// return fetch(url);

const offersPro = [
  {
    id: 1,
    src: pizza1,
    name: "pizza1",
    price: 300,
    oldPrice: 420,
    rating: 4,
    qty: 1,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false
  },
  {
    id: 2,
    src: pizza2,
    name: "product2",
    price: 400,
    oldPrice: 470,
    rating: 3,
    qty: 1,
    maxQuantity: 2,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false
  },
  {
    id: 3,
    src: pizza3,
    name: "pizza",
    price: 370,
    oldPrice: 410,
    rating: 3.5,
    qty: 1,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false
  },
  {
    id: 4,
    src: pizza4,
    name: "pizza",
    price: 500,
    oldPrice: 540,
    rating: 4.5,
    qty: 1,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false
  },
  {
    id: 5,
    src: pizza5,
    name: "pizza",
    price: 250,
    oldPrice: 300,
    rating: 5,
    qty: 1,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false
  }
];

export default offersPro;
