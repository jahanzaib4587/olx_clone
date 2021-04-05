import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel_demo.css";
function Carousal_demo() {
  return (
    <div className="carousel_main col-lg-6 col-md-8 col-sm-10 col-xs-12 ">
      <Carousel className="mt-3 ">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/44/ce/2c/44ce2cfa6267fde44790205135a78051.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/44/ce/2c/44ce2cfa6267fde44790205135a78051.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/44/ce/2c/44ce2cfa6267fde44790205135a78051.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousal_demo;
