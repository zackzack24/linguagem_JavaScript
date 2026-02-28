/**
 * criar uma calculadora com os metodos, somar, subtrair, multiplicar e dividir;
 * metodos só aceitam dois parametros
 * Utilizar todos os metodos e imprimir os valores no console
 */

const calculadora = {
  somar: function (a, b) {
    console.log(` Somando ${a} e ${b}`);
    return a + b;
  },
  subtrair: function (a, b) {
    console.log(` Subtraindo ${a} e ${b}`);
    return a - b;
  },
  dividir: function (a, b) {
    console.log(` Dividindo ${a} e ${b}`);
    return a / b;
  },
  multiplicar: function (a, b) {
    console.log(` Multiplicando ${a} e ${b}`);
    return a * b;
  },
};

console.log(calculadora.somar(5, 5));
console.log(calculadora.subtrair(5, 5));
console.log(calculadora.dividir(5, 5));
console.log(calculadora.multiplicar(5, 5));     
