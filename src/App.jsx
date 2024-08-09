import "./App.css";
import Navbar from "./components/NavbarComponent/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TerminosYCondiciones from "./components/TerminosCondiciones/Terminos&Condiciones";
import ItemCount from "./components/ItemCount/ItemCount";
import ComponentButton from "./components/ComponentButton/ComponentButton";
import {Toaster} from 'sonner'
function App() {
  return (
    <>
     {/* <Header />
      <Navbar />
      <ItemListContainer greeting="Bienvenido, selecciona una opcion de nuestro menu"/>
      <Footer/>*/}
      <ItemCount/>
      <ComponentButton text="primer prueba de prop condicional en button" />
      <Toaster position="bottom-center" expand={false} />
      {/*EXPAND para que las notificaciones se apilen
         POSITION para la alineacion horizontal*/}
    </>
  );
}

export default App;
