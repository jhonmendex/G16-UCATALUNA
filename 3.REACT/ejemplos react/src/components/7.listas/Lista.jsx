import React from "react";

const personas = [
  {
    id: 1,
    nombre: "maria",
    edad: 15,
  },
  {
    id: 2,
    nombre: "juan",
    edad: 20,
  },
  {
    id: 3,
    nombre: "pedro",
    edad: 25,
  },
];

const Lista = () => {
  return (
    <>
      {personas.map((persona) => (
        <li key={persona.id}>
          {persona.nombre} <b>{persona.id}</b>
        </li>
      ))}
    </>
  );
};

export default Lista;
