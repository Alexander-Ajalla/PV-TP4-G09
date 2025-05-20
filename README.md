![](https://www.fi.unju.edu.ar/images/Institucional/Logos/logo-fi-unju-institucional-horizontal-786x202.png)

# Trabajo Práctico N°4 - React <img src="https://www.svgrepo.com/show/303157/react-logo.svg" alt="React Logo" width="50" height="60" style="vertical-align: middle;">

## Descripción del Proyecto 📚

Este proyecto consiste en una aplicación web interactiva diseñada para la gestión eficiente de una lista de productos. Desarrollada con React y Vite, la aplicación ofrece una interfaz intuitiva y funcional para administrar información esencial de productos.

La aplicación permite a los usuarios realizar una variedad de operaciones clave tales como agregar nuevos productos, la búsqueda eficiente de productos mediante una barra de busqueda. Además, la aplicación soporta la modificación de la información de productos existentes, permitiendo a los usuarios actualizar detalles según sea necesario.
Finalmente, los usuarios tienen la capacidad de eliminar productos de la lista, proporcionando un mecanismo para mantener la base de datos de productos organizada y actualizada.

La arquitectura de la aplicación se basa en componentes reutilizables y bien organizados, lo que promueve la mantenibilidad y escalabilidad del código.

## Funcionalidades 👾

La aplicación permite a los usuarios:

- Agregar nuevos productos a la lista mediante un formulario.
- Buscar productos existentes por descripción o ID.
- Modificar la información de productos seleccionados.
- Eliminar productos de la lista.

## Características Técnicas 🛠

- Desarrollado con React y Vite.
- Interfaz de usuario construida con JSX.
- Gestión de estado con `useState`.
- Efectos secundarios con `useEffect` (para mostrar cambios en la lista de productos en la consola).
- Optimización del filtrado de productos con `useMemo`.
- Memorización de funciones (agregar, editar, eliminar, buscar) con `useCallback` para mejorar el rendimiento.
- Utilización de eventos del DOM (`onClick`, `onChange`, `onSubmit`, etc.).
- Componentes reutilizables y organizados: `ProductForm`, `ProductList`, `ProductItem`, `SearchBar`.
- Estilos básicos aplicados para una interfaz clara y usable.

## Estructura de Datos de Producto

Cada producto se representa con las siguientes propiedades:

- `id`: Identificador único.
- `descripcion`: Descripción del producto.
- `precioUnitario`: Precio del producto sin descuento.
- `descuento`: Porcentaje de descuento aplicado al producto.
- `precioConDescuento`: Precio calculado automáticamente después del descuento.
- `stock`: Cantidad disponible en stock.

## Integrantes 👥

- Alexander Natanael Ajalla ➡ [Alexander-Ajalla](https://github.com/Alexander-Ajalla)
- Barrientos Lautaro Nicolás ➡ [Lautaro Barrientos](https://github.com/BarrientosLautaro)
- Ivo Thaiel Vicencio Rosas ➡ [IvoThaielVicencioRosas](https://github.com/ivothaiel)
- Álvarez Carlos Matías ➡ [AlvarezCarlosMatias](https://github.com/MintBlue06)
- Sánchez Ariel Maximiliano ➡ [MaxiSanchez27](https://github.com/MaxiSanchez27)

## Tecnologías utilizadas 🛠️

- React
- Vite
- JavaScript (ES6+)
- JSX
- CSS
