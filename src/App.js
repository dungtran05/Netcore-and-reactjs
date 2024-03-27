import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Cart from './Page/Cart';
import Details from './Page/Details';
import Home from './Page/Home';
import SignInPage from './Page/SignInPage';
import SignUpPage from './Page/SignUpPage';
import ShopPage from './Page/ShopPage';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/shop/:search' element={<ShopPage />} />
            <Route path='/shop' element={<ShopPage search='' />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
