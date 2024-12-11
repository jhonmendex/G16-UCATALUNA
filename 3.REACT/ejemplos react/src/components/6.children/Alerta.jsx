import React from "react";
import styled from "styled-components";

const AlertContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const AlertMessage = styled.p`
  font-weight: bold;
`;

const Alerta = ({ tipo, children }) => {
  const alertColor = {
    exito: "green",
    advertencia: "yellow",
    fallo: "red",
  }[tipo];
  return (
    <AlertContainer style={{ borderColor: alertColor }}>
      <AlertMessage>{children}</AlertMessage>
    </AlertContainer>
  );
};

export default Alerta;
