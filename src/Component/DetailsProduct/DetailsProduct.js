import React, { useCallback, useEffect, useState } from 'react'

import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'
import   './detailsproduct.css'
import productImg from '../../assets/img/product-1.jpg'
import axios from 'axios'
import { Bounce, toast } from 'react-toastify'
function DetailsProduct({id}) {
    const[count,setCount]=useState(1);
    const user = JSON.parse(sessionStorage.getItem('user'))||null
    console.log(user)
   
    const handleClick = async  () =>
    {
        if(user!==null)
        {
        try {
            const response = await axios.post('https://localhost:7214/addcarttouser', {
                userId :user.id||0,
                productId : id,
                quantity: count
        
            });
            console.log(response.data); 
          } catch (error) {
            console.error('Error adding cart:', error);
            // Xử lý lỗi khi gọi API không thành công
          }
          toast.success('Đã thêm thành công vui lòng kiểm tra giỏ hàng', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
        else{
            window.location.href='/signin'
        }
    }
   
    const decrease = useCallback(() => {
        setCount((prevCount) => prevCount > 0 ? prevCount - 1 : 0);
    }, []); // Dependency array is empty to ensure the callback is memoized

    const increase = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const [product,setProduct] = useState({});
        useEffect(()=>{
            const fetchProduct =async() =>{
               
                try {
                    const res = await axios.get(`https://localhost:7214/api/Products/${id}`)
                    setProduct(res.data);
                } catch (error) {
                    
                }
                
            }
            fetchProduct()

    },[id])
    const handleChange = useCallback((e) => {
        const inputValue = parseInt(e.target.value);
        if (!isNaN(inputValue)) {
            setCount(inputValue);
        }
    }, []);
    
  return (
   
    <div>

    <Container className='mt-4'>
        <Row>
            <Col className='img-details-product'>
                <Image src={productImg}></Image>
            </Col>
            <Col>
            <Row className='mb-3 product-title'>
                <h5>{product.name}</h5>
            </Row>
            <Row>
                <p className='price'>${product.price}</p>
            </Row>
            <Row className='product-description'>
                <p>-  Đeo Công sở, đi chơi, dạo phố, dự tiệc đều tạo một phong cách đầy cá tính lịch lãm, sang trọng. Hoặc bạn có thể dùng làm món quà tặng anh, em, bạn bè đồng nghiệp trong các dịp sự kiện, sinh nhật đều rất đẹp và ý nghĩa.
                <br/>
- Không chỉ là một trong những vật dụng thiết yếu, mà kiểu dáng, màu sắc của chiếc Thắt Lưng Nam Cao Cấp da thật phong cách thời thượng được lựa chọn cũng góp phần giúp phái mạnh khẳng định đẳng cấp và sự sành điệu của mình.  Sự tinh tế, vẻ đẹp sang trọng và cá tính của các sản phẩm sẽ khiến bạn hài lòng. Hãy lựa chọn cho mình một kiểu thật ưng ý và diện cùng với bộ trang phục “tông xuyệt tông”, chắc chắn sản phẩm đeo trên người sẽ là điểm nhấn tạo phong cách của bạn với người đối diện.
Đơn giản, ít cầu kì, nhưng vẫn trẻ trung, lịch sự và sang trọng là những ưu điểm nổi bật của những mẫu Thắt Lưng Nam Cao Cấp. </p>
            </Row>
            <Row className='product-count'>
                <Col xs={4}>Số lượng</Col>
                <Col xs={8}>
                    <Button variant='dark' className='decrease mx-3' onClick={decrease}><FontAwesomeIcon icon={faMinus} style={{width:'100%'}}/></Button>
                    <input
                        value={count}
                        onChange={handleChange}
                        className='input-count'
                    ></input>
                    <Button variant='dark' className='increase mx-3' onClick={increase}><FontAwesomeIcon icon={faPlus} style={{width:'100%'}} /></Button>
                </Col>
            </Row>
            <Row className='btn-details'>
            <Col xs={6}> <Button  type='submit' className='btn-details-icon ' onClick={handleClick} 
            style={{backgroundColor:'#fff',color:' #EE4D2D',border:'1px solid #EE4D2D'}}
            >
                <FontAwesomeIcon icon={faCartShopping} />
                Thêm vào giỏ hàng
                </Button></Col>              
            </Row>
            </Col>
        </Row>
        
    </Container>
    </div>
   
  )
}

export default DetailsProduct
