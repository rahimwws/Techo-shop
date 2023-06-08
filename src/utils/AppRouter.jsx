import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { Home } from "../pages/Home";
import { Auth } from "../pages/Auth";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Iphones } from "../pages/Products/Iphones";
import { Laptop } from "../pages/Products/Laptop";
import { Watch } from "../pages/Products/Watch";
import { Ipad } from "../pages/Products/ipad";
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
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/laptop/:id" element={<Detail />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/watch/:id" element={<Detail />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/ipad/:id" element={<Detail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
};
