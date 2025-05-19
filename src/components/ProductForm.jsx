import { useEffect, useState } from "react";
import "./ProductForm.css"

let nextID = 0;

function ProductForm({ productos, setProductos, productoEditando, setProductoEditando }) {
    const [descripcion, setDescripcion] = useState("");
    const [precioUnitario, setPrecioUnitario] = useState("");
    const [descuento, setDescuento] = useState("");
    const [stock, setStock] = useState("");
    const [precioConDescuento, setPrecioConDescuento] = useState(0);

    useEffect(() => {
        if (productoEditando) {
            setDescripcion(productoEditando.descripcion);
            setPrecioUnitario(productoEditando.precio);
            setDescuento(productoEditando.descuento);
            setStock(productoEditando.stock);
        }
    }, [productoEditando]);

    useEffect(() => {
        if (!precioUnitario || !descuento) {
            setPrecioConDescuento(0);
        } else {
            const precio = parseFloat(precioUnitario);
            const desc = parseFloat(descuento);
            if (!isNaN(precio) && !isNaN(desc)) {
                const calculado = (precio * (1 - desc / 100)).toFixed(2);
                setPrecioConDescuento(Number(calculado));
            }
        }
    }, [precioUnitario, descuento]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!descripcion || !precioUnitario || !descuento || !stock) {
            alert("Todos los campos son obligatorios");
            return;
        } else if (descripcion.trim().length < 3) {
            alert("La descripción debe tener al menos 3 caracteres");
            return;
        } else if (isNaN(precioUnitario) || isNaN(descuento) || isNaN(stock)) {
            alert("Los campos de precio, descuento y stock deben ser números");
            return;
        } else if (
            parseFloat(precioUnitario) <= 0 ||
            parseFloat(descuento) < 0 ||
            parseFloat(descuento) > 100 ||
            parseInt(stock) < 0
        ) {
            alert("Precio Unitario y Stock deben ser mayores a 0, y el descuento debe estar entre 0 y 100");
            return;
        }

        const productoExistente = productos.find(
            (producto) =>
                producto.descripcion.trim().toLowerCase() === descripcion.trim().toLowerCase() &&
                producto.id !== (productoEditando?.id ?? null)
        );
        if (productoExistente) {
            alert("El producto ya existe");
            return;
        }

        if (productoEditando) {
            const productoActualizado = productos.map((producto) =>
                producto.id === productoEditando.id
                    ? {
                        ...producto,
                        descripcion: descripcion.trim(),
                        precioUnitario: parseFloat(precioUnitario),
                        descuento: parseFloat(descuento),
                        stock: parseInt(stock),
                        precioConDescuento,
                    }
                    : producto
            );
            setProductos(productoActualizado);
            setProductoEditando(null);
        } else {
            const newProducto = {
                id: nextID++,
                descripcion: descripcion.trim(),
                precioUnitario: parseFloat(precioUnitario),
                descuento: parseFloat(descuento),
                stock: parseInt(stock),
                precioConDescuento,
            };
            setProductos([...productos, newProducto]);
            console.log([...productos, newProducto]);
        }

        // Resetear
        setDescripcion("");
        setPrecioUnitario("");
        setDescuento("");
        setStock("");
    };

    const handleCancelar = () => {
        setProductoEditando(null);
        setDescripcion("");
        setPrecioUnitario("");
        setDescuento("");
        setStock("");
    };

    return (
        <div>
            <h3>{productoEditando ? "Editar Producto" : "Agregar Producto"}</h3>
            <form onSubmit={handleSubmit}>
                <label>Descripción:</label>
                <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                <label>Precio Unitario:</label>
                <input type="number" value={precioUnitario} onChange={(e) => setPrecioUnitario(e.target.value)} />
                <label>Descuento (%):</label>
                <input type="number" value={descuento} onChange={(e) => setDescuento(e.target.value)} />
                <label>Stock:</label>
                <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
                <p>Precio con descuento: ${precioConDescuento}</p>
                <button type="submit">{productoEditando ? "Guardar Cambios" : "Agregar Producto"}</button>
                {productoEditando && (
                    <button type="button" onClick={handleCancelar}>
                        Cancelar
                    </button>
                )}
            </form>
        </div>
    );
}

export default ProductForm;
