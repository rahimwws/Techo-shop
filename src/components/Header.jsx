import React from "react";
import "./../scss/components/header.scss";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
export const Header = () => {
  const { isAuth, setAuth } = React.useContext(AppContext);

  return (
    <header>
      <img src="/img/logo.png" alt="" />
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

        <Link to="/basket">
          <img src="/img/store.png" alt="" />
        </Link>
      </div>
    </header>
  );
};
