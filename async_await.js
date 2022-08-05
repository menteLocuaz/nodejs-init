function numeroAleatorio() {
  return new Promise((resolve, reject) => {
    resolve(Math.floor(Math.random() * 100));
  });
  //  console.log(Math.floor(Math.random() * 100));
}

function resultado() {
  console.log("invocando el resultado");
  console.log(numeroAleatorio());
}

resultado();
// crea una funcion
function mensajePrivado() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Trabajando en el proyecion");
    }, 1500);
  });
}

function galeriaFotos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Trabajando en el proyecion");
    }, 1500);
  });
}

function ultimotrasacion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Trabajando en el proyecion");
    }, 1500);
  });
}

Promise.all([mensajePrivado(), galeriaFotos(), ultimotrasacion()]).then(
  (valores) => {
    console.log(valores);
  }
);
