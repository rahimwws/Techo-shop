import React from "react";
import "./../../scss/components/Products.scss";
import { Link } from "react-router-dom";
export const Card = (props) => {
  return (
    
      <div className="Card">
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <p> {props.description} </p>
        <p> {props.price} TMT </p>
        <button>Купить</button>
      </div>
  );
};
