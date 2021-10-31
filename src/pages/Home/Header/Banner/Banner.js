import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <Carousel  style={{marginTop:'80px'}} className="mb-5 pb-5">
        <Carousel.Item>
          <img
           style={{height:'450px'}}
            className="d-block w-100 "
            src="https://i.ibb.co/xY5wW38/thailand-1400x788-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption >
           <div className="pb-5 mb-5">
            <h2>What do you Want</h2>
            <h4 className="fw-bold fs-6">A journey of a thousand miles begins with a single step</h4>
            <h4 className="fw-bold fs-6">Let's do something for live a enjoyable life....</h4>
           </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          style={{height:'450px'}}
            className="d-block w-100"
            src="https://i.ibb.co/d4xTrKh/travel-hd-1366x768.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
          <div className="pb-5 mb-5">
            <h2>What do you Want</h2>
            <h4 className="fw-bold fs-6">A journey of a thousand miles begins with a single step</h4>
            <h4 className="fw-bold fs-6">Let's do something for live a enjoyable life....</h4>
           </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="postion-relative">
          <img
          style={{height:'450px'}}
            className="d-block w-100 position-relative"
            src="https://i.ibb.co/k3pB08s/photo-1575986767340-5d17ae767ab0.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <div className="pb-5 mb-5">
            <h2>What do you Want</h2>
            <h4 className="fw-bold fs-6">A journey of a thousand miles begins with a single step</h4>
            <h4 className="fw-bold fs-6">Let's do something for live a enjoyable life....</h4>
           </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;