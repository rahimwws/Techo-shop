import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BasketItems } from "../../utils/basket";

export const Detail = () => {
  const product = useRef([])
  const { id } = useParams();
  // const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [Btn, setBtn] = useState(true);
  const url = "http://192.168.31.142:8000/api/product/"
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    axios.get(url).then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  }, [setProducts]);
  console.log(products);
  // products.forEach((element)=>{
  //   if(element.id == id){
  //     console.log(element)
  //     setProduct(element)
  //   }
  // })
  for(let el of products){
    if(el.id == id){
      product.current = el
    }
  }
  console.log(product.current);
  const handleClick = () => {
    BasketItems.push([product.current.name, product.current.image, product.current.price, product.current.id]);
    setBtn(false);
  };
  return (
    <div className="Detail">
      <img src={product.current.image} alt="" />
      <div className="detail-text">
        <h2>{product.current.name}</h2>
        <p>{product.current.description}</p>
        <h3> {parseInt( product.current.price)} TMT </h3>
        {Btn ? (
          <button onClick={() => handleClick(product.id)}>Добавить</button>
        ) : (
          <Link to="/basket">
            <button>Добавлено</button>
          </Link>
        )}
      </div>
    </div>
  );
};
