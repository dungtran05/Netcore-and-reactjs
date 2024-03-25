import React, { useState } from 'react'
import { Button, Col, Container, FormControl, FormGroup, Image, Nav, Row } from 'react-bootstrap'
import logo from '../../assets/img/logo-shopee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass ,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { Link } from 'react-router-dom'

import DropMenuAccount from '../DropMenuAccount/DropMenuAccount'

function Header() {
  const [searchString,setSearchString] = useState('') 
  const isLogined = JSON.parse(sessionStorage.getItem('isLogined'));
  const handleClick =()=>{
    window.location.href=`/shop/${searchString}`
  }
  const handleOnchange =(e)=>{
      setSearchString(e.target.value)
      
  }
  return (
    <div className="header text-white">
    <Container className='py-2 ' >
    <Row className='text-center '>
      <Col md={4}>
        <Row>
        
        <Nav className="me-auto" >
            <Nav.Link href="/" style={{ color: 'white' }}>Trang chủ</Nav.Link>
            <Nav.Link href="https://www.facebook.com/trandung.2005/" style={{ color: 'white' }}>Kết nối với chúng tôi</Nav.Link>
        </Nav>
    
        </Row>
      </Col>
      <Col xs={4}>

      </Col>
      <Col xs={4}>
        <Row>
        {!isLogined ? <Nav className="me-auto" >
            <Nav.Link href="/signup" style={{ color: 'white' }}>Đăng kí</Nav.Link>
            <Nav.Link href="/signin" style={{ color: 'white' }}>Đăng nhập</Nav.Link>
        </Nav> :
        <DropMenuAccount></DropMenuAccount>
        }
        
        </Row>
      </Col>

    </Row>
    <Row >
        <Col md={3}>
            <Image src={logo} className='img-fluid'>
            </Image>
        </Col>
        <Col md={6} className='d-flex align-items-center'>
        <FormGroup className='d-flex w-100 ' >
            <FormControl type='text' placeholder='Bạn đang cần tìm gì' width={'100%'} style={{ height: '50px' }} onChange={handleOnchange}>                                                                         
            </FormControl>
            <Button variant='warning' sz='lg'  className='btn-search' onClick={handleClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>          
        </FormGroup>

        </Col>
        <Col md={3} className='d-flex align-items-center '>
          <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} size='2x' className='icon-cart'/></Link>
        </Col>
    </Row>
   </Container>
   </div>
  )
}

export default Header
