const fs = require("fs");

const stremLetura = fs.createReadStream("./archivo.txt", { encoding: "utf-8" });

stremLetura
  .on("open", () => {
    console.log("abriendo archivos");
  })
  .on("data", () => {
    console.log("-------");
  })
  .on("close", () => {
    console.log("archivo cerrado");
  })
  .on("error", () => {
    console.log("Error en el archivo");
  });
