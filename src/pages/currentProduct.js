import { connect, useDispatch } from "react-redux";
import { addToCart, adjustQuantity } from "../redux/reducers/cart-actios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ButtonGroup, Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import ReactStars from "react-rating-stars-component";

function CurrentProductPage({ currentItem, addToCart, adjustQuantity }) {
  const priceOld = {
    textDecorationLine: "line-through",
    color: "#afaaaa"
  };

  const dispatch = useDispatch();
  const handleToWish = (e, data) => {
    e.preventDefault();
    let btn = e.currentTarget;
    dispatch({ type: "ADD_TO_WISH", payload: { product: data, button: btn } });
  };

  /*const [inputQty, setinputQty] = useState(currentItem.qty);
  const onChangeQuantity = (event) => {
    event.preventDefault();
    let btn = event.currentTarget;
    setinputQty(parseInt(btn.value));
    adjustQuantity(currentItem.id, parseInt(btn.value));
    console.log(inputQty,"11");
    if (btn.value === btn.max) {
      alert("This is the last quantity for this product");
      /*let addCartBtn = btn.parentNode.children[2];
    addCartBtn.setAttribute("disabled", "true");
    addCartBtn.setAttribute("variant", "danger");
    addCartBtn.classList.remove("btn-dark");
    addCartBtn.classList.toggle("btn-danger");
    addCartBtn.innerHTML = "sold out";
    }
  };*/
  console.log(currentItem, "curr");
  return (
    <Container className="my-3">
      <Card className="border-0 position-relative flex-row">
        <img src={currentItem.src} height="500px" width="400px" alt="" />
        <Card.Body className="w-50 text-left mt-5">
          <Card.Title>{currentItem.name}</Card.Title>
          <ReactStars
            count={5}
            size={24}
            color="gray"
            a11y={true}
            edit={true}
            isHalf="true"
            value={currentItem.rating}
            activeColor="#ffd700"
          />
          <hr></hr>
          <Card.Text className="price-new mb-0">{currentItem.price}#</Card.Text>
          <Card.Text className="price-old" style={priceOld}>
            {!currentItem.oldPrice ? "" : currentItem.oldPrice}
          </Card.Text>
          <hr></hr>
          <Card.Text>{currentItem.description}</Card.Text>
          <ButtonGroup className="mt-5 btnGroup d-flex justify-content-center mb-3 position-absolute">
            <Button
              variant="dark"
              className="wish me-3"
              size="sm"
              id={currentItem.id}
              name={currentItem.name}
              onClick={(e) => handleToWish(e, currentItem)}
              disabled={currentItem.isAddedToWishlist}
            >
              <Icon.Heart
                color={currentItem.isAddedToWishlist === true ? "red" : "white"}
              ></Icon.Heart>
            </Button>
            <Button
              variant="dark"
              size="sm"
              onClick={(e) => addToCart(e, currentItem, currentItem.id)}
            >
              Add To Cart
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

const mapStatetoProps = (state) => {
  return {
    currentItem: state.rCart.currentItem
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addToCart: (e, product, id) => dispatch(addToCart(e, product, id)),
    adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value))
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(CurrentProductPage);

/*<span>
              Qty
              <input
                className="ms-2"
                type="number"
                id="qty"
                name="qty"
                min="1"
                max={currentItem.maxQuantity}
                step="1"
                value={inputQty}
                onChange={onChangeQuantity}
              />
            </span>*/
