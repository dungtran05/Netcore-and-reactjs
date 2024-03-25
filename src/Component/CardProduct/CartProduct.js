import React from 'react'

import Card from 'react-bootstrap/Card';
import slide from '../../assets/img/slide.jpg'
import { Link  } from 'react-router-dom';
function CartProduct({product}) {

 
  return (
    <Card style={{ width: '18rem' }} className='px-3 py-2'>
      <Card.Img variant="top" src={slide} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.price}
        </Card.Text>
      
        <Link to={`/details/${product.id}`} className="btn btn-primary">Xem chi tiết</Link>
        
      </Card.Body>
    </Card>
  
  )
}

export default CartProduct
