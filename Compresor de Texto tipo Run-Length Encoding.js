function runLengthEncode(texto) {
  if (!texto) return "";
  let resultado = "";
  let contador = 1;

  for (let i = 1; i <= texto.length; i++) {
    if (texto[i] === texto[i - 1]) {
      contador++;
    } else {
      resultado += texto[i - 1] + contador;
      contador = 1;
    }
  }

  return resultado;
}
// Prueba
console.log(runLengthEncode("aaabbcdddd")); // "a3b2c1d4"
