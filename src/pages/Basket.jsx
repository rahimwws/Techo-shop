import React from "react";
import { BasketItems } from "../utils/basket";
import { Link } from "react-router-dom";
import "./../scss/basket.scss";
export const Basket = () => {
  const HandleClick = (id)=>{

  }
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
            <div className="basket-item">
              <img src="/img/iphone 13.png" alt="" width="300px" />
              <div className="basket-text">
                <h2>Iphone 13</h2>
                <p>15555 TMT</p>
              </div>
              <div className="basket-delete">
                <button> <img src="/img/cross.png" alt="" width="20px" /> </button>
                <p>15555 TMT</p>
              </div>
            </div>
            <div className="basket-item">
              <img src="/img/iphone 13.png" alt="" width="300px" />
              <div className="basket-text">
                <h2>Iphone 13</h2>
                <p>15555 TMT</p>
              </div>
              <div className="basket-delete">
                <button> <img src="/img/cross.png" alt="" width="20px" onClick={HandleClick()} /> </button>
                <p>15555 TMT</p>
              </div>
            </div>
          </div>
          <div className="basket-prices">
            <p>Итого: <span>15555 TMT</span></p>
            <button>Перейти к оформлению</button>
          </div>
        </div>
      )}
    </>
  );
};
