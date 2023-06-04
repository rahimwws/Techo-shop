import React from "react";
import "./../../scss/components/Products.scss";
import { Link } from "react-router-dom";
export const Card = (props) => {
  return (
    <Link to="/iphones/iphone13">
      <div className="Card">
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <p> {props.description} </p>
        <p> {props.price} </p>
        <button>Купить</button>
      </div>
    </Link>
  );
};
