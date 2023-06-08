import React, { useContext } from "react";
import "./../../scss/components/Products.scss";
import { Link } from "react-router-dom";
import { langText } from "../../utils/lang";
import { AppContext } from "../../App";
export const ProductSlide = (props) => {
  const { index } = useContext(AppContext);
  return (
    <Link to={props.link}>
      <div className="ProductSlide">
        <div className="div">
          <h3> {props.text} </h3> <br />
        </div>
        <img src={props.imgDesktop} alt=""  width={props.width} />
        <img src={props.imgMobile} alt="" className="img-mobile" />
      </div>
    </Link>
  );
};
