import React from 'react'
import {BrowserRouter as  Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';

import './App.css';
import Cart from './Page/Cart';
import Details from './Page/Details';
import Home from './Page/Home';
import SignInPage from './Page/SignInPage';
import SignUpPage from './Page/SignUpPage';

import { ToastContainer } from 'react-toastify';
import ShopPage from './Page/ShopPage';
function App() {
  return (
    <>

   
    <div className='App' >
     <BrowserRouter>
      <Routes>  
        <Route  path='/' exact  element={<Home></Home>} ></Route>
        <Route path='/cart' exact  element={<Cart></Cart>}></Route>
        <Route path='/details/:id' exact  element={<Details ></Details>}></Route>
        <Route path='/signup' exact  element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/signin' exact  element={<SignInPage></SignInPage>}></Route>
        <Route path='/shop/:search' exact  element={<ShopPage></ShopPage>}></Route>
        <Route path='/shop' element={<ShopPage search="" />}></Route>
      </Routes>
    </BrowserRouter> 
    </div>
    <ToastContainer />
    </>
  );
}

export default App;
