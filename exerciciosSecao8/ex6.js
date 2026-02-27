/*  criar dois array, um com mais de 5 elementos e outro com menos elementos 
Fazer uma função que verifica o numeros de elementos
Se possuir menos que 5 imprimir : poucos elementos
Se possuir mais, imprimir : muitos elementos
*/

let arrayMaisDe5 = ["1termo", "2termo", "3termo", "4termo", "5termo", "6termo"];
let arrayMenosDe5 = ["1termo", "2termo", "3termo"];

const verificaQuantidadeMais = arrayMaisDe5.length;
const verificaQuantidadeMenos = arrayMenosDe5.length;

console.log(arrayMaisDe5);
console.log(arrayMenosDe5);
console.log(verificaQuantidadeMais);
console.log(verificaQuantidadeMenos);

if (arrayMaisDe5.length >= 5) {
  console.log("Muitos Elementos");
} else {
  console.log("Poucos Elementos");
}

