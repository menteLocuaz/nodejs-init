const fs = require("fs");
const { Duplex } = require("stream");
// lo duplex se trabaja en proceso intermedio para dos procesos

const streanLetura = fs.createReadStream("./tuberia/base_de_transferencia.txt");
const streamEscritura = fs.createWriteStream("./tuberia/destini_tuberia.txt");
// como un reporte o nalisis
const reporte = new Duplex({
  write(data, encode, callback) {
    console.log(data);
    callback();
  },
  read(size) {},
});

streanLetura.pipe(reporte).pipe(streamEscritura);
