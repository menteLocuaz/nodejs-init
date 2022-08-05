const fs = require("fs");

var contenido = "1234567890";
var iteracione = 15;

for (i = 0; i < iteracione; i++) {
  contenido += contenido;
}

fs.writeFile("./mi_archivo2.txt", contenido, () => {
  console.log("Escritura directa Terminada");
});
// No crear carpetas soo files y primera stream
const streamEscritura = fs.createWriteStream("./archivos/mi_archivo.txt");

streamEscritura.write(contenido, () => {
  console.log("Stream filalizado");
});
