import Parrafo from "../1.CompClase/Parrafo.tsx";

const Emoji = () => {
  return (
    <>
      <span role="img" aria-label="emoji">
        😊
      </span>
    </>
  );
};

const Tabla = () => {
  return (
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
      </tr>
      <tr>
        <td>Jose</td>
        <td>Alvarez</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Jose</td>
        <td>Alvarez</td>
        <td>30</td>
      </tr>
      <tr>
        <td>
          <Emoji />
          Jose
        </td>
        <td>
          <Emoji />
          Alvarez
        </td>
        <td>
          <Emoji />
          30
        </td>
        <Emoji />
      </tr>
      <Parrafo texto="esto es un parrafo desde la tabla" />
    </table>
  );
};

export default Tabla;
