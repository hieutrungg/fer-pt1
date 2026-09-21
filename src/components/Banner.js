import React from "react";
import { Carousel } from "react-bootstrap";

export default function Banner() {
  return (
    <div className="bg-dark text-white" style={{ paddingBottom: "100px" }}>
      <div>
        <Carousel>
          <Carousel.Item>
            <Carousel.Caption>
              <h1>FASHION COLLECTION 2026</h1>
              <h4>Discovering the lastest fashion trend for 2026</h4>
            </Carousel.Caption>
            <img
              src='Images/banner1.jpg'
              alt="First slide"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h1>SUMMER SALE UP TO 50%</h1>
              <h3>Enjoy special discount on selected products</h3>
            </Carousel.Caption>
            <img
              src="Images/banner3.jpg"
              alt="Second slide"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h1>NEW ARRIVALS</h1>
              <h3>Explore our newest clothing collection</h3>
            </Carousel.Caption>
            <img
              src="Images/banner2.jpg"
              alt="Third slide"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
