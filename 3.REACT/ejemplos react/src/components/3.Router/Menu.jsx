import { Link } from "react-router";

export default function Menu() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/comp-clase">componentes de clase</Link>
          </li>
          <li>
            <Link to="/comp-funcion">Componente de funcion</Link>
          </li>
          <li>
            <Link to="/mui">Material UI</Link>
          </li>
          <li>
            <Link to="/props">Props</Link>
          </li>
          <li>
            <Link to="/children">Children</Link>
          </li>
          <li>
            <Link to="/lista">Listas</Link>
          </li>
          <li>
            <Link to="/rencon">Renderizado condicional</Link>
          </li>
          <li>
            <Link to="/eventos">Eventos</Link>
          </li>
          <li>
            <Link to="/estados">Estados</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
