import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './dropmenuaccount.css'

function DropMenuAccount() {
    

    const handleClicl= ()=>{
        sessionStorage.setItem('isLogined',JSON.stringify(false))
        sessionStorage.removeItem('user')
        window.location.href='/ '
    }
  return (
   
     <Dropdown>
       <Dropdown.Toggle variant="success" id="dropdown-basic">
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        dungtran
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className='nav-drop' >Thông tin tài khoản</Dropdown.Item>
        <Dropdown.Item className='nav-drop' onClick={handleClicl}> Đăng xuất</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
   
  )
}

export default DropMenuAccount
