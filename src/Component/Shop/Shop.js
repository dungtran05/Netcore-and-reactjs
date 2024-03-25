import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartProduct from '../CardProduct/CartProduct'

import axios from 'axios';

function Shop({search}) {
    const [productlist,setproductlist]=useState([])
    console.log(search);
    useEffect( () => 
     {

        const fetchProduct= async() =>{
            if(search!=='')
            {
            const res = await axios.get(`https://localhost:7214/seach/${search}`)
            setproductlist(res.data)
            }
            else
            {
                const res = await axios.get('https://localhost:7214/api/Products')
                setproductlist(res.data)
            }
        }
        fetchProduct()
      }, [search]);
  return (
    <Container>
        <Row className='px-3 py-3'>
        {productlist.map((item,index)=>(
        <Col xs={3} key={index}>
            <CartProduct product={item} ></CartProduct>
        </Col>
    ))} 
        </Row>
    </Container>
  )
}

export default Shop
