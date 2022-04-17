import React from 'react';
import { Carousel } from 'react-bootstrap';
import carosel01 from './images/carosel01.png'
import carosel02 from './images/carosel02.png'
import carosel03 from './images/carosel03.png'

const Banner = () => {
    return (
        <div className='container-md mb-5 mt-1'>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={carosel01}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carosel02}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carosel03}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;