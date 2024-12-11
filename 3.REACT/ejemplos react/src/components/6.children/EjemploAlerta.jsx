import React from "react";
import Alerta from "./Alerta.jsx";
const EjemploAlerta = () => {
  return (
    <>
      <Alerta tipo="exito">
        <strong>Operacion exitosa</strong>
      </Alerta>
      <Alerta tipo="advertencia">
        <h4>Operacion inconclusa</h4>
      </Alerta>
      <Alerta tipo="fallo">Operacion fallida</Alerta>
      <Alerta tipo="advertencia">guardado exitoso</Alerta>
    </>
  );
};

export default EjemploAlerta;
