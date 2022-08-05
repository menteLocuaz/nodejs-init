const fs = require("fs");

// leer el archivo
console.time("timepo de respuesta");
// for (let i = 0; i < 10; i++) {
//   fs.readFileSync("archivo.txt", "utf8");
// }

for (let i = 0; i < 10; i++) {
  const streamScritura = fs.createReadStream("archivo.txt", {
    encoding: "utf-8",
  });
}
console.timeEnd("timepo de respuesta");
