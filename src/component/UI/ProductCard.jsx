import React from 'react'
import productImg from "../../assets/images/arm-chair-01.jpg"
import {motion} from "framer-motion"
import "../../styles/product-card.css"
import {Col} from "reactstrap"

const ProductCard = () => {
  return (
    <Col lg="3" md="4">
        <div className="product_item">
            <div className="product_img">
                <img src={productImg} alt="" />
            </div>
            <div className="p-2">
                <div className="product_name">Toga Wisuda IPB Univesity</div>
                <div className="text-center">Toga</div>
            </div>
            <div className="product_card-bottom d-flex align-items-center
            justify-content-between">
                <span className="price">Rp180.000</span>
                <span><i class="ri-add-line"></i></span>
            </div>
        </div> 
    </Col>
  );
}

export default ProductCard