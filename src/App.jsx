import ProductForm from "./components/ProductForm";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import "./styles/App.css";

const productosIniciales = [
  {
    id: 1,
    descripcion: "Zapatillas deportivas",
    precioUnitario: 100,
    descuento: 10,
    stock: 15,
    precioConDescuento: 90,
  },
  {
    id: 2,
    descripcion: "Remera básica",
    precioUnitario: 25,
    descuento: 5,
    stock: 40,
    precioConDescuento: 23.75,
  },
  {
    id: 3,
    descripcion: "Pantalón jeans",
    precioUnitario: 50,
    descuento: 20,
    stock: 10,
    precioConDescuento: 40,
  },
];

function App() {
  const [productos, setProductos] = useState(productosIniciales);

  // Calcular el siguiente ID para productos nuevos
  const maxId = productosIniciales.length > 0 ? Math.max(...productosIniciales.map(p => p.id)) : 0;
  const [nextId, setNextId] = useState(maxId + 1);

  const [productoEditado, setProductoEditado] = useState(null);
  const [productosFiltrados, setProductosFiltrados] = useState(productosIniciales);

  // Mostrar en consola los cambios en el array de productos
  useEffect(() => {
    console.log("Productos actualizados:", productos);
    setProductosFiltrados(productos);
  }, [productos]);

  const handleFiltrar = (productosFiltrados) => {
    setProductosFiltrados(productosFiltrados);
  };

  const handleAddOrUpdate = (producto) => {
    if (productoEditado) {
      const actualizados = productos.map((p) =>
        p.id === producto.id ? producto : p
      );
      setProductos(actualizados);
      setProductoEditado(null);
    } else {
      const nuevoProducto = { ...producto, id: nextId };
      setProductos([...productos, nuevoProducto]);
      setNextId(nextId + 1);
      setProductoEditado(null);
    }
  };

  const handleDelete = (id) => {
    const actualizados = productos.filter((p) => p.id !== id);
    setProductos(actualizados);
  };

  const handleEdit = (producto) => {
    setProductoEditado(producto);
  };

  return (
    <div>
      <SearchBar productos={productos} onFiltrar={handleFiltrar} />
      <ProductForm
        productoEditado={productoEditado}
        setProductoEditado={setProductoEditado}
        onSubmit={handleAddOrUpdate}
      />
      <ProductList
        productos={productosFiltrados}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
