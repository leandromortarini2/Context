/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useAuth } from "../../context/Context";

export const Componente1 = () => {
  const { nameUser, setNameUser } = useAuth();
  const [nameInput, setNameInput] = useState("");

  const handleOnChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setNameUser(nameInput);
    alert("envio exitoso");
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">NAME: </label>
        <input
          type="text"
          name="name"
          value={nameInput}
          onChange={handleOnChange}
        />
        <button type="submit">enviar</button>
      </form>
    </>
  );
};
