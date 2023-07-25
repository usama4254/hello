import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../src/image.js/download (1).png";
import img2 from "../src/image.js/download (2).png";
import img3 from "../src/image.js/download (3).png";
import img4 from "../src/image.js/download (4).png";
import img5 from "../src/image.js/download (5).png";

const MyCarousel = () => {
  return (
    <Carousel controls={false} indicators={false} interval={1000} >
      <Carousel.Item >
        <img src={img1} className="d-block w-100" alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} className="d-block w-100" alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} className="d-block w-100" alt="Slide 3" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img4} className="d-block w-100" alt="Slide 4" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img5} className="d-block w-100" alt="Slide 5" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
