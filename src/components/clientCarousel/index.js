import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import "./style.css";
import "./../MainSlider/style.css";
import ugo1 from "../navbar/ugo.jpg";
import ugo2 from "../navbar/ugo.jpg";
import ugo3 from "../navbar/ugo.jpg";

const ClientCarousel = () => {
  return (
    <div className="testimonial p-5">
      <Container className="p-5">
        <Carousel controls="false">
          <Carousel.Item>
            <Carousel.Caption className="position-relative mb-4 mt-4">
              <img alt="" src={ugo1} className="img-fluid mb-3 border-50" />
              <h5 className="text-dark">Sam Ugonna</h5>
              <span className="text-secondary">Software Developer</span>
              <p className="text-dark mt-3">
                Rem ipsum doLoremRem ipsum doLorem ipsum ut labore et dolore ma
                ipsum ut labore et dolore Rem ipsum doLorem ipsum ut labore et
                dolore mamagna.Lorem ipsum doLorem ipsum dolor sit amet,
                consectetur adipisicing.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption className="position-relative mb-4 mt-4">
              <img alt="" src={ugo2} className="img-fluid mb-3 border-50" />
              <h5 className="text-dark">Sam Ugonna</h5>
              <span className="text-secondary">Web Designer</span>
              <p className="text-dark mt-3">
                Rem ipsum doLoremRem ipsum doLorem ipsum ut labore et dolore ma
                ipsum ut labore et dolore Rem ipsum doLorem ipsum ut labore et
                dolore mamagna.Lorem ipsum doLorem ipsum dolor sit amet,
                consectetur adipisicing.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption className="position-relative mb-4 mt-4">
              <img alt="" src={ugo3} className="img-fluid mb-3 border-50" />
              <h5 className="text-dark">Sam Ugonna</h5>
              <span className="text-secondary">Web Developer</span>
              <p className="text-dark mt-3">
                Rem ipsum doLoremRem ipsum doLorem ipsum ut labore et dolore ma
                ipsum ut labore et dolore Rem ipsum doLorem ipsum ut labore et
                dolore mamagna.Lorem ipsum doLorem ipsum dolor sit amet,
                consectetur adipisicing.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default ClientCarousel;
