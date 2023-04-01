import React from "react";
import { ButtonGroup } from "react-bootstrap";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "./style.css";
import "./../MainSlider/style.css";
import { connect } from "react-redux";
import { addToCart, LoadCurrentItem } from "../../redux/reducers/cart-actios";

function ProductCardElement(props) {
  const ClickWish = props.clickWish;
  const addToCart = props.addToCart;
  const LoadCurrentItem = props.LoadCurrentItem;

  return (
    <div className="text-center" key={props.slidePro.id}>
      <Card className="border-0 position-relative">
        <Link to={`/product/${props.slidePro.id}`}>
          <Card.Img
            variant="top"
            src={props.slidePro.src}
            onClick={() => LoadCurrentItem(props.slidePro)}
          />
        </Link>
        <ButtonGroup className="btnGroup d-flex justify-content-center mb-3 position-absolute">
          <Button
            variant="dark"
            className="wish"
            size="sm"
            id={props.slidePro.id}
            name={props.slidePro.name}
            onClick={(e) => ClickWish(e, props.slidePro)}
            disabled={props.slidePro.isAddedToWishlist}
          >
            <Icon.Heart
              color={
                props.slidePro.isAddedToWishlist === true ? "red" : "white"
              }
            ></Icon.Heart>
          </Button>
          <Button
            variant="dark"
            size="sm"
            onClick={(e) => addToCart(e, props.slidePro, props.slidePro.id)}
          >
            Add to Cart
          </Button>
          <Link to={`/product/${props.slidePro.id}`}>
            <Button
              variant="dark"
              size="sm"
              onClick={() => LoadCurrentItem(props.slidePro)}
            >
              <Icon.Eye></Icon.Eye>
            </Button>
          </Link>
        </ButtonGroup>
        <Card.Body>
          <Link to={`/product/${props.slidePro.id}`}>
            <Card.Title onClick={() => LoadCurrentItem(props.slidePro)}>
              {props.slidePro.name}
            </Card.Title>
          </Link>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start align-items-center">
              <Card.Text className="price-new mb-0">
                {props.slidePro.price}$
              </Card.Text>
              <Card.Text className="price-old">
                {!props.slidePro.oldPrice ? "" : props.slidePro.oldPrice}
              </Card.Text>
            </div>
            <ReactStars
              count={5}
              size={24}
              color="gray"
              a11y={true}
              edit={true}
              isHalf="true"
              value={props.slidePro.rating}
              activeColor="#ffd700"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapDispatchtoProps = (dispatch) => {
  return {
    addToCart: (e, product, id) => dispatch(addToCart(e, product, id)),
    LoadCurrentItem: (product) => dispatch(LoadCurrentItem(product)),
  };
};

export default connect(null, mapDispatchtoProps)(ProductCardElement);
