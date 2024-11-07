//callback: funcion que se pasa como parametro de otra funcion

function obtenerDatos(callback) {
  const datos = {};
  console.log("obteniendo datos...");

  setTimeout(() => {
    callback(datos);
  }, 2000);
}

function procesarDatos(datos) {
  console.log("procesando datos...");
  console.log(datos);
}

function visualizarDatos(datos) {
  console.log("visualizando datos...");
  console.log(datos);
}

obtenerDatos(procesarDatos);
obtenerDatos(visualizarDatos);
