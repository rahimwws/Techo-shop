import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { Home } from "../pages/Home";
import { Auth } from "../pages/Auth";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Iphones } from "../pages/Products/Iphones";
import { Detail } from "../components/Products/Detail";
import { AppContext } from "../App";
import { Basket } from "../pages/Basket";
import { Order } from "../components/Order";
export const AppRouter = () => {
  const {isAuth} = React.useContext(AppContext)
  const { id } = useParams()
  return (
    <>
      <Header />
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/iphones" element={<Iphones />} />
        <Route path="/iphones/:id" element={<Detail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
};
