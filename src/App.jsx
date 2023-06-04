import React, { createContext, useState } from "react";
import { AppRouter } from "./utils/AppRouter";
export const App = () => {
  const [isAuth, setAuth] = useState(true);
  return (
    <div>
      <AppContext.Provider value={{ isAuth, setAuth }}>
        <AppRouter />
      </AppContext.Provider>
    </div>
  );
};
export const AppContext = createContext();
