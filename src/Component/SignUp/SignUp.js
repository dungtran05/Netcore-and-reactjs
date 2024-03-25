import React, { useState } from 'react'
import { Button, Col, Form, FormControl, FormGroup, FormLabel, FormText, InputGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import userApi from '../../api/userApi';
import { Bounce, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './signup.css'
import checkNullProperties from '../../checkNullProperties';
import axios from 'axios';

function SignUp() {
  
    const [user,setUser] = useState({
      FirstName:'',
      LastName:'',
      UserName:'',
      Password:'',
    })
    const [isShowPassword,setIsShowPassword]=useState(false)
    const handleOnchange=(e)=>{
        const {name,value} = e.target;
        setUser({...user , [name] :value})

        }
    const handleSubmit =  async(event) => {
    
      event.preventDefault();
      event.stopPropagation();
      if( !checkNullProperties(user))
      {
        const res = await axios.post('https://localhost:7214/SignUp',user)
        toast.success('Bạn đã đăng kí thành công !', {
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
          console.log(res);
      }
      else
      {
        toast.error('Vui lòng nhập đủ thông tin !', {
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
      
      
   
    
  };
  return (
   <Form>
        <Row className='mb-3' style={{paddingTop:'20%'}}> 
            <FormGroup as={Col} controlId='validationcustom01'>
                <FormLabel>Họ</FormLabel>
                <FormControl
                    required 
                    type='text'
                    onChange={handleOnchange}
                    name='FirstName'
                />
            </FormGroup>
            <FormGroup as={Col} controlId='validationcustom02'>
                <FormLabel>Tên</FormLabel>
                <FormControl
                    required 
                    type='text'
                    onChange={handleOnchange}
                    name='LastName'
                />
            </FormGroup>
        </Row>
        <Row className='mb-3'>
        <Form.Group as={Col} md={7} controlId="validationCustomUsername">
          <Form.Label>Tên đăng nhập</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              onChange={handleOnchange}
              name='UserName'
            />
            <Form.Control.Feedback type="invalid">
              Vui lòng điền tên đăng nhập
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
        <Row className='mb-3 form-password '>
        <Form.Group as={Col} md={7} controlId="validationCustomPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
            <Form.Control
              type={isShowPassword ? "text" : "password"}
              placeholder="Password"
              aria-describedby="inputGroupPrepend"
              required
              onChange={handleOnchange}
              name='Password'
            />
          </InputGroup>
        </Form.Group>
        <div className='icon-showpassword'>
        <FontAwesomeIcon icon={isShowPassword ? faEyeSlash :faEye }  onClick={()=>setIsShowPassword(!isShowPassword)}/>
        </div>
        
        </Row>


        <Button type="submit" onClick={handleSubmit}>Đăng kí</Button>
        <Row>
        <FormText className='footer-form'>
    <p>Đã có tài khoản</p>
    <Link  to='/signin' className='signup-btn'> đăng nhập</Link>
        </FormText>
        </Row>
        
   </Form>
  )
}

export default SignUp
