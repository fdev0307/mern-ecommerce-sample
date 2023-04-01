import { Container } from "react-bootstrap";
import Carousel from "../../../node_modules/react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import "./style.css";
import "./../MainSlider/style.css";
import ProductCardElement from "./utility";
import { ProductsResponsive } from "../../services/responsive";
import { useDispatch, connect } from "react-redux";
import { useEffect } from "react";
import { loadProducts } from "../../redux/reducers/cart-actios";

function ProductCard(props) {
  let slidess = props.slides;
  let loadProducts = props.loadProducts;
  const dispatch = useDispatch();

  const handleToWish = (e, data) => {
    e.preventDefault();
    let btn = e.currentTarget;
    dispatch({ type: "ADD_TO_WISH", payload: { product: data, button: btn } });
    data.isAddedToWishlist = true;
   /* if(data.isAddedToWishlist === true) {
      btn.setAttribute("disabled", "true");
      btn.style.color = "red";
    }*/
  }

  useEffect(() => {
    loadProducts(slidess);
    const wishedProducts = slidess.filter((element) => element.isAddedToWishlist === true);
    console.log(wishedProducts);
  }, [loadProducts, slidess]);

  return (
    <div className="productSlider mb-5 mt-5">
      <Container>
        <h5 className="text-left mb-4 ms-4">FEATURED PRODUCTS</h5>
        <Carousel controls="false" responsive={ProductsResponsive}>
          {slidess.map((slide) => (
            <ProductCardElement slidePro={slide} clickWish={handleToWish} />
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

const mapDispatchtoProps = (dispatch) => {
  return {
    loadProducts: (products) => dispatch(loadProducts(products)),
  };
};

export default connect(null, mapDispatchtoProps)(ProductCard);
