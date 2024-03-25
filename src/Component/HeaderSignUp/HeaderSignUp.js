import React from 'react'
import logo from '../../assets/img/logo-shopee-sgin-up.jpg'
import { Col, Container, Image, NavLink, Row } from 'react-bootstrap'
import './headersignup.css'
function HeaderSignUp() {
  return (
    <Container >
        <Row className='header-sign-up'>
            <Col xs={3} className='text-left'>
            
                <Image src={logo} className='img-header-sign-up' >
                </Image>
                <NavLink href='/'>Trang chủ</NavLink>
                
            </Col>
            <Col xs={6}>

            </Col>
            <Col xs={{order:'last'}} className='text-right'>
                Bạn cần sự trợ giúp
            </Col>
        </Row>
    </Container>
  )
}

export default HeaderSignUp
