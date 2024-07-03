/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";

// creacion de context
const AuthContext = React.createContext({});

// creacion de componente AuthProvider
export const AuthProvider = ({ children }) => {
  // creacion de estados a usar desde los componentes hijos.
  const [saludo, setSaludo] = useState("");
  const [nameUser, setNameUser] = useState("");

  return (
    // se accede al provider del context y se pasan los valores que necesitaremos utilizar en los componentes hijos
    <AuthContext.Provider value={{ saludo, setSaludo, nameUser, setNameUser }}>
      {children}
    </AuthContext.Provider>
  );
};
// se crea un hook personalizado que nos permite utilizar el context desde cualquier componente hijo.

export const useAuth = () => useContext(AuthContext);
