import React, { useState } from "react";
import "./../scss/components/header.scss";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


export const Header = () => {
  const { items} = useSelector(state=>state.cart)

  const { isAuth, setAuth, index, setIndex } = React.useContext(AppContext);
  const [langBtn, setLangBtn] = useState("none");
  const langClick = () => {
    langBtn == "active" ? setLangBtn("none") : setLangBtn("active");
  };
  return (
    <>
      <header>
        <Link to="/">
          
          <img src="/img/logo.png" alt=""  className="logo"/>
        </Link>
        <ul>
          <li>
            <a href="">all products</a>
          </li>
          <li>
            <a href="">Solutions</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </ul>
        <div class="header-assets">
          {isAuth ? (
            <Link to="/login">
              <img src="/img/avatar.png" alt="" width="25px" />
            </Link>
          ) : (
            <img
              src="/img/exit.png"
              alt=""
              onClick={() => setAuth(!isAuth)}
              width="25px"
            />
          )}
          <button onClick={langClick}>
            <img src="./img/globe.png" alt="" width="20px" />
          </button>
          <Link to="/basket">
            <div className="basket">
              <img src="/img/store.png" alt="" className="img-basket" />
              <div className="basket-price-item">{items.length}</div>
            </div>
          </Link>
        </div>
      </header>
      <ol className={langBtn}>
        <li>
          <a onClick={() => {
            if(index == 0){
              setIndex(0)
            }else{
              setIndex(0)
              setLangBtn("none")
            }
          }}>RU</a>
        </li>
        <li>
          <a
            onClick={() => {
              setIndex(1);
              setLangBtn("none");
            }}
          >
            UA
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setIndex(2);
              setLangBtn("none");
            }}
          >
            TM
          </a>
        </li>
      </ol>
    </>
  );
};
