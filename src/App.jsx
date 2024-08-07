import "./App.css";
import Navbar from "./components/NavbarComponent/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TerminosYCondiciones from "./components/TerminosCondiciones/Terminos&Condiciones";
import ItemCount from "./components/ItemCount/ItemCount";
import ComponentButton from "./components/ComponentButton/ComponentButton";

function App() {
  return (
    <>
     {/* <Header />
      <Navbar />
      <ItemListContainer greeting="Bienvenido, selecciona una opcion de nuestro menu"/>
      <Footer/>*/}

      <ItemCount/>
      <ComponentButton text="primer prueba de prop condicional en button" />
    </>
  );
}

export default App;
