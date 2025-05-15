//import ProductList from "./";
import "ProductItem.css";

export const ProductItem = (product, onUpdate, onDelete) => {
  return (
    <li class="container">
      <h2>{product.title}</h2>
      <p>Precio: ${product.price}</p>
      <p>Descuento: {product.discountPercent}%</p>
      <p>Precio Final: ${product.salePrice}</p>
      <p>Stock disponible: {product.stock}</p>

      <button
        id="btnUpdate"
        class="btn-blue"
        onClick={() => {
          onUpdate(product.id);
        }}
      >
        Modificar
      </button>
      <button
        id="btnDelete"
        class="btn-red"
        onClick={() => {
          onDelete(product.id);
        }}
      >
        Eliminar
      </button>
    </li>
  );
};

export default ProductItem;
