import React from "react";
import { useParams } from "react-router-dom";
import { productsByCategory } from "../../asyncMock";

const CategoryView = () => {
  const { categoryId } = useParams();
  const filteredProducts = productsByCategory(categoryId);

  return (
    <div>
      <h1>Productos en la categoría: {categoryId}</h1>
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.name} />
            </div>
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryView;
