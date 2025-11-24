// forma com operador ternário
let comp1 = 10;
let comp2 = 100;
let comp3 = 1000;

// leia ? como "Isso é verdade?", e leia : como "Se não for verdade"
// ou seja, x == y ?("Isso é verdade?") faça isso :("Se não for verdade") senão faça aquilo

comp1 == comp2 ? console.log(comp1 + " é igual a " + comp2) : console.log(comp1 + " é diferente de " + comp2); 
console.log(comp1 == comp2 ? "comp1 é igual a comp2" : "comp1 não é igual a comp2");
comp1 == comp3 ? console.log("comp1 é igual a comp3") : console.log("comp1 não é igual a comp3");
console.log(comp1 == comp3 ? "comp1 é igual a comp3" : "comp1 não é igual a comp3");

// leia && como " e também" ou "e"
comp2 < comp3 && comp3 > comp1 ? console.log("A condição é verdadeira") : console.log("A condição não é verdadeira");
console.log(comp2 < comp3 && comp3 > comp1 ? "A condição é verdadeira" : "A condição não é verdadeira");

