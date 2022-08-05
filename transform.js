const fs = require("fs");
const { Transform } = require("stream");
// los tramfor modifica la informacion

const streanLetura = fs.createReadStream("./tuberia/base_de_transferencia.txt");
const streamEscritura = fs.createWriteStream("./tuberia/destini_tuberia.txt");

streanLetura.setEncoding("utf8");

const filtre = new Transform({
  writableObjectMode: true,
  transform(data, encode, callback) {
    // inyectart la  infomacion en buffer, en este caso mayuscula
    this.push(data.toString().toUpperCase());
    callback();
  },
  final(callback) {
    callback();
  },
});

streanLetura.pipe(filtre).pipe(streamEscritura);
