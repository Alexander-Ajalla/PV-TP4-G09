import React from "react";
import "./Button.css";

const Button = ({
  children,
  onClick,
  className,
  color = "primary",
  ...props
}) => {
  // 'children' será el texto o el contenido dentro del botón
  // 'onClick' será la función que se ejecute al hacer clic
  // 'className' permitirá añadir clases CSS adicionales desde el padre
  // 'color' define un color predeterminado (primary) y permite cambiarlo
  // '...props' recoge cualquier otra prop que se pase al botón
  return (
    <button
      className={`button button-${color} ${className || ""}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
