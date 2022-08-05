const fs = require("fs");
const http = require("http");

// crea un error y enificiente para los evetos
function leeerArchivo() {
  //   fs.readFileSync("../archivo.txt", "utf8"); codigo ineficiente
  fs.createReadStream("../archivo.txt", { encoding: "utf8" });
}

http
  .createServer(function (req, res) {
    for (let i = 0; i < 500; i++) {
      leeerArchivo();
    }
    res.write("Trabajando con node");
    res.end();
  })
  .listen(7440);
