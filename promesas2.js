const fs = require("fs");
const util = require("util");

// fs.writeFile("./archivos/mi_archivo.txt", "123456789lapromesa")

const writeFilePromesa = util.promisify(fs.writeFile);

writeFilePromesa("./archivos/mi_archivo.txt", "123456789lapromesa")
  .then(() => {
    console.log("Todo esta  Bien");
  })
  .catch((err) => {
    console.log(err);
  });
