import { useState, useEffect } from "react";

let nextID = 0; // para generar id unicas
function ProductForm({productos, setProductos, productoEditando, setProductoEditando }) {
  // estado para el formulario
  const [descripcion, setDescripcion] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [descuento, setDescuento] = useState("");
  const [stock, setStock] = useState("");

  //el useeffect para obtener el producto a editar cuando se renderiza el componente y setear los valores del formulario
  useEffect(()=> {
    if(productoEditando) {
      setDescripcion(productoEditando.descripcion);
      setPrecioUnitario(productoEditando.precioUnitario);
      setDescuento(productoEditando.descuento);
      setStock(productoEditando.stock);
  }
}, [productoEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //validar los inputs
    if (descripcion === "" || precioUnitario === "" || descuento === "" || stock === "") {
      alert("Los campos no pueden estar vacios");
      return;
    } else if (descripcion.trim().length < 3) {
      alert("La descripcion debe tener 3 caracteres");
      return;
    }else if (isNaN(precioUnitario) || isNaN(descuento) || isNaN(stock)) {
      alert("Los campos Precio Unitario, Descuento y Stock deben ser números");
      return;
    } else if (parseFloat(precioUnitario) <= 0 || parseFloat(descuento) < 0 || parseFloat(descuento) > 100 || parseInt(stock) < 0) {
      alert("Los campos Precio Unitario y Stock deben ser mayores a 0, y el Descuento debe estar entre 0 y 100");
      return;
    }

    //calculo el precio con descuento
    const precioConDescuento = parseFloat((parseFloat(precioUnitario) - (parseFloat(precioUnitario) * parseFloat(descuento) / 100)).toFixed(2)); // el toFixed para redondear a 2 decimales

    // Modo edición
    if (productoEditando) {
      const productosActualizados = productos.map((producto) =>
        producto.id === productoEditando.id
          ? {
              ...producto,
              descripcion: descripcion.trim(),
              precioUnitario: parseFloat(precioUnitario),
              descuento: parseFloat(descuento),
              stock: parseInt(stock),
              precioConDescuento: precioConDescuento
            }
          : producto
      );
      setProductos(productosActualizados);
      setProductoEditando(null); // salir del modo edición
      setDescripcion("");
      setPrecioUnitario("");
      setDescuento("");
      setStock("");
    } else {

      const productoExistente = productos.find(producto => producto.descripcion === descripcion.trim());
      if (productoExistente) {
        alert("El producto ya existe");
        return;
      }



    //creamos el nuevo producto
    const newProducto = {
      id: nextID++,
      descripcion: descripcion.trim(),
      precioUnitario: parseFloat(precioUnitario),
      descuento: parseFloat(descuento),
      stock: parseInt(stock),
      precioConDescuento: precioConDescuento
    };
    setProductos([...productos, newProducto]);
    setDescripcion("");
    setPrecioUnitario("");
    setDescuento("");
    setStock("");
    console.log([...productos, newProducto]);
  }
  return (
    <div>
        <h3 style={{ textAlign: "center" }}>{productoEditando ? "Editar Producto" : "Agregar Producto"}:</h3>
        <form onSubmit={handleSubmit}>
            <label>Descripción:</label>
            <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
            <br /><br />
            <label>Precio Unitario:</label>
            <input type="number" value={precioUnitario} onChange={(e) => setPrecioUnitario(e.target.value)}/>
            <br /><br />
            <label>Descuento:</label>
            <input type="number" value={descuento} onChange={(e) => setDescuento(e.target.value)}/>
            <br /><br />
            <label>Stock:</label>
            <input type="number" value={stock} onChange={(e) => setStock(e.target.value)}/>
            <br /><br />
            <button type="submit">{productoEditando ? "Guardar Cambios" : "Agregar Producto"}</button>
        </form>
    </div>
  )
}
}
export default ProductForm;