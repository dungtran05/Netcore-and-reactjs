  import React, {  useState } from 'react'
  import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';   
  import './signin.css' 
  import { FormGroup, FormLabel, FormText } from 'react-bootstrap';
  import { Link } from 'react-router-dom';
  import checkNullProperties from '../../checkNullProperties';
  import userApi from '../../api/userApi';
  import { Bounce, toast } from 'react-toastify';



  function SignIn() {

    const [user,setUser] = useState({
  
      Password:'',
      UserName:'',

    })
    const handleOnchange=(e)=>{
      const {name,value} = e.target;
      setUser({...user , [name] :value})
      }

    const handleClick = async ()=>{
      if(!checkNullProperties(user))
      {
        const res = await userApi.login(user);
        if(res.id!==0)
        {
         
          sessionStorage.setItem('isLogined',JSON.stringify(true))
          
          sessionStorage.setItem('user',JSON.stringify(res))
          window.location.href='/'
          
        }
        else
        {
          toast.error('Tài khoản hoặc mật khẩu không đúng !', {
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
      
      
      }
      else{
        toast.error('Vui lòng nhập đủ tài khoản và mật khẩu !', {
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
          
        
      }
     
    
    return (
      <Form className='form-login'>
      <FormLabel>ĐĂNG NHẬP</FormLabel>
      <Form.Group className="mb-3 w-50" controlId="formBasicUserName">
      
        <Form.Control type="text" placeholder="Tên đăng nhập" onChange={handleOnchange} name='UserName'/>
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
      
        <Form.Control type="password" placeholder="Mật khẩu" onChange={handleOnchange} name='Password' />
      </Form.Group>
      
      <Button variant="primary" onClick={handleClick}>
        Đăng nhập
      </Button>
      <FormGroup>
      <FormText className='footer-form'>
      <p>Chưa có tài khoản</p>
      <Link  to='/signup' className='signup-btn'> đăng kí</Link>
          </FormText>
      </FormGroup>
      
    </Form>
    
    )
  }

  export default SignIn
