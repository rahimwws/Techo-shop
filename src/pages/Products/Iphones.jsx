import React, { useEffect, useRef, useState } from "react";
import { Card } from "../../components/Products/Card";
import { ProductSlide } from "../../components/Products/ProductSlide";
import "./../../scss/components/Products.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductImg1 from "../../assets/img/iphone 14 on mobile.jpg"
import ProductImg2 from "../../assets/img/iphones14.jpg"
// import { product } from "../../utils/API";
export const Iphones = () => {
  const category = useRef([])
  const [Products, setProducts] = useState([]);
  const url = "http://192.168.89.13:8000/api/product/"
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, [setProducts]);
  Products.map((el)=>{
    if(el.category == 1 ){
      category.current.push(el)
    }
  })
  return (
    <div className="Catalog">
      <ProductSlide imgMobile = {ProductImg1} imgDesktop = {ProductImg2} text = "Iphone 14 Pro Max" width = "50%" link = '/iphones/'/>
      <h2>Which iPhone is right for you?</h2>
      <div className="products-container">
        {category.current.map((product,key) => {
          return (
            <Link to={`/iphones/${product.id}`}>
              <Card
                title={product.name}
                img={product.image}
                price={parseInt(product.price)}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
