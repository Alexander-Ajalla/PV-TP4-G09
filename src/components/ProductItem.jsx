//import ProductList from "./";
import "ProductItem.css";

const ProductItem = (params) => {
  return (
    <li class="itemStyle">
      <button id="btnUpdate" class="btn-blue" onClick={() => {}}>
        Modificar
      </button>
      <button id="btnDelete" class="btn-red" onClick={() => {}}>
        Eliminar
      </button>
    </li>
  );
};

export default ProductItem;
