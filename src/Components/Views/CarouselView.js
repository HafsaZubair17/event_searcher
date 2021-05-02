import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../Styles/Carousel.scss";


//Carousel Under the Header
const Carousels=()=>{

    return(
        <div className="carousel-container">
        <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/carousel1.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Are you ready to party?</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/carousel2.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Missing you favourite artists?</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/carousel3.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Search your favourite arstist's event now!</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Carousels;