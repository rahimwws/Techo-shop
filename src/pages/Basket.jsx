import React, { useEffect, useRef, useState } from "react";
import { BasketItems } from "../utils/basket";
import { Link } from "react-router-dom";
import "./../scss/basket.scss";
export const Basket = () => {
  let total = useRef(0)
  BasketItems.forEach((num)=>{
    total.current+=Number( num[2])
  })
  console.log(BasketItems);
  console.log(total.current);
  return (
    <>
      {BasketItems.length == 0 && (
        <div className="BasketNoItems" key={1}>
          <img src="/img/basket.png" alt="" width="300px" />
          <h2>Корзина пуста</h2>
          <p>Но это никогда не поздно исправить :)</p>
          <Link to="/">
            <button>В каталог товаров</button>
          </Link>
        </div>
      )}
      {BasketItems.length != 0 && (
        <div className="Basket">
          <div className="basket-products">
            {BasketItems.map((item) => {
              
              return (
                <div className="basket-item">
                  <img src={item[1]} alt="" width="300px" />
                  <div className="basket-text">
                    <h2> {item[0]} </h2>
                    <p> {parseInt( item[2])} TMT </p>
                  </div>
                  <div className="basket-delete">
                    <button>
                      <img src="/img/cross.png" alt="" width="20px" />{" "}
                    </button>
                    <p> {parseInt(item[2])} TMT</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="basket-prices">
            <p>
              Итого: <span> {parseInt(total.current)} TMT</span>
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
