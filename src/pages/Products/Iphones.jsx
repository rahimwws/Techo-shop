import React, { useEffect, useState } from "react";
import { Card } from "../../components/Products/Card";
import { ProductSlide } from "../../components/Products/ProductSlide";
import "./../../scss/components/Products.scss";
import axios from "axios";
// import { product } from "../../utils/API";
export const Iphones = () => {
  const url = "http://127.0.0.1:8000/api/product/";
  const [Products, setProducts] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      response.json()
      console.log(response);
      setProducts(response.data);
    });
  }, []);
  console.log(Products);
  return (
    <div className="Catalog">
      <ProductSlide />
      <h2>Which iPhone is right for you?</h2>
      <div className="products-container">
        <Card />
      </div>
    </div>
  );
};
