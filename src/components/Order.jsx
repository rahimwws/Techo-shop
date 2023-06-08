import React from "react";
import "../scss/order.scss";
import { useSelector } from "react-redux";
export const Order = () => {
  const {items,totalPrice} = useSelector(state=>state.cart)
  return (
    <>
      <div className="Order">
        <div className="Order-inputs">
          <h2>Оформление заказа</h2>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Ваш телефон" />
          <input type="text" placeholder="Описание" />
          <input type="text" placeholder="Адрес" />
              <button>Заказать</button>
        </div>
        <div className="Order-price">
          <h2>Ваши заказ</h2>
          <div className="Order-items">
            <ul>
              {items.map((item) => {
                return (
                  <li>
                    <p> {item.name} </p> <span> {item.price} </span>
                  </li>
                );
              })}
            </ul>
            <p>Итог: <span> {totalPrice} </span>  </p>
          </div>
        </div>
      </div>
    </>
  );
};
