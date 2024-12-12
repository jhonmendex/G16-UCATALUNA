import Parrafo from "./components/1.CompClase/Parrafo.tsx"
import Titulo from "./components/2.CompFuncion/Titulo.jsx"
import Tabla from  "./components/2.CompFuncion/Tabla.jsx"
import { BrowserRouter,Routes, Route } from 'react-router'
import Menu from  "./components/3.Router/Menu.jsx"
import Boton from "./components/4.MUI/Boton.jsx"
import ListaLibros from "./components/5.props/ListaLibros.tsx"
import EjemploAlerta from "./components/6.children/EjemploAlerta.jsx"
import Lista from "./components/7.listas/Lista.jsx"
import RenCon from "./components/8.RenderizadoCondicional/RenCon.jsx"
import Eventos from "./components/9.Eventos/Eventos.tsx"
import Contador from "./components/10.Estados/Contador.jsx"
import ContadorHooks from "./components/11.Hooks/ContadorHook.jsx"
function App() {
  const sesion = true

  return (
    <>
     <BrowserRouter>
          <h1> Ejemplos de React</h1>
          <hr />
          <Menu />
          <Routes>
            <Route path="/comp-clase" element={
              <>
              <Parrafo texto="esto es un parrafo" />
              <Parrafo texto="esto es otro texto" />        
              <Parrafo texto="esto es un texto final" />   
              </>
              } />
            <Route path="/comp-funcion" element={
              <>
              <Titulo/>  
              <Tabla/>   
              </>
            } />
            <Route path="/mui" element={<Boton/>} />
            <Route path="/props" element={<ListaLibros/>} />
            <Route path="/children" element={<EjemploAlerta/>} />
            <Route path="/lista" element={<Lista/>} />
            <Route path="/rencon" element={<RenCon sesion={sesion}/>} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/estados" element={<Contador />} />
            <Route path="/hooks" element={<ContadorHooks />} />
          </Routes>
     </BrowserRouter>
     
             
    </>
  )
}

export default App
