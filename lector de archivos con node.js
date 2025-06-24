// lector.js
const fs = require('fs');
const path = require('path');

const archivo = path.join(__dirname, 'ejemplo.txt');

fs.readFile(archivo, 'utf8', (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }

  const lineas = data.split('\n');
  console.log("Contenido del archivo:");
  lineas.forEach((linea, i) => {
    console.log(`${i + 1}: ${linea}`);
  });
});
