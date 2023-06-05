import React, { useEffect, useState } from "react";
import { Card } from "../../components/Products/Card";
import { ProductSlide } from "../../components/Products/ProductSlide";
import "./../../scss/components/Products.scss";
import axios from "axios";
import { Link } from "react-router-dom";
// import { product } from "../../utils/API";
export const Iphones = () => {
  const [Products, setProducts] = useState([]);
  const url = "https://dummyjson.com/products";
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, [setProducts]);

  return (
    <div className="Catalog">
      <ProductSlide />
      <h2>Which iPhone is right for you?</h2>
      <div className="products-container">
        {Products.map((product,key) => {
          return (
            <Link to={`/iphones/${product.id}`}>
              <Card
                title={product.title}
                img={product.images[0]}
                price={product.price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
