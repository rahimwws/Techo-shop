import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./../scss/basket.scss";

import { useSelector,useDispatch } from "react-redux";
import { removeProduct } from "../redux/CartSlice";

export const Basket = () => {
  const dispatch = useDispatch()
  const { items, totalPrice} = useSelector(state=>state.cart)
  const HandleClick = (id)=>{
    dispatch(removeProduct(id))
  }

  
  return (
    <>
      {items.length == 0 && (
        <div className="BasketNoItems" key={1}>
          <img src="/img/basket.png" alt="" width="300px" />
          <h2>Корзина пуста</h2>
          <p>Но это никогда не поздно исправить :)</p>
          <Link to="/">
            <button>В каталог товаров</button>
          </Link>
        </div>
      )}
      {items.length != 0 && (
        <div className="Basket">
          <div className="basket-products">
            {items.map((item) => {
              
              return (
                <div className="basket-item">
                  <img src={item.image} alt="" width="300px" />
                  <div className="basket-text">
                    <h2> {item.name} </h2>
                    <p> {parseInt( item.price)} TMT </p>
                  </div>
                  <div className="basket-delete">
                    <button onClick={()=>HandleClick(item.id)}>
                      <img src="/img/cross.png" alt="" width="20px" />{" "}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="basket-prices">
            <p>
              Итого: <span> {parseInt(totalPrice)} TMT</span>
            </p>
            <Link to="/order">
              <button>Перейти к оформлению</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
