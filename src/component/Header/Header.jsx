import React from 'react'

import { NavLink } from 'react-router-dom';
import "./header.css"
import { Container, Row } from 'reactstrap';
import logo from "../../assets/images/logo.png"
import user_icon from "../../assets/images/user-icon.png"
import {motion} from 'framer-motion'

const nav_links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },
]

const Header = () => {
  return <header className="header">
    <Container>
        <Row>
            <div className="nav_wrapper">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="navigation">
                <ul className='menu'>  
                    {
                        nav_links.map((item, index) => (
                        <li className="nav_item" key={index}>
                        <NavLink 
                            to={item.path} 
                            className={(NavClass) => 
                                NavClass.isActive ? "nav_active" : ""
                            }
                        >
                            {item.display}
                            </NavLink>
                        </li>
                        ))
                    }
                </ul>
                </div>
                <div className="nav_icons">
                    <span className="fav_icon">
                        <i class="ri-heart-line"></i>
                        <span className="badge">1</span>
                    </span>
                    <span className="cart_icon">
                        <i class="ri-shopping-cart-line"></i>
                        <span className="badge">1</span>
                    </span> 
                    <span>
                        <motion.img whileTap={{scale:1.1}} src={user_icon} alt="user" />
                    </span>
                </div>

                <div className="mobile_menu">
                    <span>
                        <i class="ri-menu-line"></i>
                    </span>
                </div>
                
            </div>
        </Row>
    </Container>
  </header>
}

export default Header