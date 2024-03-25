import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import logo from '../../assets/img/logo-signin-signup.png'
import SignUp from '../SignUp/SignUp'
function SignUpAccount() {
  return (
    <Container fluid style={{backgroundColor:'#EE4D2D' , marginBottom:'30px'}}>
        
        <Row>
            <Col>
                <img src={logo} alt='' className='d-block w-100' style={{height:'600px',width:'auto'}}>

                </img>
            </Col>
            <Col>
                <SignUp></SignUp>
            </Col>
        </Row>
    </Container>
  )
}

export default SignUpAccount
