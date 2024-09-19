import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Toaster } from "sonner";
import ItemList from "./components/ItemList/ItemList";
import TerminosYCondiciones from "./components/TerminosCondiciones/Terminos&Condiciones";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import CartComponent from "./components/Cart/CartComponent";
import CategoryListContainer from "./components/CategoryListContainer/CategoryListContainer";
import { ContextProvider } from "./components/Context/ContextApp";
import {CartProvider} from "./components/Context/CartContext"

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <CartProvider>
          <Navbar />
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                ""
                //<ItemListContainer greeting="Bienvenido, selecciona una opcion de nuestro menu" />
              }
            />
            <Route exact path="/item" element={<ItemList />} />
            <Route exact path="/item/detail/:id" element={<ItemDetail />} />
            <Route
              exact
              path="/category/:categoryId"
              element={<CategoryListContainer />}
            />
            <Route
              exact
              path="/category/:categoryId/detail/:id"
              element={<ItemDetail />}
            />
            <Route
              exact
              path="/TerminosYCondiciones"
              element={<TerminosYCondiciones />}
            />
            <Route exact path="/cart" element={<CartComponent />} />
          </Routes>
          <Footer />
          <Toaster
            position="bottom-center"
            expand={false}
            duration={1500}
            toastOptions={{
              style: {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
            }}
          />
        </CartProvider >
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
