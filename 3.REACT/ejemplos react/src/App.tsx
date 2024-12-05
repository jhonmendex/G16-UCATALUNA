import Parrafo from "./components/1.CompClase/Parrafo.tsx"
import Titulo from "./components/2.CompFuncion/Titulo.jsx"
import Tabla from  "./components/2.CompFuncion/Tabla.jsx"
import { BrowserRouter,Routes, Route } from 'react-router'
import Menu from  "./components/3.Router/Menu.jsx"
import Boton from "./components/4.MUI/Boton.jsx"
function App() {

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
          </Routes>
     </BrowserRouter>
     
             
    </>
  )
}

export default App
