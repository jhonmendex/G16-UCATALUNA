import React from "react";

const nombre = "javier";

const RenCon = ({ sesion }) => {
  if (sesion) {
    return (
      <>
        <h1>Renderizado condicional</h1>
        <h2>Usuario logueado</h2>
        <p>{sesion}</p>
        {nombre == "jhon" ? (
          <h2>bienvenido jhon</h2>
        ) : (
          <h2>Usuario no registrado</h2>
        )}
      </>
    );
  } else {
    return (
      <>
        <h1>Renderizado condicional</h1>
        <h2>iniciar sesion</h2>
        <p>{sesion}</p>
        {nombre == "jhon" ? (
          <h2>bienvenido jhon</h2>
        ) : (
          <h2>Usuario no registrado</h2>
        )}
      </>
    );
  }
};

export default RenCon;
