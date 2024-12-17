import { useState } from "react";
import React from "react";
import BookShop from "./components/BookShop/BookShop.jsx";
import Login from "./components/Login/Login.jsx";

export const Context = React.createContext();

function App() {
  const [isAutenicated, setIsAutenticated] = useState(true);

  return (
    <Context.Provider value={[isAutenicated, setIsAutenticated]}>
      {isAutenicated ? <BookShop /> : <Login />}
    </Context.Provider>
  );
}

export default App;
