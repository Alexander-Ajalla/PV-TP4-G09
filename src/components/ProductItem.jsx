import Button from "./Button";
import "../styles/ProductItem.css";

const ProductItem = ({ producto, onEdit, onDelete }) => {
  const {
    id,
    descripcion,
    precioUnitario,
    descuento,
    stock,
    precioConDescuento,
  } = producto;

  const formatUnit = (stock) => (stock === 1 ? "unidad" : "unidades");

  return (
    <li className="product-item">
      <div className="product-item-details">
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p>
          <strong>Descripción:</strong> {descripcion}
        </p>
        <p>
          <strong>Precio Unitario:</strong> ${precioUnitario.toFixed(2)}
        </p>
        <p>
          <strong>Descuento:</strong> {descuento}%
        </p>
        <p>
          <strong>Precio con Descuento:</strong> $
          {precioConDescuento.toFixed(2)}
        </p>
        <p>
          <strong>Cantidad:</strong> {stock} {formatUnit(stock)}
        </p>
      </div>
      <div className="product-item-actions">
        <Button
          type="button"
          className="button-warning"
          onClick={() => {
            onEdit(producto);
          }}
        >
          Modificar
        </Button>
        {/**<button
          className="edit-btn"
          onClick={() => {
            onEdit(producto);
          }}
        >
          Modificar
        </button> */}
        <Button
          type="button"
          className="button-danger"
          onClick={() => {
            onDelete(id);
          }}
        >
          Eliminar
        </Button>
        {/**<button
          className="delete-btn"
          onClick={() => {
            onDelete(id);
          }}
        >
          Eliminar
        </button> */}
      </div>
    </li>
  );
};

export default ProductItem;
