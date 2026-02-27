/*
criar um array com 5 elementos e fazer uma iteração entre todos eles e imprimir o valor no console
*/

let conjunto = [5, 10, 15, 20, 30];

console.log(conjunto);

conjunto.forEach((numeros) => {
      console.log(numeros);
});

let palavras = ["Primeira", "Segunda", "Terceira", "Quarta", "Quinta", "Sexta"];
 
console.log("Pausa");

for(let i = 0; i < palavras.length; i++) {
      console.log(palavras[i]);
};