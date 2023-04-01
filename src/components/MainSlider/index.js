import pizza1 from "../../images/pizza.jpg";
import pizza2 from "../../images/pizza.jpg";
import pizza3 from "../../images/pizza.jpg";
import { Link } from "react-router-dom";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";

const MainSlider = () => {
  const images = [
    {
      id: 1,
      src: pizza1,
      alt: "First Slide"
    },
    {
      id: 2,
      src: pizza2,
      alt: "Second Slide"
    },
    {
      id: 3,
      src: pizza3,
      alt: "Third Slide"
    }
  ];

  return (
    <Carousel controls="true">
      {images.map((imageSlide) => (
        <Carousel.Item key={imageSlide.id}>
          <Link to="/">
            <img
              src={imageSlide.src}
              className="img-fluid w-100"
              alt={imageSlide.alt}
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainSlider;
