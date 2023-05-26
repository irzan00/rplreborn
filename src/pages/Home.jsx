import React, {useState, useEffect}from 'react'
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import products from "../assets/data/products"
import Helmet from '../component/Helmet/Helmet'
import "../styles/Home.css"
import { Container, Row, Col } from 'reactstrap'
import heroImg from "../assets/images/kaostrans.png"
import Services from '../services/Services'
import ProductList from '../component/UI/ProductList'
import Clock from '../component/UI/Clock'


import counterImg from '../assets/images/counter-timer-img.png'


const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear()

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category ==='pakaian'
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category ==='alat tulis'
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category ==='aksesoris'
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category ==='produk ipb'
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category ==='makanan'
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
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
            <h2 className='section_title3'>Trending Products</h2>
          </Col>
          <ProductList data={trendingProducts} />
        </Row>
      </Container>
    </section>

    <section className="best_sales">
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2 className='section_title2'>Best Sales</h2>
          </Col>
          <ProductList data={bestSalesProducts}/>
        </Row>
      </Container>
    </section>

    <section className="timer_count">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count_down-col'>
            <div className="clock_top-content">
              <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
              <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
            </div>
            <Clock/>
            <motion.button whileHover={{scale: 1.2}}className='buy_btn store_btn'>
              <Link to='/shop'>Visit Store</Link>
            </motion.button>
          </Col>
          <Col lg='6' md='12' className='text-end counter_img'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className='new_arrivals'>
      <Container>
        <Row>
          <Col lg="12" className='text-center mb-5'>
            <h2 className='section_title'>New Arrivals</h2>
          </Col>
          <ProductList data={mobileProducts} />
          <ProductList data={wirelessProducts} />
        </Row>
      </Container>
    </section>

    <section className="popular_category">
    <Container>
        <Row>
          <Col lg="12" className='text-center mb-5'>
            <h2 className='section_title'>Popular Category</h2>
          </Col>
          <ProductList data={popularProducts} />
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home