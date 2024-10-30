import {React, useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import { ProductSection } from "../ItemList/ItemList";
import { ContextApp } from "../Context/ContextApp";
import styled from "styled-components";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Fade } from "react-awesome-reveal";


const CategoryView = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products] = useContext(ContextApp); 

  useEffect(() => {
    if (!categoryId) return;

    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", categoryId)); 

    getDocs(q)
      .then((res) => {
        setFilteredProducts(
          res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching category products: ", error);
      });
  }, [categoryId]);

  return (
    <CategorySection>
  <h1>Productos en la categoría: {categoryId}</h1>
  <Fade key={filteredProducts.length} cascade direction="top" duration={2000} triggerOnce={false}>
    <ProductSection>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, id) => (
          <CardItem key={id} item={product} />
        ))
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </ProductSection>
  </Fade>
</CategorySection>

  );
};

export default CategoryView;

export const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  font-family: "Nightfully Haunted", sans-serif;
  font-size: x-large;
  max-width: 100vw;
  position: relative;
  section {
    position: absolute;
    top: 50%;
    left: 30%;
  }
`;
