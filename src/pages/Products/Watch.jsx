import React, { useEffect, useRef, useState } from "react";
import { Card } from "../../components/Products/Card";
import { ProductSlide } from "../../components/Products/ProductSlide";
import "./../../scss/components/Products.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductImg from "./../../assets/img/watch.jpg"

// import { product } from "../../utils/API";
export const Watch = () => {
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
    if(el.category == 5 ){
      category.current.push(el)
    }
  })
  return (
    <div className="Catalog">
      <ProductSlide
        imgMobile={ProductImg}
        imgDesktop={ProductImg}
        text="Apple Watch"
        width = "10%"
        link = "/watch"
      />
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
