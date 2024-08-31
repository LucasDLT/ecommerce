import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Toaster } from "sonner";
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailContainer";
import TerminosYCondiciones from "./components/TerminosCondiciones/Terminos&Condiciones";
import { CardComponent } from "./components/CardComponent/CardComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ItemListContainer greeting="Bienvenido, selecciona una opcion de nuestro menu" />
            }
          />
          <Route exact path="/productos" element={<ItemDetailContainer />} />
          <Route exact path="/productos/:prodId" element={<CardComponent/>} />
          <Route
            exact
            path="/TerminosYCondiciones"
            element={<TerminosYCondiciones />}
          />
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
      </BrowserRouter>

      {/*EXPAND para que las notificaciones se apilen
         POSITION para la alineacion horizontal*/}
    </>
  );
}

export default App;
