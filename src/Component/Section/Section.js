import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slide from '../../assets/img/slide.jpg'
import './section.css'

import axios from 'axios';
function Section() {
    
     const [imageData, setImageData] = useState('');

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await axios.get('https://localhost:7214/product-1.jpg', { responseType: 'blob' });
        const imageUrl = URL.createObjectURL(response.data);
        setImageData(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    getImage();
  }, []);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
  return (
    <Container className='my-3'>
    <h3>DANH MỤC</h3>
    <Carousel responsive={responsive} className='mt-5' >
    {Array(4).fill(null).map((item, index) => (
    <div key={index} className='item-section'>
        <img src={imageData} alt={`Điện thoại ${index}`} className='img-section' />
        <p>Điện thoại</p>
    </div>
))}

    <div className='item-section'>
        <img src={imageData} alt="" className='img-section '/>
        <p>Điện thoại</p>
    </div>
    <div className='item-section'>
    <img src={slide} alt="" className='img-section '/>
        <p>Điện thoại</p>
    </div>
    <div className='item-section'>
        <img src={slide} alt="" className='img-section '/>
        <p>Điện thoại</p>
    </div>
    <div className='item-section'>
        <img src={slide} alt="" className='img-section '/>
        <p>Điện thoại</p>
    </div>
    <div className='item-section'>
        <img src={slide} alt="" className='img-section '/>
        <p>Điện thoại</p>
    </div>
    <div className='item-section'>
        <img src={slide} alt="" className='img-section '/>
        <p>Điện thoại</p>
    </div>
    <div className='item-section'>
        <img src={slide} alt="" className='img-section '/>
        <p>Điện thoại</p>
    </div>
    <div className='item-section'>
        <img src={slide} alt="" className='img-section '/>
        <p>Điện thoại</p>
    </div>
    <div className='item-section'>
        <img src={slide} alt="" className='img-section '/>
        <p>Điện thoại</p>
    </div>
    <div className='item-section'>
        <img src={slide} alt="" className='img-section '/>
        <p>Điện thoại</p>
    </div>
  </Carousel>
  </Container>
  )
}

export default Section
