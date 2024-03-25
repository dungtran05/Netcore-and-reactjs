import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import slide from '../../assets/img/slide.jpg'
import slide2 from '../../assets/img/slide-2.png'
import slide3 from '../../assets/img/slide-3.jpg'
import './slide.css'
function Slide() {
  return (
    <Container className='py-4'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={slide}
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={slide2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={slide3}   
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default Slide
