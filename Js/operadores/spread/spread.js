// Spread ...
var partes = ["ombro", "joelhos"];
var musica = ["cabeça", ...partes, "e", "pés"];

// Equivalente à
var musica = ["cabeça", "ombro", "joelhos", "e", "pés"];

function fn(x, y, z) { }
var args = [0, 1, 2];
fn(...args);

// Equivalente à
fn(0, 1, 2);