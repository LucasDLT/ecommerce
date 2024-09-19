import { createContext, useEffect, useState } from "react";
import { openList } from "../../asyncMock";

export const ContextApp = createContext(false);

export function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    openList()
      .then((response) => setProducts(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ContextApp.Provider value={[products, setProducts]}>
      {children}
    </ContextApp.Provider>
  );
}
