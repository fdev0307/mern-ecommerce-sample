import "../../src/style.css";
import { Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductTrElement from "../components/productSlider/tableUtility";

function WishListPage(props) {
  //const AllWishList = useRecoilValue(wishSelector);
  // const wishh = useRecoilState(wishList);

  const productsInWish = useSelector((state) => state.rw.wish);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsInWish.length === 0) {
      let wishShow = document.querySelector(".wishShow");
      let table = document.querySelector("Table");
      table.style.display = "none";
      wishShow.innerHTML += "No Products in wish list";
    }
  }, [productsInWish]);

  const DeleteFromWish = (e, data) => {
    e.preventDefault();
    dispatch({ type: "DELETE_FROM_WISH", payload: data.id });
  };

  return (
    <div className="productSlider mb-5 mt-5">
      <Container>
        <h5 className="text-left mb-4">Wish Products</h5>
        <div className="col-12 wishShow">
          <Table bordered hover responsive="sm">
            <thead>
              <tr>
                <th>Product Img</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productsInWish.map((slide) => (
                <ProductTrElement
                  product={slide}
                  isWish={true}
                  isCart={false}
                  deleteFromWish={DeleteFromWish}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default WishListPage;
