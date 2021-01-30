// in
//something in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
console.log(0 in arvores); // true
console.log(3 in arvores); // true
console.log(6 in arvores); // false
console.log("cedro" in arvores); // false (você deve especificar o número do índice, não o valor naquele índice)
console.log("length" in arvores); // true (length é uma propriedade de Array)

// Objetos predefinidos
console.log("PI" in Math) // true
var minhaString = new String("coral");
console.log("length" in minhaString); // true

// Objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Accord", ano: 1998};
console.log("marca" in meuCarro); // true
console.log("modelo" in meuCarro); // true

// instanceof
//objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date)
{
    // code here
}