
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SignIn from '../SginIn/SignIn'
import logo from '../../assets/img/logo-signin-signup.png'
function SignInAccount() {
  return (
    <div>
       <Container fluid style={{backgroundColor:'#EE4D2D' , marginBottom:'30px'}}>
        
        <Row>
            <Col>
                <img src={logo} alt='' className='d-block w-100' style={{height:'600px',width:'auto'}}>

                </img>
            </Col>
            <Col>
                <SignIn></SignIn>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default SignInAccount
