import React, { useState } from 'react'
import Header from '../Component/Layout/Header'
import Shop from '../Component/Shop/Shop'
import Footer from '../Component/Layout/Footer'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import FilterSidebar from '../FilterSidebar/FilterSidebar'
function ShopPage() {
    let {search} = useParams()
    if(search==null)
    {
        search=''

    } 
    const [filters, setFilters] = useState([]);
    const [filterPrice,setFileterPrice]= useState([])
  const handleCheckboxChange = (e) => {
    const {  id, checked } = e.target;
    if (checked===true)
     {
      setFilters([...filters, id]);
      
      }
     else 
      {

        setFilters(filters.filter((filter) => filter !== id));
      }
  };
  const handleSubmit =()=>{
    const res = filters.map((item)=>(convertRangeToNumbers(item)));
    const arrFilter = res.map((item)=>(item))
    console.log(res);
    
  }
  const convertRangeToNumbers = (str) => {
    const [start, end] = str.split('-');
    return [parseInt(start), parseInt(end)];
  };
  return (
    <>  
        <Header></Header>
        <Container>
        <Row>
        <Col xs={3} >
            <FilterSidebar 
            handleCheckboxChange={handleCheckboxChange}
            handleSubmit={handleSubmit}
             />
        </Col>
          <Col xs={9}>
          <Shop search={search} filters={filters} />
          </Col>
        </Row>
        </Container>
        <Footer></Footer>
    </>
  )
}

export default ShopPage
