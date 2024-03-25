import React, { useEffect, useState } from 'react'
import CartProduct from '../CardProduct/CartProduct'
import { Col, Container, Row } from 'react-bootstrap'
import productApi from '../../api/productApi'
import { Link } from 'react-router-dom'

function ListProduct() {
    const [productlist,setproductlist]=useState([])
    useEffect( () => 
     {

        const fetchProduct= async() =>{
            
           setproductlist(await productApi.getAll())
        }
        fetchProduct()
      }, []);
    
    
  return (
   <Container>
    <Row className='px-3 py-3'>

     {productlist.map((item,index)=>(
        <Col xs={3} key={index}>
            <CartProduct product={item} ></CartProduct>
        </Col>
    ))} 
    </Row>
    <Row>
        <Col></Col>
        <Col>
            <Link to='/shop/' className='btn btn-secondary'>Xem tất cả sản phẩm </Link>
        </Col>
        <Col></Col>
    </Row>
   
   </Container>
  )
}

export default ListProduct
