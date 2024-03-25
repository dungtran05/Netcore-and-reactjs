import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import logo from '../../assets/img/logo-signin-signup.png'
import   './cartheader.css'
function CartHeader() {
  return (
    <Container>
        <Row>
        <Col xs={1}>
            <Image src={logo} className='img-header-cart'></Image>
        </Col>
        <Col xs={4} className="title">
            <h3 >Giỏ Hàng</h3>
        </Col>      
                
        </Row>
    </Container>
  )
}

export default CartHeader
