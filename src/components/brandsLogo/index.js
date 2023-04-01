import "./style.css";
import { Container } from "react-bootstrap";
import Carousel from "../../../node_modules/react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { Brands } from "../../services/brandsLogo";
import { BrandsResponsive } from "../../services/brandsResponsive";

const Brandslogo = () => {

  return (
    <section className="BrandslogoSec boxShadaw ">
      <Container className="p-5">
        <Carousel responsive={BrandsResponsive}>
          {Brands.map(brand => (
          <div className="text-center" key={brand.id}>
            <Link to="/">
              <img alt="" className="img-fluid" src={brand.src} />
            </Link>
          </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Brandslogo;
