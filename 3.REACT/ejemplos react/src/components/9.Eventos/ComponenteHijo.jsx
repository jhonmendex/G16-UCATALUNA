import React from "react";

const ComponenteHijo = (props) => {
  return (
    <>
      <button onClick={props.clickPadre}>Boton en el click padre</button>
    </>
  );
};

export default ComponenteHijo;
