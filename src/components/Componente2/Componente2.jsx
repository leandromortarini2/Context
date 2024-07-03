/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useAuth } from "../../context/Context";
import style from "./Componente2.module.css";

export const Componente2 = () => {
  // despues de la importacion del hook personalizado, se realiza un destructuring de los datos que necesitamos del context y los guardamos en variables.
  const { saludo, setSaludo, nameUser } = useAuth();

  const handleSaludo = () => {
    setSaludo("Hola");
  };

  return (
    <div>
      <p className={style.parrafo}>{`${saludo} ${nameUser}`}</p>
      <button onClick={handleSaludo}>Saludar</button>
    </div>
  );
};
