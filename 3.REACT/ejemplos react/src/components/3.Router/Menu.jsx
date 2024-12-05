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
        </ul>
      </nav>
    </>
  );
}
