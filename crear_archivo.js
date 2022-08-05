const fs = require("fs");
const archivo = fs.createWriteStream("archivo.txt");

for(let i=0;i<3 ;i++){
    archivo.write('lorem1impsu many fats make sale won broded son so that ')
}

archivo.end()