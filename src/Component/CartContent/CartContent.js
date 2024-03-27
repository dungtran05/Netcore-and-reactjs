import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import product from'../../assets/img/product-1.jpg'
import './cartcontent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
function CartContent() {
    const user =JSON.parse( sessionStorage.getItem('user'));
    const [listCart,setListCart] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://localhost:7214/getallcart/${user.id}`);
            setListCart(response.data||[]);
            
          } catch (error) {
            console.error('Error fetching data:', error);
            // Xử lý lỗi khi không thể tải dữ liệu từ API
          }
        };
    
        fetchData();
      }, [user]);
      const handleClick =  async (cartId,userId)=>{
        
        try {
            const res = await axios.delete(`https://localhost:7214/${cartId}/${userId}`);
            setListCart(res.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }

      }
     const handleIncrease = async (cartId,userId)=>{
        try {
            const res = await axios.put(`https://localhost:7214/api/Users/increasecart?cartid=${cartId}&userid=${userId}`)
            setListCart(res.data)
        } catch (error) {
            console.log(error);
        }
     }
     const handleDecrease = async (cartId,userId)=>{
        try {
            
            const res = await axios.put(`https://localhost:7214/api/Users/decreasecart?cartid=${cartId}&userid=${userId}`)
            setListCart(res.data)
        } catch (error) {
            console.log(error);
        }
     }
     const [totalPrice,setTotalPrice]=useState(0);
     useEffect(() => {
        let totalPriceValue = 0;
        listCart.forEach(item => {
            totalPriceValue += item.product.price * item.quantity;
        });
        setTotalPrice(totalPriceValue);
    }, [listCart]);

  return (
    <Container>
    {   listCart.length > 0 ? 
    
        listCart.map((item)=>(
        
        <Row className='cart-item mb-5 mt-5' key={item.id}>
            <Col xs={3}>
                <Row >
                    <Col xs={4} className='cart'>
                        <Image src={product} className='img-cart-item'></Image>
                    </Col>
                    <Col xs={8} className='item-name'>
                        <p>Áo sơ mi</p>
                    </Col>
                </Row>
            </Col>
            <Col xs={3} className='price-item'>
                <p>Đơn giá : ${item.product.price}</p>
            </Col>
            <Col xs={3} className='quantity-item'>
            <Button onClick={()=>handleDecrease(item.id,user.id)} className='decrease mx-3'><FontAwesomeIcon icon={faMinus} style={{width:'100%'}}/></Button>
                    <input value={item.quantity} className='input-count'></input>
                    <Button onClick={()=>handleIncrease(item.id,user.id)} className='increase mx-3'><FontAwesomeIcon icon={faPlus} style={{width:'100%'}} /></Button>
            </Col>
            <Col xs={3} className='delete-item'>
            <Button className='delete-btn' variant='secondary' onClick={()=>handleClick(item.id,user.id)} ><FontAwesomeIcon icon={faX} /></Button>
            </Col>
        </Row>
            
    ))
     : 
     <p>Vui lòng quay lại để mua thêm sản phẩm</p>
     
     } 

        
    
        
        <Row >
            <Col>
            
                <Link to='/' ><Button variant='secondary' className='btn-comeback' >Quay lại</Button></Link>
            
            </Col>
            <Col xs={3}>
                <h6>Tổng cộng : </h6>
            </Col>
            <Col xs={4}>
                    <Row className='cart-pay' >
                        <Col className='total-price'> 
                            <p style={{color:"#EE4D2D"}}>${totalPrice}</p>
                        </Col>
                        <Col>
                            <Button variant='danger'>Thanh toán</Button>
                        </Col>
                        
                    </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default CartContent
