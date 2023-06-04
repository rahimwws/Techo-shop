import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Auth } from "../pages/Auth";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Iphones } from "../pages/Products/Iphones";
import { Detail } from "../components/Products/Detail";
import { AppContext } from "../App";
import { Basket } from "../pages/Basket";
export const AppRouter = () => {
  const {isAuth} = React.useContext(AppContext)
  return (
    <>
      <Header />
      <Routes>
        {isAuth && <Route path="/" element={<Home />} />}
        {isAuth && <Route path="/iphones" element={<Iphones />} />}
        {isAuth && <Route path="/iphones/iphone13" element={<Detail />} />}
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/iphones" element={<Iphones />} />
        <Route path="/iphones/iphone13" element={<Detail />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </>
  );
};
