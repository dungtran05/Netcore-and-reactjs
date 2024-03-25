import React from 'react'
import Header from '../Component/Layout/Header'
import DetailsProduct from '../Component/DetailsProduct/DetailsProduct'
import Footer from '../Component/Layout/Footer'
import { useParams } from 'react-router-dom'

function Details( ) {
  const {id} = useParams();
  return (
    <div>
          <Header></Header>
      <DetailsProduct id={id}></DetailsProduct>
      <Footer></Footer>
    </div>
  )
}

export default Details
