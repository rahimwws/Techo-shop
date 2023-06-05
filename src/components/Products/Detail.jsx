import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BasketItems } from "../../utils/basket";

export const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState();
  const [Btn, setBtn] = useState(true);
  const [BtnText, setBtnText] = useState("Добавить в корзину");
  const url = `https://dummyjson.com/products/${id}`;
  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
      setImages(response.data.images[0]);
    });
  }, []);
  // console.log(product);
  const handleClick = () => {
    BasketItems.push([product.title, images, product.price, product.id]);
    setBtn(false);
  };
  return (
    <div className="Detail">
      <img src={images} alt="" />
      <div className="detail-text">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3> {product.price} TMT </h3>
        {Btn ? (
          <button onClick={() => handleClick(product.id)}>{BtnText}</button>
        ) : (
          <Link to="/basket">
            <button>Добавлено</button>
          </Link>
        )}
      </div>
    </div>
  );
};
