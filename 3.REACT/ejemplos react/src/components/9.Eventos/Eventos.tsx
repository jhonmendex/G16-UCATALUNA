import ComponenteHijo from "./ComponenteHijo.jsx"


const personas= [
    {
        id:1,
        nombre: 'Juan'
    },
    {
        id:2,
        nombre: 'Pedro'
    },
    {
        id:3,
        nombre: 'Maria'
    }
]

function handleClick(){
    console.log('click')
}


const Eventos = () => {
  function hendleKeyUp(){
    contador = contador + 1
    console.log("tecla oprimida", contador)
}


function handleNames(nombre){
 console.log(`click en ${nombre}`)
}

function clickPadre(){
    console.log('click en padre')
}


  let contador = 0;
  return (
    <>
      <button onClick={handleClick}>Mostrar alerta</button>
      <input type="text" onKeyUp={hendleKeyUp} />
      <h1>eventos</h1>      
      <ul>
        {personas.map((persona) => (
          <li onClick={
            () => {
              handleNames(persona.nombre)
            }
          }
           key={persona.id}>{persona.nombre}</li>
        ))}
      </ul>
      <ComponenteHijo clickPadre={clickPadre}/>
    </>
  );
}

export default Eventos;
