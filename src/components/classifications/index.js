import pizza1 from "../../images/pizza.jpg";
import pizza2 from "../../images/pizza.jpg";
import pizza3 from "../../images/pizza.jpg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./style.css";

function Types() {
  const images = [pizza1, pizza2, pizza3];

  return (
    <section className="watchesTypes">
      <Container className="p-5">
        <div className="d-flex justify-content-around">
          <Link to="/">
            <img src={images[0]} className="img-fluid" alt="" />
          </Link>
          <Link to="/">
            <img src={images[1]} className="img-fluid" alt="" />
          </Link>
          <Link to="/">
            <img src={images[2]} className="img-fluid" alt="" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Types;
