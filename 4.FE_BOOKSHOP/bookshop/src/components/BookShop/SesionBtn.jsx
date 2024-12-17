import { useContext } from "react";
import { Context } from "../../App.jsx";
const SesionBtn = () => {
  const [isAutenicated, setIsAutenticated] = useContext(Context);

  function handelSession() {
    setIsAutenticated(false);
  }

  return (
    <>
      <button onClick={handelSession}>Cerrar sesion</button>
    </>
  );
};

export default SesionBtn;
