import React from 'react'
import {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import Helmet from '../component/Helmet/Helmet'
import "../styles/Home.css"
import { Container, Row, Col } from 'reactstrap'
import heroImg from "../assets/images/kaostrans.png"
import Services from '../services/Services'
import ProductList from '../component/UI/ProductList'
import products from "../assets/data/products"


const Home = () => {

  const [data, setData] = useState(products)
  const year = new Date().getFullYear()

  useEffect(()=>{
    const filterdProducts = products.filter(
      (item) => item.category === "kaos"
    );
    setData(filterdProducts);
  },[]);
  return <Helmet title={'Home'}>
    <section className="hero_section">
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="hero_content">
            <p className="hero_subtitle">
              Trending product {year}
            </p>
            <h2>Get Your Product Now</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Adipisci voluptatum ex quae delectus consequuntur officiis quidem voluptate rem quaerat, 
              quas molestiae non officia voluptas saepe eligendi alias reprehenderit. 
              Adipisci, sunt.
            </p>
            
            <motion.button whileHover={{scale : 1.2}}className="buy_btn">
              <Link to="shop">Shop Now</Link>
            </motion.button>
          </div>
        </Col>
        <Col lg="6" md="6">
          <div className="hero_img">
            <img src={heroImg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
    </section>
    <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2 className='section_title1'>Categories</h2>
          </Col>
        </Row>
      </Container>
    <Services />
    <section className="trending_products">
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2 className='section_title2'>Trending Products</h2>
          </Col>
          <ProductList data={data}/>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home