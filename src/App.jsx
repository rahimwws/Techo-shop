import React, { createContext, useState } from "react";
import { AppRouter } from "./utils/AppRouter";
export const App = () => {
  const [isAuth, setAuth] = useState(true);
  const [index,setIndex] = useState(0)
  const [ basketItems,setBasketItems ] = useState([]) 
  return (
    <div>
      <AppContext.Provider value={{ isAuth, setAuth,index,setIndex, basketItems,setBasketItems }}>
        <AppRouter />
      </AppContext.Provider>
    </div>
  );
};
export const AppContext = createContext();
