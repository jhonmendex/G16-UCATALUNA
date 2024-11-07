// funcion que ha de resolver un proceso
//delcaracion de una promesa
function obtenerDatos() {
  const data = null;
  return new Promise((resolve, reject) => {
    if (data == null) reject(new Error("No se pudo obtener los datos"));
    console.log("Obteniendo datos...");
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
}

//uso de la promesa declarada

obtenerDatos()
  .then((data) => {
    console.log("Datos obtenidos");
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Proceso finalizado");
  });
