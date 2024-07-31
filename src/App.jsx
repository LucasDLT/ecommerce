import "./App.css";
import Navbar from "./components/NavbarComponent/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header/Header";

function App({greeting}) {
  return (
    <>
      <Header />
      <Navbar />
      <ItemListContainer greeting="Bienvenido, selecciona una opcion de nuestro menu"/>
    </>
  );
}

export default App;
