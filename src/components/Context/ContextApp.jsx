import { createContext, useEffect, useState } from "react";
import { openList } from "../../asyncMock";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ContextApp = createContext(false);

export function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = collection(db, "products")

    getDocs(productsRef)
    .then((res)=>{
      setProducts(
        res.docs.map((doc)=>{
          return {...doc.data(), id: doc.id}
        })
      )
    })
    
  }, []);

  return (
    <ContextApp.Provider value={[products, setProducts]}>
      {children}
    </ContextApp.Provider>
  );
}
