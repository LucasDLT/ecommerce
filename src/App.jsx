import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Navbar from "./components/NavbarComponent/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TerminosYCondiciones from "./components/TerminosCondiciones/Terminos&Condiciones";
import ItemCount from "./components/ItemCount/ItemCount";
import ComponentButton from "./components/ComponentButton/ComponentButton";
import { Toaster } from "sonner";
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailContainer";
function App() {
  return (
    <>
      <BrowserRouter>    
      <Header />
      <Navbar />
      <ItemListContainer greeting="Bienvenido, selecciona una opcion de nuestro menu" />
      <Footer />
      <ItemDetailContainer />
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
