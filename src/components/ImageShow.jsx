import React from "react";
import Carousel from "react-bootstrap/Carousel";
import car8 from "../assets/car8.jpg";

import car7 from "../assets/car7.jpg";
import car6 from "../assets/car6.jpg";

export const ImageShow = () => {
  return (
    <>
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            src={car6}
            alt="Mercedes"
            style={{ width: "100%", height: "400px" }}
          />
          <Carousel.Caption>
            <h3>Mercedes Benz</h3>
            <p>The best or nothing.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={car8}
            alt="Bentley"
            style={{ width: "100%", height: "400px" }}
          />
          <Carousel.Caption>
            <h3>Bentley</h3>
            <p>To build a fast car, a good car, the best in its class</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={car7}
            alt="Subaru"
            style={{ width: "100%", height: "400px" }}
          />
          <Carousel.Caption>
            <h3>Subaru</h3>
            <p>Love is now bigger than ever.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
