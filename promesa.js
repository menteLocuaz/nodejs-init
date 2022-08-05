const promesaNode = require("fs").promises;
// iniciar processo sin detener la ejecucion de nuextro programas

promesaNode
  .copyFile("./tuberia/destini_tuberia.txt", "./tuberia/copia.txt")
  .then(() => {
    console.log("Copia terminada");
  })
  .catch(() => {
    console.log("Nose puede copiar un error interno");
  });
