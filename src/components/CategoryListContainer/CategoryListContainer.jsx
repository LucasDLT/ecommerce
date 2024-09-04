import React from "react";
import { useParams, Outlet } from "react-router-dom";
import { productsByCategory } from "../../asyncMock";
import CardItem from "../CardItem/CardItem";
import { ProductSection } from "../ItemList/ItemList";

const CategoryView = () => {
  const { categoryId } = useParams();
  const filteredProducts = productsByCategory(categoryId);

  return (
    <div>
      <h1>Productos en la categoría: {categoryId}</h1>
      <ProductSection>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, id) => (
                    <CardItem key={id} item={product} />

          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </ProductSection>
    </div>
  );
};

export default CategoryView;
