import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { faInstagram,faLinkedin,faFacebook } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <Container bg='white'>
      <Row>
        <Col className='footer-link-1'>
        <h5>CHĂM SÓC KHÁCH HÀNG</h5>
        <Link href="#home"  className='mb-1 link-footer'>Trung Tâm Trợ Giúp</Link>
        <Link href="#link"  className='mb-1 link-footer'>Thanh Toán</Link>
        <Link href="#home"  className='mb-1 link-footer'>Shopee Xu</Link>
        <Link href="#home"  className='mb-1 link-footer'>Trả Hàng & Hoàn Tiền</Link>
        <Link href="#home"  className='mb-1 link-footer'>Chăm Sóc Khách Hàng</Link>
        <Link href="#home"  className='mb-1 link-footer'>Chính Sách Bảo Hành</Link>
        <Link href="#home"  className='mb-1 link-footer'>Shopee Mall</Link>
        </Col>
        <Col className='footer-link-1'>
        <h5>VỀ CHÚNG TÔI</h5>
        <Link href="#home" className='mb-1 link-footer'>Giới Thiệu Về Shopee Việt Nam</Link>
        <Link href="#home" className='mb-1 link-footer'>Tuyển Dụng</Link>
        <Link href="#home" className='mb-1 link-footer'>Chính Sách Bảo Mật</Link>
        <Link href="#home" className='mb-1 link-footer'>Chính Hãng</Link>
        <Link href="#home" className='mb-1 link-footer'>Kênh Người Bán</Link>
        <Link href="#home" className='mb-1 link-footer'>Flash Sales</Link>
        <Link href="#home" className='mb-1 link-footer'>Liên Hệ Với Truyền Thông</Link>
        </Col>
        <Col className='footer-link-1'>
          <h5>THEO DÕI CHÚNG TÔI TRÊN</h5>
          <Link href="#home" className='mb-1 link-footer'>
          <span>
          <FontAwesomeIcon icon={faFacebook} />
          </span> 
          Facebook
          </Link>
          <Link href="#home" className='mb-1 link-footer'>
          <span>
          <FontAwesomeIcon icon={faInstagram} />
          </span> 
          Instagram
          </Link>
          <Link href="#home" className='mb-1 link-footer'>
          <span>
          <FontAwesomeIcon icon={faLinkedin} />
          </span> 
          LinkedIn
          </Link>
          
        </Col>
        
      </Row>
    </Container>
  )
}

export default Footer
