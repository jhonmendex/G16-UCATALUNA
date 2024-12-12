import { useState, useEffect } from "react";

const ContadorHook = () => {
  const [contador, setContador] = useState(0);
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    edad: "12",
  });

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formulario);
  }

  useEffect(() => {
    console.log("actualizado");
    console.log(formulario);
  }, [formulario]);

  return (
    <>
      <button onClick={incrementar}>incrementar</button>
      <button onClick={decrementar}>decrementar</button>
      <h2>{contador}</h2>

      <form action="">
        <input
          onChange={(e) => {
            setFormulario((prev) => {
              return { ...prev, nombre: e.target.value };
            });
          }}
          value={formulario.nombre}
          type="text"
          placeholder="nombre"
        />
        <input
          onChange={(e) => {
            setFormulario((prev) => {
              return { ...prev, apellido: e.target.value };
            });
          }}
          type="text"
          value={formulario.apellido}
          placeholder="apellido"
        />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </>
  );
};

export default ContadorHook;
