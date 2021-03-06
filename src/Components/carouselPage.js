import React from "react";
import "./carouselPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import cc1 from "../Assets/anne.jpg";
import cc3 from "../Assets/casa-de-anne-frank.jpg"
import cc4 from "../Assets/museu.jpg"

export default function CarouselPage(){
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block img"
                src={cc1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block img"
                src={cc3}
                alt="Second slide"
                />
            </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block img"
                src={cc4}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}