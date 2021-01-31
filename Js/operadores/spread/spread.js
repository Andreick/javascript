// Spread operator ...
var partes = ["ombro", "joelhos"];
var musica = ["cabeça", ...partes, "e", "pés"];

// Equivalente à
var musica = ["cabeça", "ombro", "joelhos", "e", "pés"];

function fn(x, y, z) { }
var args = [0, 1, 2];
fn(...args);

// Equivalente à
fn(0, 1, 2);

// Rest operator ...

// Transforma os argumentos em um array
function restFn(...args) { console.log(args) }

restFn(3, 7, 8, 3, 0, 1, 3); // n parâmetros possíveis