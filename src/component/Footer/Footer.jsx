import React from 'react';
import "./footer.css";

import logo from "../../assets/images/logo.png"

import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="4" className='mb-4' md="6">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <p className='footer_text mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repudiandae, dignissimos amet dolore aperiam temporibus consequatur fuga perferendis.
                    Corporis, itaque architecto.
                  </p>
              
          </Col>
          <Col lg="3" md="3" className='mb-4'>
            <div className='footer_quick-links'>
              <h4 className="quick_links-title">
                Top Categories
              </h4>
              <ListGroup className='footer-list mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Mobile Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className='mb-4'>
          <div className='footer_quick-links'>
              <h4 className="quick_links-title">
                Useful Links
              </h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
          <div className='footer_quick-links'>
              <h4 className="quick_links-title">
                Contact
              </h4>
              <ListGroup className='footer_contact'>
                <ListGroupItem className='ps-0 border-0 d-flex
                align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Jl. Babak Fakultas No.34, RT.5/RW.05, Tegallega, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16129</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex
                align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>0878-7354-7779</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex
                align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  <p>ipbstore@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className='footer_copyright'>Copyright {year} developed by RPL Kelompok 7 P2</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer