import React, { Component } from "react";
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import Carousel from "react-bootstrap/Carousel";
import NavBar from "./NavBar";
import Search from "./search";

class Caraousel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="head-container">
        <NavBar />
        <Carousel controls={false} indicators={false}>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 myclass"
              src={one}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>
                Until one has loved an animal, a part of one’s soul remains
                unawakened.
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 myclass"
              src={two}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1>
                Animals are such agreeable friends—they ask no questions; they
                pass no criticisms.
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 myclass"
              src={three}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>An animal’s eyes have the power to speak a great language</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Search />
      </div>
    );
  }
}

export default Caraousel;
