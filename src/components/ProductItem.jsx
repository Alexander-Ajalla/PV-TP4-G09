//import ProductList from "./";
import "ProductItem.css";

export const ProductItem = (product, onUpdate, onDelete) => {
  const { id, description, price, discountPercent, discountPrice, stock } =
    product;

  const formatUnit = (stock) => (stock === 1 ? `unidad` : `unidades`);

  return (
    <li class="product-item">
      <div className="product-item-details">
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p>
          <strong>Descripción:</strong> {description}
        </p>
        <p>
          <strong>Precio Unitario:</strong> ${price.toFixed(2)}
        </p>
        <p>
          <strong>Descuento:</strong> {discountPercent}%
        </p>
        <p>
          <strong>Precio con Descuento:</strong> ${discountPrice.toFixed(2)}
        </p>
        <p>
          <strong>Cantidad:</strong> {stock} {formatUnit(stock)}
        </p>
      </div>
      <div className="product-item-actions">
        <button
          className="update-btn"
          onClick={() => {
            onUpdate(product);
          }}
        >
          Modificar
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            onDelete(id);
          }}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
