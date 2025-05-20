import { useEffect, useState } from "react";
import "./ProductForm.css";

function ProductForm({ productoEditado, setProductoEditado, onSubmit }) {
  const [descripcion, setDescripcion] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [descuento, setDescuento] = useState("");
  const [stock, setStock] = useState("");
  const [precioConDescuento, setPrecioConDescuento] = useState(0);

  useEffect(() => {
    if (productoEditado) {
      setDescripcion(productoEditado.descripcion);
      setPrecioUnitario(productoEditado.precioUnitario);
      setDescuento(productoEditado.descuento);
      setStock(productoEditado.stock);
    }
  }, [productoEditado]);

  useEffect(() => {
    const precio = parseFloat(precioUnitario);
    const desc = parseFloat(descuento);
    if (!isNaN(precio) && !isNaN(desc)) {
      const calculado = (precio * (1 - desc / 100)).toFixed(2);
      setPrecioConDescuento(Number(calculado));
    } else {
      setPrecioConDescuento(0);
    }
  }, [precioUnitario, descuento]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!descripcion || !precioUnitario || !descuento || !stock) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (descripcion.trim().length < 3) {
      alert("La descripción debe tener al menos 3 caracteres");
      return;
    }

    const precio = parseFloat(precioUnitario);
    const desc = parseFloat(descuento);
    const stk = parseInt(stock);

    if (isNaN(precio) || isNaN(desc) || isNaN(stk)) {
      alert("Precio, descuento y stock deben ser números válidos");
      return;
    }

    if (precio <= 0 || desc < 0 || desc > 100 || stk < 0) {
      alert(
        "Precio Unitario y Stock deben ser mayores a 0, y el descuento debe estar entre 0 y 100"
      );
      return;
    }

     const producto = {
      id: productoEditado?.id,
      descripcion: descripcion.trim(),
      precioUnitario: precio,
      descuento: desc,
      stock: stk,
      precioConDescuento,
    };

    onSubmit(producto);

    // Resetear
    resetForm();
  };

  const handleCancelar = () => {
    setProductoEditado(null);
    resetForm();
  };

   const resetForm = () => {
    setDescripcion("");
    setPrecioUnitario("");
    setDescuento("");
    setStock("");
    setPrecioConDescuento(0);
  };


  return (
    <div>
      <h3>{productoEditado ? "Editar Producto" : "Agregar Producto"}</h3>
      <form onSubmit={handleSubmit}>
        <label>Descripción:</label>
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <label>Precio Unitario:</label>
        <input
          type="number"
          value={precioUnitario}
          onChange={(e) => setPrecioUnitario(e.target.value)}
        />
        <label>Descuento (%):</label>
        <input
          type="number"
          value={descuento}
          onChange={(e) => setDescuento(e.target.value)}
        />
        <label>Stock:</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <p>Precio con descuento: ${precioConDescuento}</p>
        <button type="submit">
          {productoEditado ? "Guardar Cambios" : "Agregar Producto"}
        </button>
        {productoEditado && (
          <button type="button" onClick={handleCancelar}>
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}

export default ProductForm;
