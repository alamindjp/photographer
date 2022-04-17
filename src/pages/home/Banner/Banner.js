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
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carosel02}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-warning mb-0'>Professional</h3>
                        <p className='text-info fw-bolder fs-5 mb-0'>photoshooter</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carosel03}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-warning'>Professional</h3>
                        <p className='text-primary fw-bolder fs-5'>photographer</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;