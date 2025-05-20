import ProductForm from "./components/ProductForm";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";

function App() {
  const [productos, setProductos] = useState([]);
  const [productoEditado, setProductoEditado] = useState(null);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [nextId, setNextId] = useState(1);

  //mostrar en consola los cambios en el array de productos
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
