import React from "react";
import "./../../scss/components/Products.scss"  
import { Link } from "react-router-dom";
export const ProductSlide = () => {
  return (
    <Link to="/iphones/iphone13">
      <div className="ProductSlide">
        <h3>Iphone 14 Pro Max</h3>
        <img src="/img/iphones14.jpg" alt="" />
      </div>
    </Link>
  );
};
