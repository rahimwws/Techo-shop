import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addProduct } from "../../redux/CartSlice";

export const Detail = () => {

  const dispatch = useDispatch()
  const product = useRef([]);
  const { id } = useParams();
  // const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [Btn, setBtn] = useState(true);
  const url = "http://192.168.89.13:8000/api/product/";
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, [setProducts]);
  // products.forEach((element)=>{
  //   if(element.id == id){
  //     console.log(element)
  //     setProduct(element)
  //   }
  // })
  for (let el of products) {
    if (el.id == id) {
      product.current = el;
    }
  }
  const handleClick = () => {
    const item = {
      "name":product.current.name,
      "image":product.current.image,
      "price":parseInt(product.current.price),
      "id":product.current.id
      // product.current.name,product.current.image,product.current.price
    }
    dispatch(addProduct(item))
    setBtn(!Btn)
  };
  return (
    <div className="Detail">
      <img src={product.current.image} alt="" />
      <div className="detail-text">
        <h2>{product.current.name}</h2>
        <p>{product.current.description_ru}</p>
        <div className="price">
          {" "}
          <h3> {parseInt(product.current.price)} TMT </h3>
          {Btn ? (
            <button onClick={() => handleClick()}>Добавить</button>
          ) : (
            <Link to="/basket">
              <button>Добавлено</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
