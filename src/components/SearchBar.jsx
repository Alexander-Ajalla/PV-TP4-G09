import { useState, useMemo, useEffect } from "react";
import "../styles/SearchBar.css";

function SearchBar({ productos, onFiltrar }) {
  const [termino, setTermino] = useState("");

  // useMemo para filtrar productos solo cuando cambian productos o término
  const productosFiltrados = useMemo(() => {
    const terminoLower = termino.toLowerCase().trim();
    return productos.filter(
      (producto) =>
        producto.descripcion.toLowerCase().includes(terminoLower) ||
        producto.id.toString() === terminoLower
    );
  }, [productos, termino]);

  // Cada vez que cambia el término, notificamos al padre con los productos filtrados
  const handleChange = (e) => {
    setTermino(e.target.value);
  };

  useEffect(() => {
    onFiltrar(productosFiltrados);
  }, [productosFiltrados, onFiltrar]);

  return (
    <div className="search-container">
  <label htmlFor="buscar">Buscar producto (por ID o descripción): </label>
  <input
    id="buscar"
    type="text"
    value={termino}
    onChange={handleChange}
    placeholder="Ej: 1 o zapatillas"
    className="search-input"
  />
</div>

  );
}

export default SearchBar;
