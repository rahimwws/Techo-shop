import React from "react";
import "../scss/order.scss";
import { BasketItems} from "../utils/basket";
export const Order = () => {
  console.log(BasketItems);
  return (
    <>
      <div className="Order">
        <div className="Order-inputs">
          <h2>Оформление заказа</h2>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Ваш телефон" />
          <input type="text" placeholder="Описание" />
          <input type="text" placeholder="Адрес" />
        </div>
        <div className="Order-price">
          <h2>Ваши заказ</h2>
          <div className="Order-items">
            <ul>
              {BasketItems.map((item) => {
                return (
                  <li>
                    <p> {item[0]} </p> <span> {item[2]} </span>
                  </li>
                );
              })}
            </ul>
            <p>Итог: <span>  </span>  </p>
          </div>
          <button>Заказать</button>
        </div>
      </div>
    </>
  );
};
