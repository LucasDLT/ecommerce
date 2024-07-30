import "./App.css";
import Navbar from "./components/NavbarComponent/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header/Header";

function App({greeting}) {
  return (
    <>
      <Header />
      <Navbar />
      <ItemListContainer greeting="saludo inicial"/>
    </>
  );
}

export default App;
