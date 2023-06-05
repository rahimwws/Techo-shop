import React from 'react'
import "../scss/order.scss"
import { BasketItems } from '../utils/basket'
export const Order = () => {

    console.log(BasketItems)
  return (
    <>
    <h2>Оформление заказа</h2>
    <div className='Order'>

        <div className="Order-inputs">
            <input type="text" placeholder='Имя'/>
            <input type="text" placeholder=''/>
            <input type="text"  placeholder=''/>
            <input type="text"  placeholder=''/>
            <input type="text" />
        </div>
        <div className="Order-price">

        </div>
    </div>
    </>
  )
}
