import React, { useCallback } from "react";
import ProductItem from "./ProductItem";
import "../App.css";

const ProductList = ({ productos, onDelete, onEdit }) => {
  const memoizedOnDelete = useCallback(onDelete, [onDelete]);
  const memoizedOnEdit = useCallback(onEdit, [onEdit]);

  if (!productos || productos.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <ul className="product-list">
      {productos.map((producto) => (
        <ProductItem
          key={producto.id}
          producto={producto}
          onDelete={memoizedOnDelete}
          onEdit={memoizedOnEdit}
        />
      ))}
    </ul>
  );
};

export default ProductList;
