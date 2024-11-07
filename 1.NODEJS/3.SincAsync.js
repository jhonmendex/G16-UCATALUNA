//proceso -> ejecucion en una instrucción

//proceso sincrono -- secuencial

function proceso1() {
  console.log("proceso 1");
}

function proceso2() {
  console.log("proceso 2");
}

proceso1();
proceso2();

//proceso asíncrono -- "paralelo"

function proceso3() {
  setTimeout(() => {
    console.log("proceso 3");
  }, 3000);
}

function proceso4() {
  console.log("proceso 4");
}

proceso3();
proceso4();
