const fs = require("fs");
const path = require("path");

let alumnos = fs.readFileSync(path.join(__dirname, "datos.json"), "utf-8");
console.log(`"Dupla para el trabajo de Git y GitHub" 
 ${alumnos}`);


