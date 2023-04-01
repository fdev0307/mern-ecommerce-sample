import "../../style.css";
import { Col, Container, Row } from "react-bootstrap";
import { FooterLink } from "../footer/style";
import { EnvelopeFill, HeartFill, PhoneFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

function TopHeader({ cart }) {
  //const wishTotal = useRecoilState(wishState);
  const wish = useSelector((state) => state.rw.wish);
  const [CartCounter, setCartCounter] = useState(0);
  const [WishCounter, setWishCounter] = useState(0);

  useEffect(() => {
    let cartCount = 0;
    cart.forEach((item) => {
      cartCount += item.qty;
    });
    setCartCounter(cartCount);
    let wishCount = 0;
    wish.forEach((item) => {
      wishCount += item.toCountWish;
    });
    setWishCounter(wishCount);
  }, [cart, CartCounter, wish, WishCounter]);

  return (
    <section className="header-top bg-black text-white p-2 sticky-top">
      <Container>
        <Row>
          <Col className="text-start">
            <FooterLink className="me-5">
              <EnvelopeFill className="me-2"></EnvelopeFill>
              sam_ug@yahoo.com
            </FooterLink>
            <FooterLink>
              <PhoneFill className="me-2"></PhoneFill>
              09070314423
            </FooterLink>
          </Col>
          <Col className="text-end">
            <Link className="me-5 FooterLink text-white" to="/wishList">
              <FooterLink>
                <HeartFill className="me-2"></HeartFill>
                Wish List
                <span className="ms-1">({WishCounter})</span>
              </FooterLink>
            </Link>
            <Link className="me-5 FooterLink text-white" to="/shoppingCart">
              <FooterLink>
                <HeartFill className="me-2"></HeartFill>
                Shopping Cart
                <span className="ms-1">({CartCounter})</span>
              </FooterLink>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.rCart.cart,
  };
};

export default connect(mapStateToProps)(TopHeader);
