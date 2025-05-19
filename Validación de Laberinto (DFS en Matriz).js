function puedeSalir(laberinto, entrada, salida) {
  const [filas, columnas] = [laberinto.length, laberinto[0].length];
  const visitado = Array.from({ length: filas }, () => Array(columnas).fill(false));

  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= filas || y >= columnas) return false;
    if (laberinto[x][y] === 1 || visitado[x][y]) return false;
    if (x === salida[0] && y === salida[1]) return true;

    visitado[x][y] = true;

    return (
      dfs(x + 1, y) ||
      dfs(x - 1, y) ||
      dfs(x, y + 1) ||
      dfs(x, y - 1)
    );
  }

  return dfs(entrada[0], entrada[1]);
}

// Prueba
const laberinto = [
  [0, 1, 0],
  [0, 0, 0],
  [1, 1, 0]
];
console.log(puedeSalir(laberinto, [0, 0], [2, 2])); // true
