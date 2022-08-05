//pipes o tuberias ,trasporta datos en stream
const fs = require("fs");

const streanLetura = fs.createReadStream("./tuberia/base_de_transferencia.txt");
const streamEscritura = fs.createWriteStream("./tuberia/destini_tuberia.txt");

// conectar los stream
streanLetura.pipe(streamEscritura);

streanLetura.on("end", () => {
  console.log("Porcceso de transferencia terminado");
});
