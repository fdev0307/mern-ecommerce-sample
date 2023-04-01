import React from "react";
import MainSlider from "../components/MainSlider/index";
import Types from "../components/classifications";
import ProductTabs from "../components/productSliderTabs";
import Brandslogo from "../components/brandsLogo/index";
import ClientCarousel from "../components/clientCarousel/index";
import ProductCard from "../components/productSlider";
import allProducts from "../services/watches";

function Home(props) {

  return (
      <div>
        <MainSlider />
        <Types />
        <ProductTabs />
        <Brandslogo />
        <ProductCard slides={allProducts} />
        <ClientCarousel />
      </div>
  );

}

export default Home;
