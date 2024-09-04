import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Toaster } from "sonner";
import ItemList from "./components/ItemList/ItemList";
import TerminosYCondiciones from "./components/TerminosCondiciones/Terminos&Condiciones";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import CartComponent from "./components/Cart/CartComponent";
import CategoryListContainer from "./components/CategoryListContainer/CategoryListContainer";
import { useParams } from "react-router-dom";



function App() {
  const route = useParams()

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Header />

              //<ItemListContainer greeting="Bienvenido, selecciona una opcion de nuestro menu" />
            }
          />
          <Route exact path="/item" element={<ItemList />} />
          <Route exact path="/item/detail/:id" element={<ItemDetail/>} />
          <Route exact path="/category/:categoryId" element={<CategoryListContainer />}/>
          <Route exact path="/category/:categoryId/detail/:id" element={<ItemDetail />} />
          <Route
            exact
            path="/TerminosYCondiciones"
            element={<TerminosYCondiciones />}
          />
          <Route exact path="/cart" element={<CartComponent/>} />
        </Routes>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
      </BrowserRouter>

      {/*EXPAND para que las notificaciones se apilen
         POSITION para la alineacion horizontal*/}
    </>
  );
}

export default App;
