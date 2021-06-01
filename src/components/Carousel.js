import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function CarouselNew(){
    return (
        <Carousel fade>
            <Carousel.Item>
                <img className="d-block w-100" src="./assets/images/som4.jpg" alt="Image One" />
                <Carousel.Caption>
                    <h3>SOMESHWAR</h3>
                    <p>Switzerland of India</p>
                    <p>Images are subject to copyright - <a style={{color: "#fff"}} target="_blank" href="https://www.instagram.com/techwanderer.in">Source</a> </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="./assets/images/som2.jpg" alt="Image Two" /> 
                <Carousel.Caption>
                    <h3>KAUSANI</h3>
                    <p>A Beautifull Hill Station</p>
                    <p>Images are subject to copyright - <a style={{color: "#fff"}} target="_blank" href="https://www.instagram.com/techwanderer.in">Source</a></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="./assets/images/som.jpg" alt="Image Two" /> 
                <Carousel.Caption>
                    <h3>SOMESHWAR</h3>
                    <p>Switzerland of India</p>
                    <p>Images are subject to copyright - <a style={{color: "#fff"}} target="_blank" href="https://www.instagram.com/techwanderer.in">Source</a> </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselNew;