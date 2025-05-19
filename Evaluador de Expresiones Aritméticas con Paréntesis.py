function evaluarExpresion(expr) {
  const operadores = [];
  const valores = [];

  function precedencia(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    return 0;
  }

  function aplicarOperador(op) {
    const b = valores.pop();
    const a = valores.pop();

    switch (op) {
      case '+': valores.push(a + b); break;
      case '-': valores.push(a - b); break;
      case '*': valores.push(a * b); break;
      case '/': valores.push(a / b); break;
    }
  }

  const tokens = expr.replace(/\s+/g, '').match(/\
