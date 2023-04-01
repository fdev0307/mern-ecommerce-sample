import "./style.css";
import { Container, Table, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import ProductTrElement from "../components/productSlider/tableUtility";

function CartListPage(props) {

  let cart = props.cart;
  
  const [subTotalPrice, setsubTotalPrice] = useState(0);
  const [tax, setTax] = useState(2);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price += item.qty * item.price;
    });
    setsubTotalPrice(price);
    setTotalPrice(price + tax);
    if (cart.length === 0) {
      setTax(0);
      let cartShow = document.querySelector(".cartShow");
      let table = document.querySelector("Table");
      table.style.display = "none";
      cartShow.innerHTML += "No Products in cart list";
    }
  }, [cart, totalPrice, setTotalPrice, tax, setTax]);


  return (
    <div className="productSlider mb-5 mt-5">
      <Container>
        <h5 className="text-left mb-4 ps-2">Cart List</h5>
        <Row>
          <div className="col-9 cartShow">
            <Table bordered hover responsive="sm">
              <thead>
                <tr>
                  <th>Product Img</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Sub Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, idx) => (
                  <ProductTrElement
                    product={product}
                    isWish={false}
                    isCart={true}
                  />
                ))}
              </tbody>
            </Table>
          </div>
          <div className="col-3 cartSum boxShadaw bg-light p-4">
            <h5 className="text-left mb-4 pb-2">Cart Price</h5>
            <div className="d-flex justify-content-between mb-3">
              <h6 className="fw-normal">Tax :</h6>
              <span>{tax}#</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <h6 className="fw-normal">SubTotal Price :</h6>
              <span>{subTotalPrice}#</span>
            </div>
            <div className="d-flex justify-content-between fw-bold">
              <h6>Total Price :</h6>
              <span>{totalPrice}#</span>
            </div>
            <Button variant="dark" size="md" className="mt-4 w-100">
              pay now
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.rCart.cart,
  };
};

export default connect(mapStateToProps)(CartListPage);
