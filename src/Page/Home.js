import React from 'react'
import Header from '../Component/Layout/Header'
import Slide from '../Component/Slide/Slide'
import Section from '../Component/Section/Section'
import ListProduct from '../Component/ListProduct/ListProduct'
import Footer from '../Component/Layout/Footer'


function Home() {
  
  return (
    <div>
    
      <Header></Header>
      <Slide></Slide>
      <Section></Section>
      <ListProduct></ListProduct>
      <Footer></Footer>
    </div>
  )
}

export default Home
