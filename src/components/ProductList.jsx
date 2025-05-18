import React, { useCallback } from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = ({ productos, onUpdate, onDelete, onEdit }) => {
  const memoizedOnUpdate = useCallback(onUpdate, [onUpdate]);
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
          onUpdate={memoizedOnUpdate}
          onDelete={memoizedOnDelete}
          onEdit={memoizedOnEdit}
        />
      ))}
    </ul>
  );
};

export default ProductList;
